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
	private ArrayList<Message> shortOffLineMessages = new ArrayList<Message>();
	private ArrayList<UserPojo> recentUsers = new ArrayList<UserPojo>();
	private ArrayList<Message> recentUserMessages = new ArrayList<Message>();
	private String jsonString;
	
	
	public ArrayList<UserPojo> getRecentUsers() {
		return recentUsers;
	}
	public ArrayList<Message> getRecentUserMessages() {
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
	public ArrayList<UserPojo> getCesentUsers() {
		return recentUsers;
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
	public ArrayList<Message> getShortOffLineMessages() {
		return shortOffLineMessages;
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
		//broadCastMessages = (ArrayList<Message>)messageService.getUnreadBroadCastMessages(unReadBroadCastMessageCount);
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		//System.out.println("offlinemessagecount:" + offLineMessageCount);
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			//System.out.println("senders:");
			//System.out.println(senders);
			for (int sendId : senders) {
				shortOffLineMessages.add(messageService.findById(sendId, ID));
			}
			//System.out.println("messages:");
			//System.out.println(shortOffLineMessages);
		}
		if(user.getPrivilege() <= 3){
			rescentUserCount = messageService.getRescentUsersCount(user.getId());
			ArrayList< Integer> list = (ArrayList<Integer>) messageService.getRescentUsersByPage(pageNo, pageSize, ID);
			recentUsers = (ArrayList<UserPojo>) userService.findResentUsers(list);
			System.out.println(recentUsers);
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
		int id = user.getId();
		rescentUserCount = messageService.getRescentUsersCount(user.getId());
		ArrayList< Integer> list = (ArrayList<Integer>) messageService.getRescentUsersByPage(pageNo, pageSize, user.getId());
		recentUsers = (ArrayList<UserPojo>) userService.findResentUsers(list);
		for (UserPojo pojo : recentUsers) {
			recentUserMessages.clear();
			recentUserMessages.add(messageService.findLatestMessage(pojo.getId(), id));
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
