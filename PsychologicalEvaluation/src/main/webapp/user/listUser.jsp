<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page  isELIgnored="false"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'userinfo.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
   <a href="${ pageContext.request.contextPath }/listUser.action"> 用户列表</a><br/> 
	<table>
	<tr>
		<th>ID</th>
		<th>username</th>
		<th>email</th>
		<th>phone</th>
		<th>date</th>
		<th>gender</th>
		<th>vocation</th>
	</tr>
	<s:iterator value="users" var="user">
		<tr>
			<td><s:property value="#user.id" /></td>
			<td><s:property value="#user.username" /></td>
			<td><s:property value="#user.email" /></td>
			<td><s:property value="#user.phone" /></td>
			<td><s:property value="#user.regdate" /></td>
			<td><s:property value="#user.gender" /></td>
			<td><s:property value="#user.vocation" /></td>
		</tr>
	</s:iterator>
	</table>
	
	<s:debug/>
	
  </body>
</html>
