package com.pes.action;




import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.validator.annotations.RequiredStringValidator;
import com.pes.entity.Admin;
import com.pes.entity.BaseUser;
import com.pes.entity.User;
import com.pes.interceptor.Authority;
import com.pes.service.AdminService;
import com.pes.service.UserService;

@Results( {
        @Result(name = "success", location = "/index.jsp", type="redirect"),
        @Result(name = "error", location = "/false.jsp"),
        @Result(name = "input", location = "/user/login.jsp"),
        @Result(name = "prePage", location = "${prePage}", type="redirectAction")
    })
public class LoginAction extends  BaseAction{
	private static final Logger LOGGER = Logger.getLogger(LoginAction.class);
	private String username;
	private String password;
	//登录前页面
    private String prePage;
    private BaseUser user;
	@Autowired
	private UserService userService;
	
	@RequiredStringValidator(message="用户名不能为空")
	public String getUsername() {
		return username;
	}
	
	public String getPrePage() {
		return prePage;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	@RequiredStringValidator(message="密码不能为空")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public void validate(){
		if(!userService.isUserExist(username))
			this.addFieldError(username, "用户不存在！");
			
	}
	
	@Action(value="login")
	public String execute()
	{
		//获取跳转到登陆界面之前的页面地址，由拦截器提供
        prePage = (String) session.get("prePage");
        System.out.println("in login action and prePage: "+prePage);
		System.out.println("Normal user: " + username+password);
		user = userService.validate(username, password);
		if(user == null)
		{
			this.addActionError("密码错误！");
			return "input";
		}else{
			this.httpSession.setAttribute("loginUser", user);
			//清除session中的数据
	        session.remove("prePage");
	        if (prePage == null) {
	        	//不是拦截器跳转到登陆页面的，直接访问的登陆页面
	        	return "success";
	        }else {
				return "prePage";
			}
		}
	}
	
}
