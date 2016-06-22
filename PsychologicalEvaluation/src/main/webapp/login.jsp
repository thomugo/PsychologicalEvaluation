<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="">
<meta name="format-detection" content="telephone=no">
<title></title>
<meta name="keywords" content="">
<meta name="description" content="">
<link rel="stylesheet" href="<%=path%>/style/mobile_421d115e12.css">

<script src="<%=path%>/js/mobile_f4b5a0a094.js"></script>
<!--[if lt IE 9]-->
</head>

<body>
    <div class="layout">
                                
        <div class="header ">
        	<h2>登录</h2>
		</div>
        <section class="mainCont">

	          <s:form class="logIn-form show" id="logIn-form-email" action="login" method="post">
	                <div class="rowArea form-input">
	                    <div class="form-group email">
	                        <div class="form-control">
	                            <s:textfield name="username" placeholder="用户名"></s:textfield>
	                            
	                        </div>
	                    </div>
	                    <div class="form-group phonePsw">
	                        <div class="form-control">
	                            <s:textfield type="password" name="password" placeholder="密码"></s:textfield>
	                        </div>
	                    </div>
	                </div>
	                <div class="rowArea logInTip">
	                    <ul>
	                        <li>您如果<span class="t-blue">忘记密码</span>，请用电脑登陆我们的心理测评系统网站找回密码</li>
							<li>使用电脑注册请点击<span class="t-blue"><a href="<%=path%>/registe.jsp">这里</a></span></li>	                        
	                    </ul>
	                </div>
	                <div class="rowArea">
	                    <s:submit value="提交" class="logIn-form-submit" ></s:submit>
	                </div>
	             </s:form> 
                    
				<div class="otherLogIn">
					<div class="title">
						<h3>第三方登录</h3>
							<i class="bd"></i>
					</div>
					
					<div class="body">
						<ul>
							<li class="wb"><a ><i class="icon-other-login"></i>微博登录</a></li>
							<li class="qq"><a ><i class="icon-other-login"></i>QQ登录</a></li>
						</ul>
					</div>
				</div>
		</section>

<!-- 底部 -->
		<div class="hd-foot">
			<p>
				<a href="<%=path%>/feedback.action">反馈留言</a>
			</p>
			<p>
				我们的小组<span>心理测评</span>
			</p>
		</div>

	</div>
</body>

</html>

