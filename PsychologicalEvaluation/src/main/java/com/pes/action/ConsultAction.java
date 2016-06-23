package com.pes.action;

import java.util.ArrayList;
import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONObject;
import com.pes.entity.BaseUser;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.interceptor.Authority;
import com.pes.service.MessageService;
import com.pes.service.UserService;

@ParentPackage("myBasicPackage")
@Result(name="success", location="/test.jsp")
public class ConsultAction extends BaseAction{
	@Autowired 
	private UserService userService;
	@Autowired
	private MessageService messageService;
	private BaseUser target;
	private BaseUser user;
	private int id;
	private int fromId;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private int pageNo = 1;
	private int pageSize = 5;
	private int rescentUserCount = 0;
	private ArrayList<Message> broadCastMessages = new ArrayList<Message>();
	private ArrayList<UserMessage> offLineUserMessages = new ArrayList<UserMessage>();
	private ArrayList<Message> unReadUserMessages = new ArrayList<Message>();
	private ArrayList<UserMessage> recentUserMessages = new ArrayList<UserMessage>();
	private String jsonString;
	
	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
	}
	public ArrayList<Message> getUnReadUserMessages() {
		return unReadUserMessages;
	}
	public ArrayList<UserMessage> getRecentUserMessages() {
		return recentUserMessages;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public int getFromId() {
		return fromId;
	}
	public void setFromId(int fromId) {
		this.fromId = fromId;
	}
	public BaseUser getTarget() {
		return target;
	}
	
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo){
		this.pageNo = pageNo;
	}
	public int getPageSize() {
		return pageSize;
	}
	public int getRescentUserCount() {
		return rescentUserCount;
	}
	public int getUnReadBroadCastMessageCount() {
		return unReadBroadCastMessageCount;
	}
	public void setUnReadBroadCastMessageCount(int unReadBroadCastMessageCount) {
		this.unReadBroadCastMessageCount = unReadBroadCastMessageCount;
	}
	public String getJsonString() {
		return jsonString;
	}
	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	public BaseUser getUser() {
		return user;
	}
	public int getOffLineMessageCount() {
		return offLineMessageCount;
	}
	public ArrayList<Message> getBroadCastMessages() {
		return broadCastMessages;
	}
	

	@Action(value="chat", results={
			@Result(name="normal", location="/WEB-INF/chat/mchat.jsp"),
			@Result(name="admin", location="/WEB-INF/chat/consult.jsp")
	})
	@Authority(privilege=5)
	public String Chat(){
		System.out.println("in chat action");
		target = userService.findById(id);
		user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		unReadUserMessages = (ArrayList<Message>) messageService.getOffLineMessages(id, ID);
		messageService.updateOfflineMessageState(id, ID);
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			//System.out.println(senders);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					//System.out.println("count:"+messages.size());
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		System.out.println("privilege:"+user.getPrivilege());
		if(user.getPrivilege() <= 3){
			return "admin";
		}else{
			return "normal";
		}
		
	}
	
	
	@Action(value="recent", results={
			@Result(name="recent", location="/WEB-INF/chat/chatList.jsp")
	})
	@Authority(privilege=3)
	public String getRecentUser(){
		System.out.println("in resent action");
		if(user == null){
			user = (BaseUser)httpSession.getAttribute("loginUser");
		}
		int ID= user.getId();
		rescentUserCount = messageService.getRescentUsersCount(ID);
		ArrayList< Integer> list = (ArrayList<Integer>) messageService.getRescentUsersByPage(pageNo, pageSize, user.getId());
		//System.out.println(list);
		recentUserMessages.clear();
		for (Integer sendId : list) {
			UserMessage userMessage = new UserMessage();
			User pojo = userService.findById(sendId);
			userMessage.setUserId(sendId);
			userMessage.setUsername(pojo.getUsername());
			userMessage.setIcon(pojo.getIcon());
			Message message =messageService.findLatestMessage(sendId, ID);
			userMessage.setContent(message.getContent());
			userMessage.setDateTime(message.getDateTime());
			userMessage.setFlag(message.getFlag());
			userMessage.setMessageId(message.getId());
			recentUserMessages.add(userMessage);
		}
		pageNo = 0;
		
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		
		return "recent";
		
	}
	
	@Action(value="getBroadCastMessage")
	@Authority(privilege=5)
	public String getBroadCastMessage(){
		JSONObject json = JSONObject.parseObject(jsonString);
		int count = 0;
		//count = json.getIntValue("count");
		//broadCastMessages = (ArrayList<Message>)messageService.getUnreadBroadCastMessages(count);
		//AjaxUtil.ajaxJSONResponse(broadCastMessages);
		return NONE;
	}
	
	@Action(value="getOffLineMessageSenders")
	@Authority(privilege=5)
	public String getOffLineMessageSenders(){
		List<Integer> senders = messageService.getOffLineMessagesSenders(id);
		ArrayList<BaseUser> users = new ArrayList<BaseUser>();
		for (Integer sender : senders) {
			BaseUser user = userService.findById(sender);
			users.add(user);
		}
		//AjaxUtil.ajaxJSONResponse(users);
		return NONE;
	}
	
	@Action(value="getOffLineMessage")
	@Authority(privilege=5)
	public String getOffLineMessages(){
		int id = ((BaseUser)httpSession.getAttribute("loginUser")).getId();
		ArrayList<Message> offLineMessages = (ArrayList<Message>)messageService.getOffLineMessages(fromId, id);
		//AjaxUtil.ajaxJSONResponse(offLineMessages);
		return NONE;
	}
	
}
