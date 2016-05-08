<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page  isELIgnored="false"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>注册</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width,initial-scale=1"> 
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/registe.css" />
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/style.css" />


  </head>
  
  <body>
		<div class='top'>注册账号
		  	<div class="user">
  				<a href="${ pageContext.request.contextPath }/index.jsp">返回主页</a>
			</div>
		</div>
   <s:form action="/registe.action" method="post"  name="registe" onsubmit="return checkall()">
    	<s:textfield name="username" label="用户名" placeholder='6~18位，字母开头，只包含字母、数字、_' onblur="checkUserName(this,'registe_username')"></s:textfield>
    	<br/>
    	<s:password name="password" label="登录密码" placeholder='6~18位，只包含字母、数字、_' onblur="checkpwd(this,'registe_password')"></s:password>
    	<br/>
    	<s:password name="repassword" label="确认密码" placeholder='请再次确认您的密码' onblur="checkRepwd(this,'registe_repassword')"></s:password>
    	<br/>
    	<s:textfield name="age" label="年龄"></s:textfield>
    	<br/>
    	<s:radio list="#{'0':'先生','1':'女士'}" name="gender" value="0" label="性别"/>
    	<br/>
    	<s:textfield name="phone" label="联系电话"></s:textfield>
    	<br/>
    	<s:textfield name="email" label="电子邮箱" placeholder='×××@×××.×××' onblur="checkEmail(this,'registe_email')"></s:textfield>
    	<br/>
    	<s:textfield name="vocation" label="职业"></s:textfield>
    	<br/>
    	
    	<s:submit value="提交注册"></s:submit>
    </s:form>
		<script type="text/javascript" src="js/registe.js"></script>
  </body>
</html>
