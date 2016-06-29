package com.pes.action;

import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ModelDriven;
import com.pes.entity.AnswerPojo;
import com.pes.entity.BaseUser;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.entity.UserPojo;
import com.pes.interceptor.Authority;
import com.pes.service.AnswerService;
import com.pes.service.MessageService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;


@ParentPackage("myBasicPackage")
@Result(name = "index", location = "/index.jsp")
public class UserAction extends BaseAction implements ModelDriven<User>{
	private static final Logger LOGGER = Logger.getLogger(UserAction.class);
	@Autowired
	private UserService userService;
	@Autowired
	private AnswerService answerService;
	private Integer id;
	private int pageSize = 4 ;
	private int totalPages  = 0;
	private int totalAnswerPages = 0;
	private int pageNum = 0;
	private int totalExpertPageNo = 0;
	private int totalApplicantPageNo = 0;
	private String jsonString;
	private User modelUser = new User();
	private BaseUser user;
	private List<User> users = new ArrayList<User>();
	private List<AnswerPojo> answers = new ArrayList<AnswerPojo>();
	private ArrayList<UserPojo> experts = new ArrayList<UserPojo>();
	private ArrayList<User> applicants = new ArrayList<User>();
	@Autowired
	private MessageService messageService;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private ArrayList<UserMessage> offLineUserMessages = new ArrayList<UserMessage>();
	
	public int getUnReadBroadCastMessageCount() {
		return unReadBroadCastMessageCount;
	}

	public int getOffLineMessageCount() {
		return offLineMessageCount;
	}

	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
	}

	public int getPageNum() {
		return pageNum;
	}
	
	public int getTotalExpertPageNo() {
		return totalExpertPageNo;
	}

	public int getTotalApplicantPageNo() {
		return totalApplicantPageNo;
	}

	public int getTotalAnswerPages() {
		return totalAnswerPages;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public BaseUser getUser() {
		return user;
	}

	public List<AnswerPojo> getAnswers() {
		return answers;
	}
	
	public ArrayList<UserPojo> getExperts() {
		return experts;
	}

	public ArrayList<User> getApplicants() {
		return applicants;
	}

	@Override
	@Action(value="user", results={
			@Result(name="userinfo", location="/WEB-INF/user/userinfo.jsp")
			})
	@Authority(privilege=2)
	public String execute() throws Exception {
		user = (BaseUser) this.httpSession.getAttribute("loginUser");
		System.out.println("login user infomation: ");
		System.out.println(user);
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
		return "userinfo";
	}
	
	@Action(value="detail", results={
			@Result(name="adminuserinfo", location="/WEB-INF/user/profile.jsp"),
			@Result(name="normaluserinfo",location="/WEB-INF/user/myResult.jsp")		
			})
	@Authority(privilege=5)
	public String detail() {
		user = null;
		System.out.println("in detail");
		if(jsonString == null){
			if(httpServletRequest.getParameter("id") == null || httpServletRequest.getParameter("id") == ""){
				user = (BaseUser) this.httpSession.getAttribute("loginUser");
			}else{
				id = Integer.parseInt(httpServletRequest.getParameter("id"));
				user = userService.findById(id);
			}
			id = user.getId();
			System.out.println("in detail search :" + user);
			answers = answerService.findAnswersByPage(id, 1, pageSize);
			totalAnswerPages = answerService.getMaxAnswerPageNo(id, pageSize);
			System.out.println(totalAnswerPages);
		}else{
			System.out.println(jsonString);
			JSONObject json = JSONObject.parseObject(jsonString);
			int pageNo = json.getInteger("pageNum");
			int userId = json.getInteger("userId");
			user = userService.findById(userId);
			System.out.println("pageNo:" + pageNo);
			ArrayList<AnswerPojo> answers = new ArrayList<AnswerPojo>();
			answers = (ArrayList<AnswerPojo>) answerService.findAnswersByPage(userId, pageNo, pageSize);
			jsonString = null;
			AjaxUtil.ajaxJSONResponse(answers);
			return NONE;
		}
		BaseUser loginUser = (BaseUser) this.httpSession.getAttribute("loginUser");
		int ID = loginUser.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - loginUser.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
		if(loginUser.getPrivilege() <= 2){
			return "adminuserinfo";
		}else{
			return "normaluserinfo";
		}
	}
	
	@Action(value="userList", results={
			@Result(name="users", location="/WEB-INF/user/userList.jsp")
	})
	@Authority(privilege=2)
	public String getAllUsers(){
		//List<User> users = userService.findAll();
		JSONObject json;
		if(jsonString != null){
			json = JSONObject.parseObject(jsonString);
			pageNum = json.getInteger("pageNum");
			pageSize = json.getInteger("pageSize");
		}
		totalPages = userService.getMaxPageNo(pageSize);
		System.out.println("totalPages: " + totalPages);
		System.out.println("pageSize: " + pageSize);
		users = userService.findByPage(pageNum, pageSize, true);
		System.out.println("find "+users.size()+"users");
		//System.out.println(userService.findById(18));
		//System.out.println(users);
		if(jsonString != null){
			jsonString = null;
			AjaxUtil.ajaxJSONResponse(users);
			return NONE;
		}
		BaseUser loginUser = (BaseUser)httpSession.getAttribute("loginUser");
		System.out.println(loginUser);
		int ID = loginUser.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - loginUser.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
		return "users";
	}
	
	@Action(value="deleteUser")
	@Authority(privilege=1)
	public String deleteUser(){
		//JSONObject json = JSONObject.parseObject(jsonString);
		//id = json.getInteger("id");
		id = Integer.parseInt(httpServletRequest.getParameter("id"));
		User user = userService.findById(id);
		userService.remove(user);
		System.out.println("delete User "+id);
		System.out.println("pageNum:" + pageNum+" pageSize: " + pageSize);
		users = userService.findByPage(pageNum, pageSize, true);
		AjaxUtil.ajaxJSONResponse(users);
		return NONE;
	}
	
	@Action(value="modifyUser")
	@Authority(privilege=1)
	public String modifyUser(){
		int modifyId = modelUser.getId();
		userService.modify(modelUser);
		BaseUser loginUser = (BaseUser) this.httpSession.getAttribute("loginUser");
		if(loginUser.getId() == modifyId){
			this.httpSession.setAttribute("loginUser", modelUser);
		}
		//AjaxUtil.ajaxJSONResponse(userInfo);
		int ID = loginUser.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - loginUser.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
		return "success";
	}
	
	@Action(value="logout", results={
			@Result(name="index", location="/index.jsp", type="redirect")
	})
	public String logout(){
		BaseUser loginUser = (BaseUser) httpSession.getAttribute("loginUser");
		System.out.println(loginUser.getUsername()+" logout!!");
		this.httpSession.removeAttribute("loginUser");
		return "index";
	}
	public List<User> getUsers() {
		return users;
	}
	
	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getTotalPages() {
		totalPages = userService.getMaxPageNo(pageSize);
		return totalPages;
	}
	
	@Override
	public com.pes.entity.User getModel() {
		// TODO Auto-generated method stub
		return modelUser;
	}
	
	@Action(value="expertUserList",results={
			@Result(name="expert", location="/WEB-INF/chat/mchatList.jsp")
	})
	@Authority(privilege=1)
	public String expertUser(){
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			pageNum = json.getInteger("pageNum");
			pageSize = json.getInteger("pageSize");
		}
		experts = (ArrayList<UserPojo>) userService.findExpertByPage(pageNum, pageSize);
		if(jsonString != null){
			AjaxUtil.ajaxJSONResponse(experts);
			jsonString = null;
			return NONE;
		}
		BaseUser loginUser = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = loginUser.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - loginUser.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
		return "expert";
	}
	@Action(value="applicantUserList")
	@Authority(privilege=1)
	public String applicantUser(){
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			pageNum = json.getInteger("pageNum");
			pageSize = json.getInteger("pageSize");
			applicants = (ArrayList<User>) userService.findApplicantByPage(pageNum, pageSize);
			AjaxUtil.ajaxJSONResponse(applicants);
			jsonString = null;
		}
		BaseUser loginUser = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = loginUser.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - loginUser.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
		return NONE;
	}
	
}
