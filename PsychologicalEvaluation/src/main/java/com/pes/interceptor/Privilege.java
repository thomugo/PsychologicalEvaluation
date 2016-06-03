package com.pes.interceptor;

import java.lang.reflect.Method;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import com.pes.entity.BaseUser;

/**
 * 用于拦截请求判断是否登录
 * 是否拥有权限的拦截器
 */
public class Privilege extends AbstractInterceptor{

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("in interceptor!!");
		ActionContext context = invocation.getInvocationContext();
        // 获取session
        Map<String, Object> session = context.getSession();
		String methodName = invocation.getProxy().getMethod();
        Method currentMethod = invocation.getAction()
                   .getClass().getMethod(methodName, null);
		// 判断用户是否登陆
        //从session获取当前客户信息
        BaseUser user = (BaseUser)ServletActionContext
                    .getRequest().getSession().getAttribute("loginUser");
        
		if (user == null) {
			// 未登陆
			System.out.println("客户还没登陆或登陆已超时！！！");   
			// 获取HttpServletRequest对象
            HttpServletRequest req = ServletActionContext.getRequest();
            // 获取此请求的地址，请求地址包含application name，进行subString操作，去除application name
            //System.out.println(req.getRequestURI());
            String path = req.getRequestURI().substring(25);
            // 获得请求中的参数
            String queryString = req.getQueryString();
            // 预防空指针
            if (queryString == null) {
                queryString = "";
            }else {
				queryString = "?" + queryString;
			}
            // 拼凑得到登陆之前的地址
            String realPath = path + queryString;
            System.out.println("原请求"+req.getRequestURI()+"跳转至login.jsp");
            session.put("prePage", realPath);
            
			return "login";
		} else {
			// 已经登陆
			//2、进行权限控制判断
	        //如果该请求方法是需要进行验证的则需执行以下逻辑
			if(currentMethod.isAnnotationPresent(Authority.class)){
	            //获取权限校验的注解
	            Authority authority = currentMethod.getAnnotation(Authority.class);
	            //获取当前请求的注解的actionName   
	            //String actionName = authority.actionName();
	            //获取当前请求需要的权限   
	            int privilege = authority.privilege();
	            
	            //System.out.println("annotation actionName: " + actionName);
	            System.out.println("annotation privilege: " + privilege);
	            System.out.println("user:  "+ user.getPrivilege());
	            System.out.println("username " + user.getUsername());
	            //权限检查
	            if(privilege >= user.getPrivilege()){
	            	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++");   
		            System.out.println("客户" + user.getUsername() + "在" + new Date() + "执行了" + methodName+"方法，拥有"+privilege+"权限！！");   
		            System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++");   
	            	return invocation.invoke();
	            }
	            
				return "error";//无访问权限
	            
			}else {
				return invocation.invoke(); //不需要权限验证
			}
			
		}
	}

}
