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

<div data-role="page" id="one">
    <div class="header">
    	<div class="left">
        	<a href="<%=path%>/user/ceshi.jsp" class="ico ico-back icon"></a>
    	</div>
    	<h2>测试</h2>
    	<div class="right">
       		<div class="img">
              	<a class="avatar" href="http://m.xinli001.com/user">
              		<img src="http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80" width="60" height="60">
              	</a>
        	</div>
    	</div>
	</div>
    <div data-role="content" style="font-size: 120%">
        <h1 class="po_title">世界上另一个自己会对你说什么？</h1>
        <h2 style="font-size:16px;" >我的结果 : B.理想中的另一个自己</h2>
        <div>你对现在的自己不够满意。一方面，你只肯真正相信自己一个，另一方面，你有时又会很憎恶现在的这个自己。你希望可以彻底改变，去尝试一个不一样的人生。如果世界上真的还有另一个你的话，你希望是一个跟这个自己完全不同的存在。希望那个自己可以让自己看到一个与众不同的性格和生活方式，希望那个自己过得很自我、很独特。<br />
建议：试着更加自信，更加爱自己，当生活让你不开心的时候就试着去改变而不是等待。<br />
		</div>
        <br>

        <div class="kuang">
   		 	<span>综合心理健康评估</span>
    		<div class="jiao"></div>
		</div>
		<div class="btn">
        	<a href="http://cmcc.in/34Q" style="color: white;font-weight: normal;font-family: 微软雅黑;text-shadow: 0 0 0;background-image:none">对你的心理健康做一次系统的检查</a>
    	</div>
        <div class="test_expert_list">
            <div class="title_tip">
                	该测试相关专家：
            </div>
            <ul>
                <li>
                    <div class="bd">
                        <div class="img">
                            <a href="http://m.xinli001.com/user/271543690">
                            <img src="http://image.xinli001.com/20150625/153702c0829f120721ad8b.jpg!80"/></a>
                        </div>
                        <div class="text">
                            <p class="name">
                            <a href="http://m.xinli001.com/user/271543690">贾宏</a></p>
                        </div>
                        <a href="http://m.xinli001.com/user/271543690/yuyue" class="yy_btn" id="btn-yuyue">预约</a>
                    </div>
                    <div class="foot">
						<span>
							<em class="ico">
							<img src="http://lapp.xinli001.com/pysite/ceshi/mresult/img1.png"/></em>3人咨询过
						</span>
						<span>
							<em class="ico">
							<img src="http://lapp.xinli001.com/pysite/ceshi/mresult/img2.png"/></em>300元/次
						</span>
                    </div>
                </li>
           </ul>
       </div>

       <div class="qz_tuijian">
    		<p style="margin-left: 8px;margin-bottom: 0px;font-weight: bold;color:#f60">
       			 心理处方：
    		</p>
            <a href="/info/100320591" style="display:block;width:100%">   	 
        		<div class="qz_topic">
            		<img width="50" height="50" style="margin-left:7px;-webkit-box-flex:1" src="http://image.xinli001.com/20160528/13175820vbdofj0drl8yqb.jpg!50" alt="1">
            		<div class="qz_txt">
               			 狗狗心理学：主人生气时，它都在想些啥？                <p>主人生气的时候，狗狗内心都有哪些OS?</p>
            		</div>
       			</div>
			</a>
        	<a href="/info/100320587" style="display:block;width:100%">
        		<div class="qz_topic">
            		<img width="50" height="50" style="margin-left:7px;-webkit-box-flex:1" src="http://ossimg.xinli001.com/20160527/aa37db4a3393d6447d50849f9b9bbcc5.png!50" alt="1">
            		<div class="qz_txt">
                		单独和妈妈待一天 VS 单独和爸爸待一天，哪个更崩溃？                
                		<p>导读：单独和妈妈呆一天VS单独和爸爸呆一天，哪个让你更奔溃？视频中像是每个家庭都会遇到的情况。笑喷了，一起来看。</p>
            		</div>
        		</div>
    		</a>
        	<a href="/fm/99389175" style="display:block;width:100%">
        		<div class="qz_topic">
            		<img width="50" height="50" style="margin-left:7px;-webkit-box-flex:1" src="http://image.xinli001.com/20160525/153700ok5odiaeyxrgf6qw.jpg!50" alt="1">
            		<div class="qz_txt">
               			 杨绛先生：执子之手夫复何求                
               		 	<p>总有人在薄情的世界里深情的活着。海并不深，怀念一个人比海还深。他们仨，在天上相遇重逢，应该有很多话想说吧。</p>
            		</div>
        		</div>
    		</a>
        	<a href="/fm/99389165" style="display:block;width:100%">
        		<div class="qz_topic">
            		<img width="50" height="50" style="margin-left:7px;-webkit-box-flex:1" src="http://image.xinli001.com/20160524/052604v831h7v87c3xlt01.png!50" alt="1">
            		<div class="qz_txt">
               			 一切都是父母的错？                
               			 <p>现在，很多节目中亲子的冲突，都是把重心放在对父母的批判上，但一切真的都是父母的错吗？</p>
           			</div>
        		</div>
    		</a>
    </div>        <!-- Baidu Button BEGIN -->
	<div id="share_label" style="border-bottom: none">
    	<span>分享到 : </span>
	</div>
<div id="bdshare" class="bdshare_t bds_tools_32 get-codes-bdshare">
    <a class="bds_tsina"></a>
    <a class="bds_qzone"></a>
    <a class="bds_tqq"></a>
    <a class="bds_douban"></a>
    <a class="bds_renren"></a>
    <a class="shareCount"></a>
</div>
<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=603462" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
    document.getElementById("bdshell_js").src = "<%=path%>/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000)
</script>
<!-- Baidu Button END -->
<br style="clear: both">    </div>

    <div class="po_footer">
        <a title="测试列表" class="po_list" href="<%=path%>/user/ceshi.jsp">测试列表</a>
    </div></div><!-- /page -->
<div class="share_tip" id="share_tip"></div>
<script>
    $('#wxshare').click(function(){
        $('#share_tip').show();
        return false;
    });
    $('#share_tip').click(function(){
        $('#share_tip').hide();
        return false;
    });
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
</script>