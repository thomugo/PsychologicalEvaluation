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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" >
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="">
<meta name="format-detection" content="telephone=no">
<title>心理测评 </title>
<meta name="keywords" content="">
<meta name="description" content="">
<link rel="stylesheet" href="<%=path%>/style/mobile_421d115e12.css">
<script src="<%=path%>/js/jquery.min.js"></script>
<script src="<%=path%>/js/mobile_f4b5a0a094.js" ></script><!--[if lt IE 9]>
<script src="<%=path%>/js/html5.min.js" ></script><![endif]-->

<style>
body{
font-family: 'Source Sans Pro', 'Oxygen', sans-serif !important;
}
</style>
</head>

<body>
<s:debug></s:debug>
<div class="layout">
                    
    <div class="header ">
    		<div class="left">
                <a href="<%=path%>/articleList.action" class="ico ico-back icon"></a>       
            </div>
        		<h2>文章详情</h2>
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

    <div class="details" style="padding-bottom: 88px;">
		<div class="head">
            <div class="img">
                <span><img src="http://image.xinli001.com/20150619/fbba49ed2a9158141db608dbbef76531.jpg!80"></span>
            </div>
            <div class="text">
                <div class="hd">
                    <h2 id='author'><a href="#"></a></h2>
                    <span class="tit">作者</span>
                </div>

                <p>something</p>
            </div>
        </div>
        
        <div class="article" id='article'>
            <div class="hd">
                <h2 id='title'></h2>
                    <span class="data" id='time'>
                     </span>

            </div>
            <div class="bd"><!--文章正文  -->
				<p  style="text-align: center;"><img src="http://ossimg.xinli001.com/20160525/dbd3914f7729d71b2ef55f2b2d77e9af.jpg"title="2117175167858568.jpg"alt="deklofenak151000178.jpg"/></p>
				<p >文：<span id='t_author'></span></p>
				<pre id='content'><s:property value="article.content " escape="false"></s:property></pre>           
			</div>
            <div class="ft">
                 <div class="tags">
                        <ul>
                            <li><a id='articleclass' data-category-id="" data-tag="亲子沟通" >亲子沟通</a></li>
                        </ul>
                 </div>
            </div>           
        </div>                  
    </div>


    <!-- 微信端分享提示层 -->
    <div class="mask" id="share-mask" style="display: none;">
        <img src="http://lapp.xinli001.com/images/website-mobile/share-2.png">
        <span class="mask-text">点击右上角按钮，推荐这篇文章</span>
    </div>

</div>
<script type="text/javascript">
	
			var author="${article.userName}";
 			var time="${article.dateTime}";
			//var content="";
			var title="${article.title}";
			var articleclass="${article.className}"; 
			//alert(time);
			if(articleclass=="class0"){
				articleclass="生活";
			}
			else if(articleclass=="class1"){
				articleclass="工作";
			}
			else if(articleclass=="class2"){
				articleclass="情感";
			}
 			else if(articleclass=="class3"){
 				articleclass="学习";
 			}
 			else if(articleclass=="class4"){
 				articleclass="其他";
 			}
 			else{
 				articleclass="生活";
 			}
 			
			$("#author").text(author);
			$("#title").text(title);
			$("#t_author").text(author);
			$("#time").text(time); 
			
	</script>   
</body>
</html>

