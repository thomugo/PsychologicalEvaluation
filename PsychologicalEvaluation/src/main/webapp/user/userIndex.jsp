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
<link rel="stylesheet" href="<%=path%>/style/mobile.css">

<script src="http://lapp.xinli001.com/dist/mobile_0cca9dc8c8.js" ></script><!--[if lt IE 9]>
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
    <div class="layout">
                         <div class="header ">
    <div class="left">
        
            </div>
        <h2>壹心理</h2>
    <div class="right">
                    <div id="header_avatar_btn_div">
                <div class="img">
                    <a class="avatar" href="http://m.xinli001.com/account/login">
                        <img src="http://lapp.xinli001.com/images/website-mobile/img155.png" width="60" height="60">
                    </a>
                </div>
            </div>
        
        
        
        
            </div>

</div>
        <div class="sy">
            <div class="sy-banner">
                <ul class="slides">
                                                                        <li class="slide">
                                <a href="http://www.xinli001.com/user/1000130575"><img src="http://image.xinli001.com/20160525/11123128mksdho3v8bf4a1.jpg!600"/></a>
                                <a href="http://www.xinli001.com/user/1000130575">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                                                    <li class="slide">
                                <a href="http://xy.xinli001.com/course/89"><img src="http://image.xinli001.com/20160525/043034uj6pq30kpw15ddhs.jpg!600"/></a>
                                <a href="http://xy.xinli001.com/course/89">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                                                    <li class="slide">
                                <a href="http://m.xinli001.com/huodong/feature/seeFuture.html?from=mm"><img src="http://image.xinli001.com/20160523/031603fo3oqq4giwjkdrsw.jpg!600"/></a>
                                <a href="http://m.xinli001.com/huodong/feature/seeFuture.html?from=mm">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                                                    <li class="slide">
                                <a href="http://m.xinli001.com/subject/15"><img src="http://image.xinli001.com/20160520/132258qo2ptcxq2nydc91x.jpg!600"/></a>
                                <a href="http://m.xinli001.com/subject/15">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                                                    <li class="slide">
                                <a href="http://www.xinli001.com/info/100319446"><img src="http://image.xinli001.com/20160519/100242giq2mxfwujjmedwm.jpg!600"/></a>
                                <a href="http://www.xinli001.com/info/100319446">
<!--                                    <h2>--><!--</h2>-->
                                </a>
                            </li>
                                                            </ul>
            </div>

            <div class="sy-new-nav">
    <ul>
    <li>

        <a href="http://m.xinli001.com/info" >
            <div class="img">
                <i class="icon icon-article"></i>
            </div>
            <h2>读文章</h2>
        </a>
    </li>
    <li>

        <a href="http://m.xinli001.com/ceshi" >
            <div class="img">
                <i class="icon icon-ceshi"></i>
            </div>
            <h2>做测试</h2>
        </a>
    </li>
    <li>

        <a href="http://xy.xinli001.com/" >
            <div class="img">
                <i class="icon icon-classes"></i>
            </div>
            <h2>学课程</h2>
        </a>
    </li>
    <li>

        <a href="http://m.xinli001.com/fm" >
            <div class="img">
                <i class="icon icon-fm"></i>
            </div>
            <h2>听FM</h2>
        </a>
    </li>
    </ul>
</div>

<div class="sy-bigNav">
    <div class="left actionArea">
        <a href="http://m.xinli001.com/zx?tab=teacher">
            <h1>预约咨询</h1>
            <p>5000位专业咨询师
                <br/>等你来约</p>
            <i class="icon icon-yuyue"></i>
        </a>
    </div>
    <div class="right">
        <div class="up actionArea">
            <a href="http://m.xinli001.com/qingsu">
                <span>
                    <h1>即时倾诉</h1>
                    <p>心情不好马上倾诉</p>
                </span>
                <i class="icon icon-qs"></i>
            </a>
        </div>
        <div class="down actionArea">
            <a href="http://m.xinli001.com/zx">
                <span>
                    <h1>话题咨询</h1>
                    <p>最热门的生活话题</p>
                </span>
                <i class="icon icon-wenda"></i>
            </a>
        </div>
    </div>
    <div class="broadcast">
        <div class="head">
            <i class="icon icon-broadcast"></i>
        </div>
        <div class="body">
            <ul class="slides">
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">q**预约了黎燕 1次 ¥98 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">艾**预约了罗丽 1次 ¥300 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">小**预约了王国华 1次 ¥300 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">小**预约了龙慧兰 1次 ¥300 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">C**预约了孔凡琼 1次 ¥300 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">用**预约了殷国 1次 ¥120 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">咨询师罗丽收到用**的好评</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">用**预约了卜芸 1次 ¥120 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">小**预约了赵婕 1次 ¥150 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">w**预约了王方国 1次 ¥1 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">计**预约了珊妮 1次 ¥120 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">用**预约了殷国 1次 ¥120 语音咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">1**预约了刘月 1次 ¥400 面对面咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">咨询师高恒收到用**的好评</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">咨询师李乾收到叶**的好评</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">用**预约了刘文静 1次 ¥400 面对面咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">用**预约了刘文静 2次 ¥800 面对面咨询</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">咨询师刘大熊发布话题 如何做个优秀的自己</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">咨询师朱晓宁发布话题 亲密关系</div></p>
                </li>
                                <li class="slide">
                    <p><div style="width: 200px; color: #999;">咨询师宋毅发布话题 职场中的情绪压力应对</div></p>
                </li>
                            </ul>
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
                                <a href="http://m.xinli001.com/info/100320064"><img src="http://image.xinli001.com/20160526/070843oqkr3tuh7qhqv2c5.jpg!180x120""></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="http://m.xinli001.com/info/100320064">深度分析：谈话中的男女差异</a>
                                </div>
                                <div class="info">
                                    <span>罗贤</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">4</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com/info/100320349"><img src="http://image.xinli001.com/20160526/0654465bkf6ilqk5synob2.jpg!180x120""></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="http://m.xinli001.com/info/100320349">“别睡了，起来嗨！”是种什么心理？</a>
                                </div>
                                <div class="info">
                                    <span>健康专栏·壹心理</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">6</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com/info/100320345"><img src="http://image.xinli001.com/20160526/064150a43c4wb7k4clidwx.png!180x120""></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="http://m.xinli001.com/info/100320345">你控制欲那么强，源于未化解早年对父母的恨与不满</a>
                                </div>
                                <div class="info">
                                    <span>丛非从</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">18</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com/info/100320344"><img src="http://image.xinli001.com/20160526/063604bafk2kdp8s4oxe0i.jpg!180x120""></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="http://m.xinli001.com/info/100320344">高情商孩子是怎么养成的？</a>
                                </div>
                                <div class="info">
                                    <span>亲子专栏</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">45</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com/info/100320327"><img src="http://image.xinli001.com/20160526/043222s48xpyryywi8keoq.jpg!180x120""></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="http://m.xinli001.com/info/100320327">懂得放手的父母，才对孩子爱得更深</a>
                                </div>
                                <div class="info">
                                    <span>亲子专栏</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">74</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com/info/100319464"><img src="http://image.xinli001.com/20160526/035549a3tns7994nhhnut5.jpg!180x120""></a>
                            </div>
                            <div class="text">
                                <div class="desc">
                                    <a href="http://m.xinli001.com/info/100319464">什么也没错，就是你犯的最大错误</a>
                                </div>
                                <div class="info">
                                    <span>壹心理jhb</span>
                                    <dl>
                                        <dd><a href="javascript:void(0);"><i class="ico2">244</i></a></dd>
                                    </dl>
                                </div>
                            </div>
                        </li>
                        
                    </ul>

                 </div>
                <div class="list-foot">
                    <a href="http://m.xinli001.com/info"> 更多文章</a>
                </div>
                            </div>

            <div class="zj-list" style="display: none;">
                <div class="list-head">
                    约专家
                </div>
                                <div class="list-body">
                    <ul>
                                                <li>
                            <a href="http://m.xinli001.com/user/1000056093">
                                <div class="img">
                                    <img src="http://image.xinli001.com/20150702/160448/339108.JPG!80"/>
                                </div>
                                <h2>蒋琪</h2>
<!--                                <h4>--><!--</h4>-->
                            </a>
                        </li>
                                                <li>
                            <a href="http://m.xinli001.com/user/70242723">
                                <div class="img">
                                    <img src="http://ossimg.xinli001.com/20160413/7efd92aabd91d204abfb134a2bba0e74.png!80"/>
                                </div>
                                <h2>彭君</h2>
<!--                                <h4>--><!--</h4>-->
                            </a>
                        </li>
                                                <li>
                            <a href="http://m.xinli001.com/user/3510061">
                                <div class="img">
                                    <img src="http://image.xinli001.com/20150115/121240/934382.JPG!80"/>
                                </div>
                                <h2>杨浩波</h2>
<!--                                <h4>--><!--</h4>-->
                            </a>
                        </li>
                                            </ul>
                </div>
                <div class="list-foot">
                     <a href="http://m.xinli001.com/zx?tab=teacher">更多专家</a>
                </div>
                            </div>
            <div class="fm-list">
                <div class="list-head">
                    听心理FM
                </div>
                                <div class="list-body">
                    <ul>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//fm/99389176"><img src="http://image.xinli001.com/20160525/1547165ufedj25kqol9853.jpg!200x200"/></a>
                                <em></em>
                            </div>
                            <h2><a href="http://m.xinli001.com//fm/99389176">杨绛：我与钟书</a></h2>
<!--                            <h4>-->
<!--                                <a href="--><!--">-->
<!--                                    <img src="--><!--"/>-->
<!--                                    --><!--                                </a>-->
<!--                            </h4>-->
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//fm/99389175"><img src="http://image.xinli001.com/20160525/153700ok5odiaeyxrgf6qw.jpg!200x200"/></a>
                                <em></em>
                            </div>
                            <h2><a href="http://m.xinli001.com//fm/99389175">杨绛先生：执子之手夫复何求</a></h2>
<!--                            <h4>-->
<!--                                <a href="--><!--">-->
<!--                                    <img src="--><!--"/>-->
<!--                                    --><!--                                </a>-->
<!--                            </h4>-->
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//fm/99389172"><img src="http://image.xinli001.com/20160525/121057bjtxxd40ndzcnzhq.png!200x200"/></a>
                                <em></em>
                            </div>
                            <h2><a href="http://m.xinli001.com//fm/99389172">杨绛：人生边上的智慧</a></h2>
<!--                            <h4>-->
<!--                                <a href="--><!--">-->
<!--                                    <img src="--><!--"/>-->
<!--                                    --><!--                                </a>-->
<!--                            </h4>-->
                        </li>
                                            </ul>
                </div>
                <div class="list-foot">
                    <a href="http://m.xinli001.com//fm">更多FM</a>
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
                                <a href="http://m.xinli001.com//ceshi/2501"><img src="http://image.xinli001.com/20160526/020544ljhlpm0cprai39q6.jpg!200x134"/></a>
                            </div>
                            <div class="text">
                                <h2><a href="http://m.xinli001.com//ceshi/2501">娱乐测试：你的灵魂会去往何处？</a></h2>
                                <h4><i class="icon icon-user-small"></i>173593</h4>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//ceshi/99897574"><img src="http://image.xinli001.com/20160524/101429te35em19j4e5eq5o.jpg!200x134"/></a>
                            </div>
                            <div class="text">
                                <h2><a href="http://m.xinli001.com//ceshi/99897574">测测你在他心中的分量有多少？（限女生）</a></h2>
                                <h4><i class="icon icon-user-small"></i>17050</h4>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//ceshi/99897573"><img src="http://image.xinli001.com/20160524/08570762ljeetn787bkc9y.jpg!200x134"/></a>
                            </div>
                            <div class="text">
                                <h2><a href="http://m.xinli001.com//ceshi/99897573">友谊心理模式测评</a></h2>
                                <h4><i class="icon icon-user-small"></i>11</h4>
                            </div>
                        </li>
                                            </ul>
                </div>
                <div class="list-foot">
                    <a href="http://m.xinli001.com/ceshi">更多测试</a>
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
                                <a href="http://m.xinli001.com//site/event/99911396"><img src="http://image.xinli001.com//20160525/170535/869253.jpg!huodong"></a>
                            </div>
                            <h2><a href="http://m.xinli001.com//site/event/99911396">身体治疗课程</a></h2>
                            <div class="attr">
                                <i>时间</i><span class="time">2016年06月08日</span>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//site/event/99911395"><img src="http://image.xinli001.com//20160525/160437/968813.jpg!huodong"></a>
                            </div>
                            <h2><a href="http://m.xinli001.com//site/event/99911395">第四期冉江峰长程动力性缓慢开放动力性团体</a></h2>
                            <div class="attr">
                                <i>时间</i><span class="time">2016年10月13日</span>
                            </div>
                        </li>
                                                <li>
                            <div class="img">
                                <a href="http://m.xinli001.com//site/event/99911394"><img src="http://image.xinli001.com//20160525/140232/506205.jpg!huodong"></a>
                            </div>
                            <h2><a href="http://m.xinli001.com//site/event/99911394">【微光心理】公益心理咨询项目申请介绍</a></h2>
                            <div class="attr">
                                <i>时间</i><span class="time">2016年05月25日</span>
                            </div>
                        </li>
                                            </ul>
                </div>
                <div class="list-foot list-foot1">
                    <a href="http://m.xinli001.com//site/event">更多活动</a>
                </div>
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
<!--    <script type="text/javascript" src="http://js.tongji.linezing.com/2646296/tongji.js"></script>-->
<!--    <noscript><a href="http://www.linezing.com"><img src="http://img.tongji.linezing.com/2646296/tongji.gif"/></a></noscript>-->
</span>
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
    <div class="dialog" style="display: none;">
        <div class="head">
            <h2>频道</h2>
            <em class="close"></em>
        </div>
        <div class="body">
                        <div class="list">
                <dl>

                                                                        <dd><a href="http://m.xinli001.com/info">读文章</a></dd>
                                                                                                <dd><a href="http://m.xinli001.com/ceshi">做测试</a></dd>
                                                                                                <dd><a href="http://xy.xinli001.com/">学课程</a></dd>
                                                                                                <dd><a href="http://m.xinli001.com/fm">听FM</a></dd>
                                                            </dl>
            </div>
            <div class="list1">
                <div class="hd">更多频道</div>
                <div class="bd">
                    <span><a href="http://m.xinli001.com/site/">心理圈</a></span>
                    <span><a href="http://m.xinli001.com/cureimg/">治愈图片</a></span>
                    <span><a href="http://m.xinli001.com/movie/">微电影</a></span>
                    <span class="last"><a href="http://m.xinli001.com/hole/">树洞</a></span>
                </div>
            </div>
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

