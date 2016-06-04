<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="">
	<meta http-equiv="description" content="">
	<script type="text/javascript" src="<%=path%>/js/json2.js"></script>
	<script type="text/javascript" src="<%=path%>/js/jquery.min.js"></script>
	
    <title>管理员</title>
    <style type="text/css"><![CDATA[
        input#chat {
            width: 410px
        }

        #console-container {
            width: 400px;
        }

        #console {
            border: 1px solid #CCCCCC;
            border-right-color: #999999;
            border-bottom-color: #999999;
            height: 170px;
            overflow-y: scroll;
            padding: 5px;
            width: 100%;
        }

        #console p {
            padding: 0;
            margin: 0;
        }
    ]]></style>
    <script language="JavaScript">
        "use strict";
		var id = ${loginUser.id};
			alert("loginUser:"+ id);
        var Chat = {};

        Chat.socket = null;

        Chat.connect = (function(host) {
            if ('WebSocket' in window) {
                Chat.socket = new WebSocket(host);
            } else if ('MozWebSocket' in window) {
                Chat.socket = new MozWebSocket(host);
            } else {
                Console.log('Error: 浏览器不支持websocket聊天.');
                return;
            }

            Chat.socket.onopen = function () {
                Console.log('提示 : 聊天链接已建立');
                document.getElementById('chat').onkeydown = function(event) {
                    if (event.keyCode == 13) {
                        Chat.sendMessage();
                    }
                };
            };

            Chat.socket.onclose = function () {
                document.getElementById('chat').onkeydown = null;
                Console.log('提示: 聊天已关闭.');
            };

            Chat.socket.onmessage = function (message) {
                Console.log(message.data);
            };
        });

        Chat.initialize = function() {
            if (window.location.protocol == 'http:') {
                Chat.connect('ws://localhost:8080/PsychologicalEvaluation/consult');
            } else {
                Chat.connect('wss://localhost:8080/PsychologicalEvaluation/consult');
            }
        };

        Chat.sendMessage = (function() {
            var message = document.getElementById('chat').value;
            var map = {};
            var targetId=18;
            var flag = 5;  //0： 未读消息（默认值）/ 4 ：无效消息（测试连接使用）/5：广播消息
            if(id == 18)
            	targetId = 20;
            else
               targetId=18;
            if (message != '') {
            	map["message"] = message;
            	map["targetId"] = targetId;
            	map["onChat"] = true;
            	map["flag"] = flag;
            	var jsonString = JSON.stringify(map);
                Chat.socket.send(jsonString);
                document.getElementById('chat').value = '';
            }
        });

        var Console = {};

        Console.log = (function(message) {
            var console = document.getElementById('console');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.innerHTML = message;
            console.appendChild(p);
            while (console.childNodes.length > 25) {
                console.removeChild(console.firstChild);
            }
            console.scrollTop = console.scrollHeight;
        });

        Chat.initialize();

        document.addEventListener("DOMContentLoaded", function() {
            // Remove elements with "noscript" class - <noscript> is not allowed in XHTML
            var noscripts = document.getElementsByClassName("noscript");
            for (var i = 0; i < noscripts.length; i++) {
                noscripts[i].parentNode.removeChild(noscripts[i]);
            }
        }, false);

    </script>
</head>
<body>
	<s:debug> </s:debug>
<div>
	<h3>${(empty loginUser)?'您还没有登陆':'已经登陆' }</h3>
  	<s:if test="#loginUser empty">ddd</s:if>
  	<a href="${ pageContext.request.contextPath }/user.action">user</a>
  	<a href="${ pageContext.request.contextPath }/logout.action">退出</a>
  	<input type="hidden" class="${loginUser.id}" id = "target">
    <p>
        <input type="text" placeholder="type and press enter to chat" id="chat" />
    </p>
    <div id="console-container">
        <div id="console"/>
    </div>
</div>
</body>
</html>
