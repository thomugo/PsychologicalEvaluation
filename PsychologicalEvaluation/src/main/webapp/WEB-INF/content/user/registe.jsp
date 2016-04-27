<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page  isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Psychological Evaluation Registe Page</title>
    
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
   <s:form action="registe" method="post" namespace="/user" >
    	<s:textfield name="username" label="username"></s:textfield>
    	<br/>
    	<s:textfield name="password" label="password"></s:textfield>
    	<br/>
    	<s:textfield name="age" label="age"></s:textfield>
    	<br/>
    	<s:radio list="#{'0':'先生','1':'女士'}" name="gender" value="1"/>
    	<br/>
    	<s:textfield name="phone" label="phone"></s:textfield>
    	<br/>
    	<s:textfield name="email" label="email"></s:textfield>
    	<br/>
    	<s:textfield name="vocation" label="vocation"></s:textfield>
    	<br/>
    	
    	<s:submit value="submit"></s:submit>
    </s:form>
	<s:debug/>
	
  </body>
</html>
