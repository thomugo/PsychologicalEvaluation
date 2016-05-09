<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>出错啦啦</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width,initial-scale=1"> 
	<link rel="stylesheet" type="text/css" href="styles/style.css" />
	<link rel="stylesheet" type="text/css" href="styles/error.css" />
	<link rel="stylesheet" type="text/css" href="<%=path%>/styles/bootstrap.min.css" />
  </head>
  
  <body>
    	<div class="top">
  				 404 NOT FOUND!！ 
    		  	<div class="user">
  				<a href="${ pageContext.request.contextPath }/index.jsp">返回主页</a>
			</div>
		</div>
  	您访问的页面不存在!
  </body>
</html>
