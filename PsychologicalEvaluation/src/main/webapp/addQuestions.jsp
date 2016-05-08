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
    
    <title>制作问卷</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="js/json2.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/addQuestions.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/addQuestions.css" />
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/style.css" />
  </head>
  
  <body>
    <div class='top'>添加问题</div>
    <div id="question">
	    <div class="choicequestion">
	    	<label>问题</label>
	    	<input type="text"  class="question"><br/>
	    	<div class="choiceoption">
	    		<label>选项</label>
	   	 		<input type="text"  class="option" >
	   	 	</div>
	  		<button class="addoption">添加选项</button><br />
	  		<button id="addquestion1">添加问题</button>
  		   
	  	</div>
 			
  	</div>
			<button id="save" >保存</button>
  </body>
</html>
