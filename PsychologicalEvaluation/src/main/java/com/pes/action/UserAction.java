package com.pes.action;

import java.util.ArrayList;
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
	int pageSize ;
	int totalPages ;
	private User user = new User();
	private List<User> users = new ArrayList<User>();
	
	@Override
	public String execute() throws Exception {
		System.out.println("in user.action ");
		return "index";
	}
	
	@Action(value="detail", results={
			@Result(name="userinfo", location="/user/userinfo.jsp", type="redirect")
			})
	public String detail() {
		AjaxUtil.ajaxJSONResponse( this.httpSession.getAttribute("loginUser"));
		return "userinfo";
	}
	
	@Action(value="listUser", results={
			@Result(name="users", location="/user/listUser.jsp")
	})
	public String getAllUsers(){
		//List<User> users = userService.findAll();
		pageSize=5;
		totalPages = userService.getMaxPageNo(pageSize);
		//int rows = userService.getTotalRows();
		System.out.println("totalPages: " + totalPages);
		System.out.println("pageSize: " + pageSize);
		users = userService.findByPage(1, pageSize);
		//AjaxUtil.ajaxJSONResponse(users);
		return "users";
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
