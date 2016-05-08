<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title> 欢迎回来！</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width,initial-scale=1"> 
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/style.css" />
  	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/login.css" />
  
  <body>
  	<div class="top">
  				  欢迎回来！ 
    		  	<div class="user">
    		  	<a href="${ pageContext.request.contextPath }/user/adminLogin.jsp">管理员登录</a>
  				<a href="${ pageContext.request.contextPath }/index.jsp">返回主页</a>
			</div>
    </div>
    <s:fielderror></s:fielderror>
    <s:actionerror/>
   <s:form action="/login.action" method="post" onsubmit="return checkall()">
    	<s:textfield name="username" label="我的账号" onblur="checkUserName(this)"></s:textfield>
    	<br/>
    	<s:password name="password" label="登录密码" onblur="checkpwd(this)"></s:password>
    	<br/>
    	<br/>
    	<s:submit value="立即登录"></s:submit>
    </s:form>
    	<script type="text/javascript" src="js/login.js"></script>
  </body>
</html>
