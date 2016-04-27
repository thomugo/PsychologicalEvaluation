package com.pes.action;

import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.interceptor.SessionAware;
import org.apache.struts2.util.ServletContextAware;

import com.opensymphony.xwork2.ActionSupport;

public class BaseAction extends ActionSupport implements ServletContextAware,
ServletResponseAware, ServletRequestAware, SessionAware{
	
	 private static final long serialVersionUID = 1L;

	 protected ServletContext servletContext;

	 protected HttpServletRequest httpServletRequest;

	 protected HttpServletResponse httpServletResponse;

	 protected HttpSession httpSession;

	 protected Map<String, Object> session;
	@Override
	public void setSession(Map<String, Object> session) {
		this.session = session;
		
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.httpServletRequest = request;
		this.httpSession = request.getSession();
		
	}

	@Override
	public void setServletResponse(HttpServletResponse response) {
		this.httpServletResponse = response;
		
	}

	@Override
	public void setServletContext(ServletContext context) {
		this.servletContext = context;
		
	}

}
