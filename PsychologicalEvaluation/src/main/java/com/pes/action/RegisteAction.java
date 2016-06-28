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
	private User user = new User();
	
	@Override
	public void validate(){
		if(userService.isUserExist(user.getUsername())){
			addFieldError("username", "用户名已存在");
		}
			
	}
	public String execute()
	{
		String iconsman[] = {"avatar.png","avatar4.png","avatar5.png"};
		String iconswoman[] = {"avatar1.png","avatar3.png"};
		user.setDateTime(new Date());
		if(user.getGender() == 0){//man
			int index=(int)(Math.random()*3);
			user.setIcon(iconsman[index]);
		}else{
			int index=(int)(Math.random()*2);
			user.setIcon(iconswoman[index]);
		}
		Integer id = 0;
		id = userService.save(user);
		System.out.println("add success");
		user.setId(id);
		this.httpSession.setAttribute("loginUser", user);
		//AjaxUtil.ajaxJSONResponse(userInfo);
		return "success";
	}
	@Override
	public User getModel() {
		return user;
	}
	
}
