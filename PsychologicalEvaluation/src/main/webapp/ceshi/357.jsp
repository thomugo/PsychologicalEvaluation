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
    <title>世界上另一个自己会对你说什么？ </title>
    <meta name="keywords" content="世界上另一个自己会对你说什么？">
    <meta name="description" content="你相信世界上还有一个你吗？或许我们可以认为在世界的某个角落里还存在着另一个自己。它也许和我们相似，又或者相反。又或许在你的思想里，心里还有另一个自己，它潜伏在你的心中，等待你发现它。我们来听听它说什么。">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
	<meta content="yes" name="apple-mobile-web-app-capable" />
	<meta content="black" name="apple-mobile-web-app-status-bar-style" />
	<meta content="telephone=no" name="format-detection" />    
	<link rel="stylesheet" href="<%=path%>/style/jquery.mobile.min.css">
    <link rel="stylesheet" href="<%=path%>/style/mobile1.css">    
    <link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
    <link rel="stylesheet" href="<%=path%>/style/csshare.min.css">    
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

<div data-role="page" id="id_ceshi_page" data-url="<%=path%>/ceshi/357.jsp" data-dom-cache="false">

    <div class="header">
    <div class="left">
        <a href="<%=path%>/user/ceshi.jsp" class="ico ico-back icon"></a>
    </div>
    <h2>测试</h2>
    <div class="right">
        <div class="img">
                 <a class="avatar" href="http://m.xinli001.com/user">
                	<img src="<%=path%>/image/9fe4842afb2c58c2200a1b9ae7a68ca9.png" width="60" height="60">
            	 </a>
        </div>
    </div>
</div>
    <div data-role="content" >
        <h1 class="po_title">世界上另一个自己会对你说什么？</h1>
        <br>
        <div id="id_ceshi_show">
            <div><img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg" alt="世界上另一个自己会对你说什么？"></div>
            <div class="tdesc">你相信世界上还有一个你吗？或许我们可以认为在世界的某个角落里还存在着另一个自己。它也许和我们相似，又或者相反。又或许在你的思想里，心里还有另一个自己，它潜伏在你的心中，等待你发现它。我们来听听它说什么。</div>
            
                        <a href="#" id="id_start_ceshi">开始测试</a>
            
                                    <span class="stip">此测试仅供娱乐，不做专业指导！</span>
                        
        </div>
        <div class="baidu_share">
            <!-- Baidu Button BEGIN -->
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
<br style="clear: both">        </div>

        <form id='id_form' action="<%=path%>/ceshi/357" method="post">
                            <div id="id_question_list" style="display: none">
            <div id="id_question_item_5424" >
        <div>当前第1/15题</div>
                <fieldset data-role="controlgroup">
            <legend>1. 受委屈时会跟他人诉苦？ </legend>
                                    <input type="radio" id="id_choice_12401" name="question-1" value="12401" />
            <label for="id_choice_12401" data-question="5424" data-choice="12401" data-qid="5427" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12402" name="question-1" value="12402" />
            <label for="id_choice_12402" data-question="5424" data-choice="12402" data-qid="5425" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="submit" id="id_submit_5424" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5425" style="display: none">
        <div>当前第2/15题</div>
                <fieldset data-role="controlgroup">
            <legend>2. 觉得自己是个任性的人？  </legend>
                                    <input type="radio" id="id_choice_12403" name="question-2" value="12403" />
            <label for="id_choice_12403" data-question="5425" data-choice="12403" data-qid="5427" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12404" name="question-2" value="12404" />
            <label for="id_choice_12404" data-question="5425" data-choice="12404" data-qid="5426" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5425" value="上一题" />
                        <input type="submit" id="id_submit_5425" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5426" style="display: none">
        <div>当前第3/15题</div>
                <fieldset data-role="controlgroup">
            <legend>3. 工作的时候，很在意办公桌是否干净整洁？  </legend>
                                    <input type="radio" id="id_choice_12405" name="question-3" value="12405" />
            <label for="id_choice_12405" data-question="5426" data-choice="12405" data-qid="5430" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12406" name="question-3" value="12406" />
            <label for="id_choice_12406" data-question="5426" data-choice="12406" data-qid="5428" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5426" value="上一题" />
                        <input type="submit" id="id_submit_5426" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5427" style="display: none">
        <div>当前第4/15题</div>
                <fieldset data-role="controlgroup">
            <legend>4. 网上聊天的时候，通常是别人先开始跟你聊天，不会自己主动开始？</legend>
                                    <input type="radio" id="id_choice_12407" name="question-4" value="12407" />
            <label for="id_choice_12407" data-question="5427" data-choice="12407" data-qid="5429" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12408" name="question-4" value="12408" />
            <label for="id_choice_12408" data-question="5427" data-choice="12408" data-qid="5428" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5427" value="上一题" />
                        <input type="submit" id="id_submit_5427" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5428" style="display: none">
        <div>当前第5/15题</div>
                <fieldset data-role="controlgroup">
            <legend>5. 你觉得网上购物不安全？</legend>
                                    <input type="radio" id="id_choice_12409" name="question-5" value="12409" />
            <label for="id_choice_12409" data-question="5428" data-choice="12409" data-qid="5430" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12410" name="question-5" value="12410" />
            <label for="id_choice_12410" data-question="5428" data-choice="12410" data-qid="5429" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5428" value="上一题" />
                        <input type="submit" id="id_submit_5428" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5429" style="display: none">
        <div>当前第6/15题</div>
                <fieldset data-role="controlgroup">
            <legend>6. 总是不清楚自己钱包里有多少钱？</legend>
                                    <input type="radio" id="id_choice_12411" name="question-6" value="12411" />
            <label for="id_choice_12411" data-question="5429" data-choice="12411" data-qid="5431" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12412" name="question-6" value="12412" />
            <label for="id_choice_12412" data-question="5429" data-choice="12412" data-qid="5432" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5429" value="上一题" />
                        <input type="submit" id="id_submit_5429" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5430" style="display: none">
        <div>当前第7/15题</div>
                <fieldset data-role="controlgroup">
            <legend>7. 用餐时间很有规律？ </legend>
                                    <input type="radio" id="id_choice_12413" name="question-7" value="12413" />
            <label for="id_choice_12413" data-question="5430" data-choice="12413" data-qid="5432" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12414" name="question-7" value="12414" />
            <label for="id_choice_12414" data-question="5430" data-choice="12414" data-qid="5434" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5430" value="上一题" />
                        <input type="submit" id="id_submit_5430" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5431" style="display: none">
        <div>当前第8/15题</div>
                <fieldset data-role="controlgroup">
            <legend>8. 会给自己很喜欢的书包上书皮？  </legend>
                                    <input type="radio" id="id_choice_12415" name="question-8" value="12415" />
            <label for="id_choice_12415" data-question="5431" data-choice="12415" data-qid="5433" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12416" name="question-8" value="12416" />
            <label for="id_choice_12416" data-question="5431" data-choice="12416" data-qid="5434" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5431" value="上一题" />
                        <input type="submit" id="id_submit_5431" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5432" style="display: none">
        <div>当前第9/15题</div>
                <fieldset data-role="controlgroup">
            <legend>9. 假日不会老实待在家里？ </legend>
                                    <input type="radio" id="id_choice_12417" name="question-9" value="12417" />
            <label for="id_choice_12417" data-question="5432" data-choice="12417" data-qid="5435" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12418" name="question-9" value="12418" />
            <label for="id_choice_12418" data-question="5432" data-choice="12418" data-qid="5436" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5432" value="上一题" />
                        <input type="submit" id="id_submit_5432" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5433" style="display: none">
        <div>当前第10/15题</div>
                <fieldset data-role="controlgroup">
            <legend>10. 希望可以熟识恋人的朋友，尤其是异性朋友？ </legend>
                                    <input type="radio" id="id_choice_12419" name="question-10" value="12419" />
            <label for="id_choice_12419" data-question="5433" data-choice="12419" data-qid="5434" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12420" name="question-10" value="12420" />
            <label for="id_choice_12420" data-question="5433" data-choice="12420" data-qid="5436" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5433" value="上一题" />
                        <input type="submit" id="id_submit_5433" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5434" style="display: none">
        <div>当前第11/15题</div>
                <fieldset data-role="controlgroup">
            <legend>11. 对待恋情会不喜欢听父母的意见，被父母反对也会不顾？</legend>
                                    <input type="radio" id="id_choice_12421" name="question-11" value="12421" />
            <label for="id_choice_12421" data-question="5434" data-choice="12421" data-qid="5435" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12422" name="question-11" value="12422" />
            <label for="id_choice_12422" data-question="5434" data-choice="12422" data-qid="5437" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5434" value="上一题" />
                        <input type="submit" id="id_submit_5434" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5435" style="display: none">
        <div>当前第12/15题</div>
                <fieldset data-role="controlgroup">
            <legend>12. 要坐火车的话，通常会提前半个小时以上就到火车站候车？ </legend>
                                    <input type="radio" id="id_choice_12423" name="question-12" value="12423" />
            <label for="id_choice_12423" data-question="5435" data-choice="12423" data-qid="5437" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12424" name="question-12" value="12424" />
            <label for="id_choice_12424" data-question="5435" data-choice="12424" data-qid="0" data-rid="1671">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5435" value="上一题" />
                        <input type="submit" id="id_submit_5435" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5436" style="display: none">
        <div>当前第13/15题</div>
                <fieldset data-role="controlgroup">
            <legend>13. 会烹饪，有自己的拿手菜？</legend>
                                    <input type="radio" id="id_choice_12425" name="question-13" value="12425" />
            <label for="id_choice_12425" data-question="5436" data-choice="12425" data-qid="0" data-rid="1672">yes</label>
                        <input type="radio" id="id_choice_12426" name="question-13" value="12426" />
            <label for="id_choice_12426" data-question="5436" data-choice="12426" data-qid="5438" data-rid="0">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5436" value="上一题" />
                        <input type="submit" id="id_submit_5436" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5437" style="display: none">
        <div>当前第14/15题</div>
                <fieldset data-role="controlgroup">
            <legend>14. 跟不认识的人一起聚会时，只会注意自己感兴趣的人，而不想结识其他人？ </legend>
                                    <input type="radio" id="id_choice_12427" name="question-14" value="12427" />
            <label for="id_choice_12427" data-question="5437" data-choice="12427" data-qid="5438" data-rid="0">yes</label>
                        <input type="radio" id="id_choice_12428" name="question-14" value="12428" />
            <label for="id_choice_12428" data-question="5437" data-choice="12428" data-qid="0" data-rid="1673">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5437" value="上一题" />
                        <input type="submit" id="id_submit_5437" disabled="true" value="提交" />
        </div>
    </div>
                <div id="id_question_item_5438" style="display: none">
        <div>当前第15/15题</div>
                <fieldset data-role="controlgroup">
            <legend>15. 经常会在入睡前胡思乱想一通？ </legend>
                                    <input type="radio" id="id_choice_12429" name="question-15" value="12429" />
            <label for="id_choice_12429" data-question="5438" data-choice="12429" data-qid="0" data-rid="1669">yes</label>
                        <input type="radio" id="id_choice_12430" name="question-15" value="12430" />
            <label for="id_choice_12430" data-question="5438" data-choice="12430" data-qid="0" data-rid="1670">no</label>
                    </fieldset>
        <div data-role="controlgroup" data-type="horizontal">
                        <input type="button" id="id_prev_5438" value="上一题" />
                        <input type="submit" id="id_submit_5438" disabled="true" value="提交" />
        </div>
    </div>
            </div>
<input type="hidden" name="choice" value="" id="id_choice" />
<div id="id_result" style="display: none">
    {% if obj.cover %}
        <img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg" alt="世界上另一个自己会对你说什么？">
        <div>你相信世界上还有一个你吗？或许我们可以认为在世界的某个角落里还存在着另一个自己。它也许和我们相似，又或者相反。又或许在你的思想里，心里还有另一个自己，它潜伏在你的心中，等待你发现它。我们来听听它说什么。</div>
    <input type="submit" value="查看测试结果" />
</div>                    </form>
    </div>

    <div class="po_footer">
            <a title="测试列表" class="po_list" href="<%=path%>/user/ceshi.jsp">测试列表</a>
    </div></div><!-- /page -->

<div class="share_tip" id="share_tip"></div>
<script>
    var questionnum = 15;
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

<script>
    $(function() {
        if($('script[src$="app.ad.js"]').length<1){
            $("<script>").attr({"src":"<%=path%>/js/app.ad.min.js"}).appendTo($("body"));
        }else{
            console.log("Already loaded app.ad.js.");
        }
        $('.s_header nav').css('position', 'initial');
        $('div.ui-page').css('position', 'initial');
    });
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
</body>
</html>