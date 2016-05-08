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
    
    <title>psychological evaluation</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width,initial-scale=1"> 
	<script type="text/javascript" src="js/json2.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/answer.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/answer.css" />
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/style.css" />
  </head>
  
  <body>
  	<%-- <h3>${(empty loginUser)?'您还没有登陆':'已经登陆' }</h3> --%>
  	<h1><s:property value="questionaire.title"/></h1>
  	<h2>选择题</h2></br>
  		<s:iterator value="choiceQuestionAnswers"  var="questions">
  			<div class="questions">
		  			<s:property value="#questions.key.content" /></br>
		  			<s:iterator value="#questions.value"  var="options">
		  				<s:property value="#options.content" /> &nbsp &nbsp &nbsp
		  			</s:iterator>
		  			</br></br>
		  	</div>
  		</s:iterator>
  	<h2>判断题</h2></br>
  		<s:iterator value="trueFalseQuestionAnswers"  var="question">
  			<div class="questions">
		  			<s:property value="#question.key.content" /></br>
		  			<s:if test="#question.value ==1">是</s:if>
		  			<s:else>否</s:else>
		  			</br></br>
		  	</div>
  		</s:iterator>
  	<s:debug></s:debug>
  	
  </body>
</html>
