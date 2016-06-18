<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>管理员</title>
		<h3>${(empty loginUser)?'您还没有登陆':'已经登陆' }</h3>
  		<a href="${ pageContext.request.contextPath }/user/login.jsp">login</a>
  		<a href="${ pageContext.request.contextPath }/logout.action">logout</a>
  		<s:debug></s:debug>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<!-- basic styles -->

		<link rel="stylesheet" href="<%=path%>/assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/font-awesome.min.css" />

		<!--[if IE 7]>
		  <link rel="stylesheet" href="<%=path%>/assets/css/font-awesome-ie7.min.css" />
		<![endif]-->

		<!-- page specific plugin styles -->

		<link rel="stylesheet" href="<%=path%>/assets/css/select2.css" />

		<!-- fonts -->

		<link rel="stylesheet" href="<%=path%>/style/family.css" />

		<!-- ace styles -->

		<link rel="stylesheet" href="<%=path%>/assets/css/ace.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-skins.min.css" />

		<!--[if lte IE 8]>
		  <link rel="stylesheet" href="<%=path%>/assets/css/ace-ie.min.css" />
		<![endif]-->

		<!-- inline styles related to this page -->

		<!-- ace settings handler -->

		<script src="<%=path%>/assets/js/ace-extra.min.js"></script>

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

		<!--[if lt IE 9]>
		<script src="<%=path%>/assets/js/html5shiv.js"></script>
		<script src="<%=path%>/assets/js/respond.min.js"></script>
		<![endif]-->
	<style type="text/css">
	.vector{
		margin-left:23.0%;
		margin-top:15px;
		font-size:15px;
	}
	.vec{
		margin-left:10px;
		letter-spacing:0px;
		color:#468847;
		margin-top:5px;
	}
	.vecto{
		margin-left:19px;

	}

	.option{
		margin-left:-1px;
		letter-spacing:0px;
		color:#468847;
	}

 	textarea{
		margin-left:5px;
	} 
 	.startScore{
		margin-top:22px;
	} 
 	.endScore{
		margin-top:22px;
	} 
	.mystyle{
		margin-bottom:10px;
	}
	.addV{
		margin-left:10px;
	}
	</style>
	</head>

	<body>
	<input type="hidden" id="basePath" value="<%=basePath%>">
		<div class="navbar navbar-default" id="navbar">
			<script type="text/javascript">
				try{ace.settings.check('navbar' , 'fixed')}catch(e){}
			</script>

			<div class="navbar-container" id="navbar-container">
				<div class="navbar-header pull-left">
					<a href="#" class="navbar-brand">
						<small>
							<i class="icon-leaf"></i>
							我们的小组-管理员后台
						</small>
					</a><!-- /.brand -->
				</div><!-- /.navbar-header -->

				<div class="navbar-header pull-right" role="navigation">
					<ul class="nav ace-nav">
					
						<li class="purple">
							<a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<i class="icon-bell-alt icon-animated-bell"></i>
								<span class="badge badge-important">8</span>
							</a>

							<ul class="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li class="dropdown-header">
									<i class="icon-warning-sign"></i>
									8 Notifications
								</li>

								<li>
									<a href="#">
										<div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-pink icon-comment"></i>
												New Comments
											</span>
											<span class="pull-right badge badge-info">+12</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<i class="btn btn-xs btn-primary icon-user"></i>
										Bob just signed up as an editor ...
									</a>
								</li>

								<li>
									<a href="#">
										<div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-success icon-shopping-cart"></i>
												New Orders
											</span>
											<span class="pull-right badge badge-success">+8</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										<div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-info icon-twitter"></i>
												Followers
											</span>
											<span class="pull-right badge badge-info">+11</span>
										</div>
									</a>
								</li>

								<li>
									<a href="#">
										See all notifications
										<i class="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li class="green">
							<a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<i class="icon-envelope icon-animated-vertical"></i>
								<span class="badge badge-success">5</span>
							</a>

							<ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
								<li class="dropdown-header">
									<i class="icon-envelope-alt"></i>
									5 Messages
								</li>

								<li>
									<a href="#">
										<img src="<%=path%>/assets/avatars/avatar.png" class="msg-photo" alt="Alex's Avatar" />
										<span class="msg-body">
											<span class="msg-title">
												<span class="blue">Alex:</span>
												Ciao sociis natoque penatibus et auctor ...
											</span>

											<span class="msg-time">
												<i class="icon-time"></i>
												<span>a moment ago</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src="<%=path%>/assets/avatars/avatar3.png" class="msg-photo" alt="Susan's Avatar" />
										<span class="msg-body">
											<span class="msg-title">
												<span class="blue">Susan:</span>
												Vestibulum id ligula porta felis euismod ...
											</span>

											<span class="msg-time">
												<i class="icon-time"></i>
												<span>20 minutes ago</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="#">
										<img src="<%=path%>/assets/avatars/avatar4.png" class="msg-photo" alt="Bob's Avatar" />
										<span class="msg-body">
											<span class="msg-title">
												<span class="blue">Bob:</span>
												Nullam quis risus eget urna mollis ornare ...
											</span>

											<span class="msg-time">
												<i class="icon-time"></i>
												<span>3:15 pm</span>
											</span>
										</span>
									</a>
								</li>

								<li>
									<a href="inbox.html">
										See all messages
										<i class="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li class="light-blue">
							<a data-toggle="dropdown" href="#" class="dropdown-toggle">
								<img class="nav-user-photo" src="<%=path%>/assets/avatars/user.jpg" alt="Jason's Photo" />
								<span class="user-info">
									<small>欢迎光临</small>
								</span>

								<i class="icon-caret-down"></i>
							</a>

							<ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i class="icon-cog"></i>
										Settings
									</a>
								</li>

								<li>
									<a href="#">
										<i class="icon-user"></i>
										Profile
									</a>
								</li>

								<li class="divider"></li>

								<li>
									<a href="#">
										<i class="icon-off"></i>
										Logout
									</a>
								</li>
							</ul>
						</li>
					</ul><!-- /.ace-nav -->
				</div><!-- /.navbar-header -->
			</div><!-- /.container -->
		</div>

		<div class="main-container" id="main-container">
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>

			<div class="main-container-inner">
				<a class="menu-toggler" id="menu-toggler" href="#">
					<span class="menu-text"></span>
				</a>

				<div class="sidebar" id="sidebar">
					<script type="text/javascript">
						try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
					</script>

					<div class="sidebar-shortcuts" id="sidebar-shortcuts">
						<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
							<button class="btn btn-success">
								<i class="icon-signal"></i>
							</button>

							<button class="btn btn-info">
								<i class="icon-pencil"></i>
							</button>

							<button class="btn btn-warning">
								<i class="icon-group"></i>
							</button>

							<button class="btn btn-danger">
								<i class="icon-cogs"></i>
							</button>
						</div>

						<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
							<span class="btn btn-success"></span>

							<span class="btn btn-info"></span>

							<span class="btn btn-warning"></span>

							<span class="btn btn-danger"></span>
						</div>
					</div><!-- #sidebar-shortcuts -->

					<ul class="nav nav-list">
						<li >
							<a href="<%=path%>/index.jsp">
								<i class="icon-dashboard"></i>
								<span class="menu-text"> 控制台 </span>
							</a>
						</li>

						<li>
							<a href="#" class="dropdown-toggle">
								<i class="icon-list"></i>
								<span class="menu-text"> 用户管理 </span>

								<b class="arrow icon-angle-down"></b>
							</a>

							<ul class="submenu">
								<li>
									<a href="${ pageContext.request.contextPath }/userList.action">
										<i class="icon-double-angle-right"></i>
										用户列表
									</a>
								</li>

								<li>
									<a href="<%=path%>/user/profile.jsp">
										<i class="icon-double-angle-right"></i>
										用户信息
									</a>
								</li>
							</ul>
						</li>

						<li class="active open">
							<a href="#" class="dropdown-toggle">
								<i class="icon-edit"></i>
								<span class="menu-text"> 编辑 </span>

								<b class="arrow icon-angle-down"></b>
							</a>

							<ul class="submenu">
								<li>
									<a href="<%=path%>/questionaireList.action">
										<i class="icon-double-angle-right"></i>
										问卷
									</a>
								</li>
								
								<li class="active">
									<a href="<%=path%>/questionaire.action">
										<i class="icon-double-angle-right"></i>
										添加测评问卷
									</a>
								</li>

								<li>
									<a href="<%=path%>/article.action">
										<i class="icon-double-angle-right"></i>
										文章
									</a>
								</li>	

								<li>
									<a href="<%=path%>/user/push.jsp">
										<i class="icon-double-angle-right"></i>
										文章推送
									</a>
								</li>

							</ul>
						</li>							

						<li>
							<a href="<%=path%>/feedback.action">
								<i class="icon-text-width"></i>
								<span class="menu-text"> 用户反馈 </span>
							</a>
						</li>

						<li>
							<a href="#" class="dropdown-toggle">
								<i class="icon-file-alt"></i>

								<span class="menu-text">
									其他页面
									<span class="badge badge-primary ">4</span>
								</span>

								<b class="arrow icon-angle-down"></b>
							</a>

							<ul class="submenu">

								<li>
									<a href="<%=path%>/user/error-404.jsp">
										<i class="icon-double-angle-right"></i>
										404错误页面
									</a>
								</li>

								<li>
									<a href="<%=path%>/error-500.jsp">
										<i class="icon-double-angle-right"></i>
										500错误页面
									</a>
								</li>
								
								<li>
									<a href="<%=path%>/user/file.jsp">
										<i class="icon-double-angle-right"></i>
										文件上传
									</a>
								</li>									
							</ul>
						</li>										
					</ul><!-- /.nav-list -->
					
				</div>

				<div class="main-content">
					<div class="breadcrumbs" id="breadcrumbs">
						<script type="text/javascript">
							try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
						</script>

						<ul class="breadcrumb">
							<li>
								<i class="icon-home home-icon"></i>
								<a href="#">首页</a>
							</li>

							<li>
								<a href="#">编辑</a>
							</li>
							<li class="active">添加测评问卷</li>
						</ul><!-- .breadcrumb -->
					</div>

					<div class="page-content">

						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<div class="hr hr-18 hr-double dotted"></div>

								<div class="row-fluid">
									<div class="span12">
										<div class="widget-box">
											<div class="widget-header widget-header-blue widget-header-flat">
												<h4 class="lighter"><small>评价标准</small></h4>

											</div>

											<div class="widget-body">
												<div class="widget-main">							
													
													<div class="step-content row-fluid position-relative" id="step-container">
														<div class="step-pane active" id="step1">

															<div class="form-horizontal" id="sample-form" >
																
																<div class="form-group has-error vector" id="0">
																	<label class="col-xs-12 col-sm-3 col-md-3 control-label no-padding-right" >总评</label>

																	<div class="mystyle">
																		<span class="">
																			<textarea rows="4" cols="55" class='description'></textarea> 
																			
																			&nbsp<input type='text' style='width:43px;font-size:14px;' class='startScore' placeholder='分数'/> —— <input type='text' style='width:43px;font-size:14px;' class='endScore' placeholder='区间'/>
																																				
																		</span>
																	</div>
																</div>
																
																<div class="choicequestion" >																
																	<div class="form-group has-success" id="vector">
																		<hr/>																	
																		<!-- <label class="col-xs-12 col-sm-3 control-label no-padding-right">问题</label> -->
																	</div>
																										
																</div>															
															</div>
														</div>										
												
													</div>

													<hr />
													<div class="row-fluid wizard-actions">	
														<button id="addresult" class="btn btn-success">
															添加总评
															<i class="icon-on-right"></i>
														</button>																												
																										
														<button id="save0" type="submit" class="btn btn-success">
															完成
															<i class="icon-on-right"></i>
														</button>
																												
													</div>
												</div><!-- /widget-main -->
											</div><!-- /widget-body -->
										</div>
									</div>
								</div>

							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div><!-- /.main-content -->

			</div><!-- /.main-container-inner -->

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="icon-double-angle-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->

		<!-- basic scripts -->

		<!--[if !IE]> -->



		<!-- <![endif]-->


		<!--[if !IE]> -->

		<script type="text/javascript">
			window.jQuery || document.write("<script src='<%=path%>/assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<![endif]-->

		<script src="<%=path%>/assets/js/bootstrap.min.js"></script>


		<!-- page specific plugin scripts -->
  		<script type="text/javascript" src="<%=path%>/js/json2.js"></script>
		<script type="text/javascript" src="<%=path%>/js/jquery.min.js"></script>
<%-- 		<script type="text/javascript" src="<%=path%>/js/editRule.js"></script> --%>


		<!-- ace scripts -->

		<script src="<%=path%>/assets/js/ace-elements.min.js"></script>
		<script src="<%=path%>/assets/js/ace.min.js"></script>
		<script>
				var i=1;
 				var questionaireid=${Questionaire.id};
				/* alert(questionaireid); */ 
			<c:forEach var="vector" items="${vectors}">
				var vector=${vector};			
 				  $('#vector').append("<div class='vector' id='"+(i++)+"'>"
									+"<span class='vec'>"
									+vector
									+"<textarea rows='4' cols='55' class='description'></textarea>"
									+" "
									+"<input type='text' style='width:43px;font-size:14px;' class='startScore' placeholder='分数'/>"
									+" —— <input type='text' style='width:43px;font-size:14px;' class='endScore' placeholder='区间'/>"
									+"<button class='btn addoptio addV'>添加维度测评</button>"
									+"</span>"
									+"</div>");  	 					
			</c:forEach>
		</script>
		
		<script>
			var basePath = $("#basePath").val();
var save = true;
$(document).ready(function() {
				//添加选择题
				$("#addresult").click(function() {
					$("#0").append("<label class='col-xs-12 col-sm-3 col-md-3 control-label no-padding-right' ></label>"
										+"<div class='mystyle'>"
										+"<span class=''>"
										+"<textarea rows='4' cols='55' class='description'></textarea>"
										+" &nbsp"
										+"<input type='text' style='width:43px;font-size:14px;' class='startScore' placeholder='分数'/> —— <input type='text' style="
										+"'width:43px;font-size:14px;' class='endScore' placeholder='区间'/>"
										+"</span>"
										+"</div>");
					});
				$(".addV").each(function(i){
					this.onclick=function(){
						$(this).parent().append("<span class='vec vecto'>"
											+"<textarea rows='4' cols='55' class='description'></textarea>"
											+" "
											+"<input type='text' style='width:43px;font-size:14px;' class='startScore' placeholder='分数'/>"
											+" —— <input type='text' style='width:43px;font-size:14px;' class='endScore' placeholder='区间'/>"
											+"</span>");
					};
				});
			
			
				$("#save0").click(function(){

						//选择题数目
alert(1);
						var vectorNum=$(".vector").length;

						alert("共有 "+(vectorNum-1)+"维度的评价");

						var questionaire = {};
						var rulers = new Array();
						//遍历选择题
						for(var i=0; i<vectorNum; i++){
							var map2={};
						 	var id=$(".vector").eq(i).attr("id");
						 	
						 	var pingjias=$(".vector").eq(i).find(".description").map(function(){
								
						 			var pingjia = $.trim($(this).val());
						 			if(pingjia.length == 0){	//标记置空
						 				save = false;
						 				alert("有未填写的评价！");
						 			}
						 		return pingjia;
						 	}).get().join(';');
						 	
						 	var starts=$(".vector").eq(i).find(".startScore").map(function(){
					 			var start = $.trim($(this).val());

					 			if(start.length == 0){	//标记置空
					 				save = false;
					 				alert("有未填写的分数！");
					 			}
					 			return start;
					 		}).get().join(',');	
						 	
						 	var ends=$(".vector").eq(i).find(".endScore").map(function(){
					 			var end = $.trim($(this).val());

					 			if(end.length == 0){	//标记置空
					 				save = false;
					 				alert("有未填写的分数！");
					 			}
					 			return end;
					 		}).get().join(',');						 	
						 	
						 	map2["ruler"]=pingjias;
						 	map2["startScore"]=starts;
						 	map2["endScore"]=ends;
						 	map2["vector"]=id;
						 	
						 	rulers[i]=map2;
						 };
						 
						//封装试卷
						questionaire["rulers"] = rulers;
						questionaire["questionaireId"]=questionaireid;
						
											
					if(save){
						//用ajax请求服务器保存数据
						var jsonString = JSON.stringify(questionaire);
						alert(jsonString);
						$.post(basePath+"saveRulers.action", {"jsonString" : jsonString},function(result){
							$("body").html(result)}
						);
					}
				});								
});		
		
		</script>
					
	</body>
</html>

