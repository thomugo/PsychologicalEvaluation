package com.pes.action;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import com.pes.interceptor.Authority;

@ParentPackage("myBasicPackage")
@Action(value="feedback")
@Result(name="success", location="/WEB-INF/user/feedback.jsp")
public class FeedbackAction extends BaseAction {
	@Override
	@Authority(privilege=2)
	public String execute() throws Exception {
		return "success";
	}
	
}
