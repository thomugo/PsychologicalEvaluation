package com.pes.socket;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;

import javax.servlet.http.HttpSession;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.alibaba.fastjson.JSONObject;
import com.pes.entity.User;

//该注解用来指定一个URI，客户端可以通过这个URI来连接到WebSocket。类似Servlet的注解mapping。无需在web.xml中配置。
@ServerEndpoint(value = "/consult",configurator=GetHttpSessionConfigurator.class)
public class MyWebSocket {
  private User user;
  //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
  public static AtomicInteger onlineCount = new AtomicInteger(0);
  
  //concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
  private static ConcurrentHashMap<Integer, MyWebSocket> onlineUsers = new ConcurrentHashMap<Integer,MyWebSocket>();
  private ConcurrentHashMap<Integer, MyWebSocket> cache = new ConcurrentHashMap<Integer, MyWebSocket>();;
  //与某个客户端的连接会话，需要通过它来给客户端发送数据
  private Session session;
  private HttpSession httpSession;
   
  /**
   * 连接建立成功调用的方法
   * @param session  可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
   */
  @OnOpen
  public void start(Session session, EndpointConfig config) {
      this.session = session;
      this.httpSession = (HttpSession) config.getUserProperties()
              .get(HttpSession.class.getName());
      this.user=(User) httpSession.getAttribute("loginUser");
      onlineUsers.put(user.getId(), this);
      String message = String.format("* %s %s", user.getUsername(), " from websocket 上线了...");
      int count = onlineCount.incrementAndGet();           //在线数加1
      System.out.println(message);
      System.out.println("当前在线人数为: " + count);
      //broadcast(message);
  }
   
  /**
   * 连接关闭调用的方法
   */
  @OnClose
  public void onClose(){
      onlineUsers.remove(user.getId());  //从set中删除
     cache.clear();//清空缓存。
      int count = onlineCount.decrementAndGet();           //在线数减1    
      System.out.println(user.getUsername()+"离开，当前在线人数为: " + count);
  }
   
  /**
   * 收到客户端消息后调用的方法
   * @param message 客户端发送过来的消息
   * @param session 可选的参数
   */
  @OnMessage
  public void inMessage(String messages) {
      System.out.println("来自客户端的消息:" + messages);
      JSONObject json = JSONObject.parseObject(messages);
      int targetId = json.getInteger("targetId");
      String message = json.getString("message");
      MyWebSocket target = getTarget(targetId);
      if(target == null){//将消息保存到数据库
    	  System.out.println("用户未上线");
      }else{
    	  try {
    			target.sendMessage(message);
    		} catch (IOException e) {
    			// TODO Auto-generated catch block
    			e.printStackTrace();
    		}
      }
     
  }
   
  /**
   * 发生错误时调用
   * @param session
   * @param error
   */
  @OnError
  public void onError(Session session, Throwable error){
      System.out.println("websocket 发生错误");
      error.printStackTrace();
  }
   
  /**
   * 这个方法与上面几个方法不一样。没有用注解，是根据自己需要添加的方法。
   * @param message
   * @throws IOException
   */
  public void sendMessage(String message) throws IOException{
	  System.out.println("in userlist:" + onlineUsers.size());
	  Integer mutex = 1;
      try {
          synchronized (mutex) {
        	  System.out.println("send to " + user.getUsername() + ":" + message);
              this.session.getBasicRemote().sendText(message);
          }
      } catch (IOException e) {
      	System.out.println("Error: Failed to send message to " + user.getUsername());
          try {
              this.session.close();
          } catch (IOException e1) {
              // Ignore
        	  e1.printStackTrace();
          }
          String error = String.format("* %s %s",
                  this.user.getUsername(), "has been disconnected.");
          System.out.println(error);
          //将数据保存到数据库
      }
  }
  
  //查找接收消息对象。
  public MyWebSocket getTarget(int id){
	  MyWebSocket target = null;
	  if(cache.containsKey(id)){
			  return cache.get(id);
	  }else{
		  target = onlineUsers.get(id);
		  if(target != null)
			  cache.put(id, target);
	  }
	return target;
  }

}