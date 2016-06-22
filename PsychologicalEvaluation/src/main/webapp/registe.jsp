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
<title>心理学从这里开始 用户注册</title>
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
<style type="text/css">
.style1{
	margin-top:8px;
	margin-left:5px;
	padding-left:10px;
	padding-right:1px;
}
input .style1{
margin-left:30px;
}
lable .style1{
	margin-right:10px;
}

</style>
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
		<div id="page" class="container">
<div class="row" id="registe">
    <div class="col-xs-12">
        <div class="register-wrapper">
            <div class="col-md-offset-2 col-xs-12 col-sm-10 col-md-8">
                <s:form class="form-horizontal" method="post" action="registe" role="form" id="registe-form" onsubmit="return checkform()">
	                <div class="form-group">
                        <h1>注册 </h1>
                        <hr>
	                </div>
	                <div class="form-group">
	                    <label for="registe-username" class="col-md-3 control-label">用户名</label>
	                    <div class="col-md-4">
	                    <s:textfield type="text" class="form-control" id="registe-username" name="username" placeholder="输入用户名" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-username">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-username-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-username-ok"></div>
	                    </div>
	                </div>
	                
	                <div class="form-group">
	                    <label for="registe_password" class="col-md-3 control-label">密码</label>
	                    <div class="col-md-4">
	                    <s:textfield type="password" class="form-control" id="registe_password" name="password" placeholder="密码长度不小于4位" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-password">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-password-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-password-ok"></div>
	                    </div>
	                </div>
	                
	                <div class="form-group">
	                    <label for="registe_repassword" class="col-md-3 control-label">确认密码</label>
	                    <div class="col-md-4">
	                    <s:textfield type="password" class="form-control" id="registe_repassword" name="repassword" placeholder="密码长度不小于4位" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-repassword">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-repassword-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-repassword-ok"></div>
	                    </div>
	                </div>
	                
	                <div class="form-group">
	                    <label for="telenumber" class="col-md-3 control-label">手机号码</label>
	                    <div class="col-md-4">
	                    <s:textfield type="text" class="form-control" id="telenumber" name="phone" placeholder="输入手机号码" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-telenumber">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-telenumber-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-telenumber-ok"></div>
	                    </div>
	                </div>
	                
	                <div class="form-group">
	                    <label for="email" class="col-md-3 control-label">邮箱</label>
	                    <div class="col-md-4">
	                    <s:textfield type="text" class="form-control" id="email" name="email" placeholder="输入邮箱地址" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-email">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-email-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-email-ok"></div>
	                    </div>
	                </div>
	                
	                <div class="form-group">
	                    <label for="age" class="col-md-3 control-label">年龄</label>
	                    <div class="col-md-4">
	                    <s:textfield type="text" class="form-control" id="age" name="age" placeholder="输入年龄" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-age">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-age-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-age-ok"></div>
	                    </div>
	                </div>	 
	                               
	                <div class="form-group">
	                    <label for="vocation" class="col-md-3 control-label">职业</label>
	                    <div class="col-md-4">
	                    <s:textfield type="text" class="form-control" id="vocation" name="vocation" placeholder="输入职业" autocomplete="off"></s:textfield>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-vocation">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-vocation-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-vocation-ok"></div>
	                    </div>
	                </div>
	                
	                <div class="form-group">
	                    <label for="gender" class="col-md-3 control-label">性别</label>
	                    <div class="col-md-4" class="style">
	                    <!-- <input type="radio" class="form-control" id="gender" name="gender" autocomplete="off"/> -->
	                    	<s:radio list="#{'0':'男','1':'女'}" name="gender" value="0" class="style1"></s:radio>
	                    </div>
	                    <div class="col-md-5">
	                    	<div class="alert alert-danger hidden" role="alert" id="alert-gender">
	                    		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;&nbsp;
	                    		<span id="alert-gender-message"></span>
	                    	</div>
	                    	<div class="alert hidden" role="alert" id="alert-gender-ok"></div>
	                    </div>
	                </div>	                

	                <div class="form-group">
	                    <div class="col-md-7 form-btn-group">
	                    <s:submit value="立即注册" type="button"  name="submit" class="btn btn-primary pull-right button-stripe" id="register-submit"></s:submit>
	                   <%--  <span class="glyphicon glyphicon-plane"></span>&nbsp;&nbsp;立即注册</button> --%>
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
        <div class="container">
            <p>我们的小组 <a class="links" href="<%=path%>/adminLogin.jsp">进入后台</a></p>
        </div>
    </footer>
<script>
	var text="${errors.username}";
	function showandhide(show, hide) {
		$(show).removeClass("hidden");
		$(hide).addClass("hidden");
	}
	
		if(text){
			send=false;
			$("#alert-username").text("用户名已存在");
			showandhide("#alert-username","#alert-username-ok");
		}
	
	function checkform(){
	
		var	send=true;
		var uname=$.trim($("#registe-username").val());

		var pwd=$.trim($("#registe_password").val());
		var repwd=$.trim($("#registe_repassword").val());
		var tel=$.trim($("#telenumber").val());
		var email=$.trim($("#email").val());
		var age=$.trim($("#age").val());
		var vocation=$.trim($("#vocation").val());
		
		
		if(uname.length==0){
			send=false;
			$("#alert-username").text("用户名不能为空");
			showandhide("#alert-username","#alert-username-ok");
			
		}else if(uname.length<4){
			send=false;
			$("#alert-username").text("用户名不能少于4位");
			showandhide("#alert-username","#alert-username-ok");
				
		}
		
		if(pwd.length==0){
			send=false;
			$("#alert-password").text("密码不能为空");
			showandhide("#alert-password","#alert-password-ok");
			
		}else if(pwd.length<4){
			send=false;
			alert(pwd.length);
			$("#alert-password").text("密码不能少于4位");
			showandhide("#alert-password","#alert-password-ok");

		}else if(repwd.length==0){
				send=false;
				$("#alert-repassword").text("密码不能为空");
				showandhide("#alert-repassword","#alert-repassword-ok");
			
			}else if(repwd.length<4){
				send=false;
				$("#alert-repassword").text("密码不能少于4位");
				showandhide("#alert-repassword","#alert-repassword-ok");
			
			}else if(repwd!=pwd){
				send=false;
				$("#alert-repassword").text("密码与第一次输入不一致");
				showandhide("#alert-repassword","#alert-repassword-ok");		
		}
		
		if(tel.length==0){
			send=false;
			$("#alert-telenumber").text("手机号码不能为空");
			showandhide("#alert-telenumber","#alert-telenumber-ok");
			
		}else if(tel.length!=11){
			send=false;
			$("#alert-telenumber").text("手机号码长度不正确");
			showandhide("#alert-telenumber","#alert-telenumber-ok");
			
		}
		
		if(email.length==0){
			send=false;
			$("#alert-email").text("邮箱不能为空");
			showandhide("#alert-email","#alert-email-ok");
			
		}
		
		if(age.length==0){
			send=false;
			$("#alert-age").text("年龄不能为空");
			showandhide("#alert-age","#alert-age-ok");
			
		}
		
		if(vocation.length==0){
			send=false;
			$("#alert-vocation").text("职业不能为空");
			showandhide("#alert-vocation","#alert-vocation-ok");
			
		}
		return send;		
	}
</script>
	<script src="<%=path%>/js/registe.js"></script>
</body>
</html>