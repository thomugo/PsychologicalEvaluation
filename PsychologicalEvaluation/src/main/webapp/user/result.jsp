<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=yes">
<meta name="description" content="">
<meta name="author" content="">

<title>心理测评</title>

<!-- Bootstrap core CSS -->
<link href="<%=path%>/assets/css/bootstrap.css"rel="stylesheet">

<!-- Add custom CSS here -->
<link href="<%=path%>/assets/css/sb-admin.css" rel="stylesheet">
<link rel="stylesheet" href="<%=path%>/font-awesome/css/font-awesome.min.css">
<!-- Page Specific CSS -->
<link rel="stylesheet" href="<%=path%>/assets/css/morris.css">
</head>

<body>

<div id="wrapper">

<!-- Sidebar -->
<nav class="navbar navbar-inverse navbar-fixed-top"role="navigation">

<div class="navbar-header">
<button type="button"class="navbar-toggle"data-toggle="collapse"data-target=".navbar-ex1-collapse">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
</div>

<!-- Collect the nav links, forms, and other content for toggling -->
<div class="collapse navbar-collapse navbar-ex1-collapse">
	<ul class="nav navbar-nav side-nav">
		<li><a href="<%=path%>/user/userIndex.jsp"><i class="fa fa-dashboard"></i>一周热文</a></li>
		<li><a href="<%=path%>/user/test.jsp"><i class="fa fa-edit"></i> 测试</a></li>
		<li class="active"><a href="<%=path%>/user/result.jsp"><i class="fa fa-edit"></i> 我的测试</a></li>
		<li><a href="<%=path%>/user/userFeedback.jsp"><i class="fa fa-edit"></i> 提点建议</a></li>
	</ul>
</div><!-- /.navbar-collapse -->
</nav>

<div id="page-wrapper">

	<div class="row">
		<div class="col-lg-12">
			<h1>心理测评 <small>我们的小组</small></h1>
				<ol class="breadcrumb">
					<li class="active"><i class="fa fa-dashboard"></i> 我们的小组</li>
				</ol>
			<div class="alert alert-success">
				<button type="button"class="close"data-dismiss="alert"aria-hidden="true">&times;
				</button>
				你好！ 今天是 ×月×日，周×。
			</div>
		</div>

</div>
</div><!-- /#page-wrapper -->

</div><!-- /#wrapper -->

<!-- JavaScript -->
<script src="<%=path%>/js/jquery.min.js"></script>
<script src="<%=path%>/js/bootstrap.min.js"></script>

<!-- Page Specific Plugins -->    
<script src="<%=path%>/js/raphael-min.js"></script>
<script src="<%=path%>/js/morris/morris.js"></script>
<script src="<%=path%>/js/morris/chart-data-morris.js"></script>
<script src="<%=path%>/js/tablesorter/jquery.tablesorter.js"></script>
<script src="<%=path%>/js/tablesorter/tables.js"></script>

</body>
</html>
