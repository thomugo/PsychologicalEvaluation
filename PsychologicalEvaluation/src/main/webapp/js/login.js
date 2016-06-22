$(function(){
	var basePath = $("#basePath").val();

	
	function showandhide(show, hide) {
		$(show).removeClass("hidden");
		$(hide).addClass("hidden");
	}	
	
	$("#login-username").keyup(function(){
		showandhide("#alert-login-username-ok","#alert-login-username");
	});
	
	$("#login-password").keyup(function(){
		showandhide("#alert-login-password-ok","#alert-login-password");
	});
	
	
	$("#admin-login-submit").click(function(){
		var send=true;
		var login={};
	});		
    document.getElementById('admin-login-form').onsubmit = function(e) {  
        var e = e || window.event;  
        var test = check();
        //alert(test);
        if(!test){
        	 if (e.preventDefault) e.preventDefault();  
             else window.event.returnValue = false;  
        }else{
        	window.event.returnValue = true;
        }       
    }  
	//$("#admin-login-submit").click(function(){
	function check(){
		//var login={};
		send = true;
		var username=$.trim($("#login-username").val());
		var password=$.trim($("#login-password").val());
		if (username.length==0){
			//alert("用户名不能为空");
			send=false;
			$("#alert-login-username").text("用户名不能为空");
			showandhide("#alert-login-username","#alert-login-username-ok");
		}
		if(password.length==0){
			//alert("密码不能为空");
			send=false;
			$("#alert-login-password").text("密码不能为空");
			showandhide("#alert-login-password","#alert-login-password-ok");			
		}
		/*if(send==true){
			login["username"]=username;
			login["password"]=password;
			var jsonString= JSON.stringify(login);
			//alert(jsonString);
			$.post(basePath+"adminLogin.action",{"jsonString":jsonString},function(result){
				密码错误或用户名不存在
				//alert(result);
				if(result == "success"){
					window.location=basePath+"index.action";
				}else{
					$("body").html(result);
				}
			});
		}*/
		return send;
	}
});
