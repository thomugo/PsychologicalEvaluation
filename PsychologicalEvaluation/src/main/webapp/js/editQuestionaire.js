var save = true;
$(document).ready(function() {
				//添加选择题
				$("#addquestion1").click(function() {
					//alert("addquestion");
					$("#question1").append("<div class='choicequestion'>"
								+ "<input type='text'  class='question1'>问题<br/>"
									+ "<div class='choiceoption'>"
										+ "<input type='text'  class='option' >选项"
									+ "</div>"
								+ "<button class='addoption'>添加选项</button>"
								+ "</div>");
					});
				
				//添加判读题
				$("#addquestion2").click(function() {
					//alert("addquestion2");
					$("#question2").append("<div class='truefalsequestion'>"
							+ "<input type='text'  class='question2'>问题<br/>"
							/*+ "<div class='options'>"
			   	 				+ "<input type='text'  class='option' >option1"
			   	 				+ "<input type='text'  class='option' >option2"
			   	 			+ "</div>"*/
			   	 			+ "</div>"
					);
				});
				
				
				//为添加选项按钮添加定时器定时检测按钮个数以触发点击事件
				//添加选择题选项
				function add(){
				    $('.addoption').each(function(i){
				        this.onclick=function(){
				            //alert(i);
				            $(this).siblings("div").append("<input type='text' class='option' >选项");
				        };
				    });
				}
				ref = setInterval(function(){add();},1000);
			
			
				$("#save").click(function(){ 
				
						//选择题数目
						var question1Num = $(".choicequestion").length;
						alert("choicequestionNum: "+question1Num);
						//判断题数目
						var question2Num = $(".truefalsequestion").length;
						alert("judgequestionNum:"+question2Num);
						var questionaire = {};
						var choiceQuestions = new Array();
						var trueFalseQuestions = new Array();
						
						//取得试卷题目
						var title =  $("#title").val();
						//alert($("#title").length);
					 	//去除前后空格
					 	title = $.trim(title);
					 	if(title.length == 0)
					 		{
					 			//标记置空
					 			save = false;
					 			alert("问卷标题不能为空！！！");
					 			//设置焦点
					 			$("#title").focus().select();
					 		}
					 	
					 	
						//遍历选择题
						for(var i=0; i<question1Num; i++)
						{
						 	var map1 = {};
						 	question1 =  $(".question1").eq(i).val();
						 	//去除前后空格
						 	question1 = $.trim(question1);
						 	if(question1.length == 0)
						 		{
						 			//标记置空
						 			save = false;
						 			alert("问题不能为空！！！");
						 			//设置焦点
						 			$(".question1").eq(i).focus().select();
						 		}
						 	
						 	var options = $(".choiceoption").eq(i).children().map(function() {
						 			option = $.trim(this.value);
						 			//alert("option="+option.length);
						 			if(option.length == 0)
						 				{
						 					//标记置空
						 					save = false;
						 					alert("选项不能为空！！！");
						 					//设置焦点
						 					this.focus().select();
						 				}
						 			return option;
						 	  	}).get().join(',');
						 	alert(options);
						 	map1["question"] = question1;
						 	map1["options"] = options;
						 	choiceQuestions[i] = map1;
						 	//alert("choice over");
						}
						
						
						//遍历判断题
						for(var i=0; i<question2Num; i++)
						{
							//alert("judge start");
							//取得判断题问题
						 	question2 =  $(".question2").eq(i).val();
						 	//去除前后空格
						 	question2 = $.trim(question2);
						 	if(question2.length == 0)
						 		{
						 			//标记置空
						 			save = false;
						 			alert("问题不能为空！！！");
						 			//设置焦点
						 			$(".question2").eq(i).focus().select();
						 		}
						 	//取得判断题选项--------------------------
						 	/*var options = $(".options").eq(i).children().map(function() {
					 			option = $.trim(this.value);
					 			//alert("option="+option.length);
					 			if(option.length == 0)
					 				{
					 					//标记置空
					 					save = false;
					 					alert("选项不能为空！！！");
					 					//设置焦点
					 					this.focus().select();
					 				}
					 			return option;
					 	  	}).get().join(',');
						 		alert(options);
						 		-------------------------------------------
						 		*/
						 		
						 		trueFalseQuestions [i] = question2;
						}
						
						
						//封装试卷
						questionaire["title"] = title;
						questionaire["choiceQuestions"] = choiceQuestions;
						questionaire["trueFalseQuestions"] = trueFalseQuestions;
						
					if(save){
						//用ajax请求服务器保存数据
						var jsonString = JSON.stringify(questionaire);
						$.post("editQuestionaire.action", {"jsonString" : jsonString},
								function (){ 
									alert("edit succeed"); 
						}); 
					}
			});
				
				
});
