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
import com.pes.service.MessageService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@ParentPackage("myBasicPackage")
@Result(name="success", location="/user/consult.jsp")
public class ConsultAction extends BaseAction{
	@Autowired 
	private UserService userService;
	@Autowired
	private MessageService messageService;
	private BaseUser target;
	private User user;
	private int id;
	private int fromId;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private ArrayList<Message> broadCastMessages = new ArrayList<Message>();
	private String jsonString;
	
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
			@Result(name="success", location="/user/consult.jsp")
	})
	public String Chat(){
		target = userService.findById(id);
		user = (User)httpSession.getAttribute("loginUser");
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		//broadCastMessages = (ArrayList<Message>)messageService.getUnreadBroadCastMessages(unReadBroadCastMessageCount);
		offLineMessageCount = messageService.getOffLineMessageCount(user.getId());
		return "success";
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
