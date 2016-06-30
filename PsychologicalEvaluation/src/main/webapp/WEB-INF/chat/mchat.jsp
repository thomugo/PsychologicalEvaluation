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
		<link rel="stylesheet" href="<%=path%>/style/family.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-skins.min.css" />
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
																											
														
													</div><!-- dialogs -->

													<div class="send">
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
		<script src="<%=path%>/assets/js/ace-elements.min.js"></script>
		<script src="<%=path%>/assets/js/ace.min.js"></script>

				
		<script type="text/javascript" src="<%=path%>/assets/js/ace-extra.min.js"></script>
		<script type="text/javascript" src="<%=path%>/js/json2.js"></script>
<!-- //EL表达式在单独的文件中不起作用 -->
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
						targetIcon=basePath+"assets/avatars/"+$("#targetIcon").val();
					}
					//alert("用户:" + USERNAME);
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
						//alert(messageString);
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
		<%-- //<script type="text/javascript" src="<%=path%>/js/consult.js"></script>  --%>
	</body>
</html>

