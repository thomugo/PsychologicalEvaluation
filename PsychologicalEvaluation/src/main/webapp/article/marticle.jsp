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
        var pageName = 'mobile/article/detail';
        var articleId = '100319150';
        var toggleZanUrl = 'http://m.xinli001.com/ajax/article-like-toggle.json';
        var toggleFavoriteUrl = 'http://m.xinli001.com/ajax/article-fav-toggle.json';
        var pageStatusUrl = 'http://m.xinli001.com/ajax/article-user-status.json';
        var articleSimilarListUrl = "http://m.xinli001.com/ajax/article-similar-list.json";
        var userId = '5393875';
        var categoryMainId = '2';
    </script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" >
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="">
<meta name="format-detection" content="telephone=no">
<title>孩子，我宁愿你不那么乖 </title>
<meta name="keywords" content="孩子，我宁愿你不那么乖">
<meta name="description" content="文：涵涵妈做一个人人夸奖的“乖小孩”，只是大人一厢情愿的满意，并非孩子最开心的抉择。昨晚去参加一个心理咨询师举办的沙龙会，其中一个妈妈很困惑，她家宝宝的问题是，都快三岁了，还是睡觉时爱吃手指，严重到把手指都吮吸烂了，还是接着吃，仿佛感受不到疼痛一般。然后，心理咨询师张彬老师就问那">
<link rel="stylesheet" href="http://lapp.xinli001.com/dist/mobile_421d115e12.css">

<script src="http://lapp.xinli001.com/dist/mobile_f4b5a0a094.js" ></script><!--[if lt IE 9]>
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
</script>    <style>
        body{
            font-family: 'Source Sans Pro', 'Oxygen', sans-serif !important;
        }
    </style>
</head>

<body>
<div class="layout">
                    
    <div class="header ">
    <div class="left">
                <a href="<%=path%>/article/marticleList.jsp" class="ico ico-back icon"></a>
        
            </div>
        <h2>文章详情</h2>
    <div class="right">
        
                    <a href="javascript:void(0);" class="fx icon"></a>
        
        
        
            </div>

</div>    <div class="grzy">
        <div class="card">
            <div class="share bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1" style="display: none;" id="nativeShare" data-bd-bind="1452760565577">
                <ul>
                    <li>
                        <a href="javascript:;" class="nativeShare WechatTimeline" data-app="weixinFriend" data-cmd="weixin"></a>
                        <h2>朋友圈</h2>
                    </li>
                    <li>
                        <a href="javascript:;" class="nativeShare WechatFriends" data-cmd="weixin" data-app="weixin"></a>
                        <h2>微信好友</h2>
                    </li>
                    <li>
                        <a href="javascript:;" class="nativeShare bds_sqq" data-cmd="sqq" data-app="QQ"></a>
                        <h2>QQ</h2>
                    </li>
                    <li>
                        <a href="javascript:;" class="nativeShare bds_qzone" data-cmd="qzone" data-app="QZone"></a>
                        <h2>QQ空间</h2>
                    </li>
                    <li>
                        <a href="javascript:;" class="nativeShare bds_tsina" data-cmd="tsina" data-app="sinaWeibo"></a>
                        <h2>微博</h2>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="details" style="padding-bottom: 88px;">
                <div class="head">
            <div class="img">
                <a href="http://m.xinli001.com/user/5393875"><img src="http://image.xinli001.com/20150619/fbba49ed2a9158141db608dbbef76531.jpg!80"></a>
            </div>
            <div class="text">
                <div class="hd">
                    <h2><a href="#">西格玛.心视界</a></h2>
                    <span class="tit">作者</span>
                                    </div>

                <p>家庭成长教育导师、高级教练 二级咨询师</p>
            </div>
        </div>
        
        <div class="article">
            <div class="hd">
                <h2>孩子，我宁愿你不那么乖</h2>
                    <span class="data">
                        发表于 2016-05-28                    </span>
                    <span class="view icon">
                        4086                    </span>
            </div>
            <div class="bd"><!--文章正文  -->
					<p style="text-align: center;"><img src="http://ossimg.xinli001.com/20160525/dbd3914f7729d71b2ef55f2b2d77e9af.jpg"title="2117175167858568.jpg"alt="deklofenak151000178.jpg"/></p><p>文：涵涵妈</p><p style="text-align: center;"><strong><span style="color: rgb(0, 112, 192);">做一个人人夸奖的“乖小孩”，</span></strong></p><p style="text-align: center;"><strong><span style="color: rgb(0, 112, 192);">只是大人一厢情愿的满意，并非孩子最开心的抉择。</span></strong></p><p>昨晚去参加一个心理咨询师举办的沙龙会，其中一个妈妈很困惑，她家宝宝的问题是，都快三岁了，还是睡觉时爱吃手指，严重到把手指都吮吸烂了，还是接着吃，仿佛感受不到疼痛一般。</p><p>然后，心理咨询师张彬老师就问那位妈妈一些问题。在那位妈妈回答的过程中，我们发现，她对自己的教育方式非常自信，甚至她为自己有那样一个人人都夸奖的“乖孩子”感到很自豪。</p><p>而我看到的却是，一个活得跟压抑，很令人心疼，很可怜的小宝宝。</p><p>那位妈妈说，她希望孩子独立，所以，从小一直让宝宝睡婴儿床，再后来孩子跟着爷爷睡。而且她家宝宝从小都是自己睡觉，根本不需要哄睡！</p><p>她还说，她非常讲道理，在描述的过程中，可以看出她很欣赏自己的教育方法，比如孩子在游乐场玩时，她觉着应该带孩子回家了，就会很民主地说：“豆豆你再跳五下蹦蹦床我们就回家吧！”，结果孩子跳完五下后，就面无表情地离开了，看到旁边那位因为不肯离开而打父母的宝宝，她感觉很自豪，为自己有个乖孩子，为自己的教育方法。</p><p>诸如此类的例子，<strong>她说了很多，但是我们却看到了一个情绪看似很平稳，其实却在压抑自己真实内心的孩子。</strong></p><p style="text-align: center;"><img src="http://ossimg.xinli001.com/20160525/184551464a3a3601331fea130552a3b3.jpg"title="5532613388604839.jpg"alt="1010 (1).jpg"/></p><p>1</p><p><strong>一个两岁多的小孩儿怎么可能这么听话呢？一个两岁多的小孩怎么能如爸爸妈妈所说，没有自己特别喜欢，特别感兴趣的东西呢？一个两岁多的小孩怎么可能每次都做到不用哭闹来发泄自己的情绪呢？</strong></p><p>那位妈妈还说，自从自己怀上二宝后，孩子睡觉吮吸手指和被角的问题越来越严重了。然后张彬老师问她，那你们有没有因为二宝而更忽略孩子呢？</p><p>她回答说：“没有啊，我反而会很爱他啊，比如我常把他叫到我跟前，跟我一起往肚子上抹橄榄油，还告诉他，这里面是你的弟弟，你来亲亲妈妈的肚子，跟弟弟亲亲，还说你要爱弟弟之类的啊！”</p><p>你看，这个互动中，她有表达过即使有了弟弟，妈妈也同样爱你吗？相反，看似跟孩子一起互动，看似陪着孩子，却一再教育他要跟弟弟亲。</p><p>那小孩才两岁啊！他也是个孩子！还是一个没有安全感，很没有安全感的孩子！</p><p>她还说到一个问题，说是他老公当着孩子的面开玩笑说：“看你还能张狂多久，弟弟出来后，我们就更爱他了！”</p><p>然后，老师说孩子是很直接的，这句看似玩笑的话，却能在他心底激起千层浪，结果还没说完就被那位妈妈打断，说是那是跟孩子的爷爷在开玩笑。</p><p>后来实在说不出结果，但那位妈妈却问，我的孩子这么乖是不是因为她心理成熟比较早，这种现象是好，还是不好？她说现在女儿身上很多性格跟她很像，<strong>老师问她，那你希望你的孩子将来成为另一个你吗？</strong></p><p style="text-align: center;"><strong><img src="http://ossimg.xinli001.com/20160525/82fca40d4e299a6b6dad2fe0af2b63f7.jpg"title="6934825525543663.jpg"alt="1010 (2).jpg"/></strong></p><p style="text-align: center;"><br/></p><p>2</p><p>那位妈妈说，我感觉我没有什么不好啊，我这样也很好啊！</p><p>所以，很多时候孩子身上所表现出的问题，根源都在家长身上，如果家长不愿意改变，并且没有那个需要改变的意识的话，那孩子的问题永远都得不到解决。</p><p>正如我昨晚遇到的那个家长一样，她带着孩子离不开手指的问题来，却不肯承认自己教育方法上的不足，她很固执地以为孩子只需要一个指套，保护手指不被吸破，长大后自然就不会再吃手指了。</p><p>可是她却没有想过，孩子不吃手指了，还会将其转化为其他更严重的问题。</p><p>很多心理咨询师都说：小时候表现越“乖”，越“懂事”的孩子，长大之后心理问题越多。小时候表现的越叛逆，越自由的孩子，长大之后往往心智越成熟。</p><p>因为<strong>小小年纪就乖的孩子，并不是他从心理上就已经达到了某个认知，而是压抑自己的内心和情绪，尽力的去讨好大人，让大人满意，大人开心。</strong></p><p><strong>那么，长大以后，他就会变成一个不懂拒绝别人、疲惫不堪的“烂好人”。</strong></p><p style="text-align: center;"><img src="http://ossimg.xinli001.com/20160525/2fc4761a7b8e1ac635474da6f00bab00.jpg"title="1794610215913660.jpg"alt="1010 (3).jpg"/></p><p>3</p><p>一个连在妈妈面前都不能随意哭闹，发泄自己情绪的孩子，内心该是多么的压抑啊？<strong>孩子能够在你面前哭，说明他对你有足够的安全感，知道你会对他的情绪照单全收，全盘接纳。这种无条件的爱和养育，才是孩子健康人格形成的基础。</strong></p><p>那么一个完全按照别人的意愿活着的孩子，表面看似很独立，内心真正独立了吗？他连自己想要什么，喜欢什么都不敢说，不敢去追求，何谈内心独立呢？</p><p>所以，这个案例给了我们以下启示：</p><p><strong>【1】0-3岁，孩子很需要安全感，特别是来自母亲的安全感。</strong>如果母亲不能给予，奶奶或者姥姥也可以替代，但绝不是没有母性特征的爷爷可以给予的。</p><p><strong>【2】不要总是给孩子讲道理，</strong>你们是亲人，需要感情表达与表露，不是上下级关系，也不是告知与被告知的关系。孩子需要的是同理心，而不是道理！</p><p><strong>【3】不要让孩子压抑自己真实的想法，</strong>来讨好大人，你开心了，他的心却在滴血！</p><p><strong>【4】孩子不粘着你不表示他很独立，</strong>真正的独立来自内心的强大，敢于直面自己！</p><p><strong>【5】爱和陪伴能让孩子变得更强大，</strong>但不是你自以为的那种“爱”和“陪着”！</p><p style="text-align: center;"><img src="http://ossimg.xinli001.com/20160525/288e7653e026fa407c6ece21755b8053.jpg"title="3462816193179337.jpg"alt="1010 (4).jpg"/></p><p>总之，我宁愿我的孩子不那么乖，不那么懂事，该哭哭，该闹闹，我也不愿他压抑自己，而讨好我。</p><p><strong>孩子的成长都需要一个过程的，我希望他有正常的叛逆期，有“可怕的两岁”，有童年的欢闹，有青春期的不羁，经历了该经历的一切，才能自然成熟，自然成长。</strong></p><p><strong>而不是靠压抑自己的内心，表面很乖，内里却永远没有成长！</strong></p><p>我们要允许孩子慢慢来，因为成长需要一个过程，所以，我宁愿他现在不那么乖！</p>           </div>

            <div class="ft">
                                                                        <div class="tags">
                        <ul>
                                                            <li><a data-category-id="" data-tag="亲子沟通" href="javascript:;">亲子沟通</a></li>
                                                            <li><a data-category-id="" data-tag="父母成长" href="javascript:;">父母成长</a></li>
                                                            <li><a data-category-id="" data-tag="家庭关系" href="javascript:;">家庭关系</a></li>
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
<script src="http://lapp.xinli001.com/jsmin/mobile-share.min.js" ></script><script>
    $('iframe').css('max-width', '100%');
    var shareInfo = "孩子，我宁愿你不那么乖";
    var shareDesc = "文：涵涵妈做一个人人夸奖的“乖小孩”，只是大人一厢情愿的满意，并非孩子最开心的抉择。昨晚去参加一个心理咨询师举办的沙龙会，其中一个妈妈很困惑，她家宝宝的问题是，都快三岁了，还是睡觉时爱吃手指，严重到把...";
    var share_config = {
        url : "http://m.xinli001.com/info/100319150",
        title : shareInfo,
        desc : shareDesc,
        from : '壹心理'
    }
    var share_obj = new nativeShare('nativeShare', share_config);
</script>
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
</script></body>

</html>

