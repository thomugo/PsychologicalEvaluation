package com.pes.action;

import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ModelDriven;
import com.pes.entity.AnswerPojo;
import com.pes.entity.User;
import com.pes.entity.UserPojo;
import com.pes.service.AnswerService;
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
	private int id;
	private int pageSize = 4 ;
	private int totalPages  = 0;
	private int totalAnswerPages = 0;
	private int pageNum = 0;
	private int totalExpertPageNo = 0;
	private int totalApplicantPageNo = 0;
	private String jsonString;
	private User user = null;
	private List<User> users = new ArrayList<User>();
	private List<AnswerPojo> answers = new ArrayList<AnswerPojo>();
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
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<AnswerPojo> getAnswers() {
		return answers;
	}
	
	public User getUser() {
		return user;
	}

	@Override
	@Action(value="user", results={
			@Result(name="userinfo", location="/user/userinfo.jsp")
			})
	public String execute() throws Exception {
		user = (User) this.httpSession.getAttribute("loginUser");
		System.out.println("login user infomation: ");
		System.out.println(user);
		ActionContext.getContext().getValueStack().push(user);
		return "userinfo";
	}
	
	@Action(value="detail", results={
			@Result(name="userinfo", location="/user/profile.jsp")
			})
	public String detail() {
		if(jsonString == null){
			user = userService.findById(id);
			answers = answerService.findAnswersByPage(id, 1, pageSize);
			totalAnswerPages = answerService.getMaxAnswerPageNo(id, pageSize);
			System.out.println(totalAnswerPages);
		}else{
			System.out.println(jsonString);
			JSONObject json = JSONObject.parseObject(jsonString);
			int pageNo = json.getInteger("pageNum");
			int userId = json.getInteger("userId");
			System.out.println("pageNo:" + pageNo);
			ArrayList<AnswerPojo> answers = new ArrayList<AnswerPojo>();
			answers = (ArrayList<AnswerPojo>) answerService.findAnswersByPage(userId, pageNo, pageSize);
			jsonString = null;
			AjaxUtil.ajaxJSONResponse(answers);
			return NONE;
		}
		return "userinfo";
	}
	
	@Action(value="userList", results={
			@Result(name="users", location="/user/userList.jsp")
	})
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
		System.out.println(users);
		if(jsonString != null){
			jsonString = null;
			AjaxUtil.ajaxJSONResponse(users);
			return NONE;
		}
		return "users";
	}
	
	@Action(value="deleteUser")
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
	public String modifyUser(){
		userService.modify(user);
		this.httpSession.setAttribute("loginUser", user);
		//AjaxUtil.ajaxJSONResponse(userInfo);
		return "success";
	}
	
	@Action(value="logout", results={
			@Result(name="index", location="/index.jsp")
	})
	public String logout(){
		System.out.println("logout!!");
		this.httpSession.removeAttribute("loginUser");;
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
		return user;
	}
	
	@Action(value="expertUserList")
	public String expertUser(){
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			pageNum = json.getInteger("pageNum");
			pageSize = json.getInteger("pageSize");
			ArrayList<UserPojo> experts = (ArrayList<UserPojo>) userService.findExpertByPage(pageNum, pageSize);
			AjaxUtil.ajaxJSONResponse(experts);
			jsonString = null;
		}
		return NONE;
	}
	@Action(value="applicantUserList")
	public String applicantUser(){
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			pageNum = json.getInteger("pageNum");
			pageSize = json.getInteger("pageSize");
			ArrayList<User> applicants = (ArrayList<User>) userService.findApplicantByPage(pageNum, pageSize);
			AjaxUtil.ajaxJSONResponse(applicants);
			jsonString = null;
		}
		return NONE;
	}
	
}
