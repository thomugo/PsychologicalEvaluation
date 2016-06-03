
$(document).ready(function() {
	var save = true;
	var answer = {};                //answer{"choiceQuestions":choiceQuestions}, answer{"judgeQuestions":judgeQuestions};
	var choiceQuestions = []; //answer1{"question":id}, answer1{"option":id}, choiceQuestions[answer1];
	var judgeQuestions = [];  //answer2{"question":id}, answer2{"option":id}, judgeQuestions[answer2];
	
	$("#save").click(function(){
		//检查是否有选择题未作
		$('.choiceQuestions').each(function () {
			//alert("in checkbox");
			var check = $(this).find('input[name="optionValue"]:checked').length;
			//alert(check);
			if(check == 0)
			{
				alert("有问题未填写!!!");
				save = false;
			}
		});
		
		//检查是否有判断题未作
		//'input:radio:checked' （过滤器中间不能有空格）
		$('.trueFalseQuestions').each(function () {
			//alert("in radio");
			var check = $(this).find('input:radio:checked').length;
			//alert(check);
			if(check == 0)
			{
				alert("有问题未填写!!!");
				save = false;
			}
		});
		
		if(save){
			//获取选择题答案
			//answer1{"question":id}, answer1{"option":id}, choiceQuestions[answer1];
			$('.choiceQuestions').each(function () {
				alert("get choice options");
				$(this).find('input[name="optionValue"]:checked').each(function(){
					var answer1 = {};
					alert("question id:" + $(this).attr("id"));
					answer1["question"] = $(this).attr("id");
					alert("option id:" + $(this).val());
					answer1["option"] = $(this).val();
					choiceQuestions.push(answer1);
				})
				
			});
			
			//获取radio值
			/*$('input:radio:checked').each(function () {
				alert("radio 值");
				alert($(this).val());
			});*/
			//获取判断题答案
			//answer2{"question":id}, answer2{"option":id}, judgeQuestions[answer2];
			$('.trueFalseQuestions').each(function () {
				$(this).find('input:radio:checked').each(function(){
					var answer2 = {};
					alert("question id: " + $(this).attr("name"));//获取id属性时出现bug
					answer2["question"] = $(this).attr("name");
					alert("val:" + $(this).val());
					answer2["option"] = $(this).val();
					judgeQuestions.push(answer2);
				});
			
			});
			
			var questionaireId = $("#questionaire").attr("name");
			
			//answer{"questionaire": questionaireId};
			//answer{"choiceQuestions":choiceQuestions}, answer{"judgeQuestions":judgeQuestions};
			//利用ajax向服务器json格式的试卷答案
			answer["questionaire"] = questionaireId;
			answer["choiceQuestions"] = choiceQuestions;
			answer["judgeQuestions"] = judgeQuestions;

			
			var jsonString = JSON.stringify(answer);
			$.post("saveAnswer.action", {"jsonString" : jsonString}, function(result){
				$("body").html(result)
			})
			
			//location.href = "showAnswer.action";//页面重定向
		}//save over
		 
		
		
	});//save click over
	
	//获取问卷结果
	//获取选择题结果
	
	
	
	
});