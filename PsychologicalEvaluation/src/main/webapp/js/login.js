$(function(){
	var basePath = $("#basePath").val();
	var send=true;
	
	function showandhide(show, hide) {
		$(show).removeClass("hidden");
		$(hide).addClass("hidden");
	}		
	
	$("#admin-login-submit").click(function(){
		var login={};
		var username=$.trim($("#login-username").val());
		var password=$.trim($("#login-password").val());
		if (username.length==0){
			send=false;
			$("#alert-login-username").text("用户名不能为空");
			showandhide("#alert-login-username","#alert-login-username-ok");
		}
		if(password.length==0){
			send=false;
			$("#alert-login-password").text("密码不能为空");
			showandhide("#alert-login-password","#alert-login-password-ok");			
		}
		if(send==true){
			login["username"]=username;
			login["password"]=password;
			var jsonString= JSON.stringify(login);
			//alert(jsonString);
			$.post(basePath+"adminLogin.action",{"jsonString":jsonString},function(result){
				/*密码错误或用户名不存在*/
				//alert(result);
				$("body").html(result);
			});
		}
	});
});