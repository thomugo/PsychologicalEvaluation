<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>心理学从这里开始</title>
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
		<script src="<%=path%>/assets/js/ace-extra.min.js"></script>
		<!-- ace settings handler -->

		
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

		<!--[if lt IE 9]>
		<script src="<%=path%>/assets/js/html5shiv.js"></script>
		<script src="<%=path%>/assets/js/respond.min.js"></script>
		<![endif]-->
	</head>

	<body>

  		<input type="hidden" id="userId"  value="${sessionScope.loginUser.id}"/> 
  		<input type="hidden" id="username"  value="${sessionScope.loginUser.username}"/> 
  		<input type="hidden" id="userIcon"  value="${sessionScope.loginUser.icon}"/> 
  		<input type="hidden" id="targetId"  value="${target.id}"/> 
  		<input type="hidden" id="targetIcon"  value="${target.icon}"/> 
  		<input type="hidden" id="targetUsername"  value="${target.username}"/> 
  		<input type="hidden" id="basePath" value="<%=basePath%>">

		<div class="main-container" id="main-container">
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>

			<div class="main-container-inner">

				<div class="main-content">

					<div class="page-content">

						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<div class="row">

									<div class="col-sm-6">
										<div class="widget-box ">
											<div class="widget-header">
												<h4 class="lighter smaller">
													<i class="icon-comment blue"></i>
													会话
												</h4>
											</div>

											<div class="widget-body">
												<div class="widget-main no-padding">
													<div class="dialogs">
														

														<div class="itemdiv dialogdiv">
															<div class="user">
																<img alt="谷雨's Avatar" src="<%=path%>/assets/avatars/user.jpg" />
															</div>

															<div class="body">
																<div class="time">
																	<i class="icon-time"></i>
																	<span class="orange">2分钟以前</span>
																</div>

																<div class="name">
																	<a href="#">谷雨</a>
																	<span class="label label-info arrowed arrowed-in-right">管理员</span>
																</div>
																<div class="text">欢迎大家使用我们做的后台管理系统.</div>

																<div class="tools">
																	<a href="#" class="btn btn-minier btn-info">
																		<i class="icon-only icon-share-alt"></i>
																	</a>
																</div>
															</div>
														</div>														
														
													</div><!-- dialogs -->

													<div ="send">
														<div class="form-actions">
															<div class="input-group">
																<input placeholder="在这里输入信息 ..." type="text" class="form-control" name="message" id="message"/>
																<span class="input-group-btn">
																	<button class="btn btn-sm btn-info no-radius" type="button" id="send">
																		<i class="icon-share-alt" ></i>
																		发送
																	</button>
																</span>
															</div>
														</div>
													</div>
													
												</div><!-- /widget-main -->
											</div><!-- /widget-body -->
										</div><!-- /widget-box -->
									</div><!-- /span -->
								</div><!-- /row -->

								<!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div><!-- /.main-content -->

			</div><!-- /.main-container-inner -->

		</div><!-- /.main-container -->

		<!-- basic scripts -->

		<!--[if !IE]> -->
		<script type="text/javascript" src="<%=path%>/js/jquery.min.js"></script>

		<script src="<%=path%>/assets/js/bootstrap.min.js"></script>
		<script src="<%=path%>/assets/js/typeahead-bs2.min.js"></script>

		<script src="<%=path%>/assets/js/date-time/bootstrap-datepicker.min.js"></script>
		<script src="<%=path%>/assets/js/jqGrid/jquery.jqGrid.min.js"></script>
		<script src="<%=path%>/assets/js/jqGrid/i18n/grid.locale-en.js"></script>
		<!-- ace scripts -->

		<script src="<%=path%>/assets/js/ace-elements.min.js"></script>
		<script src="<%=path%>/assets/js/ace.min.js"></script>

		<!-- inline scripts related to this page -->
				
		<script type="text/javascript" src="<%=path%>/assets/js/ace-extra.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/json2.js"></script>

		<script type="text/javascript" src="<%=path%>/js/consult.js"></script> 
	</body>
</html>

