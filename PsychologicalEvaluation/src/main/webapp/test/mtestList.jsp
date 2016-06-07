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
    <title>心理学从这里开始</title>
    <meta name="keywords" content="">
    <meta name="description" content="">

    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
	<meta content="yes" name="apple-mobile-web-app-capable" />
	<meta content="black" name="apple-mobile-web-app-status-bar-style" />		
	<meta content="telephone=no" name="format-detection" />
    <link rel="stylesheet" href="<%=path%>/style/qz_home.css">    
    <link rel="stylesheet" href="<%=path%>/style/app-ad.re.css"></head>
<body>
<div id="main_body">
    <div class="header">
        <div class="left">
            <a href="<%=path%>/user/userIndex.jsp" class="ico ico-back icon"></a>
        </div>
        <h2>心理学，从这里开始</h2>
        <div class="right">
            <div class="img">
                                <a class="avatar" href="<%=path%>/user/userIndex.jsp">
                    <img src="<%=path%>/image/9fe4842afb2c58c2200a1b9ae7a68ca9.png" width="60" height="60">
                </a>
                            </div>
        </div>
    </div>

    <nav class="s_nav">
    <section id="jt">
        <div id="nav">
            <ul>
                <li>
                    <a href="<%=path%>/test/mtestList.jsp" name="index">推荐</a>
                    <a href="#" name="amor">爱情</a>

                    <a href="#" name="personality">性格</a>

                    <a href="#" name="vocational">能力</a>

                    <a href="#" name="member">会员</a>

                    <a href="#" name="professional">精选</a>

                    <a href="#" name="fufei" class="hasMsg">专业</a>

                </li>
            </ul>
        </div>
    </section>
</nav>
    <section class="s_hdp">
    <div class="s_box pr" >
        <div class="mid01_box pr" id="slider1">
            <ul class="pr s_ul6 clears">                
               <li>
                    <a href="<%=path%>/test/mtest.jsp">
                        <div class="roll">
                            <div class="pr">
                                <img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg" width="300" height="194"/>
                                <span>世界上另一个自己会对你说什么？</span>
                            </div>
                        </div> 
                    </a>
                </li>
                
				<li>
                    <a href="http://m.xinli001.com/ceshi/99897574">
                        <div class="roll">
                            <div class="pr">
                                <img src="<%=path%>/image/101429te35em19j4e5eq5o.jpg" width="300" height="194"/>
                                <span>测测你在他心中的分量有多少？（限女生）</span>
                            </div>
                        </div> 
                    </a>
                </li>
                
            </ul>
        </div>
    </div>
    <ul id="pagenavi1" class="page">
        <li>
            <a href="javascript:void(0)" class="active"></a>
        </li>
        <li>
            <a href="javascript:void(0)"></a>
        </li>
    </ul>
</section>

    <section class="s_moreread">
      <div class="list_box">
      
     	<dl>
    		<a href="<%=path%>/test/mtest.jsp">
        		<dt><img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg" width="50" height="50p" alt="世界上另一个自己会对你说什么？"></dt>
        		<dd><h3>世界上另一个自己会对你说什么？</h3></dd>
        		<dd>你相信世界上还有一个你吗？或许我们可以认为在世界的某个角落里还存在着另一个自己。它也许和我们相似，又或者相反。又或许在你的思想里，心里还有另一个自己，它潜伏在你的心中，等待你发现它。我们来听听它说什么。</dd>
        		<dd><span>测试过：116483</span>评论：417</dd>
    		</a>
		</dl>
		<dl>
   		 	<a href="http://m.xinli001.com/ceshi/2501">
        		<dt><img src="http://image.xinli001.com/20160526/020544ljhlpm0cprai39q6.jpg!50" alt="娱乐测试：你的灵魂会去往何处？"></dt>
        		<dd><h3>娱乐测试：你的灵魂会去往何处？</h3></dd>
        		<dd>在我们死亡之后会发生什么呢？是湮灭？是重生？是无尽的孤独？这是我们每个人都想要知道的答案。如果可以选择，你会选择哪种呢？（ 本测试由壹心理编译 | 测试来源：buzzfeed）</dd>
        		<dd><span>测试过：193420</span>评论：251</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897574">
        		<dt><img src="http://image.xinli001.com/20160524/101429te35em19j4e5eq5o.jpg!50" alt="测测你在他心中的分量有多少？（限女生）"></dt>
        		<dd><h3>测测你在他心中的分量有多少？（限女生）</h3></dd>
        		<dd>“你问我爱你有多深，月亮代表我的心”——所以你到底有多爱我啊！想知道他有多爱你吗？想知道你在他心中的分量有多少吗？做个测试看看吧~仅限女生！当然小编并不介意非女生也来做的（微笑脸）但是不对结果负责就是了。</dd>
        		<dd><span>测试过：32123</span>评论：20</dd>
    		</a>
		</dl>
		
	  </div>
        
      <div class="load_more">
            		加载更多
      </div>
    </section>

    <footer class="footer">
    <div>
        <p>
            <a href="<%=path %>/user/feedback.jsp">留言</a>
        </p>
        <p>
            我们的小组<span>心理测试</span>
        </p>
    </div>
</footer></div>

	<script>
		var itemsUrl = 'http://m.xinli001.com/ceshi/items';
	</script>
	<script src="<%=path %>/js/jquery.min.js"></script>    <script>
        $(function() {
            if($('script[src$="app.ad.js"]').length<1){
                $("<script>").attr({"src":"<%=path %>/js/app.ad.min.js"}).appendTo($("body"));
            }else{
                console.log("Already loaded app.ad.js.");
            }
        });
        $('.s_header nav').css('position', 'initial');
    </script>
	<script src="<%=path %>/js/api.js"></script>
	</body>
</html>
<script type="text/javascript" src="<%=path %>/js/touchslider_min.js">
</script>
<script type="text/javascript">
    $('a[name=index]').attr('href', '').attr('class', 'aactive');
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
    for(n=1;n<2;n++){
        var page='pagenavi'+n;
        var mslide='slider'+n;
        var mtitle='emtitle'+n;
        arrdiv = 'arrdiv' + n;
        var pd=document.getElementById(page);
        if(!pd) break;
        var as=pd.getElementsByTagName('a');
        var tt=new TouchSlider({id:mslide,'auto':'-1',fx:'ease-out',direction:'left',speed:300,timeout:2000,'before':function(index){
            var as=document.getElementById(this.page).getElementsByTagName('a');
            as[this.p].className='';
            as[index].className='active';
            this.p=index;
        }});
        tt.page = page;
        tt.p = 0;
        for(var i=0;i<as.length;i++){
            (function(){
                var j=i;
                as[j].tt = tt;
                as[j].onclick=function(){
                    this.tt.slide(j);
                    return false;
                };
            })();
        }
    }
</script>
<script type="text/javascript">
    var curr_page=1, nomore=false, islock=false;
    function load_more() {
        if(nomore) {
            return;
        }
        if(islock) {
            return;
        }
        islock = true;
        curr_page++;
        $(".load_more").html('加载中...');
        $.get(itemsUrl,{page:curr_page},function(data){
            islock = false;
            if($.trim(data).length > 0){
                $('.list_box').append(data);
                $(".load_more").html('查看更多');
            }else{
                $(".load_more").remove();
                nomore=true;
            }
        });
        return false;
    }
    $(".load_more").click(load_more);
</script>