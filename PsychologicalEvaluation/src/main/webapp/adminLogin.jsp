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
	<title>心理测评 管理员登录</title>
	<meta name="description" content="心理测评系统">
	<meta name="keywords" content="微信公众号，心理测评">
	<meta name="format-detection" content="telephone=no">
	<meta name="format-detection" content="address=no">
	<link rel="stylesheet" type="text/css" href="<%=path%>/assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/style/reset.css">
	<link rel="stylesheet" type="text/css" href="<%=path%>/style/custom.css">
<!--[if lt IE 9]>
    <script src="js/html5.js"></script>
<![endif]-->
<script src="<%=path%>/js/jquery.min.js"></script>
<script src="<%=path%>/assets/js/bootstrap.min.js"></script>	
</head>
  
<body>
<input type="hidden" id="basePath" value="<%=basePath%>">
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
			        </div>
			        <div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li class="" id="index-li"><a href="<%=path%>/index.jsp">首页</a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<div  id="page" class="container">
<div class="row" id="login">
	<div class="col-xs-12">
		<div class="login-wrapper">
			<div class="col-xs-12 col-sm-10 col-md-10">
				<s:form class="form-horizontal" role="form" id="admin-login-form" action="adminLogin" method="post" > 
					<div class="form-group">
						<div class="col-md-offset-2">
							<h1>管理员登录</h1>
							<hr>
						</div>
					</div>
					<div class="form-group">
                        <label for="login-username" class="col-md-4 control-label">管理员账号</label>
                        <div class="col-md-4">
                        <s:textfield type="text" class="form-control" id="login-username" name="username" placeholder="管理员账号" autocomplete="off"></s:textfield>
                        </div>
                        <div class="col-md-4">
                        
                    		<div class="alert alert-danger hidden" role="alert" id="alert-login-username">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-login-username-message"></span>
	                    	</div>
	                    	                    	
	                    	<div class="alert hidden" role="alert" id="alert-login-username-ok"></div>
	                    </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="login-password" class="col-md-4 control-label">密码</label>
                        <div class="col-md-4">
                        <s:textfield type="password" class="form-control" id="login-password" name="password" placeholder="密码长度不小于6位" autocomplete="off"></s:textfield>
                        </div>
                        <div class="col-md-4">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-login-password">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-login-password-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-login-password-ok"></div>
	                    </div>
                    </div>

					<div class="form-group">
						<div class="col-md-offset-4 col-md-4 form-btn-group">
							<button   type="submit" class="btn btn-primary pull-right button-stripe" id="admin-login-submit" >
								<span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;登录
							</button>
				
						</div>
					</div>
				</s:form>
				
			</div>
		</div>
	</div>
</div>
</div>
</div>

    <footer>
        <div class="container" style="text-align:center;">
            <p>我们的小组 </p>
        </div>
    </footer>
<script type="text/javascript" src="<%=path%>/js/login.js"></script>
</body>
</html>
