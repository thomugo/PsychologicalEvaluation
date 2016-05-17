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
    
    <title>管理员 编辑问卷</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/reset.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/custom.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/dialog.css">
<!--[if lt IE 9]>
    <script src="js/html5.js"></script>
<![endif]-->
  </head>
  
  <body>
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
			            <a href="index.jsp" class="navbar-brand"><small>心理测评</small></a>
			        </div>
				</div>
			</div>
		</header>
		
    <h3>&nbsp&nbsp编辑试卷</h3>
    &nbsp试卷标题：<input type="text" id="title">
    <div id="questions">
    	<h3>&nbsp&nbsp选择题</h3>
    	<div id="question1">
		    <div class="choicequestion">
		    	&nbsp<input type="text"  class="question1">问题<br/>
		    	<div class="choiceoption">
		   	 		&nbsp<input type="text"  class="option" >选项
		   	 	</div>
		  		&nbsp;&nbsp;<button class="addoption">添加选项</button>
		  	</div>
		 </div>
	  	&nbsp;&nbsp;<button id="addquestion1">添加选择题</button><br/>
	  	
	  	<h3>&nbsp&nbsp判断题</h3>
	  	<div id="question2">
		  	<div class="truefalsequestion">
		    	&nbsp<input type="text"  class="question2">问题<br/>
		  	</div>
		</div>
		&nbsp;&nbsp;<button id="addquestion2">添加判断题</button><br/>
		
  	</div>
<div class="row" id="login">
    <div class="col-xs-12">
        <div class="login-wrapper">
            <div class="col-md-offset-2 col-xs-12 col-sm-10 col-md-8">
                <form class="form-horizontal" role="form" method="post" id="login-form" action="userlogin.do">

                    <div class="form-group">
                        <label for="login-username" class="col-md-3 control-label">用户名</label>
                        <div class="col-md-4">
                        <input type="text" class="form-control" id="login-username" name="login-username" placeholder="注册时填写的用户名" autocomplete="off">
                        </div>
                        <div class="col-md-5">
                        	
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-login-username">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-login-username-message"></span>
	                    	</div>
	                    	
	                    	<div class="alert hidden" role="alert" id="alert-login-username-ok"></div>
	                    </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="login-password" class="col-md-3 control-label">密码</label>
                        <div class="col-md-4">
                        <input type="password" class="form-control" id="login-password" name="login-password" placeholder="密码长度不小于6位" autocomplete="off">
                        </div>
                        <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-login-password">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-login-password-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-login-password-ok"></div>
	                    </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>
</div>
</div>  	
  	&nbsp;&nbsp;<button id="save" >保存</button>
  	<script type="text/javascript" src="js/json2.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/editQuestionaire.js"></script>
  </body>
</html>
