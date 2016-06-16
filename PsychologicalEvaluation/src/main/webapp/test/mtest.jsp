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
    <meta charset="utf-8" />
    <title>心理测试 </title>
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
    <script src="<%=path%>/js/jquery.min.js"></script>
    <script>
        $(document).bind("mobileinit", function(){
            $.mobile.page.prototype.options.backBtnText = "返回";
            $.mobile.page.prototype.options.addBackBtn= true;
            $.mobile.ajaxEnabled = false;
        });
    </script>
    <script src="<%=path%>/js/jquery.mobile.min.js"></script>
  
    <script src="<%=path%>/js/iscroll.js" ></script>
</head>
<body>

<div data-role="page" id="id_ceshi_page" data-url="<%=path%>/ceshi/357.jsp" data-dom-cache="false">

    <div class="header">
    <div class="left">
        <a href="<%=path%>/questionaireList.action" class="ico ico-back icon"></a>
    </div>
    <h2>测试</h2>
    <div class="right">
        <div class="img">
                 <a class="avatar" href="#">
                	<img src="<%=path%>/image/9fe4842afb2c58c2200a1b9ae7a68ca9.png" width="60" height="60">
            	 </a>
        </div>
    </div>
</div>
    <div data-role="content" >
        <h1 class="po_title" id="title">世界上另一个自己会对你说什么？</h1>
        <br>
        <div id="id_ceshi_show">
            <div><img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg"  alt="世界上另一个自己会对你说什么？"></div>
            <div class="tdesc" id="description">你相信世界上还有一个你吗？或许我们可以认为在世界的某个角落里还存在着另一个自己。它也许和我们相似，又或者相反。又或许在你的思想里，心里还有另一个自己，它潜伏在你的心中，等待你发现它。我们来听听它说什么。</div>
            
                        <a href="#" id="id_start_ceshi">开始测试</a>
            
        	</div>
        <div class="baidu_share">
            <!-- Baidu Button BEGIN -->
			<div id="share_label" style="border-bottom: none">
    
			</div>

			<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=603462" ></script>
			<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
    document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000)
</script>
			<!-- Baidu Button END -->
			<br style="clear: both">        
		</div>

        <div id='id_form' >
            <div id="id_question_list" style="display: none">
    			
            </div>
            
			<input type="hidden" name="choice" value="" id="id_choice" />
			<div id="id_result" style="display: none">
    			{% if obj.cover %}
        		<img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg"  alt="世界上另一个自己会对你说什么？">
        		<div>你相信世界上还有一个你吗？或许我们可以认为在世界的某个角落里还存在着另一个自己。它也许和我们相似，又或者相反。又或许在你的思想里，心里还有另一个自己，它潜伏在你的心中，等待你发现它。我们来听听它说什么。</div>
    			<input type="submit" value="查看测试结果" />
			</div>                    
		</div>
    </div>   <!-- content -->

    <div class="po_footer">
            <a title="测试列表" class="po_list" href="<%=path%>/questionaireList.action">测试列表</a>
    </div></div><!-- /page -->

	<div class="share_tip" id="share_tip">
	</div>

<script type="text/javascript">
  			var i=1;
			var id=${questionaire.id};
			var title="${questionaire.title}";		
			var description = "${questionaire.note}";
			var num="${choiceQuestions.size()}";
			$("#title").html(title);
			$("#description").html(description);
			var block="block";
			var none="none";
			var inline="inline";
			
			<c:forEach var="test" items="${choiceQuestions}">
				var content="${test.content}";
				var questionid="${test.id}";

				var string="";	
							<c:forEach var="option" items="${test.options}">
								
								var option="${option.content}";
								var optionid="${option.id}";
								string+="<input type='radio' id='id_choice_"+optionid+"' name='question-"+i+"' value='"+optionid+"'/>"
										+"<label for='id_choice_"+optionid+"' data-question='"+questionid+"' data-choice='"+optionid+"' data-nodeid='"+i+"' data-qid='"+(parseInt(questionid)+1)+"' data-rid='0' class='ui-btn ui-fullsize ui-btn-icon-left ui-radio-off ui-corner-top ui-btn-up-c'>"
										+option
										+"</label>";
								
							</c:forEach>
									
				$("#id_question_list").append("<div id='node_"+parseInt(i)+"' style='display:"+(i==1?block:none)+"' >"
										+"<div id='id_question_item_"+questionid+"'>"
										+" "
										+"<div>当前第"+i
										+"/"+num+"题</div>"
										+" "
										+"<fieldset data-role='controlgroup' class='ui-corner-all ui-controlgroup ui-controlgroup-vertical'>"
										+" "
										+"<div role='heading' class='ui-controlgroup-label'>"+(i++)+". "+content+" </div>"
										+" "
										+"<div class='ui-controlgroup-controls'>"
										+" "
										+string
										+" "
										+"</div>"
										+" "
										+"</fieldset>"
										+" "
										+"<div data-role='controlgroup' data-type='horizontal' class='ui-corner-all ui-controlgroup ui-controlgroup-horizontal'>"
										+" "
										+"<input type='submit' disabled='true' id='id_submit_"+questionid+"' value='提交' />"
        								+"</div>"									
										+"</div>"
										+"</div>");

			</c:forEach>   

</script>
	


<script>

</script>
    <script src="<%=path%>/js/mobile.js" ></script>  

</body>
</html>