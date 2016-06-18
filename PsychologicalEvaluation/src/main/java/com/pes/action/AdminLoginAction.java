package com.pes.action;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import com.opensymphony.xwork2.validator.annotations.RequiredStringValidator;
import com.pes.entity.Admin;
import com.pes.service.AdminService;

@Results( {
        @Result(name = "success", location = "/WEB-INF/content/user/index.jsp"),
        @Result(name = "input", location = "/adminLogin.jsp"),
        @Result(name = "prePage", location = "${prePage}", type="redirectAction")
    })
//使用EL表达式时要注意确保prePage在值栈中（即prePage的get方法）
public class AdminLoginAction extends  BaseAction{
	private static final Logger LOGGER = Logger.getLogger(AdminLoginAction.class);
	private String username;
	private String password;
	//登录前页面
    private String prePage;
	@Autowired
	private AdminService adminService;
	
	@RequiredStringValidator(message="用户名不能为空")
	public String getUsername() {
		return username;
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
	
	public String getPrePage() {
		return prePage;
	}

	@Override
	public void validate(){
		if(!adminService.isUserExist(username))
			this.addFieldError(username, "用户不存在！");
			
	}
	
	
	@Action(value="adminLogin")
	public String execute()
	{
		//获取跳转到登陆界面之前的页面地址，由拦截器提供
        prePage = (String) session.get("prePage");
        System.out.println("in adminLogin action and  prePage: "+prePage);
		System.out.println("admin: "+ username+password);
		Admin admin =  new Admin(username, password);
		if(!adminService.validate(admin))
		{
			this.addActionError("密码错误！");
			return "input";
		}else{
			this.httpSession.setAttribute("loginUser", admin);
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
