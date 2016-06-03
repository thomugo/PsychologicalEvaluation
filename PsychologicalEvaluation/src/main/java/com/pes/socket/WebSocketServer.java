package com.pes.socket;

import java.io.IOException;
import java.util.Date;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;

import javax.servlet.http.HttpSession;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.service.MessageService;
import com.pes.service.UserService;
import com.pes.service.impl.MessageServiceImpl;
import com.pes.util.SpringContextUtil;

//该注解用来指定一个URI，客户端可以通过这个URI来连接到WebSocket。类似Servlet的注解mapping。无需在web.xml中配置。
@ServerEndpoint(value = "/consult", configurator = GetHttpSessionConfigurator.class)
public class WebSocketServer {
	public MessageService messageService ;
	private User user;
	private AtomicInteger broadcast = new AtomicInteger(0);
	private AtomicInteger messages = new AtomicInteger(0);
	private AtomicBoolean onChat = new AtomicBoolean(false);// 是否在聊天状态
	// 静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
	public static AtomicInteger onlineCount = new AtomicInteger(0);

	// concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
	private static ConcurrentHashMap<Integer, CopyOnWriteArrayList<WebSocketServer>> onlineUsers = new ConcurrentHashMap<>();
	// 点对点聊天用户缓存
	private ConcurrentHashMap<Integer, CopyOnWriteArrayList<WebSocketServer>> cache = new ConcurrentHashMap<>();
	// 同一用户的其他连接
	private CopyOnWriteArrayList<WebSocketServer> otherLinks = new CopyOnWriteArrayList<WebSocketServer>();
	// 本地消息缓存
	private ConcurrentLinkedQueue<Message> messageCache = new ConcurrentLinkedQueue<>();
	// 与某个客户端的连接会话，需要通过它来给客户端发送数据
	private Session session;
	private HttpSession httpSession;
	
	public AtomicBoolean getOnChat() {
		return onChat;
	}

	/**
	 * 连接建立成功调用的方法
	 * 
	 * @param session
	 *            可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
	 */
	@OnOpen
	public void start(Session session, EndpointConfig config) {
		this.session = session;
		this.httpSession = (HttpSession) config.getUserProperties().get(
				HttpSession.class.getName());
		this.user = (User) httpSession.getAttribute("loginUser");
		this.messageService = SpringContextUtil.getBean("messageService");
		int id = user.getId();
		if (onlineUsers.containsKey(id)) {
			for (WebSocketServer socket : onlineUsers.get(id)) {
				if (socket != this) {
					socket.otherLinks.add(this);
					this.otherLinks.add(socket);
				}
			}
			onlineUsers.get(id).add(this);
		} else {
			synchronized (onlineCount) {
				if (onlineUsers.containsKey(id)) {
					for (WebSocketServer socket : onlineUsers.get(id)) {
						if (socket != this) {
							socket.otherLinks.add(this);
						}
					}
					onlineUsers.get(id).add(this);
				} else {
					CopyOnWriteArrayList<WebSocketServer> link = new CopyOnWriteArrayList<WebSocketServer>();
					link.add(this);
					onlineUsers.put(id, link);
					System.out.println(user.getUsername() + ": 上线了");
				}
			}

		}
		int count = onlineCount.incrementAndGet(); // 在线数加1
		System.out.println("当前在线人数为: " + count);
		// broadcast(message);
	}

	/**
	 * 连接关闭调用的方法
	 */
	@OnClose
	public void onClose() {
		CopyOnWriteArrayList<WebSocketServer> link = onlineUsers.get(user.getId());
		if(link.size() == 1)
			onlineUsers.remove(user.getId());
		else 
			link.remove(this);
		cache.clear();// 清空缓存。
		int count = onlineCount.decrementAndGet(); // 在线数减1
		System.out.println(user.getUsername() + "离开，当前在线人数为: " + count);
	}

	/**
	 * 收到客户端消息后调用的方法
	 * 
	 * @param message
	 *            客户端发送过来的消息
	 * @param session
	 *            可选的参数
	 */
	@OnMessage
	public void inMessage(String messages) {
		System.out.println("来自客户端的消息:" + messages);
		JSONObject json = JSONObject.parseObject(messages);
		int targetId = json.getInteger("targetId");
		int flag = json.getInteger("flag");
		onChat.set(json.getBoolean("onChat"));
		if (onChat.get()) {// 聊天状态打开
			readMessageCache();
		}
		String messageString = json.getString("message");
		if(messageString.length() > 0){
			// 向兄弟连接发送数据
			if(flag != 5){
				sendToBrotherLink(targetId, flag, messageString);
			}
			CopyOnWriteArrayList<WebSocketServer> targets = null;
			if(flag != 5){
				targets = getTarget(targetId);
			}
			Message message2 = new Message(messageString, user.getId());
			message2.setToId(targetId);
			message2.setFlag(flag);
			System.out.println("将消息保存到数据库");
			message2.setDateTime(new Date());
			messageService.save(message2);
			//System.out.println(message2);
			if (targets == null) {	
				if(flag != 5){
					System.out.println("用户未上线");
				}
				else {
					sendBroadCastMessage(message2);
					System.out.println("发送广播消息：" + message2);
				}
			} else {
				System.out.println("there are :"+targets.size() + "targets");
				sendToChatLink(message2, targets);
			}
		}
		
	}

	private void sendToChatLink(Message message2,
			CopyOnWriteArrayList<WebSocketServer> targets) {
		// TODO Auto-generated method stub
		for (WebSocketServer socket : targets) {
			if (socket.getOnChat().get() && socket.messageCache.size() == 0) {
				try {
					if(message2.getFlag() == 5){
						socket.sendMessage(JSON.toJSONString(message2));
						UserService userService = SpringContextUtil.getBean("userService");
						user.setBroadcast(user.getBroadcast() + 1);
						userService.saveOrUpdate(user);
					}else{
						socket.sendMessage(JSON.toJSONString(message2));
						message2.setFlag(1); //设置消息为已读并更新数据库
						messageService.saveOrUpdate(message2);
						System.out.println("消息" + message2.getId() +"状态已更新");
					}
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} else {
				socket.messageCache.add(message2);
			}
		}
	}

	private void readMessageCache() {
		if (messageCache.size() != 0) {
			new Thread(new Runnable() {
				@Override
				public void run() {
					for (Message message : messageCache) {
						try {
							sendMessage(JSON.toJSONString(message));
							if(message.getFlag() == 0){//如果是未读消息
								message.setFlag(1); //设置为已读并更新数据库数据状态
								messageService.saveOrUpdate(message);
								System.out.println("消息" + message.getId() +"状态已更新");
							}
							if(message.getFlag() == 5){//如果是广播消息
								UserService userService = SpringContextUtil.getBean("userService");
								user.setBroadcast(user.getBroadcast() + 1);
								userService.saveOrUpdate(user);
							}
							messageCache.remove(message);
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}

				}

			}).start();
		}

	}

	private void sendToBrotherLink(int targetId, int flag, String messageString) {
		if (otherLinks.size() != 0) {// 当有其他兄弟连接时
			new Thread(// 新建线程将消息加入到同一用户其他连接的消息队列中
					new Runnable() {
						@Override
						public void run() {
							Message message1 = new Message(messageString, user
									.getId());
							message1.setToId(targetId);
							message1.setFlag(4); //设置为无效消息防止被重复写入数据库
							for (WebSocketServer link : otherLinks) {
								if (link.getOnChat().get()
										&& link.messageCache.size() == 0) {
									String jsonString = JSON
											.toJSONString(message1);
									try {
										link.sendMessage(jsonString);
									} catch (IOException e) {
										// TODO Auto-generated catch block
										e.printStackTrace();
									}
								} else {
									link.messageCache.add(message1);
								}
							}
						}
					}).start();
		}
	}

	/**
	 * 发生错误时调用
	 * 
	 * @param session
	 * @param error
	 */
	@OnError
	public void onError(Session session, Throwable error) {
		System.out.println("websocket 发生错误");
		error.printStackTrace();
	}

	/**
	 * 
	 * @param message
	 * @throws IOException
	 */
	public void sendMessage(String message) throws IOException {
		System.out.println("in userlist:" + onlineUsers.size());
		Integer mutex = 1;
		try {
			synchronized (mutex) {
				System.out.println("send to " + user.getUsername() + ":"
						+ message);
				this.session.getBasicRemote().sendText(message);
			}
		} catch (IOException e) {
			System.out.println("Error: Failed to send message to "
					+ user.getUsername());
			try {
				this.session.close();
			} catch (IOException e1) {
				// Ignore
				e1.printStackTrace();
			}
			String error = String.format("* %s %s", this.user.getUsername(),
					"has been disconnected.");
			System.out.println(error);
			// 将数据保存到数据库
		}
	}

	// 查找接收消息对象。
	public CopyOnWriteArrayList<WebSocketServer> getTarget(int id) {
		CopyOnWriteArrayList<WebSocketServer> targets = null;
		if (cache.containsKey(id)) {
			return cache.get(id);
		} else {
			targets = onlineUsers.get(id);
			cache.put(id, targets);
		}
		return targets;
	}
	
	public void sendBroadCastMessage(Message message){
		int userId = user.getId();
		CopyOnWriteArrayList<WebSocketServer> list = null;
		for (Integer key : onlineUsers.keySet()) {
			if(key != userId){
				list = onlineUsers.get(key);
				for (WebSocketServer link : list) {
					if (link.messageCache.size() == 0) {
						try {
							link.sendMessage(JSON.toJSONString(message));
							UserService userService = SpringContextUtil.getBean("userService");
							user.setBroadcast(user.getBroadcast() + 1);
							userService.saveOrUpdate(user);
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					} else {
						link.messageCache.add(message);
					}
				}
			}
		}
	}

}