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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" >	
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="">
	<meta name="format-detection" content="telephone=no">
	<link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
    <link rel="stylesheet" href="<%=path%>/style/qz_home.css">        
</head>
<body>
		
<div id="main_body">
	<input type="hidden" id="basePath" value="<%=basePath%>">
    <div class="header">
        <div class="left">
            <a href="<%=basePath%>index.jsp" class="ico ico-back icon" id="index"></a>
        </div>
        <h2>心理学，从这里开始</h2>
    		<div class="right">
                <div class="img">                		
               		 <s:if test="#session.loginUser==null" ><!--用户未登录  -->
               		 	<a class="avatar" href="<%=path%>/login.jsp">
               		 		<img src="<%=path%>/image/img155.png" width="60" height="60">
               		 		
               		 	</a>
               		 </s:if>
						<s:elseif test="#session.loginUser.privilege==4">						<!--用户已登录  -->
  						<a class="avatar" href="${ pageContext.request.contextPath }/logout.action">
  						<img src="${loginUser.icon}" width="60" height="60">
                  	  	</a>
       				  </s:elseif>  
       				  <s:else>
  						<a class="avatar" href="${ pageContext.request.contextPath }/logout.action">
                        	<img src="<%=path%>/assets/avatars/${loginUser.icon}" width="60" height="60"> 
                  	  	</a>       				  
       				  </s:else>   					     				                 	 	
                </div>
            
            </div><!-- right -->
    </div>

    <nav class="s_nav">
	    <section id="jt">
	        <div id="nav">
	            <ul>
	                <li>
	                    <a href="<%=path%>/questionaireList.action" name="index">推荐</a>
	                    
	                    <a>爱情</a>
	
	                    <a>性格</a>
	
	                    <a>能力</a>
	
	                    <a>会员</a>
	
	                    <a>精选</a>
	
	                    <a class="hasMsg">专业</a>
	
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
	                        <div class="roll">
	                            <div class="pr">
	                                <img src="<%=path%>/image/021356cvg7ha82skersh0f.jpg" width="300" height="194"/>
	                                <span>世界上另一个自己会对你说什么？</span>
	                            </div>
	                        </div> 
	                   
	                </li>
	                
					<li>	                    
	                        <div class="roll">
	                            <div class="pr">
	                                <img src="<%=path%>/image/101429te35em19j4e5eq5o.jpg" width="300" height="194"/>
	                                <span>测测你在他心中的分量有多少？（限女生）</span>
	                            </div>
	                        </div> 
	                    
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
   </section>

    <footer class="footer">
   		 <div>
       		 <p>
            	<a href="<%=path %>/feedback.action">留言</a>
        	 </p>
        	 <p>
          		  我们的小组<span>心理测试</span>
        	 </p>
     	 </div>
	</footer>
	
</div>

	<script src="<%=path %>/js/jquery.min.js"></script>    
	<script src="<%=path %>/js/api.js"></script>	
	<script type="text/javascript">
		var basePath = $("#basePath").val();
			var i=0;
		<c:forEach var="tests" items="${questionaires}">

			var id=${tests.id};
			var title="${tests.title}"
			var description = "${tests.note}";

			$("#mtestList").append("<dl>"
									+"<a href='"+basePath+"test.action?id="
									+id
									+"'>"
									+"<dt>"
									+"<img src='"+basePath+"image/021356cvg7ha82skersh0f.jpg' width='50' height='50' alt='"
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