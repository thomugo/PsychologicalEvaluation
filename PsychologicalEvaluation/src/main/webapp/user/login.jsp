<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>心理测评 用户登录</title>
<meta name="description" content="心理测评系统">
<meta name="keywords" content="微信公众号，心理测评">
<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="address=no">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/reset.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/custom.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/dialog.css">
<!--[if lt IE 9]>
    <script src="js/html5.js"></script>
<![endif]-->
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</head>
<body>
	<div class="main-container">
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
								
									
									
									
										<li class="" id="register-li"><a href="user/registe.jsp">注册</a></li>
										<li class="" id="login-li"><a href="index.jsp">返回主页</a></li>
									
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div id="page" class="container">

<div class="row" id="login">
    <div class="col-xs-12">
        <div class="login-wrapper">
            <div class="col-md-offset-2 col-xs-12 col-sm-10 col-md-8">
                <form class="form-horizontal" role="form" method="post" id="login-form" action="userlogin.do">
                    <div class="form-group">
	                    <h1>登录 <small>注册过的用户，在这里进行登录。</small></h1>
	                    <hr>
                    </div>
                    <div class="form-group">
                        <label for="login-username" class="col-md-3 control-label">邮箱</label>
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
                    <div class="form-group">
                        <div class="col-md-offset-3 col-md-7 form-btn-group">
                        <button type="submit" name="submit" class="btn btn-primary pull-left" id="login-submit">
                        <span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;登录</button>
                        <a href="user/registe.jsp" class="btn btn-link pull-left">注册</a>
                        </button>
                    	</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        </div>
    </div>
    <footer>
        <div class="container">
            <p><strong>试手</strong> &copy; 2016 All Rights Reserved <a class="links" href="user/adminLogin.jsp">进入后台</a></p>
        </div>
    </footer>
    <script src="js/dialog.js"></script>
    <script src="js/validation.js"></script>
	<script src="js/location.js"></script>
</body>
</html>