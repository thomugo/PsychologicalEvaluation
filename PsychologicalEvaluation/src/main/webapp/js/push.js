
jQuery(function($){
	
	function showErrorAlert (reason, detail) {
		var msg='';
		if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
		else {
			console.log("error uploading file", reason, detail);
		}
		$('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+ 
		 '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
	}

	
	$('#editor2').css({'height':'200px'}).ace_wysiwyg({
		toolbar_place: function(toolbar) {
			return $(this).closest('.widget-box').find('.widget-header').prepend(toolbar).children(0).addClass('inline');
		},
		toolbar:
		[
			'加粗',
			{name:'italic' , title:'斜体'},
			'删除线',
			null,
			'insertunorderedlist',
			'insertorderedlist',
			null,
			'justifyleft',
			'justifycenter',
			'justifyright'
		],
		speech_button:false
	});


	$('[data-toggle="buttons"] .btn').on('click', function(e){
		var target = $(this).find('input[type=radio]');
		var which = parseInt(target.val());
		var toolbar = $('#editor1').prev().get(0);
		if(which == 1 || which == 2 || which == 3) {
			toolbar.className = toolbar.className.replace(/wysiwyg\-style(1|2)/g , '');
			if(which == 1) $(toolbar).addClass('wysiwyg-style1');
			else if(which == 2) $(toolbar).addClass('wysiwyg-style2');
		}
	});


	

	//Add Image Resize Functionality to Chrome and Safari
	//webkit browsers don't have image resize functionality when content is editable
	//so let's add something using jQuery UI resizable
	//another option would be opening a dialog for user to enter dimensions.
	if ( typeof jQuery.ui !== 'undefined' && /applewebkit/.test(navigator.userAgent.toLowerCase()) ) {
		
		var lastResizableImg = null;
		function destroyResizable() {
			if(lastResizableImg == null) return;
			lastResizableImg.resizable( "destroy" );
			lastResizableImg.removeData('resizable');
			lastResizableImg = null;
		}

		var enableImageResize = function() {
			$('.wysiwyg-editor')
			.on('mousedown', function(e) {
				var target = $(e.target);
				if( e.target instanceof HTMLImageElement ) {
					if( !target.data('resizable') ) {
						target.resizable({
							aspectRatio: e.target.width / e.target.height,
						});
						target.data('resizable', true);
						
						if( lastResizableImg != null ) {//disable previous resizable image
							lastResizableImg.resizable( "destroy" );
							lastResizableImg.removeData('resizable');
						}
						lastResizableImg = target;
					}
				}
			})
			.on('click', function(e) {
				if( lastResizableImg != null && !(e.target instanceof HTMLImageElement) ) {
					destroyResizable();
				}
			})
			.on('keydown', function() {
				destroyResizable();
			});
	    }
		
		enableImageResize();

	}


});
var save = true;
var basePath = $("#basePath").val();
$("#wz_save").click(function(){
	var article = {};
	var title = $("#wz_title").val();
	var content = $("#editor2").val();
	var wz_class = $("#wz-class").val();
	alert(wz_class);
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
	
	article["title"] = title;
	article["className"] = wz_class;
	article["content"] = content;
	if(save){
		//用ajax请求服务器保存数据
		var jsonString = JSON.stringify(article);
		//alert(jsonString);
		$.post("editArticle.action", {"jsonString" : jsonString},
				function (data){ 
				//	alert(data); 
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
	
	article["title"] = title;
	article["className"] = wz_class;
	article["content"] = content;
	if(save){
		//用ajax请求服务器保存数据
		var jsonString = JSON.stringify(article);
		//alert(jsonString); 
		$.post(basePath+"editArticle.action", {"jsonString" : jsonString},
				function (data){
					//alert(data); 
		});
	}
});

