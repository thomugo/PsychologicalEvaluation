var save = true;

$("#wz_save").click(function(){
	var article = {};
	var title = $("#wz_title").val();
	var content = $("#editor2").val();
	var wz_class = $("#wz-class").val();
	title = $.trim(title);
	content = $.trim(content);
	if(title.length == 0)
		{
			//标记置空
			save = false;
			alert("文章标题未填写！");
			//设置焦点
			//$("#inputWarning").focus().select();
			
		}
	
	if(content.length == 0)
		{
			//标记置空
			save = false;
			alert("没有可保存的内容！");
			//设置焦点
			//$("#inputWarning").focus().select();
			
		}
	
	article["wz_title"] = title;
	article["wz_class"] = wz_class;
	article["wz_content"] = content;
	if(save){
		//用ajax请求服务器保存数据
		
		var jsonString = JSON.stringify(article);
		alert(jsonString);
		$.post("push.action", {"jsonString" : jsonString},
				function (){ 
					alert("保存成功2"); 
		}); 
	}
});

$("#push").click(function(){
	var article = {};
	var title = $("#wz_title").val();
	var content = $("#editor2").val();
	var wz_class = $("#wz-class").val();
	title = $.trim(title);
	content = $.trim(content);
	if(title.length == 0)
		{
			//标记置空
			save = false;
			alert("文章标题未填写！");
			//设置焦点
			//$("#inputWarning").focus().select();
			
		}
	
	if(content.length == 0)
		{
			//标记置空
			save = false;
			alert("没有可发布的内容！");
			//设置焦点
			//$("#inputWarning").focus().select();
			
		}
	
	article["wz_title"] = title;
	article["wz_class"] = wz_class;
	article["wz_content"] = content;
	if(save){
		//用ajax请求服务器保存数据
		var jsonString = JSON.stringify(article);
		alert(jsonString); 
		$.post("push.action", {"jsonString" : jsonString},
				function (){
					alert("发布成功"); 
		});
	}
});