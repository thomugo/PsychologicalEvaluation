var save = true;
$(document).ready(
			function() {
				$("#addquestion1").click(function() {
					//alert("addquestion");
					$("#question").append("<div class='choicequestion'>"
																+ "<label>问题</label>"
																+ "<input type='text'  class='question'><br/>"
																+ "<div class='choiceoption'>"
																+ "<label>选项</label>"
																+ "<input type='text'  class='option' >"
																+ "</div>"
																+ "<button class='addoption'>添加选项</button>"
														+ "</div>");
				});
				
				//为添加选项按钮添加定时器定时检测按钮个数以触发点击事件
				function add(){
				    $('.addoption').each(function(i){
				        this.onclick=function(){
				            //alert(i);
				            $(this).siblings("div").append("<input type='text' class='option'>選項");
				        };
				    });
				}
				ref = setInterval(function(){add();},1000);
			
			
				$("#save").click(function(){ 
						var questionNum = $(".choicequestion").length;
						alert("题数: "+questionNum);
						var questions = new Array();
					
						for(var i=0; i<questionNum; i++)
						{
						 	var map = {};
						 	question =  $(".question").eq(i).val();
						 	//去除前后空格
						 	question = $.trim(question);
						 	if(question.length == 0)
						 		{
						 			//标记置空
						 			save = false;
						 			alert("问题不能为空！！！");
						 			//设置焦点
						 			$(".question").eq(i).focus().select();
						 		}
						 	
						 	var options = $(".choiceoption").eq(i).children().map(function() {
						 			option = $.trim(this.value);
						 			//alert("option="+option.length);
						 			if(option.length == 0)
						 				{
						 					//标记置空
						 					save = false;
						 					alert("輸入選項！");
						 					//设置焦点
						 					this.focus().select();
						 				}
						 			return option;
						 	  	}).get().join(',');
						 	alert(options);
						 	map["question"] = question;
						 	map["options"] = options;
						 	questions[i] = map;
						}
						
					if(save){
						//用ajax请求服务器保存数据
						var jsonString = JSON.stringify(questions);
						$.post("addQuestion.action", {"jsonString" : jsonString},
								function (){ 
									alert("success"); 
						}); 
					}
			});
				
				
});

/*function ajaxTransferObject(choice_question, options) {
	this.choice_question = choice_question;
	this.options = options;
}*/