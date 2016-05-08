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
	<link rel="stylesheet" type="text/css" href="<%=path %>/styles/style.css"/>
	<link rel="stylesheet" type="text/css" href="<%=path %>/styles/test.css"/>
	<script type="text/javascript" src="js/json2.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/answer.js"></script>
  </head>
  
  <body>
  	  	<div class="top">
  				  测一测
    		  	<div class="user">
    		  		<a href="${ pageContext.request.contextPath }/index.jsp">返回主页</a>
				</div>
    	</div>
  	<s:div id="questionaire" name="%{questionaire.id}">
  	<h2>选择题</h2>
  		<s:iterator value="choiceQuestions"  var="choiceQuestion">
  			<div class="choiceQuestions">
		  			<s:property value="#choiceQuestion.content" />
		  			<s:iterator value="%{#choiceQuestion.options}" var="option">
		  				<div class="options">
		  						<s:checkbox  name="optionValue" fieldValue="%{#option.id}"  id="%{#choiceQuestion.id}" />
		  						<s:property value="%{#option.content}"/>
		  				</div>
		  			</s:iterator>
		  			</br></br>
		  	</div>
  		</s:iterator> 
  		
  	<h2>判断题</h2>
  		<s:iterator value="trueFalseQuestions"  var="trueFalseQuestion">
	  		<div class="trueFalseQuestions">
	  			<s:property value="#trueFalseQuestion.content"/>
	  			<s:radio list="#{'1' : '是','0' : '否'}" id="%{#trueFalseQuestion.id}"  name="%{#trueFalseQuestion.id}" class="radio"></s:radio>
	  			</br></br>
	  		</div>
  		</s:iterator> 	
  		
  		<button id="save">save</button>
  	</s:div>
  </body>
</html>
