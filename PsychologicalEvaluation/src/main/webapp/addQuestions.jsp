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
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="js/json2.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/addQuestions.js"></script>
  </head>
  
  <body>
    This is test page<br/>
    <div id="question">
	    <div class="choicequestion">
	    	<input type="text"  class="question">question<br/>
	    	<div class="choiceoption">
	   	 		<input type="text"  class="option" >option
	   	 	</div>
	  		<button class="addoption">添加选项</button>
	  	</div>
  	</div>
  	<button id="addquestion1">添加问题</button><br/>
  	<button id="save" >保存</button>
  </body>
</html>
