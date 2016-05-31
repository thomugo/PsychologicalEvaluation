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
    
    <title>管理中心</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="js/json2.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/user.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=path %>/styles/listUser.css">
	<link rel="stylesheet" type="text/css" href="<%=path %>/styles/style.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/bootstrap.min.css" />

  </head>
  
  <body>
     <a href="${ pageContext.request.contextPath }/listUser.action"> 用户中心</a><br/>
     	<div class="top">
  				用户中心
    		  	<div class="user">
  					<a href="${ pageContext.request.contextPath }/index.jsp">返回主页</a>
				</div>
    	</div>
	<table>
	<tr>
		<th>ID</th>
		<th>username</th>
		<th>email</th>
		<th>phone</th>
		<th>date</th>
		<th>gender</th>
		<th>vocation</th>
		<th>删除</th>>
	</tr>
	<s:iterator value="users" var="user">
		<tr class="users">
			<td><s:property value="#user.id" /></td>
			<td><s:property value="#user.username" /></td>
			<td><s:property value="#user.email" /></td>
			<td><s:property value="#user.phone" /></td>
			<td><s:property value="#user.regdate" /></td>
			<td><s:property value="#user.gender" /></td>
			<td><s:property value="#user.vocation" /></td>
			<td><button class="delete" id = ${user.id}>delete</button></td>
		</tr>
	</s:iterator>
	</table>
		<button id="prepage">上一页</button>
		第<span id="num"><s:property value="pageNum" /></span>/<span id="total">
		<s:property value="totalPages"/></span>  页
		<button id="nextpage">下一页</button><br/>
	<s:debug/>
	<text id="pageSize"><s:property value="pageSize" /></text>

  </body>
</html>
