$(function(){
	var basePath = $("#basePath").val();	
	var send=true;
	
	function showandhide(show, hide) {
		$(show).removeClass("hidden");
		$(hide).addClass("hidden");
	}		
	
	
	$("#register-submit").click(function(){
		var uname=$.trim($("#registe-username").val());
		var pwd=$.trim($("#registe_password").val());
		var repwd=$.trim($("#registe_repassword").val());
		var tel=$.trim($("#telenumber").val());
		var email=$.trim($("#email").val());
		var age=$.trim($("#age").val());
		var vocation=$.trim($("#vocation").val());
		
		if(uname.length==0){
			send=false;
			$("#alert-username").text("用户名不能为空");
			showandhide("#alert-username","#alert-username-ok");
		}
		
		if(pwd.length==0){
			send=false;
			$("#alert-password").text("密码不能为空");
			showandhide("#alert-password","#alert-password-ok");			
		}
		
		if(repwd.length==0){
			send=false;
			$("#alert-password").text("密码不能为空");
			showandhide("#alert-password","#alert-password-ok");			
		}
		
		if(repwd!=pwd){
			send=false;
			$("#alert-repassword").text("密码与第一次输入不一致");
			showandhide("#alert-repassword","#alert-repassword-ok");			
		}
		
		if(tel.length==0){
			send=false;
			$("#alert-telenumber").text("手机号码不能为空");
			showandhide("#alert-telenumber","#alert-telenumber-ok");			
		}
		
		if(email.length==0){
			send=false;
			$("#alert-email").text("邮箱不能为空");
			showandhide("#alert-email","#alert-email-ok");			
		}
		
		if(age.length==0){
			send=false;
			$("#alert-age").text("年龄不能为空");
			showandhide("#alert-age","#alert-age-ok");			
		}
		
		if(vocation.length==0){
			send=false;
			$("#alert-vocation").text("职业不能为空");
			showandhide("#alert-vocation","#alert-vocation-ok");			
		}
			
		
		if(send==true){
			$.post(basePath+"registe.action",{"jsonString":jsonString},function(data){
				
			});
		}		
	});
});