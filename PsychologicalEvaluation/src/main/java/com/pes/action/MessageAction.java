package com.pes.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONObject;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.interceptor.Authority;
import com.pes.service.MessageService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@ParentPackage("myBasicPackage")
public class MessageAction extends BaseAction {
	private static final Logger LOGGER = Logger.getLogger(MessageAction.class);
	@Autowired
	private UserService userService;
	@Autowired
	private MessageService messageService;
	private User user = null;
	private String jsonString;
	private int unreadBroadCastCount;
	private int offlineMessageCount;
	private List<Message> broadCastMessages = new ArrayList<Message>();
	private List<HashMap<Integer, ArrayList<Message>>> offlineMessages = new ArrayList<HashMap<Integer, ArrayList<Message>>>();
	private HashMap<String, List> messages = new HashMap<String, List>();

	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	@Action(value="messageCount")
	@Authority(privilege=5)
	public String messageCount(){
		user = (User) this.httpSession.getAttribute("loginUser");
		int id = user.getId();
		int total = messageService.getBroadCastMessageCount();
		unreadBroadCastCount = total - user.getBroadcast();
		offlineMessageCount = messageService.getOffLineMessageCount(id);
		HashMap<String, Integer> messageCount = new HashMap<String, Integer>();
		messageCount.put("unreadBroadCastCount", unreadBroadCastCount);
		messageCount.put("offlineMessageCount", offlineMessageCount);
		AjaxUtil.ajaxJSONResponse(messageCount);
		return NONE;
	}

	@Override
	@Action(value="messages")
	@Authority(privilege=5)
	public String execute() {
		// JSONObject json = JSONObject.parseObject(jsonString);
		user = (User) this.httpSession.getAttribute("loginUser");
		int id = user.getId();
		int total = messageService.getBroadCastMessageCount();
		int unreadBroadCastNum = total - user.getBroadcast();
		if (unreadBroadCastNum != 0) {
			broadCastMessages = messageService
					.getUnreadBroadCastMessages(unreadBroadCastNum);
		}
		ArrayList<Integer> senders = (ArrayList<Integer>) messageService
				.getOffLineMessagesSenders(id);
		if (senders.size() > 0) {
			for (Integer sender : senders) {
				HashMap<Integer, ArrayList<Message>> offlineSenders = new HashMap<Integer, ArrayList<Message>>();
				offlineSenders.put(sender, (ArrayList<Message>) messageService
						.getOffLineMessages(sender, id));
				offlineMessages.add(offlineSenders);
			}
		}
		messages.put("broadcastMessages", broadCastMessages);
		messages.put("offlineMessages", offlineMessages);
		AjaxUtil.ajaxJSONResponse(messages);
		return NONE;

	}
	
	@Action(value="updateMessage")
	@Authority(privilege=2)
	public String update(){
		if(jsonString != null){
			System.out.println("updateMessage: " + jsonString);
		}
		JSONObject json = JSONObject.parseObject(jsonString);
		if(user == null){
			user = (User) this.httpSession.getAttribute("loginUser");
		}
		if(json != null){
			int broadcast = json.getIntValue("broadcast");
			if(broadcast != 0){
				System.out.println("before update broadcast message state : " + user.getBroadcast());
				User newuser = userService.findById(user.getId());
				newuser.setBroadcast(newuser.getBroadcast() + broadcast);
				user.setBroadcast(newuser.getBroadcast());
				userService.saveOrUpdate(newuser);
				System.out.println("after update broadcast message state : " + user.getBroadcast());
			}
			int fromId = json.getIntValue("fromId");
			messageService.updateOfflineMessageState(fromId, user.getId());
		}
		return NONE;
	}

}
