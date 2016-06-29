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
		<meta charset="utf-8" />
		<title>管理员</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link href="<%=path%>/assets/css/bootstrap.min.css" rel="stylesheet" />
		<link rel="stylesheet" href="<%=path%>/assets/css/font-awesome.min.css" />


		<link rel="stylesheet" href="<%=path%>/assets/css/datepicker.css" />

		<link rel="stylesheet" href="<%=path%>/assets/css/ace.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-skins.min.css" />
		<link rel="stylesheet" href="<%=path%>/style/website_9efedb4906.css" />

	<style type="text/css">
	.ques{
		margin-left:23.0%;
		margin-top:15px;
		font-size:15px;
	}
	.queslabel{
		margin-left:-1px;
		letter-spacing:0px;
		color:#468847;
	}
	.mystyle{

		margin-left:22.2%;
		margin-top:15px;
		font-size:15px;
	}
	.option{
		margin-left:-1px;
		letter-spacing:0px;
		color:#468847;
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
								<span class="badge badge-important" id="broadcast">${unReadBroadCastMessageCount}</span>
							</a>

							<ul class="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li class="dropdown-header">
									<i class="icon-warning-sign"></i>
									${unReadBroadCastMessageCount}条广播通知
								</li>

								<li>
									<a href="<%=path%>/getOffLineMessage.action">
										<div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-pink icon-comment"></i>
												未读广播消息
											</span>
											<span class="pull-right badge badge-info">+${unReadBroadCastMessageCount}</span>
										</div>
									</a>
								</li>

								<li>
									<a>
										查看所有通知
										<i class="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>
						
						<li class="green">
							<a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<i class="icon-envelope icon-animated-vertical"></i>
								<span class="badge badge-success" id="offLineMessage">${offLineMessageCount}</span>
							</a>

							<ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close" id="recent">
								<li class="dropdown-header">
									<i class="icon-envelope-alt"></i>
									${offLineMessageCount}条离线消息
								</li>
							</ul>
						</li>	

						<li class="light-blue">
							<a data-toggle="dropdown" href="#" class="dropdown-toggle">
								<img class="nav-user-photo" src="assets/avatars/${loginUser.icon}" alt="登陆" />
								<span class="user-info">
									<small>欢迎光临</small>
								</span>

								<i class="icon-caret-down"></i>
							</a>

							<ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i class="icon-cog"></i>
										设置
									</a>
								</li>


								<li class="divider"></li>

								<li>
									<a href="<%=path%>/logout.action">
										<i class="icon-off"></i>
										退出
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
							<a href="<%=path%>/index.action">
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
									<a href="<%=path%>/article/articleList.action">
										<i class="icon-double-angle-right"></i>
										文章
									</a>
								</li>	

								<li>
									<a href="<%=path%>/article.action">
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
												<h4 class="lighter"><small>我来出题目</small></h4>

											</div>

											<div class="widget-body">
												<div class="widget-main">							
													
													<div class="step-content row-fluid position-relative" id="step-container">
														<div class="step-pane active" id="step1">

															<div class="form-horizontal" id="sample-form" >
																<div class="form-group has-warning">
																	<label class="col-xs-12 col-sm-3 control-label no-padding-right">问卷名</label>

																	<div class="col-xs-12 col-sm-5">
																		<span class="block input-icon input-icon-right">
																			<input type="text" id="inputWarning" class="width-100" />
																
																		</span>
																	</div>
																</div>

																<div class="form-group has-error">
																	<label class="col-xs-12 col-sm-3 col-md-3 control-label no-padding-right" >问卷说明</label>

																	<div class="col-xs-12 col-sm-5">
																		<span class="block input-icon input-icon-right">
																			<textarea rows="4" class="width-100" id='describtion'></textarea>																			
																		</span>
																	</div>
																</div>
																
																<div class="choicequestion" >																
																	<div class="form-group has-success">
																		<hr/>																	
																		<!-- <label class="col-xs-12 col-sm-3 control-label no-padding-right">问题</label> -->
																		<div class="ques">
																			<span class="queslabel">问题
																			
																			<input type="text"  style='width:400px;' class="question1" /><input type='text' style='width:45px;font-size:14px;' class='vector' placeholder='维度'/>
																			</span>
																		</div>	
																	</div>

																	<div class="choiceoption">
																		<div class="mystyle">											
																			<span class='option'>选项</span>
																									
																			<input type='text' style='width:267px;'/><input type='text' style='width:45px;font-size:14px;' class='fenzhi' placeholder='分值'/>									
																			<button class="btn addoption">添加选项</button>
																		</div>
																																																																																																																																																																														
																	</div>																	
																</div>															
															</div>
														</div>										
												
													</div>

													<hr />
													<div class="row-fluid wizard-actions">	
														<button id="addquestion1" class="btn btn-success">
															添加问题
															<i class="icon-on-right"></i>
														</button>																												
																										
														<button id="save" type="submit" class="btn btn-success">
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

		</div><!-- /.main-container -->

		<!-- page specific plugin scripts -->
		<script src="<%=path%>/js/jquery.min.js"></script>
		<script src="<%=path%>/assets/js/bootstrap.min.js"></script>

		<script src="<%=path%>/assets/js/ace-elements.min.js"></script>
		<script src="<%=path%>/assets/js/ace.min.js"></script>
		<script src="<%=path%>/js/editQuestionaire.js"></script>

		<script>
			var basepath = $("#basePath").val();
			var k=1;
			var total=parseInt(${shortOffLineMessages.size()});
			
				if(total<4){
					<c:forEach var="sender" items="${offLineUserMessages}">
						var name="${sender.username}";
						var icon="${sender.icon}";
						if(parseInt("${sender.privilege}")!=4){
							icon=basepath+"assets/avatars/"+icon;
						}
						var id="${sender.userId}";
						var time="${sender.dateTime}";
						var content="${sender.content}";
						var clock=time.substr(11,2);
						var min=time.substr(14,2);
						if(k<=total){
							$("#recent").append("<li><img src='"+icon+"' class='msg-photo'/>"
											+"<span class='msg-body'>"
											+"<span class='msg-title'>"+"<span class='blue'><a href='"
											+basepath+"chat.action?id="
											+id+"'>"+name
											+"</a></span>"
											+content
											+"<span class='msg-time'>"
											+"<i class='icon-time'></i>"
											+"<span>"+clock+":"+min+"</span>"
											+"</span></span></li>");
							k++;
						}
					</c:forEach>
				}else{
					<c:forEach var="sender" items="${offLineUserMessages}">
						var name="${sender.username}";
						var icon="${sender.icon}";
						if(parseInt("${sender.privilege}")!=4){
							icon=basepath+"assets/avatars/"+icon;
						}						
						var id="${sender.userId}";
						var time="${sender.dateTime}";
						var content="${sender.content}";
						var clock=time.substr(11,2);
						var min=time.substr(14,2);
						if(k<4){
							$("#recent").append("<li><img src='"+icon+"' class='msg-photo'/>"
											+"<span class='msg-body'>"
											+"<span class='msg-title'>"+"<span class='blue'><a href='"
											+basepath+"chat.action?id="
											+id+"'>"+name
											+":</a></span>"
											+content
										    +"<span class='msg-time'>"
											+" &nbsp;<i class='icon-time'></i>"
											+"<span>"+clock+":"+min+"</span></span> "
											+"</span></span></li>");
							k++;
						}
					</c:forEach>
				}
			$("#recent").append("<li>"
								+"<a href='"+basepath+"recent.action'>"
								+"查看所有消息"
								+"<i class='icon-arrow-right'></i>"
								+"</a></li>");
		
		</script>
	</body>
</html>

