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
    
    <title> Login Page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
  </head>
  
  <body>
    This is my Login Page. <br/>
    <s:fielderror></s:fielderror>
    <s:actionerror/>
   <s:form action="/adminLogin.action" method="post">
    	<s:textfield name="username" label="username"></s:textfield>
    	<br/>
    	<s:textfield name="password" label="password"></s:textfield>
    	<br/>
    	<s:submit value="submit"></s:submit>
    </s:form>
  </body>
</html>
