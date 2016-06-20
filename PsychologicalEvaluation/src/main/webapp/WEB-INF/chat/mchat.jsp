<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/> 
<title>心理学从这里开始</title>
<meta name="baidu-tc-cerfication" content="e37b9fc48676fae6577f9e35f95fdb3e" />

<meta name="keywords" content="" />
<meta name="description" content=""/>


<!--<meta name="apple-itunes-app" content="app-id=591341152">-->
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> 
<meta content="yes" name="apple-mobile-web-app-capable" /> 
<meta content="black" name="apple-mobile-web-app-status-bar-style" /> 
<meta content="telephone=no" name="format-detection" /> 


<link rel="stylesheet" href="<%=path%>/style/qz_home.css" />

<link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
<style type="text/css">
.s_reg button {
	height: 36px;
	line-height: 36px;
	background-color: #245D94;
	color: white;
	border: 0 none;
	font-size: 120%;
	font-weight: bold;
	width: 100%;
	border-radius: 5px;
	-webkit-appearance: none;
	-webkit-border-radius: 0;
	
}


</style>
</head>
<body>
  		<input type="hidden" id="userId"  value="${sessionScope.loginUser.id}"/> 
  		<input type="hidden" id="username"  value="${sessionScope.loginUser.username}"/> 
  		<input type="hidden" id="userIcon"  value="${sessionScope.loginUser.icon}"/> 
  		<input type="hidden" id="targetId"  value="${target.id}"/> 
  		<input type="hidden" id="targetIcon"  value="${target.icon}"/> 
  		<input type="hidden" id="targetUsername"  value="${target.username}"/> 
		
<div id="main_body">
    <div class="header">
	    	<div class="left">
	                <a href="<%=path%>/index.jsp" class="ico ico-back icon"></a>       
	    	</div>    
	        <h2>聊天</h2>
    		<div class="right">
                <div class="img">                		
               		 <s:if test="#session.loginUser==null" ><!--用户未登录  -->
               		 	<a class="avatar" href="<%=path%>/login.jsp">
               		 		<img src="<%=path%>/image/img155.png" width="60" height="60">
               		 		
               		 	</a>
               		 </s:if>
  					 <s:else>						<!--用户已登录  -->
  						<a class="avatar" href="${ pageContext.request.contextPath }/logout.action">
                        	<img src="<%=path%>/assets/avatars/${loginUser.icon}" width="60" height="60">
                  	  	</a>
       				  </s:else>       				                 	 	
                </div>
            
            </div><!-- right -->
    </div>

	 <header class="s_header" style="display: none;">
		<nav>
			
			
			<a href="<%=path%>/index.jsp" class="bg">
				<span>首页</span>
			</a>			
		</nav>
	</header>
	

<section class="s_reg">
    <div>
        <b>说点什么吧</b>
    </div>
    <textarea class="dialogs content" name="content" ></textarea>
    
    <div id="send">
        	<input type="text"  placeholder="在这里输入信息" name="message" id="message">
			<button type="button" id="send">发送</button>			
    </div>
</section>

	
	<footer class="footer">
	<div>
		<p>
			<a href="#">留言</a>
		</p>
		<p>
			我们的小组<span>心理测评系统</span>
		</p>
	</div>
</footer>

</div>
<script src="<%=path%>/js/jquery.min.js"></script>
<script src="<%=path%>/js/mchat.js"></script>

<script src="<%=path%>/js/api.js"></script>
</body>
</html>