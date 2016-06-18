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
    <!-- 1464246831 -->
    <script>
        var pageName = 'mobile/index';
        var indexAuthUserUrl = "";
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
<script src="http://lapp.xinli001.com/jsmin/html5.min.js" ></script><!--[endif]-->
<script>
    var postUserMessageUrl = 'http://m.xinli001.com/ajax/post-user-message.json';
    $(function() {
        if($('script[src$="app.ad.js"]').length<1){
            $("<script>").attr({"src":"<%=path%>/js/app.ad.min.js"}).appendTo($("body"));
        }else{
            console.log("Already loaded app.ad.js.");
        }
    });
</script></head>
<body>
    <div class="layout">
                         <div class="header ">
    <div class="left">
        
            </div>
        <h2>心理学，从这里开始</h2>
    <div class="right">
                    <div id="header_avatar_btn_div">
                <div class="img">
               		 <s:if test="loginUser==null">
               		 	<a href="${ pageContext.request.contextPath }/login.jsp">login</a>
               		 </s:if>
  					<s:else>
  						<a class="avatar" href="<%=path%>/user/login.jsp">
                        <img src="<%=path%>/assets/avatars/${loginUser.icon}" width="60" height="60">
                  	  	</a>
                  	  	<a href="${ pageContext.request.contextPath }/logout.action">logout</a>
       				 </s:else>
                   	 	
                </div>
            </div>
        
        
        
        
            </div>

</div>
        <div class="sy">
            <div class="sy-banner">
                <ul class="slides">
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/11123128mksdho3v8bf4a1.jpg"/></a>
                                <a href="#">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                            
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/043034uj6pq30kpw15ddhs.jpg"/></a>
                                <a href="#">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                            
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/031603fo3oqq4giwjkdrsw.jpg"/></a>
                                <a href="#">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                            <li class="slide">
                                <a href="#"><img src="<%=path%>/image/132258qo2ptcxq2nydc91x.jpg"/></a>
                                <a href="#">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                             <li class="slide">
                                <a href="#"><img src="<%=path%>/image/100242giq2mxfwujjmedwm.jpg"/></a>
                                <a href="#">
<!--                                    <h2>--><!--</h2>-->
                                </a>
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

        <a href="#" >
            <div class="img">
                <i class="icon icon-fm"></i>
            </div>
            <h2>听FM</h2>
        </a>
    </li>    
	<li>
        <a href="#" >
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
            <a href="<%=path%>/user/chat.jsp">
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
                                <a href="#"><img src="<%=path %>/image/0710264ee7ydh4165s37en.jpg"></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="#">武志红：出轨家庭不愿离婚的真实原因到底是什么？</a>
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

            <div class="zj-list" style="display: none;">
                <div class="list-head">
                    	约专家
                </div>
                                <div class="list-body">
                    <ul>
                                                <li>
                            <a href="#">
                                <div class="img">
                                    <img src="<%=path %>/image/339108.JPG"/>
                                </div>
                                <h2>蒋琪</h2>
<!--                                <h4>--><!--</h4>-->
                            </a>
                        </li>
                                                <li>
                            <a href="#">
                                <div class="img">
                                    <img src="<%=path %>/image/7efd92aabd91d204abfb134a2bba0e74.png"/>
                                </div>
                                <h2>彭君</h2>
<!--                                <h4>--><!--</h4>-->
                            </a>
                        </li>
                                                <li>
                            <a href="#">
                                <div class="img">
                                    <img src="<%=path %>/image/934382.JPG"/>
                                </div>
                                <h2>杨浩波</h2>
<!--                                <h4>--><!--</h4>-->
                            </a>
                        </li>
                                            </ul>
                </div>
                <div class="list-foot">
                     <a href="#">更多专家</a>
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
                                <a href="<%=path %>/test/mtest.jsp"><img src="<%=path %>/image/021356cvg7ha82skersh0f.jpg"/></a>
                            </div>
                            <div class="text">
                                <h2><a href="<%=path %>/test/mtest.jsp">世界上另一个自己会对你说什么？</a></h2>
                                <h4><i class="icon icon-user-small"></i>119325</h4>
                            </div>
                        </li>
                   </ul>
                </div>
                <div class="list-foot">
                    <a href="<%=path %>/questionaireList.action">更多测试</a>
                </div>
                            </div>
            <div class="hd-list" style="display: none;">
                <div class="list-head">
                    参加活动<small> · 广州</small>
                </div>
                                <div class="list-body">
                    <ul>
                                                <li>
                            <div class="img">
                                <a href="#"><img src="<%=path %>/image/870071.jpg"></a>
                            </div>
                            <h2><a href="#">行为治疗的个案概念化</a></h2>
                            <div class="attr">
                                <i>时间</i><span class="time">2016年05月28日</span>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="#"><img src="<%=path %>/image/118311.jpg"></a>
                            </div>
                            <h2><a href="#">自杀的心理动力学意义及应对</a></h2>
                            <div class="attr">
                                <i>时间</i><span class="time">2016年06月11日</span>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="#"><img src="<%=path %>/image/160458/453277.jpg"></a>
                            </div>
                            <h2><a href="#">（网络版）NLP销售冠军训练营</a></h2>
                            <div class="attr">
                                <i>时间</i><span class="time">2016年05月01日</span>
                            </div>
                        </li>
                                            </ul>
                </div>
                <div class="list-foot list-foot1">
                    <a href="#">更多活动</a>
                </div>
                            </div>

            <div class="hd-foot">
    <p>
        <a href="<%=path %>/user/feedback.jsp">反馈留言</a>
    </p>
    <p>
        我们的小组<span>心理测评系统</span>
    </p>

</div>

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
    
    <script type="text/javascript">
        // 导航下面的滚动信息
        $(".sy-bigNav .broadcast .body").glide({
            mode: 'vertical',
            animationTime: 500,
            arrows: !1,
            nav: 0
        });
        //首页倾诉遮罩
     /*   function indexMask() {
            var $mask = $('<div></div>').addClass('mask').show().appendTo($('body'));
            var $qs = $('.sy-bigNav .up').addClass('maskHighLight');
            var $qsMask = $('<div class="qs-mask"></div>').html('<h1>电话倾诉、实时低价</h1>' +
            '<p>向咨询师说出你的烦恼</p>').appendTo($('body'));
            var qsPos = $qs.offset();

            $qsMask.css({
                'top': qsPos.top - $('.qs-mask').height(),
                'left': qsPos.left + $qs.width() / 2 - 175
            });
            $mask.on('click', function() {
                $qsMask.fadeOut(500);
                $mask.fadeOut(500);
                $qs.removeClass('maskHighLight');
                setCookie('indexMask', 'true', 'd7');
            })
            $qsMask.on('click', function() {
                $qsMask.fadeOut(500);
                $mask.fadeOut(500);
                $qs.removeClass('maskHighLight');
                setCookie('indexMask', 'true', 'd7');
            })
        }*/

        $(function(){
            var  indexMaskCookie = getCookie('indexMask')=="true"?true:false;
            if(!indexMaskCookie){
                indexMask();
            }
        })

    </script>
</body>

</html>

