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
    
    <title> 管理员登录</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/adminLogin.css" />
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/style.css" />
	
  </head>
  
  <body>
		<div class='top'>管理员登录
		  	<div class="user">
  				<a href="${ pageContext.request.contextPath }/index.jsp">返回主页</a>
			</div>
		</div>
    <s:fielderror></s:fielderror>
    <s:actionerror/>
   <s:form action="/adminLogin.action" method="post" onsubmit="return checkall()">
    	<s:textfield name="username" label="管理员" onblur="checkUserName(this)"></s:textfield>
    	<br/>
    	<s:textfield name="password" label="密 码" onblur="checkpwd(this)"></s:textfield>
    	<br/>
    	<s:submit value="登录"></s:submit>
    </s:form>
    	<script type="text/javascript" src="js/adminLogin.js"></script>
  </body>
</html>
