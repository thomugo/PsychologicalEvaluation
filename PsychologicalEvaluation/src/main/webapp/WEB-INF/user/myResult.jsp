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
		<title>我的测评结果</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" >
<meta http-equiv="Expires" CONTENT="0">
<meta http-equiv="Cache-Control" CONTENT="no-cache">
<meta http-equiv="Pragma" CONTENT="no-cache">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="<%=path%>/style/app-ad.re.css">
    <link rel="stylesheet" href="<%=path%>/style/qz_home.css"> 
		<link rel="stylesheet" href="<%=path%>/assets/css/bootstrap.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/font-awesome.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-skins.min.css" />
		
<style type="text/css">
.header a{ position: relative; color: #fff }
header .left .ico-back { display: block; // background: url(../image/img11.jpg) 0 50%; width: 30.5px; height: 45px; background-position: -217px -4.5px }
.header{ position: relative; color: #fff;background: #118bd0; text-align: center; line-height: 45px; height: 45px; overflow: hidden; z-index: 9 ;}
.header .left { position: absolute; margin-left: 7.5px }
.right { float: right }
.header .right { position: absolute; top: 0; right: 0; margin-right: 7.5px; white-space: nowrap }
.header .right .avatar { display: block; position: relative; line-height: 45px; width: 30px; height: 30px }
.header .right .avatar img { vertical-align: middle; width: 30px; height: 30px; border: 1px solid #fff; border-radius: 50%; overflow: hidden }
.head{
margin-top:0px;}
</style>

</head>

<body>
<div class="header head">
    	<div class="left">
                <a href="<%=path%>/index.jsp" class="ico ico-back icon"></a>       
    	</div>
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
													<s:if test="user.privilege==4">								
													<img id="avatar" class="editable img-responsive" alt="微信头像" src="${user.icon}"  height="100" width="90"/>
													</s:if>
													<s:else>
													<img id="avatar" class="editable img-responsive" alt="本地头像" src="<%=path%>/assets/avatars/${user.icon}" height="100" width="90"/>
													</s:else>												
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
																	<s:if test="user.privilege==4">								
																	<img class="pull-left" alt="微信头像" src="${user.icon}" />
																	</s:if>
																	<s:else>
																	<img class="pull-left" alt="本地头像" src="<%=path%>/assets/avatars/${user.icon}">
																	</s:else>
																	<a class="user" href="#"> <s:property value="#answer.title" /> </a>
																	<br/>
																	<s:property value='#answer.result.replace("<br>"," ").replace("<br/>", " ")' />													

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
