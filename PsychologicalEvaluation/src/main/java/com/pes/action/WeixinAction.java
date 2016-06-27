package com.pes.action;

import java.util.Date;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;

import com.opensymphony.xwork2.validator.annotations.RequiredStringValidator;
import com.pes.entity.BaseUser;
import com.pes.entity.User;
import com.pes.service.UserService;

@Results( {
        @Result(name = "success", location = "/index.jsp", type="redirect"),
        @Result(name = "error", location = "/false.jsp"),
        @Result(name = "input", location = "/login.jsp"),
        @Result(name = "prePage", location = "${prePage}", type="redirectAction")
    })
public class WeixinAction extends  BaseAction{
	private static final Logger LOGGER = Logger.getLogger(WeixinAction.class);
	private String nickname;
	private String openId;
	private int sex;
	private String headimgurl;
	//登录前页面
    private String prePage;
    private User user;
	@Autowired
	private UserService userService;
	
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getOpenId() {
		return openId;
	}

	public void setOpenId(String openId) {
		this.openId = openId;
	}

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public String getHeadimgurl() {
		return headimgurl;
	}

	public void setHeadimgurl(String headimgurl) {
		this.headimgurl = headimgurl;
	}

	public String getPrePage() {
		return prePage;
	}

	@Action(value="weixin")
	public String execute()
	{
		//获取跳转到登陆界面之前的页面地址，由拦截器提供
        prePage = (String) session.get("prePage");
        System.out.println("in weixin action and prePage: "+prePage);
		if(userService.isUserExist(nickname)){
			user = userService.validate(nickname	, openId);
		}else{
			user = new User();
			user.setUsername(nickname);
			user.setPrivilege(4);
			user.setPassword(openId);
			user.setGender(sex);
			user.setIcon(headimgurl);
			user.setDateTime(new Date());
			userService.save(user);
		}
		if(user == null)
		{
			this.addActionError("密码错误！");
			return "input";
		}else{
			BaseUser baseUser = (BaseUser)user;
			this.httpSession.setAttribute("loginUser", user);
			//清除session中的数据
	        session.remove("prePage");
	        if (prePage == null) {
	        	//不是拦截器跳转到登陆页面的，直接访问的登陆页面
	        	if(user.getPrivilege() <= 3){
	        		return "admin";
	        	}else{
	        		return "success";
	        	}
	        }else {
				return "prePage";
			}
		}
	}
	
}
