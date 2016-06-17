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
    <script>
        var pageName = 'mobile/article/list';
        var articleListUrl = "http://m.xinli001.com/ajax/article-list.json";
        var slug = "";
        var tag = "";
    </script>
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

<script src="<%=path%>/js/mobile_f4b5a0a094.js" ></script><!--[if lt IE 9]>
<script src="http://lapp.xinli001.com/jsmin/html5.min.js" ></script><![endif]-->
<script>
    var postUserMessageUrl = 'http://m.xinli001.com/ajax/post-user-message.json';
    $(function() {
        if($('script[src$="app.ad.js"]').length<1){
            $("<script>").attr({"src":"http://lapp.xinli001.com/jsmin/app.ad.min.js"}).appendTo($("body"));
        }else{
            console.log("Already loaded app.ad.js.");
        }
    });
</script></head>

<body>
<s:debug></s:debug>
<div class="layout">
  	<div class="header ">
    	<div class="left">
                <a href="<%=path%>/user/userIndex.jsp" class="ico ico-back icon"></a>       
    	</div>
        <h2>文章</h2>
    	<div class="right">
           <div id="header_avatar_btn_div">
                <div class="img">
                    <a class="avatar" href="<%=path%>/user/login.jsp">
                        <img src="<%=path%>/image/img155.png" width="60" height="60">
                    </a>
                </div>
            </div>
		</div>
	</div>
	
    <div class="article-new">
        <div class="head">
            <div class="sy-nav">
                <ul>
                    <li class="on">
                        <a href="<%=path%>/articleList.action">全部</a>
                    </li>
                    
                    <li>
                        <a href="#">婚恋</a>
                    </li>
                    
                    <li>
                        <a href="#">亲子</a>
                    </li>
                    
                    <li>
                        <a href="#">职场</a>
                    </li>
                                            
                    <li>
                        <a href="#">健康</a>
                    </li>
                    
                    <li>
                        <a href="#">科普</a>
                    </li>
                </ul>
            </div>
            
            <div class="wz-banner">
                <ul class="slides">
                        <li class="slide">
                            <a href="http://www.xinli001.com/info/100320543"><img src="http://ossimg.xinli001.com/20160527/dd5c0b984d85a0373a9ce687e911d87a.png"/></a>
                            <a href="http://www.xinli001.com/info/100320543"><h2>中国学生第一次哈佛毕业演讲：哈佛教会我们敢于改变世界</h2></a>
                        </li>
                        <li class="slide">
                            <a href="http://www.xinli001.com/info/100320345"><img src="http://ossimg.xinli001.com/20160526/a22fea65786bf0a85fcfb21ed2256f50.png"/></a>
                            <a href="http://www.xinli001.com/info/100320345"><h2>你控制欲那么强，源于未化解早年对父母的恨与不满</h2></a>
                        </li>
                        <li class="slide">
                            <a href="http://www.xinli001.com/info/100320337"><img src="http://ossimg.xinli001.com/20160526/1da7bf899eb6f9f541eff53dd4e06550.jpg"/></a>
                            <a href="http://www.xinli001.com/info/100320337"><h2>对抗孤独，哪个社交网络更有效？</h2></a>
                        </li>
                        <li class="slide">
                            <a href="http://xy.xinli001.com/course/89"><img src="http://image.xinli001.com/20160518/03352265fwgegvlhty2uyh.jpg"/></a>
                            <a href="http://xy.xinli001.com/course/89"><h2>如何用最短的时间和同辈拉开距离？</h2></a>
                        </li>
                        <li class="slide">
                            <a href="http://www.xinli001.com/info/100320366"><img src="http://image.xinli001.com/20160526/054635n1lec1puj5124aet.jpg"/></a>
                            <a href="http://www.xinli001.com/info/100320366"><h2>美队成最大反派？！其实他早就黑化了</h2></a>
                        </li>
                </ul>
            </div>
            
        </div>
        
        <div class="body" id="article-list">
            <ul>
                <li>
    				<div class="img">
        				<a href="http://m.xinli001.com/info/100319150"><img src="http://image.xinli001.com/20160525/084105vdf8dm4p7e6fvycf.jpg!180x120"/></a>
    				</div>
    				<div class="text">
        				<div class="desc">
            				<a href="<%=path%>/article/marticle.jsp">孩子，我宁愿你不那么乖</a>
        				</div>
        				<div class="info">
                        	<span>西格玛.心视界</span>
                        <dl>
                			<dd><a href="javascript:void(0);"><i class="ico1">11</i></a></dd>
                			<dd><a href="javascript:void(0);"><i class="ico2">747</i></a></dd>
            			</dl>
            	</li> 
            </ul>
    	</div>                                   
</div>

        <div class="foot" id="article-more" data-page="1">
  
                <span class="load-more-icon" style="display: none;">
                    <i class="load-ico"></i>正在加载中…
                </span>
<!--                <a href="javascript:void(0);" data-page="1">更多文章</a>-->
        </div>
        
        <div class="hd-foot">
    		<p>
        		<a href="http://m.xinli001.com/feedback/">反馈留言</a>
    		</p>
    		<p>
        		我们的小组<span>心理测评</span>
    		</p>
		</div>

<span style="display: none">

</span>
		<script type="text/javascript">
				var i=0;
			<c:forEach var="article" items="${articles}">
				
				
				var title="${article.title}";
				//alert(title);
				var userName = "${article.userName}";
				var className = "${article.className}";
				var dateTime ="${article.dateTime}";
				var id=${article.id};
 				 $('#article-list').append("<ul>"+" "+"<li>"+" "
 				 					+"<div class='img'>"
									+"<a href='http://m.xinli001.com/info/100319150'><img src='http://image.xinli001.com/20160525/084105vdf8dm4p7e6fvycf.jpg!180x120'/></a>"
									+"</div>"
									+" "
									+"<div class='text'>"
									+" "
									+"<div class='desc'>"
									+" "
									+"<a href='/PsychologicalEvaluation/articleDetail.action?id=" + id + "'>"+title+"</a>"
									+"</div>"	
									+"<div class='info'>"
									+" <span>"+userName+"</span>"
									+"</li>"
									+"</ul>");  			
				
			</c:forEach>
<%-- 	    
        				<div class="desc">
            				<a href="<%=path%>/article/marticle.jsp">孩子，我宁愿你不那么乖</a>
        				</div>
        				<div class="info">
                        	<span>西格玛.心视界</span>
                        <dl>
                			<dd><a href="javascript:void(0);"><i class="ico1">11</i></a></dd>
                			<dd><a href="javascript:void(0);"><i class="ico2">747</i></a></dd>
            			</dl>
            	</li> 
            </ul> --%>								
		</script>
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd64469e9d7bdbf03af6f074dffe7f9b5' type='text/javascript'%3E%3C/script%3E"));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74218902-7', 'auto');
ga('send', 'pageview');
</script>  
  
</div>
</div>

</body>
</html>

