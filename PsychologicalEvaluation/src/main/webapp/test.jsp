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
		<title>我的测评结果</title>

		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="<%=path%>/assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/font-awesome.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-skins.min.css" />

</head>

<body>
		<input type="hidden" value="<%=basePath %>" id="basePath">
		<div class="main-container" id="main-container">

			<div class="main-container-inner">


				<div class="main-content">

					<div class="page-content">

						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<div>
									<div id="user-profile-1" class="user-profile row">
										<div class="col-xs-12 col-sm-3 center">
											<div>
												<span class="profile-picture">
													<img id="avatar" class="editable img-responsive" alt="Alex's Avatar" src="<%=path%>/assets/avatars/${user.icon}", height="100" width="90"/>
												</span>

												<div class="space-4"></div>

												<div class="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
													<div class="inline position-relative">
														<a href="#" class="user-title-label dropdown-toggle" data-toggle="dropdown">
															<i class="icon-circle light-green middle"></i>
															&nbsp;
															<span class="white">${user.username}</span>
														</a>
													</div>
												</div>
											</div>

											<div class="space-6"></div>


											<div class="hr hr12 dotted"></div>

											<div class="hr hr16 dotted"></div>
										</div>

										<div class="col-xs-12 col-sm-9">
											<div class="space-12"></div>

											<div class="profile-user-info profile-user-info-striped">
												<div class="profile-info-row">
													<div class="profile-info-name"> 用户名 </div>

													<div class="profile-info-value">
														<span class="editable" id="username">${user.username }</span>
													</div>
												</div>

												<div class="profile-info-row">
													<div class="profile-info-name"> 职业 </div>

													<div class="profile-info-value">
														<span class="editable" id="vocation">${user.vocation}</span>
													</div>
												</div>

												<div class="profile-info-row">
													<div class="profile-info-name"> 年龄 </div>

													<div class="profile-info-value">
														<span class="editable" id="age">${user.age }</span>
													</div>
												</div>
												
												<div class="profile-info-row">
													<div class="profile-info-name"> 性别 </div>

													<div class="profile-info-value">
														<span class="editable" id="gender">
														<s:if test="user.gender==0">
															男
														</s:if>
														<s:else>
															女
														</s:else>
														</span>
													</div>
												</div>

												<div class="profile-info-row">
													<div class="profile-info-name"> Joined </div>

													<div class="profile-info-value">
														<span class="editable" id="signup">${user.dateTime }</span>
													</div>
												</div>


												
											</div>

											<div class="space-20"></div>

											<div class="widget-box transparent">
												<div class="widget-header widget-header-small">
													<h4 class="blue smaller">
														<i class="icon-rss orange"></i>
														最近评测情况
													</h4>
													<input type="hidden" value = "${user.icon }" id="icon">
													<input type="hidden" value="<%=path%>"  id="path">
													
													<div class="widget-toolbar action-buttons">
														<a href="#" data-action="reload">
															<i class="icon-refresh blue"></i>
														</a>

														&nbsp;
														<a href="#" class="pink">
															<i class="icon-trash"></i>
														</a>
													</div>
												</div>

												<div class="widget-body">
													<div class="widget-main padding-8">
														<div id="profile-feed-1" class="profile-feed">
															
															<s:iterator value="answers"  var="answer">
															<div class="profile-activity clearfix answer" >
																<div>
																	<img class="pull-left" alt="Alex Doe's avatar" src="<%=path%>/assets/avatars/${user.icon}" />
																	<a class="user" href="#"> <s:property value="#answer.title" /> </a>
																	<br/>
																	<s:property value="#answer.result" />													

																	<div class="time">
																		<i class="icon-time bigger-110"></i>
																		<s:property value="#answer.dateTime" />
																	</div>
																</div>

																<div class="tools action-buttons">
																	<a href="<%=basePath %>getResultExcel.action?answerId=${answer.id}" class="green">
																		<i class="icon-download-alt bigger-125"></i>
																	</a>
																	
																	<a href="#" class="blue">
																		<i class="icon-pencil bigger-125"></i>
																	</a>
																	
																	<a href="#" class="red" >
																		<i class="icon-remove bigger-125" id="${answer.id }"></i>
																	</a>
																</div>
															</div>
															</s:iterator>

															
														</div>
													</div>
												</div>
											</div>

											<div class="hr hr2 hr-double"></div>

											<div class="space-6"></div>

											<div class="center">
												<i href="" class="btn btn-sm btn-primary">
													<i class="icon-rss bigger-150 middle"></i>
													<span class="bigger-110" id="more">查看更多信息</span>
													<input type="hidden" id="pageNum"  value="${pageNum}"/> 
													<input type="hidden" id="userId"  value="${user.id}"/> 
													<input type="hidden" id="totalPages"  value="${totalAnswerPages}"/> 
													<i class="icon-on-right icon-arrow-right"></i>
												</i>
											</div>
										</div>
									</div>
			
			
	
								</div>

								<!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div><!-- /.main-content -->

			</div><!-- /.main-container-inner -->

		</div><!-- /.main-container -->

		<!-- basic scripts -->
		<script src="<%=path%>/js/jquery.min.js"></script>
		<script src="<%=path%>/assets/js/bootstrap.min.js"></script>
		<script src="<%=path%>/js/profile.js"></script>
	</body>
</html>
