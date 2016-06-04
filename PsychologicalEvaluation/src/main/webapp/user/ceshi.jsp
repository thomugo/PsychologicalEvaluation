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
        <h2>壹心理</h2>
        <div class="right">
            <div class="img">
                                <a class="avatar" href="<%=path%>/user/user.jsp">
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
                    <a href="<%=path%>/user/ceshi.jsp" name="index">推荐</a>
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
                    <a href="http://cmcc.in/340">
                        <div class="roll">
                            <div class="pr">
                                <img src="<%=path%>/image/060751erwj758i4gnz6az6.jpg" width="300" height="194"/>
                                <span>壹心理测试：D先生的秘密日记</span>
                            </div>
                        </div> 
                     </a>
                </li>
                
               <li>
                    <a href="<%=path%>/ceshi/357.jsp">
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
                
                <li>
                    <a href="http://m.xinli001.com/ceshi/53957104">
                        <div class="roll">
                            <div class="pr">
                                <img src="<%=path%>/image/020558eu6qq4upa59pflmk.jpg" width="300" height="194"/>
                                <span>测测你是否善于沟通？</span>
                            </div>
                        </div> 
                	</a>
				</li>
				
                <li>
                    <a href="http://m.xinli001.com/ceshi/99897563">
                        <div class="roll">
                            <div class="pr">
                                <img src="<%=path%>/image/025415ezaaix9ccha1fjz8.png" width="300" height="194"/>
                                <span>爱的能力评估</span>
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
        <li>
            <a href="javascript:void(0)"></a>
        </li>
        <li>
            <a href="javascript:void(0)"></a>
        </li>
        <li>
            <a href="javascript:void(0)"></a>
        </li>
    </ul>
</section>

    <section class="s_moreread">
        <div class="list_box">
     	<dl>
    		<a href="<%=path%>/ceshi/357.jsp">
        		<dt><img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg" alt="世界上另一个自己会对你说什么？"></dt>
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
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897573">
        		<dt><img src="http://image.xinli001.com/20160524/08570762ljeetn787bkc9y.jpg!50" alt="友谊心理模式测评"></dt>
        		<dd><h3>友谊心理模式测评</h3></dd>
        		<dd>好友的存在，让我知道我存在在这个世上，不孤单。</dd>
       		   <dd><span>测试过：52</span>评论：0</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/2638">
        		<dt><img src="http://image.xinli001.com/20160524/020123mvjji45382kxkhv9.jpg!50" alt="测你能挡住手机的诱惑吗？"></dt>
        		<dd><h3>测你能挡住手机的诱惑吗？</h3></dd>
        		<dd>无论大街还是小巷，户外还是户内，似乎人人都成了低头族，人人都成了手机党。手机的诱惑力真的这么强吗？手机虽好可不要沉迷哦。为了你的健康一起来测测吧。 </dd>
        		<dd><span>测试过：145787</span>评论：71</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/53957104">
        		<dt><img src="http://image.xinli001.com/20160523/020558eu6qq4upa59pflmk.jpg!50" alt="测测你是否善于沟通？"></dt>
        		<dd><h3>测测你是否善于沟通？</h3></dd>
        		<dd>善于沟通的人会有很多的成功机会，也更容易化解人际交往时会发生的矛盾。但这是一种能力，但并非人人都天生是善于沟通的人，你是否是一个善于沟通的人呢，测测就知道了？</dd>
        		<dd><span>测试过：201087</span>评论：74</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897571">
        		<dt><img src="http://image.xinli001.com/20160519/061711sv7fao4b77dtfc8t.jpg!50" alt="测测你能否表白成功？"></dt>
        		<dd><h3>测测你能否表白成功？</h3></dd>
        		<dd>你要表白吗？快来测测看你的表白胜算有多大啊！P.S：表白不成功没关系，小编在这里，什么？你不稀罕？！</dd>
        		<dd><span>测试过：52310</span>评论：51</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897570">
        		<dt><img src="http://image.xinli001.com/20160518/0316353t36w3k3whmuzkum.jpg!50" alt="测测朋友会误会你什么？"></dt>
        		<dd><h3>测测朋友会误会你什么？</h3></dd>
        		<dd>不仅是爱情，友情也是要经营的。如果朋友之间存在一些心结且不去解开，友情就会萌生间隙，甚至产生裂痕。你想知道自己和朋友之间可能会有什么误会吗？你的朋友又会误会你什么呢？做个测试看看吧~</dd>
        		<dd><span>测试过：52546</span>评论：80</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/691">
        		<dt><img src="http://image.xinli001.com/20160518/0202015fsojoj9rkg3rkqr.jpg!50" alt="测测你爱情不顺的原因"></dt>
        		<dd><h3>测测你爱情不顺的原因</h3></dd>
        		<dd>与其藏于心底，不如轰轰烈烈爱一场，但为啥你的爱情路一直不顺呢？一起测一测，找出原因吧。</dd>
        		<dd><span>测试过：100217</span>评论：196</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897569">
       			<dt><img src="http://image.xinli001.com/20160516/033634ibenhlazfvms91wv.jpg!50" alt="测测你的运气有多强？"></dt>
        		<dd><h3>测测你的运气有多强？</h3></dd>
        		<dd>幸运的人总是幸运，不幸的人总是不幸？幸运与否可能与你的行为模式有关哦，你的反应或许已经决定了你是否能获得你想要的。你是一个运气好的人吗，如果不是的话，你想成为运气好的人吗？快来做做看这个测试吧！</dd>
        		<dd><span>测试过：66015</span>评论：53</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897568">
        		<dt><img src="http://image.xinli001.com/20160513/041035ws57qvatza4k5d3y.jpg!50" alt="从聊天习惯暴露你的性格"></dt>
        		<dd><h3>从聊天习惯暴露你的性格</h3></dd>
        		<dd>你是一个怎样的朋友呢，可能你的聊天方式已经出卖你了！不信你做这个测试看看啊！看看在朋友圈中，你是一个怎样的朋友吧~（测试由壹心理翻译编制丨测试来源：BuzzFeed，图片来源：123RF）</dd>
        		<dd><span>测试过：92116</span>评论：133</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897507">
        		<dt><img src="http://image.xinli001.com/20160302/091224ai7uojjs438v2n0f.jpg!50" alt="气质类型测评"></dt>
        		<dd><h3>气质类型测评</h3></dd>
        		<dd>气质是一个人从内到外的一种人格魅力。不同的人有不同的气质，你知道自己的气质是什么样的吗？</dd>
        		<dd><span>测试过：962</span>评论：0</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897567">
        		<dt><img src="http://image.xinli001.com/20160512/100749i3huycl2qvw1mq0w.jpg!50" alt="测你会在夏天收获爱情吗？"></dt>
        		<dd><h3>测你会在夏天收获爱情吗？</h3></dd>
        		<dd>夏天到啦！你瘦下来了吗！呸呸呸，不管瘦没瘦，你准备好迎接夏天了吗？说不定会在火辣辣的夏天收获一段火辣辣的爱情哦，快测测看你的夏日之恋会不会出现吧！（图片来源：123RF）</dd>
        		<dd><span>测试过：66115</span>评论：84</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897500">
        		<dt><img src="http://image.xinli001.com/20160302/091058uqug60wwzai0lue0.jpg!50" alt="专业爱情测评"></dt>
        		<dd><h3>专业爱情测评</h3></dd>
        		<dd>关于爱情这个话题我们总是有很多疑问，但是在问出那些问题前，或许你应该问问自己，你的爱情性格类型是什么？</dd>
        		<dd><span>测试过：1205</span>评论：0</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/2120">
        		<dt><img src="http://image.xinli001.com/20140626/1458574d22063cd83211a8.jpg!50" alt="测你是哪位超级英雄"></dt>
        		<dd><h3>测你是哪位超级英雄</h3></dd>
        		<dd>大性格决定大能力，如果有一天，你的超能力被激活，你会变成哪位超级英雄呢？【由壹心理编译，via：buzzfeed | 如需转载请联系bd@xinli001.com】</dd>
        		<dd><span>测试过：137485</span>评论：507</dd>
    		</a>
		</dl>
		<dl>
    		<a href="http://m.xinli001.com/ceshi/99897505">
        		<dt><img src="http://image.xinli001.com/20160302/0911415wscfd10upoesg17.jpg!50" alt="心理成熟度测评"></dt>
        		<dd><h3>心理成熟度测评</h3></dd>
       			<dd>无关年龄，你在为人处事上表现成熟吗？</dd>
       			<dd><span>测试过：485</span>评论：0</dd>
    		</a>
		</dl>
		<dl>
		    <a href="http://m.xinli001.com/ceshi/99897566">
		        <dt><img src="http://image.xinli001.com/20160509/0418390w3wqop7b0poxhxq.jpg!50" alt="测你是文科型人才还是理科型人才？"></dt>
		        <dd><h3>测你是文科型人才还是理科型人才？</h3></dd>
		        <dd>成功的方式有很多种，而不论是哪一种，找准自己的定位都是非常重要的。只有认清自己的优势劣势，才能够更好地运用内外部条件，实现目标。那么，你清楚自己的定位吗，先来做个测试吧，看看你是偏文科还是偏理科的人呢？</dd>
		        <dd><span>测试过：70903</span>评论：159</dd>
		    </a>
		</dl>
		<dl>
		    <a href="http://m.xinli001.com/ceshi/99897501">
		        <dt><img src="http://image.xinli001.com/20160302/0911095s49p480y18rrqfr.jpg!50" alt="人格倾向测评"></dt>
		        <dd><h3>人格倾向测评</h3></dd>
		        <dd>人格是如此复杂，它贯穿人们的整个心理，而我们想要说的是：你对自己的人格有多了解呢？</dd>
		        <dd><span>测试过：430</span>评论：0</dd>
		    </a>
		</dl>
		<dl>
		    <a href="http://m.xinli001.com/ceshi/99897560">
		        <dt><img src="http://image.xinli001.com/20160429/072310u347dneu129l82jz.jpg!50" alt="测测你是欢乐颂中的哪一个？"></dt>
		        <dd><h3>测测你是欢乐颂中的哪一个？</h3></dd>
		        <dd>一个名叫“欢乐颂”的中档小区22楼，五个性格迥异的女人，各自携带着困难与不如意，因为邻居关系而相识相知。你会是热门电视剧《欢乐颂》中的谁呢？做个测试看看吧！</dd>
		        <dd><span>测试过：258847</span>评论：216</dd>
		    </a>
		</dl>
		<dl>
		    <a href="http://m.xinli001.com/ceshi/99897499">
		        <dt><img src="http://image.xinli001.com/20160302/093617q6aja2texc98o9ft.jpg!50" alt="职业性格测评"></dt>
		        <dd><h3>职业性格测评</h3></dd>
		        <dd>一个适合的职业不仅决定了你能否获得事业上的成功，而且还会影响生活的幸福。但是你知道什么样的工作才适合你吗？</dd>
		        <dd><span>测试过：1468</span>评论：2</dd>
		    </a>
		</dl>
        </div>
        <div class="load_more">
            加载更多
        </div>
    </section>

    <div class="module module-margin tuijian">
                        <div class="topic">
            <ul class="cont-list">
                <li>
                    <span class="live-icon">推荐</span><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.xinli.yixinli">预约咨询师，你的心事TA来听</a>
                </li>
            </ul>
        </div>
        
                            <div class="topic">
                <ul class="cont-list">
                    <li>
                        <span class="live-icon">推荐</span><a href="http://a.myapp.com/o/simple.jsp?pkgname=com.xinli.fm">心理FM：总有一个声音治愈你</a>
                    </li>
                </ul>
            </div>
            </div>

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