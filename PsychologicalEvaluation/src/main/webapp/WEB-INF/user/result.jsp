<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试结果</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
	<meta content="yes" name="apple-mobile-web-app-capable" />
	<meta content="black" name="apple-mobile-web-app-status-bar-style" />
	<meta content="telephone=no" name="format-detection" />    
	<link rel="stylesheet" href="<%=path%>/style/jquery.mobile.min.css">
    <link rel="stylesheet" href="<%=path%>/style/mobile1.css">    
    <link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
    <link rel="stylesheet" href="<%=path%>/style/csshare.min.css">
	<link rel="stylesheet" href="<%=path%>/style/mresult.css">    

</head>
<body>
<input type="hidden" id="basePath" val="<%=basePath%>">
<div data-role="page" id="one">
    <div class="header">
    	<div class="left">
        	<a  class="ico ico-back icon questionaireList"></a>
    	</div>
    	<h2>测试</h2>
    	<div class="right">
                <div class="img">                		
               		 <s:if test="#session.loginUser==null" ><!--用户未登录  -->
               		 	<a class="avatar" href="<%=path%>/login.jsp">
               		 		<img src="<%=path%>/image/img155.png" width="60" height="60">
               		 		
               		 	</a>
               		 </s:if>
						<s:elseif test="#session.loginUser.privilege==4">						<!--用户已登录  -->
  						<a class="avatar" href="${ pageContext.request.contextPath }/logout.action">
  						<img src="${loginUser.icon}" width="60" height="60">
                  	  	</a>
       				  </s:elseif>  
       				  <s:else>
  						<a class="avatar" href="${ pageContext.request.contextPath }/logout.action">
                        	<img src="<%=path%>/assets/avatars/${loginUser.icon}" width="60" height="60"> 
                  	  	</a>       				  
       				  </s:else>   					     				                 	 	
                </div>
    	</div>
	</div>
    <div data-role="content" style="font-size: 120%">
        <h1 class="po_title" id='title'>${questionaire.title}</h1>
        <h2 style="font-size:16px;" id='result0'>我的结果 : ${answer.result}</h2>
        <br>

        <div class="kuang">
   		 	<span>综合心理健康评估</span>
    		<div class="jiao"></div>
		</div>
		<div class="btn">
        	<a  style="color: white;font-weight: normal;font-family: 微软雅黑;text-shadow: 0 0 0;background-image:none" class="questionaireList">试试其他测试</a>
    	</div>

		<script src="<%=path%>/js/jquery.min.js"></script>
		<script src="<%=path%>/js/jquery.mobile.min.js"></script>
		<script src="<%=path%>/js/mobile.js" ></script>    
		<script src="<%=path%>/js/iscroll.js" ></script>
		<script type="text/javascript">
		var basePath = $("#basePath").val();
		$('.questionaireList').click(function(){
		window.location = basePath + "questionaireList.action";
		});
		</script>
	</div>
</body>
</html>

