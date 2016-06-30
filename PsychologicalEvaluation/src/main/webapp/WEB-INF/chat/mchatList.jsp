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
<title>心理学从这里开始</title>
<meta name="keywords" content="">
<meta name="description" content="">
<link rel="stylesheet" href="<%=path%>/style/mobile_421d115e12.css">


    <script src="<%=path%>/js/jquery.min.js" ></script></head>

<body>
<input type="hidden" id="basePath" value="<%=basePath%>">
	<div class="layout">
		<div class="header ">
    		<div class="left">
                <a href="<%=path%>/index.jsp" class="ico ico-back icon"></a>
            </div>
        	<h2>即时倾诉</h2>
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
            
            </div><!-- right -->        	
		</div>    <!-- 倾诉动态 -->
    <!-- 倾诉动态 -->

            <!-- 行业领先 -->
        <div class="qs-leadership">
            <div class="head">
             	   倾诉你的情绪
            </div>
            <div class="body">
                <div class="bg"></div>
                <ul>
                    <li class="one">吵架</li>
                    <li class="two">释放情绪</li>
                    <li class="three">发泄</li>
                    <li class="four">压力</li>
                    <li class="five">求安慰</li>
                    <li class="six">失恋</li>
                    <li class="seven">秘密</li>
    
                </ul>
            </div>
            <div class="foot">
<!--                <p>*即时倾诉无法替代心理咨询，如有必要请<a href="--><!--">预约咨询</a></p>-->
           </div>
       </div>
		    	<div class="qs-expert_on userVersion" style="padding-bottom: 153px;">
		        	<div class="body">
		           	 	<ul id="online-list">
							
						</ul>
    				</div>
				</div>
	</div>


    <!-- 在线倾听专家 -->
    <div class="hd-foot">
    	<p>
        	<a href="<%=path %>/feedback.action">反馈留言</a>
    	</p>
    	<p>
        	我们的小组<span>心理测评系统</span>
    	</p>
	</div>
<script type="text/javascript">
	var basePath = $("#basePath").val();
	<c:forEach var="user" items="${experts}"> 
		var name="${user.username}";
		var vocation="${user.vocation}";
		var id="${user.id}";
		var icon;
		$("#online-list").append("<li>"
								+"<div class='left'>"
								+"<div class='avatar'><img src='"+basePath+"assets/avatars/avatar.png'></div>"
							    +"</div><div class='right'>"
							    +"<div class='text'>"
							    +"<p><span class='name'>"+"<a href='"+basePath+"chat.action?id="+id+"'>"+name+"</a></span>"
							    +"<span class='title'>"+vocation+"</span></p>"
							    +"<p class='desc'>你来或者不来，我一直都会在这里！</p>"
							    +"<ul class='tags'>"
							    +"<li>婚恋</li>"
							    +"<li>情绪</li>"
							    +"<li>职场</li>"
							    +"<li>个人成长</li>"
							    +"</ul>"
							    +"</div>"
							    +"</div>"
								+"</li>");
		
	</c:forEach>
</script>
</body>

</html>



