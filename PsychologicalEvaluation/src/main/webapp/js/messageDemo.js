$(document).ready(function() {
	
	$('#message').click(function(){
		alert("message");
		$.get("messageCount.action?",
				function (result){ 
					alert(result); 
		}); 
		
		$.get("messages.action?",
				function (result){ 
					alert(result); 
		}); 
		
		var map = {};
		var broadcast = 3; //用户看过3条广播消息后
		var fromId = 18; //用户看过来自ID为18 的离线消息后
		map["broadcast"] = broadcast;
		map["fromId"] = fromId;
		var jsonString = JSON.stringify(map);
		$.post("updateMessage.action", {"jsonString" : jsonString},
				function (result){ 
					alert(result); 
		}); 
		
	});
	
});