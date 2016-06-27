<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/> 
<title>我的测评结果</title>
<meta name="baidu-tc-cerfication" content="e37b9fc48676fae6577f9e35f95fdb3e" />

<meta name="keywords" content="" />
<meta name="description" content=""/>

<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> 
<meta content="yes" name="apple-mobile-web-app-capable" /> 
<meta content="black" name="apple-mobile-web-app-status-bar-style" /> 
<meta content="telephone=no" name="format-detection" /> 


<link rel="stylesheet" href="<%=path%>/style/qz_home.css" />

<link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
<style type="text/css">
#myResult{
	padding:30px;
	font-size:15px;
}
p{
	text-indent:40px;
}
.class{
	margin-bottom:20px;
}
</style>
</head>
<body>
<s:debug></s:debug>
<div id="main_body">
    <div class="header">
        <div class="left">
            <a href="<%=path%>/index.jsp" class="ico ico-back icon"></a>
        </div>
    </div>
	<div id="myResult">

	</div>
	

</div>
<script src="<%=path%>/js/jquery.min.js"></script>
<script type="text/javascript">
	var i=1;
	<c:forEach var="test" items="${answers}">
		var time="${test.dateTime}";
		var result="${test.result}";
		var title="${test.title}"; 
		$("#myResult").append("<div class='class'>&nbsp;&nbsp;&nbsp;"+(i++)+"."
								+time
								+"&nbsp;&nbsp;&nbsp;&nbsp;"
								+title
								+"<br>"
								+"<p>"
								+result+"</p></div>"
								+"");
	</c:forEach>
</script>
</body>
</html>