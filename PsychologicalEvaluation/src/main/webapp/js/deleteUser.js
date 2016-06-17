$(window).load(function(){
	var num=$(".ui-inline-del");
	alert("马上去找");
	for(var i=0;i<num;i++){
		alert("开始找了");
		$(".ui-icon-trash").eq(i).click(function(){
			alert("找到这个类名了");
			var nodeid=$(this).parent().parent().parent().attr("id");
			alert("点中了");
			var jsonString = JSON.stringify(nodeid);
			$.post("deleteUser.action",
					{"jsonString":jsonString},
					function(result){
						alert("ok");
					}
			);
		});
	}
	
});