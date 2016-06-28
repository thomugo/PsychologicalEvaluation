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

<script src="<%=path%>/js/mobile_f4b5a0a094.js" ></script>

</head>
<body>
<s:debug></s:debug>
	<input type="hidden" id="basePath" value="<%=basePath%>">

    <div class="layout">
        <div class="header ">
        	<h2>心理学，从这里开始</h2> 
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
        </div><!-- header -->
	
	
        <div class="sy">
        <div class="sy-banner">
                <ul class="slides">
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/11123128mksdho3v8bf4a1.jpg"/></a>
 
                            </li>                             
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/043034uj6pq30kpw15ddhs.jpg"/></a>

                            </li>
                            
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/031603fo3oqq4giwjkdrsw.jpg"/></a>
 
                            </li>
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/132258qo2ptcxq2nydc91x.jpg"/></a>
                            </li>
                             <li class="slide">
                                <a href="#"><img src="<%=path%>/image/100242giq2mxfwujjmedwm.jpg"/></a>

                            </li> 
                  </ul>
            </div>

		<div class="sy-new-nav">
	    			<ul>
	    				<li>
							<a href="<%=path%>/articleList.action" >
	            				<div class="img">
	                				<i class="icon icon-article"></i>
	            				</div>
	            			<h2>读文章</h2>
	       					 </a>
	    				</li>
	    				
	    				<li>
	        				<a href="<%=path%>/questionaireList.action" >
	            				<div class="img">
	                				<i class="icon icon-ceshi"></i>
	            				</div>
	            			<h2>做测试</h2>
	        				</a>
	    				</li>
    				
	    				<li>
	        				<a href="${ pageContext.request.contextPath }/detail.action?id=${loginUser.id }">
	            				<div class="img">
	                				<i class="icon icon-fm"></i>
	            				</div>
	            				<h2>我的数据</h2>
	        				<a>
	    				</li>
	    				    
						<li>
					        <a href="<%=path%>/expertUserList.action" >
					            <div class="img">
					                <i class="icon icon-fm"></i>
					            </div>
					            <h2>交流</h2>
					        </a>
					    </li>
	    			</ul>
			</div>

		<div class="sy-bigNav">
		    <div class="left actionArea">
		        <a href="#">
		            <h1>预约咨询</h1>
		            <p>5000位专业咨询师
		                <br/>等你来约</p>
		            <i class="icon icon-yuyue"></i>
		        </a>
		    </div>
		    <div class="right">
		        <div class="up actionArea">
		            <a href="<%=path%>/expertUserList.action">
		                <span>
		                    <h1>即时倾诉</h1>
		                    <p>心情不好马上倾诉</p>
		                </span>
		                <i class="icon icon-qs"></i>
		            </a>
		        </div>
		        <div class="down actionArea">
		            <a href="#">
		                <span>
		                    <h1>话题咨询</h1>
		                    <p>最热门的生活话题</p>
		                </span>
		                <i class="icon icon-wenda"></i>
		            </a>
		        </div>
		    </div>
		</div>
        <div class="wz-list">
                <div class="list-head">
                  	  看文章
                </div>
                <div class="list-body ">
                    <ul>
                        <li>
                            <div class="img">
                                <a href="<%=path %>/articleList.action"><img src="<%=path %>/image/0710264ee7ydh4165s37en.jpg"></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="<%=path %>/articleList.action">武志红：出轨家庭不愿离婚的真实原因到底是什么？</a>
                                </div>
                                <div class="info">
                                    <span>婚恋专栏·壹心理</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">607</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                   </ul>     
                </div>
                
                <div class="list-foot">
                    <a href="<%=path %>/articleList.action"> 更多文章</a>
                </div>
        </div>

		<div class="cs-list">
                <div class="list-head">
                    	做测试
                </div>
                <div class="list-body">
                    <ul>
                        <li>
                            <div class="img">
                                <a href="<%=path %>/questionaireList.action"><img src="<%=path %>/image/021356cvg7ha82skersh0f.jpg"/></a>
                            </div>
                            <div class="text">
                                <h2><a href="<%=path %>/questionaireList.action">世界上另一个自己会对你说什么？</a></h2>
                                <h4><i class="icon icon-user-small"></i>119325</h4>
                            </div>
                        </li>
                   </ul>
                </div>
                
                <div class="list-foot">
                    <a href="<%=path %>/questionaireList.action">更多测试</a>
                </div>
        </div>
		<div class="hd-foot">
	    			<p>
	        			<a href="<%=path %>/feedback.action">反馈留言</a>
	    			</p>
	    			
	    			<p>
	       				 我们的小组<span>_心理测评系统</span>
	    			</p>

			</div>
    </div>
    </div>
   
</body>
</html>

