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
<s:debug></s:debug>
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
                    <a href="#">
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
      <div class="list_box" id="mtestList">
      		
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
	</footer>
	
	</div>

	<script>
		//var itemsUrl = '<%-- <%=path %>/questionaireList.action --%>';
	</script>
	<script src="<%=path %>/js/jquery.min.js"></script>    
	
	<script>

    </script>
		<script src="<%=path %>/js/api.js"></script>
	
	<script type="text/javascript">
			var i=0;
		<c:forEach var="tests" items="${questionaires}">

			var id=${tests.id};
			var title="${tests.title}"
			var description = "${tests.note}";

			$("#mtestList").append("<dl>"
									+"<a href='<%=path%>/test.action?id="
									+id
									+"'>"
									+"<dt>"
									+"<img src='<%=path%>/image/021356cvg7ha82skersh0f.jpg' width='50' height='50' alt='"
									+title
									+"'/>"
									+"</dt>"
									+"<dd><h3>"
									+title
									+"</h3>"
									+"</dd>"
									+"<dd>"
									+ description
									+"</dd>"
									+"</a>"
									+"</dl>");
		
		</c:forEach>
	</script>
	
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