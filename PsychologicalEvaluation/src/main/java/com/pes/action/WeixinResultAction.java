package com.pes.action;

import java.util.List;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import com.pes.entity.AnswerPojo;
import com.pes.entity.BaseUser;
import com.pes.entity.User;
import com.pes.service.AnswerService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@Results( {
        @Result(name = "success", location = "/index.jsp", type="redirect"),
        @Result(name = "error", location = "/false.jsp"),
        @Result(name = "input", location = "/login.jsp"),
        @Result(name = "prePage", location = "${prePage}", type="redirectAction")
    })
public class WeixinResultAction extends  BaseAction{
	private static final Logger LOGGER = Logger.getLogger(WeixinResultAction.class);
	private String nickname;
	private String openId;
	//登录前页面
    private String prePage;
    private User user;
	@Autowired
	private UserService userService;
	@Autowired
	private AnswerService answerService;
	
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname.substring(1, nickname.length()-1);
	}

	public String getOpenId() {
		return openId;
	}

	public void setOpenId(String openId) {
		this.openId = openId.substring(1, openId.length()-1);
	}

	public String getPrePage() {
		return prePage;
	}

	@Action(value="weixinResults")
	public String execute()
	{
		//获取跳转到登陆界面之前的页面地址，由拦截器提供
        prePage = (String) session.get("prePage");
        System.out.println("in weixin action and prePage: "+prePage);
        //nickname = 
        //openId = 
        System.out.println(nickname);
		if(!userService.isUserExist(nickname)){
			AjaxUtil.ajaxJSONResponse("您还没有进行过测试");
		}else{
			user = userService.validate(nickname, openId);
		}
		if(user == null)
		{
			this.addActionError("密码错误！");
			return "input";
		}else{
			BaseUser baseUser = user;
			this.httpSession.setAttribute("loginUser", baseUser);
			System.out.println(baseUser.getId());
			List<AnswerPojo> results = answerService.findByUserId(baseUser.getId());
			System.out.println(results);
			AjaxUtil.ajaxJSONResponse(results);
			return NONE;
		}
	}
	
}
