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
		<title>管理员</title>
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
		<input type="hidden" id="basePath" value="<%=basePath%>">
  		<input type="hidden" id="userId"  value="${sessionScope.loginUser.id}"/> 
  		<input type="hidden" id="username"  value="${sessionScope.loginUser.username}"/> 
  		<input type="hidden" id="userIcon"  value="${sessionScope.loginUser.icon}"/> 
  		<input type="hidden" id="targetId"  value="${target.id}"/> 
  		<input type="hidden" id="targetIcon"  value="${target.icon}"/> 
  		<input type="hidden" id="targetUsername"  value="${target.username}"/> 
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
								<img class="nav-user-photo" src="<%=path%>/assets/avatars/${loginUser.icon}" alt="本地头像" />
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
						<li class="active">
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

						<li >
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
								
								<li>
									<a href="<%=path%>/questionaire.action">
										<i class="icon-double-angle-right"></i>
										添加测评问卷
									</a>
								</li>

								<li>
									<a href="<%=path%>/articleList.action">
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
							<a href="<%=path%>/user/userFeedback.jsp">
								<i class="icon-text-width"></i>
								<span class="menu-text"> 用户反馈 </span>
							</a>
						</li>
						
						<li>
							<a href="#" class="dropdown-toggle">
								<i class="icon-file-alt"></i>

								<span class="menu-text">
									其他页面
									<span class="badge badge-primary ">3</span>
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
							<li class="active">控制台</li>
						</ul><!-- .breadcrumb -->

						<div class="nav-search" id="nav-search">
							<form class="form-search">
								<span class="input-icon">
									<input type="text" placeholder="查找 ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
									<i class="icon-search nav-search-icon"></i>
								</span>
							</form>
						</div><!-- #nav-search -->
					</div>

					<div class="page-content">

						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<div class="alert alert-block alert-success">

									欢迎使用
									<strong class="green">
										我们的后台管理系统
										<small>(v1.2)</small>
									</strong>	
								</div>

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
													<div class="dialogs" id="dialog">
																	
														
													</div><!-- dialogs -->

													<div id="send">
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

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="icon-double-angle-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->

					
		<script src="<%=path%>/js/jquery.min.js"></script>
		<script src="<%=path%>/assets/js/bootstrap.min.js"></script>

		<script src="<%=path%>/assets/js/ace-elements.min.js"></script>
		<script src="<%=path%>/assets/js/ace.min.js"></script>
		<script src="<%=path%>/js/json2.js"></script>
		<script>
			var basepath = $("#basePath").val();
			var k=1;
			var total=parseInt(${shortOffLineMessages.size()});
			
				if(total<4){
					<c:forEach var="sender" items="${offLineUserMessages}">
						var name="${sender.username}";
						var icon="${sender.icon}";
						var id="${sender.userId}";
						var time="${sender.dateTime}";
						var content="${sender.content}";
						var clock=time.substr(11,2);
						var min=time.substr(14,2);
						if(k<=total){
							$("#recent").append("<li><img src='"+basepath+"assets/avatars/"+icon+"' class='msg-photo'/>"
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
						var id="${sender.userId}";
						var time="${sender.dateTime}";
						var content="${sender.content}";
						var clock=time.substr(11,2);
						var min=time.substr(14,2);
						if(k<4){
							$("#recent").append("<li><img src='"+basepath+"assets/avatars/"+icon+"' class='msg-photo'/>"
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
								
			<c:forEach var="mes" items="${unReadUserMessages}">
				$("#dialog").append("<div class='itemdiv dialogdiv'>"
									+"<div class='user'>"
									+"<img  src='"+basepath+"assets/avatars/"+ "${target.icon}" + " '/>"
									+"</div>"
									+"<div class='body'>"
									+"<div class='time'>"
									+"<i class='icon-time'></i>"
									+"<span class='orange'>" + "${mes.dateTime}" + "</span>"
									+"</div>"
									+"<div class='name'>"
									+"<span class='label label-info arrowed arrowed-in-right'>"+"${target.username}" +"</span>"
									+"</div>"
									+"<div class='text'>"+ "${mes.content}" +"</div>"
									+"<div class='tools'>"
									+"<a href='#' class='btn btn-minier btn-info'>"
									+"<i class='icon-only icon-share-alt'></i>"
									+"</a>"
									+"</div>"
									+"</div>"
									+"</div>");
			</c:forEach>
		</script>
<script type="text/javascript">
var basePath=$("#basePath").val();
$(document).ready(function(){
					
					var ID = $("#userId").val();
					var USERNAME = $("#username").val();
					var ICON ;
					
					if(parseInt("${user.privilege}")==4){
						ICON=$("#userIcon").val();
					}else{
						ICON=basePath+"assets/avatars/"+$("#userIcon").val();
					}
					var targetId =  $("#targetId").val();
					var targetUsername =  $("#targetUsername").val();
					var targetIcon;
					if(parseInt("${target.privilege}")==4){
						targetIcon=$("#targetIcon").val();
					}else{
						targeiIcon=basePath+"assets/avatars/"+$("#targetIcon").val();
					}
					var Chat = {};
					Chat.socket = null;
					Chat.connect = (function(host) {
						if ('WebSocket' in window) {
							Chat.socket = new WebSocket(host);
						} else if ('MozWebSocket' in window) {
							Chat.socket = new MozWebSocket(host);
						} else {
							alert('错误: 浏览器不支持websocket聊天.');
							return;
						}

						Chat.socket.onopen = function() {
							//Console.log('提示 : 聊天链接已建立');
							 $('#message').keydown(function(event){
								         if(event.which == 13)       //13等于回车键(Enter)键值,ctrlKey 等于 Ctrl
									        Chat.sendMessage();
				                })
							$("#send").click(function(){
								Chat.sendMessage();
							});
						};

						Chat.socket.onclose = function() {
							//document.getElementById('chat').onkeydown = null;
							//Console.log('提示: 聊天已关闭.');
							alert("聊天已关闭");
						};

						Chat.socket.onmessage = function(message) {
							Console.log(message.data);
						};
					});

					Chat.initialize = function() {
						if (window.location.protocol == 'http:') {
							Chat
									.connect('ws://localhost:8080/PsychologicalEvaluation/consult');
						} else {
							Chat
									.connect('wss://localhost:8080/PsychologicalEvaluation/consult');
						}
					};

					Chat.sendMessage = (function() {
						var message = $("#message").val();
						message = $.trim(message);
						var map = {};
						var flag = 0; // 0： 未读消息（默认值）/ 4 ：无效消息（测试连接使用）/5：广播消息
						//var targetId = TARGETID;
						if (message.length > 0) {
							map["message"] = message;
							map["targetId"] = targetId;
							map["onChat"] = true;
							map["flag"] = flag;
							var jsonString = JSON.stringify(map);
							Chat.socket.send(jsonString);
							Console.write(message);
						}
					});

					var Console = {};
					//解析收到的消息
					Console.log = (function(jsonString) {

						messageobj =  JSON.parse(jsonString);


						var date = new Date(messageobj.dateTime);
						
						$('.dialogs').append(
								"<div class='itemdiv dialogdiv'>"
									+"<div class='user'>"
									+"<img  src='"+ targetIcon + " '/>"
										+"</div>"
								+"<div class='body'>"
								+"	<div class='time'>"
										+"<i class='icon-time'></i>"
										+"<span class='orange'>" + date.toLocaleString() + "</span>"
								+"</div>"
								+"<div class='name'>"
										+"<span class='label label-info arrowed arrowed-in-right'>"+ targetUsername +"</span>"
								+"</div>"
								+	"<div class='text'>"+ messageobj.content +"</div>"
								+	"<div class='tools'>"
										+"<a href='#' class='btn btn-minier btn-info'>"
										+"<i class='icon-only icon-share-alt'></i>"
										+"</a>"
									+"</div>"
								+"</div>"
							+"</div>"
						);
						
					});
					//渲染自己发送的消息
					Console.write = (function(messageString) {
						var icon = ICON;
						var myDate = new Date();
						$('.dialogs').append(
								"<div class='itemdiv dialogdiv'>"
									+"<div class='user'>"
									+"<img  src='"+ icon+ " '/>"
										+"</div>"
								+"<div class='body'>"
								+"	<div class='time'>"
										+"<i class='icon-time'></i>"
										+"<span class='green'>"+ myDate.toLocaleString()+"</span>"
								+"</div>"
								+"<div class='name'>"
										+"<span class='label label-info arrowed arrowed-in-right'>" + USERNAME + "</span>"
								+"</div>"
								+	"<div class='text'>"+ messageString +"</div>"
								+	"<div class='tools'>"
										+"<a href='#' class='btn btn-minier btn-info'>"
										+"<i class='icon-only icon-share-alt'></i>"
										+"</a>"
									+"</div>"
								+"</div>"
							+"</div>"
						);
						
					});

					Chat.initialize();					
 					
}); 
</script>		
	</body>
</html>

