var save = true;
$(document).ready(function() {
				//添加选择题
				$("#addquestion1").click(function() {
					$("#sample-form").append("<div class='choicequestion'>"
												+"<div class='form-group has-success'>"
												+"<hr/>"
												+"<label class=' col-sm-3 control-label no-padding-right'>问题</label>"
												+"<div class=' col-sm-5'>"
												+"<span class='block input-icon input-icon-right'>"
												+"<input type='text' class='width-100'/>"
												+"</span>"
												+"</div>"
												+"</div>"
												+"<div class=''>"
												+"<div class='mystyle'>"
												+"<span>选项</span>"
												
												+"<input type='text' style='width:267px;'/>"
												+"<input type='text' style='width:45px;font-size:14px;' class='fenzhi' placeholder='分值'/>"
												+"<button class='btn addoption'>添加选项"
												+"</div>"
												
												+"</button>"
												+"</div>"
												+"</div>");
					});
				
				//添加判读题
				$("#addquestion2").click(function() {
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
				            $(this).parent().parent().append("<div class='mystyle'>"
				            								+"<span>"
				            								+"选项"
				            								+"</span>"
															
															+"<input type='text' style='width:267px;'>"
															+"<input type='text' style='width:45px;font-size:14px;' class='fenzhi' placeholder='分值'/>"
															+"</div>"
															
															+"</div>");
				        };
				    });
				}
				ref = setInterval(function(){add();},1000);
			
			
				$("#save").click(function(){ 
				
						//选择题数目
						var question1Num = $(".choicequestion").length;
						alert("选择题: "+question1Num);
						//判断题数目
						var question2Num = $(".truefalsequestion").length;
						alert("判断题:"+question2Num);
						var questionaire = {};
						var choiceQuestions = new Array();
						var trueFalseQuestions = new Array();
						
						//取得试卷题目
						var title =  $("#title").val();

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
						}
						
						
						//遍历判断题
						for(var i=0; i<question2Num; i++)
						{
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
									alert("编辑成功"); 
						}); 
					}
			});
				
				
});
