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
<title>心理测评 首页</title>
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
<style type=text/css>
	.row{
		background-img:url("<%=path%>/pic/backg.png");
	}
</style>
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
			            <a href="index.jsp" class="navbar-brand"><small>心理测评</small></a>
			        </div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li class="" id="index-li"><a href="index.jsp">首页</a></li>
							<li class="" id="test-li"><a href="user/test.jsp">做个测试</a></li>
						</ul>
						<div class="navbar-right">
							<ul class="nav navbar-nav">
								
									
									
									
										<li class="" id="register-li"><a href="user/registe.jsp">注册</a></li>
										<li class="" id="login-li"><a href="user/login.jsp">登录</a></li>
									
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div id="page" class="container">

<div class="row" id="banner">
	<div class="col-xs-12">
		<div class="banner-wrapper">
			<h1>
				试手t 心理测评系统
			</h1>
			<p>帮助用户实现网络资料打印，文件存储，文件共享，无需U盘，无需零钱，无需排队，自助提取，方便快捷。</p>

			<div class="buttons-wrapper">
				<a href="user/test.jsp" class="btn btn-primary">做个测试</a>
				<a href="#" class="btn btn-default button-stripe">了解更多</a>
			</div>
		</div>
	</div>
</div>
<div class="row" id="summary">
	<div class="col-xs-12">
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-3 summary-column">
				<img src="images/pin.png" height="32" width="24">
				<h5>地点</h5>
				<p>学校内部固定打印点，远程打印后，随时可以自助提取。</p>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-3 summary-column">
				<img src="images/settings.png" height="32" width="33">
				<h5>自定义</h5>
				<p>文档自行编辑，支持多种不同文档格式，以及支付方式。</p>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-3 summary-column">
				<img src="images/easy.png" height="32" width="34">
				<h5>便捷</h5>
				<p>无需到店排队，联网即可上传打印，省去等待烦恼。</p>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-3 summary-column">
				<img src="images/saturn.png" height="32" width="32">
				<h5>联结</h5>
				<p>未来将会有更多学校加入我们，为同学们提供更加优质服务。</p>
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
