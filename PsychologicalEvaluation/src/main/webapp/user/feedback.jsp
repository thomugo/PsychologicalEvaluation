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
<title>留言</title>
<meta name="baidu-tc-cerfication" content="e37b9fc48676fae6577f9e35f95fdb3e" />

<meta name="keywords" content="心理杂志,心理杂志频道" />
<meta name="description" content="本网心理杂志频道是一个集两性心理、职场发展、情绪管理、心灵探索、心理百科、社会热点的实用心理杂志频道，我们拒绝枯燥、拒绝陈腐，将心理杂志通过通过有趣的、多媒体等方式帮助大家改变、成长……"/>


<!--<meta name="apple-itunes-app" content="app-id=591341152">-->
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> 
<meta content="yes" name="apple-mobile-web-app-capable" /> 
<meta content="black" name="apple-mobile-web-app-status-bar-style" /> 
<meta content="telephone=no" name="format-detection" /> 


<link rel="stylesheet" href="<%=path%>/style/qz_home.css" />

<link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
</head>
<body>
<div id="main_body">
    <div class="header">
        <div class="left">
            <a href="<%=path%>/user/userIndex.jsp" class="ico ico-back icon"></a>
        </div>
        <h2>留言</h2>
        <div class="right">
            <div class="img">
                
                    <a class="avatar" href="<%=path%>/user/user.jsp">
                        <img src="<%=path%>/image/avatar.jpg" width="60" height="60">
                    </a>
                
            </div>
        </div>
    </div>

	 <header class="s_header" style="display: none;">
		<nav>
			
			
			<a href="<%=path%>/user/userIndex.jsp" class="bg">
				<span>首页</span>
			</a>
			
			
			
			
			
			<span id="more">心理导航</span>
			
			
			<span style="font-size: 1.4rem">留言</span>
		</nav>
	</header>
	
	<div class="s_toplist" id="toplist" style="display:none">
	<div>
		<a href="#">心理杂志</a>
		<a href="/fm/">心理FM</a>
		<a href="#">树洞</a>
		<a href="#">微电影</a>
		<a href="#">设置</a>
	</div>
	<div>
		<a href="<%=path%>/user/ceshi.jsp">心理测试</a>
		<a href="#">治愈系图片</a>
		<a href="#">心理圈</a>
		<a href="#">打卡学习</a>
	</div>
	<span></span>
</div>
	
	
	

<section class="s_reg">
    <div>
        <b>留言|合作：</b>
    </div>
    <form action="<%=path%>?" id="form1" onsubmit="return false">
        <textarea name="content" id="content" placeholder="如果你对我们的心理测评系统有好的建议，或合作想法，请留言给我们。谢谢！"></textarea>
        <input type="text" id="contact" name="contact" placeholder="联系方式">
        <input type="submit" id="submit" value="提  交">
    </form>
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
<script>
var USERINFO_URL = "/userinfo/";
$.get(USERINFO_URL, {t:$.now()}, function(resp) {
	$('#userspan2').html(resp.data2);
});
var avatarUrl = "http://m.xinli001.com/ajax/user-auth.json";
$.get(avatarUrl, {t:$.now()}, function(resp) {
    if(resp.data && parseInt(resp.data.id) > 0){
        $('.header .avatar img').prop('src',resp.data.avatar);
    }
});
</script>

<script>
    $(function() {
        if($('script[src$="app.ad.js"]').length<1){
            $("<script>").attr({"src":"<%=path%>/js/app.ad.min.js"}).appendTo($("body"));
        }else{
            console.log("Already loaded app.ad.js.");
        }
    });
    $('.s_header nav').css('position', 'initial');
</script>


<script>
$('#more').click(function(){  
	if($('#toplist').css('display')!='none')
	{
		$('#toplist').hide();
	}
	else
	{
		$('#toplist').show();
	}
});
$('#form1').submit(function(){
	var content = $.trim($('#content').val());
	if(content == '') {
		alert('请输入留言内容');
		return false;
	}
	var contact = $.trim($('#contact').val());
	if(contact == '') {
		alert('请输入联系方式');
		return false;
	}
	var url = $(this).attr('action');
	var data = {content:content, contact:contact};
	$.post(url, data, function(resp) {
		alert('留言成功');
		$('#content').val('');
		$('#contact').val('');
	});
	return false;
});
</script>


<span style="display: none">
	<script type="text/javascript" src="<%=path%>/js/tongji.js"></script>
	<noscript>
		<a href="http://www.linezing.com">
			<img src="http://img.tongji.linezing.com/2646296/tongji.gif"/>
		</a>
	</noscript>
</span>
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd64469e9d7bdbf03af6f074dffe7f9b5' type='text/javascript'%3E%3C/script%3E"));
</script>
</span>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','<%=path%>/js/analytics.js','ga');

  ga('create', 'UA-74218902-7', 'auto');
  ga('send', 'pageview');

</script>
<script type="text/javascript" src="<%=path%>/js/tongji.js"></script>
<noscript>
	<a href="http://www.linezing.com"><img src="http://img.tongji.linezing.com/3475061/tongji.gif"/></a>
</noscript>
<script src="<%=path%>/js/api.js"></script>
</body>
</html>