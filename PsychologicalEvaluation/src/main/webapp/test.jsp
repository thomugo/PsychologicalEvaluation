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
    <title>心理测试</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width,initial-scale=1"> 
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/reset.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/custom.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/dialog.css">
	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/answer.js"></script>
	
  </head>
  
  <body>
  <s:debug></s:debug>
  <header>
			<div role="navigation" class="navbar navbar-default topnav">
				<div class="container">
					<div class="navbar-header">
			            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			              <span class="sr-only">Toggle navigation</span>
			              <span class="icon-bar"></span>
			              <span class="icon-bar"></span>
			              <span class="icon-bar"></span>
			            </button>
			            <a href="index.jsp" class="navbar-brand">心理测评</a>
			        </div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li class="" id="index-li"><a href="index.jsp">首页</a></li>
						</ul>
						<div class="navbar-right">
							<ul class="nav navbar-nav">									
										<li class="" id="index-li"><a href="index.jsp">返回主页</a></li>			
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
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
  		
  		<button id="save">提交</button>
  	</s:div>
  	
    <footer>
        <div class="container">
            <p><strong>试手</strong> &copy; 2016 All Rights Reserved <a class="links" href="user/adminLogin.jsp">进入后台</a></p>
        </div>
    </footer>  	
  </body>
</html>
