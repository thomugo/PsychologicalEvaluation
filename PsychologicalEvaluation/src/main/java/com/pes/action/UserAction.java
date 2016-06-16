package com.pes.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.ResultPath;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;

import sun.tools.tree.ThisExpression;

import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.opensymphony.xwork2.validator.annotations.EmailValidator;
import com.opensymphony.xwork2.validator.annotations.ExpressionValidator;
import com.opensymphony.xwork2.validator.annotations.FieldExpressionValidator;
import com.opensymphony.xwork2.validator.annotations.RequiredStringValidator;
import com.opensymphony.xwork2.validator.annotations.StringLengthFieldValidator;
import com.opensymphony.xwork2.validator.annotations.Validations;
import com.opensymphony.xwork2.validator.annotations.ValidatorType;
import com.pes.entity.User;
import com.pes.interceptor.Authority;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;


@ParentPackage("myBasicPackage")
@Result(name = "index", location = "/index.jsp")
public class UserAction extends BaseAction implements ModelDriven<User>{
	private static final Logger LOGGER = Logger.getLogger(UserAction.class);
	@Autowired
	private UserService userService;
	private int id;
	private int pageSize = 5 ;
	private int totalPages  = 0;
	private int pageNum = 0;
	private String jsonString;
	private User user = null;
	private List<User> users = new ArrayList<User>();
	
	public int getPageNum() {
		return pageNum;
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
			@Result(name="userinfo", location="/user/profile.jsp", type="redirect")
			})
	public String detail() {
		AjaxUtil.ajaxJSONResponse( this.httpSession.getAttribute("loginUser"));
		return "userinfo";
	}
	
	@Action(value="userList", results={
			@Result(name="users", location="/user/userList.jsp")
	})
	public String getAllUsers(){
		//List<User> users = userService.findAll();
		JSONObject json = JSONObject.parseObject(jsonString);
		if(json != null){
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
		if(json != null)
			AjaxUtil.ajaxJSONResponse(users);
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
	
	
}
