$(function(){
	
	function showandhide(show, hide) {
		$(show).removeClass("hidden");
		$(hide).addClass("hidden");
	}
	
	$("#registe-username").keyup(function(){
		showandhide("#alert-username-ok","#alert-username");
	});
	
	$("#registe_password").keyup(function(){
		showandhide("#alert-password-ok","#alert-password");
	});
	
	$("#registe_repassword").keyup(function(){
		showandhide("#alert-repassword-ok","#alert-repassword");
	});
	
	$("#telenumber").keyup(function(){
		showandhide("#alert-telenumber-ok","#alert-telenumber");
	});
	
	$("#email").keyup(function(){
		showandhide("#alert-email-ok","#alert-email");
	});
	
	$("#age").keyup(function(){
		showandhide("#alert-age-ok","#alert-age");
	});
	
	$("#vocation").keyup(function(){
		showandhide("#alert-vocation-ok","#alert-vocation");
	});	
});