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
    
    <title>我的首页</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width,initial-scale=1"> 
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/index.css" />
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/style.css" />
	
  </head>
  
  <body>
  <div class="top">
  我相信这就是生命所能赋予我们的：不求事事如愿，但求问心无愧。
  	<s:if test="#loginUser empty">ddd</s:if>
  	<div class="user">
  	<a href="${ pageContext.request.contextPath }/user/login.jsp">登录</a>
  	<a href="${ pageContext.request.contextPath }/user/registe.jsp">注册</a>
<!--   	<a href="${ pageContext.request.contextPath }/logout.action">退出</a><br />--> 
	</div>
	</div>
    <div class="main"> <!-- style="background-image: url(<%=path%>/pic/psychologicalEvaluation.jpg)" -->心理测评系统</div> 
    
  </body>
</html>
