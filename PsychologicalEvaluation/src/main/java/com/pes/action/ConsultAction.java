package com.pes.action;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.pes.entity.User;
import com.pes.service.UserService;

@ParentPackage("myBasicPackage")
@Action(value="chat")
@Result(name="success", location="/user/consult.jsp")
public class ConsultAction extends BaseAction{
	@Autowired 
	private UserService userService;
	private User target;
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getTarget() {
		return target;
	}
	@Override
	public String execute(){
		target = userService.findById(id);
		return "success";
	}
	
}
