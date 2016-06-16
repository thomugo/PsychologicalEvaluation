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
    <script src="<%=path%>/js/jquery.min.js"></script>
    <script>
        $(document).bind("mobileinit", function(){
            $.mobile.page.prototype.options.backBtnText = "返回";
            $.mobile.page.prototype.options.addBackBtn= true;
            $.mobile.ajaxEnabled = false;
        });
    </script>
    <script src="<%=path%>/js/jquery.mobile.min.js"></script>
    <script src="<%=path%>/js/mobile.js" ></script>    
    <script src="<%=path%>/js/iscroll.js" ></script>
</head>
<body>
<s:debug></s:debug>
<div data-role="page" id="one">
    <div class="header">
    	<div class="left">
        	<a href="<%=path%>/questionaireList.action" class="ico ico-back icon"></a>
    	</div>
    	<h2>测试</h2>
    	<div class="right">
       		<div class="img">
              	<a class="avatar" href="<%=path%>/user/userIndex.jsp">
              		<img src="http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80" width="60" height="60">
              	</a>
        	</div>
    	</div>
	</div>
    <div data-role="content" style="font-size: 120%">
        <h1 class="po_title" id='title'>世界上另一个自己会对你说什么？</h1>
        <h2 style="font-size:16px;" id='result0'>我的结果 : B.理想中的另一个自己</h2>
        <div id='result1'>你对现在的自己不够满意。一方面，你只肯真正相信自己一个，另一方面，你有时又会很憎恶现在的这个自己。你希望可以彻底改变，去尝试一个不一样的人生。如果世界上真的还有另一个你的话，你希望是一个跟这个自己完全不同的存在。希望那个自己可以让自己看到一个与众不同的性格和生活方式，希望那个自己过得很自我、很独特。<br />
建议：试着更加自信，更加爱自己，当生活让你不开心的时候就试着去改变而不是等待。<br />
		</div>
        <br>

        <div class="kuang">
   		 	<span>综合心理健康评估</span>
    		<div class="jiao"></div>
		</div>
		<div class="btn">
        	<a href="<%=path%>/questionaireList.action" style="color: white;font-weight: normal;font-family: 微软雅黑;text-shadow: 0 0 0;background-image:none">试试其他测试</a>
    	</div>

<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=603462" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
    document.getElementById("bdshell_js").src = "<%=path%>/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000)
</script>
<!-- Baidu Button END -->
<br style="clear: both">    </div>
</div>
</body>
</html>

