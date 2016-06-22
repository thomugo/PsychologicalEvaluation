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
import com.pes.entity.UserPojo;
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
	private ArrayList<UserMessage> recentUserMessages = new ArrayList<UserMessage>();
	//private ArrayList<Message> shortOffLineMessages = new ArrayList<Message>();
	//private ArrayList<UserPojo> recentUsers = new ArrayList<UserPojo>();
	//private ArrayList<Message> recentUserMessages = new ArrayList<Message>();
	private String jsonString;
	
	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
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
			@Result(name="normal", location="/WEB-INF/chat/consult.jsp"),
			@Result(name="admin", location="/consult.jsp")
	})
	public String Chat(){
		target = userService.findById(id);
		user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			for (int sendId : senders) {
				UserMessage userMessage = new UserMessage();
				User pojo = userService.findById(sendId);
				userMessage.setUserId(sendId);
				userMessage.setUsername(pojo.getUsername());
				userMessage.setIcon(pojo.getIcon());
				Message message =messageService.findById(sendId, ID);
				userMessage.setContent(message.getContent());
				userMessage.setDateTime(message.getDateTime());
				userMessage.setFlag(message.getFlag());
				userMessage.setMessageId(message.getId());
				offLineUserMessages.add(userMessage);
			}
		}
		if(user.getPrivilege() <= 3){
			return "admin";
		}else{
			return "normal";
		}
		
	}
	
	
	@Action(value="recent", results={
			@Result(name="recent", location="/consult.jsp")
	})
	public String getRecentUser(){
		if(user == null){
			user = (BaseUser)httpSession.getAttribute("loginUser");
		}
		int ID= user.getId();
		rescentUserCount = messageService.getRescentUsersCount(user.getId());
		ArrayList< Integer> list = (ArrayList<Integer>) messageService.getRescentUsersByPage(pageNo, pageSize, user.getId());
		for (Integer sendId : list) {
			UserMessage userMessage = new UserMessage();
			User pojo = userService.findById(sendId);
			userMessage.setUserId(sendId);
			userMessage.setUsername(pojo.getUsername());
			userMessage.setIcon(pojo.getIcon());
			Message message =messageService.findById(sendId, ID);
			userMessage.setContent(message.getContent());
			userMessage.setDateTime(message.getDateTime());
			userMessage.setFlag(message.getFlag());
			userMessage.setMessageId(message.getId());
			recentUserMessages.add(userMessage);
		}
		pageNo = 0;
		return "recent";
		
	}
	
	@Action(value="getBroadCastMessage")
	public String getBroadCastMessage(){
		JSONObject json = JSONObject.parseObject(jsonString);
		int count = 0;
		//count = json.getIntValue("count");
		//broadCastMessages = (ArrayList<Message>)messageService.getUnreadBroadCastMessages(count);
		//AjaxUtil.ajaxJSONResponse(broadCastMessages);
		return NONE;
	}
	
	@Action(value="getOffLineMessageSenders")
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
	public String getOffLineMessages(){
		int id = ((BaseUser)httpSession.getAttribute("loginUser")).getId();
		ArrayList<Message> offLineMessages = (ArrayList<Message>)messageService.getOffLineMessages(fromId, id);
		//AjaxUtil.ajaxJSONResponse(offLineMessages);
		return NONE;
	}
	
}
