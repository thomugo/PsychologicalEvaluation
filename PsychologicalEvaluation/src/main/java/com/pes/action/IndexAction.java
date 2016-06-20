package com.pes.action;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;

import com.pes.entity.BaseUser;
import com.pes.interceptor.Authority;

@ParentPackage("myBasicPackage")
@Action(value="index")
@Results(value = { @Result(name="admin", location="/WEB-INF/user/index.jsp" ),
		@Result(name="normal", location="/index.jsp")
})
public class IndexAction extends BaseAction {
	@Override
	public String execute() throws Exception {
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		if(user != null){
			if(user.getPrivilege() <= 3){
				return "admin";
			}else{
				return "normal";
			}
		}else{
			return "login";
		}
		
	}
	
}
