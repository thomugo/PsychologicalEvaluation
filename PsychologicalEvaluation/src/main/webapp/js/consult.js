//EL表达式在单独的文件中不起作用
var basePath=$("#basePath").val();
$(document).ready(
				function() {
					
					var ID = $("#userId").val();
					var USERNAME = $("#username").val();
					var ICON = $("#userIcon").val();
					var targetId =  $("#targetId").val();
					var targetUsername =  $("#targetUsername").val();
					var targetIcon =  $("#targetIcon").val();
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
/*						alert(jsonString);*/
						messageobj =  JSON.parse(jsonString);
						//alert(messageobj.content);
						//var messages = JSON.parse(jsonString);
						var date = new Date(messageobj.dateTime);
						//alert(date.toLocaleString());
						
						$('.dialogs').append(
								"<div class='itemdiv dialogdiv'>"
									+"<div class='user'>"
									+"<img  src='/PsychologicalEvaluation/assets/avatars/"+ targetIcon + " '/>"
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
									+"<img  src='/PsychologicalEvaluation/assets/avatars/"+ icon+ " '/>"
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