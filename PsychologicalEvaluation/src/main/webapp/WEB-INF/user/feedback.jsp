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

<meta name="keywords" content="" />
<meta name="description" content=""/>


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
            <a href="<%=path%>/index.jsp" class="ico ico-back icon"></a>
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
			
			
			<a href="<%=path%>/index.jsp" class="bg">
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

<script src="<%=path%>/js/api.js"></script>
</body>
</html>