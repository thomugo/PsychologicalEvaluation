package com.pes.action;

import java.util.Date;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import com.opensymphony.xwork2.ModelDriven;
import com.pes.entity.User;
import com.pes.service.UserService;

@Results( {
        @Result(name = "success", location = "/index.jsp", type="redirect"),
        @Result(name = "input", location = "/registe.jsp")
    })
public class RegisteAction extends BaseAction implements ModelDriven<User>{
	@Autowired
	private UserService userService;
	private User userInfo = new User();
	
	@Override
	public void validate(){
		if(userService.isUserExist(userInfo.getUsername())){
			addFieldError("username", "用户名已存在");
		}
			
	}
	public String execute()
	{
		String iconsman[] = {"avatar.png","avatar4.png","avatar5.png"};
		String iconswoman[] = {"avatar1.png","avatar3.png"};
		userInfo.setDateTime(new Date());
		if(userInfo.getGender() == 0){//man
			int index=(int)(Math.random()*3);
			userInfo.setIcon(iconsman[index]);
		}else{
			int index=(int)(Math.random()*2);
			userInfo.setIcon(iconswoman[index]);
		}
		Integer id = 0;
		id = userService.save(userInfo);
		System.out.println("add success");
		userInfo.setId(id);
		this.httpSession.setAttribute("loginUser", userInfo);
		//AjaxUtil.ajaxJSONResponse(userInfo);
		return "success";
	}
	@Override
	public User getModel() {
		return userInfo;
	}
	
}
