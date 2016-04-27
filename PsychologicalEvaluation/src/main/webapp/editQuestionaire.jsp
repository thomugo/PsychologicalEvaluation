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
	<script type="text/javascript" src="js/editQuestionaire.js"></script>
  </head>
  
  <body>
    <h1>编辑试卷</h1>
    试卷标题：<input type="text" id="title">
    <div id="questions">
    	<span>选择题</span>
    	<div id="question1">
		    <div class="choicequestion">
		    	<input type="text"  class="question1">question<br/>
		    	<div class="choiceoption">
		   	 		<input type="text"  class="option" >option
		   	 	</div>
		  		<button class="addoption">添加选项</button>
		  	</div>
		 </div><!--end question1  -->
	  	<button id="addquestion1">添加选择题</button><br/>
	  	
	  	<span>判断题</span>
	  	<div id="question2">
		  	<div class="truefalsequestion">
		    	<input type="text"  class="question2">question<br/>
		    	<!-- <div class="options">
		   	 		<input type="text"  class="option" >option1
		   	 		<input type="text"  class="option" >option2
		   	 	</div> -->
		  	</div>
		</div><!-- end question2  -->
		<button id="addquestion2">添加判断题</button><br/>
		
  	</div><!-- end questions -->
  	
  	<button id="save" >保存</button>
  </body>
</html>
