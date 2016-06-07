var save = true;
$(document).ready(function() {
				//添加选择题
				$("#addquestion1").click(function() {
					$("#sample-form").append("<div class='choicequestion'>"
												+"<div class='form-group has-success'>"
												+"<hr/>"
												+"<div class='ques'>"
												+"<span class='queslabel'>问题"
												+"<input type='text' style='width:400px;' class='question1'/><input type='text' style='width:45px;font-size:14px;' class='vector' placeholder='维度'/>"
												+"</span>"
												+"</div>"
												+"</div>"
												+"<div class='choiceoption'>"
												+"<div class='mystyle'>"
												+"<span class='option'>选项</span>"
												
												+"<input type='text' style='width:267px;'/>"
												+"<input type='text' style='width:45px;font-size:14px;' class='fenzhi' placeholder='分值'/>"
												+" "
												+"<button class='btn addoption'>添加选项"
												+"</div>"
												
												+"</button>"
												+"</div>"
												+"</div>");
					});
				
				//添加判读题
/*				$("#addquestion2").click(function() {
					$("#question2").append("<div class='truefalsequestion'>"
							+ "<input type='text'  class='question2'>问题<br/>"
			   	 			+ "</div>"
					);
				});
				*/
				
				//为添加选项按钮添加定时器定时检测按钮个数以触发点击事件
				//添加选择题选项
				function add(){
				    $('.addoption').each(function(i){
				        this.onclick=function(){
				            $(this).parent().parent().append("<div class='mystyle'>"
				            								+"<span class='option'>"
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
/*						var arr=[];
						arr=$('input');
						var inputNum=$('input').length;
						for(var i=0;i<inputNum;i++){
							if(arr[i]==''){
								alert("有未填写的地方！");
								break;
							}
							else continue;
						}*/
						
						//选择题数目
						var question1Num = $(".choicequestion").length;
						alert("共有 "+question1Num+"题");
						//判断题数目
						//var question2Num = $(".truefalsequestion").length;
						//alert("判断题:"+question2Num);
						var questionaire = {};
						var choiceQuestions = new Array();
						//var trueFalseQuestions = new Array();
						
						//取得试卷题目
						var title =  $("#inputWarning").val();
						var describtion= $("#describtion").val();

					 	//去除前后空格
					 	title = $.trim(title);
					 	if(title.length == 0)
					 		{
					 			//标记置空
					 			save = false;
					 			alert("问卷名未填写！");
					 			//设置焦点
					 			$("#inputWarning").focus().select();
					 		}
					 	
					 	
						//遍历选择题
						for(var i=0; i<question1Num; i++)
						{
						 	var map1 = {};
						 	var question1 =  $(".question1").eq(i).val();
						 	//去除前后空格
						 	question1 = $.trim(question1);
						 	if(question1.length == 0)
						 		{
						 			//标记置空
						 			save = false;
						 			alert("有未填写的问题！");
						 			//设置焦点
						 			$(".question1").eq(i).focus().select();
						 		}
						 	
						 	var vector=$.trim($(".vector").eq(i).val());
						 		
						 	var options = $(".choiceoption").eq(i).children().map(function() {
						 		var option=$.trim($(this).children().eq(1).val());

						 			if(option.length == 0)
						 				{
						 					//标记置空
						 					save = false;
						 					alert("有未填写的选项！");
						 					//设置焦点
						 				}
						 			return option;
						 	  	}).get().join(',');
						 	
						 	var fenzhis = $(".choiceoption").eq(i).children().map(function() {
						 		var fenzhi=$.trim($(this).children().eq(2).val());

						 			if(fenzhi.length == 0)
						 				{
						 					//标记置空
						 					save = false;
						 					alert("有未填写的分值！");
						 					//设置焦点
						 				}
						 			return fenzhi;
						 	  	}).get().join(',');
						 	map1["question"] = question1;
						 	map1["vector"] = vector;
						 	map1["options"] = options;
						 	map1["scores"] = fenzhis;
						 	
						 	//map1["fenzhi"]=fenzhi;
						 	choiceQuestions[i] = map1;
						}
						
/*					 	var options = $(".choiceoption").eq(i).children().map(function() {
					 		var fenzhi=$.trim($(this).children().eq(2).val());
					 	//	var fenzhi=$.trim($(this).children().eq(2).val());
					 			if(option.length == 0)
					 				{
					 					//标记置空
					 					save = false;
					 					alert("有未填写的分值！");
					 					//设置焦点
					 				}
					 			return fenzhi;
					 	  	}).get().join(',');
					 	alert(options);
					 	map1["question"] = question1;
					 	map1["options"] = options;
					 	//map1["fenzhi"]=fenzhi;
					 	choiceQuestions[i] = map1;
					}*/						
						
						
					/*	//遍历判断题
						for(var i=0; i<question2Num; i++)
						{
							//取得判断题问题
						 	question2 =  $(".question2").eq(i).val();
						 	score2 =  $(".score2").eq(i).val();
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
						*/
						
						//封装试卷
						questionaire["title"] = title;
						questionaire["description"]=describtion;
						questionaire["choiceQuestions"] = choiceQuestions;
						//questionaire["trueFalseQuestions"] = trueFalseQuestions;
						
					if(save){
						//用ajax请求服务器保存数据
						var jsonString = JSON.stringify(questionaire);
						alert(jsonString);
                         // var						jsonString = '{"title":"EPQ人格测试问卷计分标准","description":"在这份问卷上有85个问题。 请你依次回答这些问题，回答不需要写字，回答问题时不必过多思考，符合您时在（ ）内答“是”，不符时答“否”。 如果不选择，默认为选择“否”。这些问题要求你按自己的实际情况回答，不要去猜测怎样才是正确的回答。因为这里不存在正确或错误的回答，也没有捉弄人的问题，将问题的意思看懂了就快点回答，不要花很多时间去想。问卷无时间限制，但不要拖延太长，也不要未看懂问题便回答。","choiceQuestions":[{"question":"你是否有广泛的爱好？","options":"是,不是","scores":"1,0"},{"question":"在做任何事情之前，你是否都要考虑一番？","options":"是,不是","scores":"0,1"},{"question":"你的情绪时常波动吗？","options":"是,不是","scores":"1,0"},{"question":"当别人做了好事，而周围的人认为是你做的时候，你是否感到洋洋得意？","options":"是,不是","scores":"0,1"},{"question":"你是一个健谈的人吗？","options":"是,不是","scores":"1,0"},{"question":"你曾经无缘无故地觉得自己“可怜”吗？","options":"是,不是","scores":"1,0"},{"question":"你曾经有过贪心使自己多得份外的物质利益吗?","options":"是,不是","scores":"0,1"},{"question":"晚上你是否小心地把门锁好？","options":"是,不是","scores":"0,1"},{"question":"你认为自己活泼吗？","options":"是,不是","scores":"1,0"},{"question":"当你看到小孩（或动物）受折磨时是否感到难受？","options":"是,不是","scores":"0,1"},{"question":"你是否常担心你会说出（或做出）不应该说或做的事?","options":"是,不是","scores":"1,0"},{"question":"若你说过要做某件事，是否不管遇到什么困难都要把它做成？","options":"是,不是","scores":"1,0"},{"question":"在愉快的聚会中你是否通常尽情享受？","options":"是,不是","scores":"1,0"},{"question":"你是一位易激怒的人吗？","options":"是,不是","scores":"1,0"},{"question":"你是否有过自己做错了事反倒责备别人的时候？","options":"是,不是","scores":"0,1"},{"question":"你喜欢会见陌生人吗？","options":"是,不是","scores":"1,0"},{"question":"你是否相信参加储蓄是一种好办法？","options":"是,不是","scores":"0,1"},{"question":"你的感情是否容易受到伤害？","options":"是,不是","scores":"1,0"},{"question":"你是否服用有奇特效果或是有危险性的药物？","options":"是,不是","scores":"1,0"},{"question":"你是否时常感到“极其厌烦”？","options":"是,不是","scores":"1,0"},{"question":"你曾多占多得别人的东西（甚至一针一线）吗？","options":"是,不是","scores":"0,1"},{"question":"如果条件允许，你喜欢经常外出（旅行）吗？","options":"是,不是","scores":"1,0"},{"question":"对你所喜欢的人，你是否为取乐开过过头的玩笑？","options":"是,不是","scores":"1,0"},{"question":"你是否常因“自罪感”而烦恼？","options":"是,不是","scores":"1,0"},{"question":"你是否有时候谈论一些你毫无所知的事情？","options":"是,不是","scores":"0,1"},{"question":"你是否宁愿看些书，而不想去会见别人？","options":"是,不是","scores":"0,1"},{"question":"有坏人想要害你吗？","options":"是,不是","scores":"1,0"},{"question":"你认为自己“神经过敏”吗？","options":"是,不是","scores":"1,0"},{"question":"你的朋友多吗？","options":"是,不是","scores":"1,0"},{"question":"你是个忧虑重重的人吗？","options":"是,不是","scores":"1,0"},{"question":"你在儿童时代是否立即听从大人的吩咐而毫无怨言？","options":"是,不是","scores":"1,0"},{"question":"你是一个无忧无虑逍遥自在的人吗？","options":"是,不是","scores":"1,0"},{"question":"有礼貌爱整洁对你很重要吗？","options":"是,不是","scores":"0,1"},{"question":"你是否担心将会发生可怕的事情？","options":"是,不是","scores":"1,0"},{"question":"在结识新朋友时，你通常是主动的吗？","options":"是,不是","scores":"1,0"},{"question":"你觉得自己是个非常敏感的人吗？","options":"是,不是","scores":"1,0"},{"question":"和别人在一起的时候，你是否不常说话？","options":"是,不是","scores":"0,1"},{"question":"你是否认为结婚是个框框，应该废除？","options":"是,不是","scores":"1,0"},{"question":"你有时有点自吹自擂吗？","options":"是,不是","scores":"0,1"},{"question":"在一个沉闷的场合，你能给大家增添生气吗？","options":"是,不是","scores":"1,0"},{"question":"慢腾腾开车的司机是否使你讨厌？","options":"是,不是","scores":"1,0"},{"question":"你担心自己的健康吗？","options":"是,不是","scores":"1,0"},{"question":"你是否喜欢说笑话和谈论有趣的事情？","options":"是,不是","scores":"1,0"},{"question":"你是否觉得大多数事情对你都是无所谓的？","options":"是,不是","scores":"1,0"},{"question":"你小时候有过对父母鲁莽无礼的行为吗？","options":"是,不是","scores":"0,1"},{"question":"你喜欢和别人打成一片，整天相处在一起吗？","options":"是,不是","scores":"1,0"},{"question":"你失眠吗？","options":"是,不是","scores":"1,0"},{"question":"你饭前必定先洗手吗？","options":"是,不是","scores":"1,0"},{"question":"当别人问你话时，你是否对答如流？","options":"是,不是","scores":"1,0"},{"question":"你是否宁愿有富裕时间喜欢早点动身去赴约会？","options":"是,不是","scores":"0,1"},{"question":"你经常无缘无故感到疲倦和无精打采吗？","options":"是,不是","scores":"1,0"},{"question":"在游戏或打牌时你曾经作弊吗？","options":"是,不是","scores":"0,1"},{"question":"你喜欢紧张的工作吗？","options":"是,不是","scores":"1,0"},{"question":"你时常觉得自己的生活很单调吗？","options":"是,不是","scores":"1,0"},{"question":"你曾经为了自己而利用过别人吗？","options":"是,不是","scores":"0,1"},{"question":"你是否参加的活动太多，已超过自己可能分配的时间？","options":"是,不是","scores":"1,0"},{"question":"是否有那么几个人时常躲着你？","options":"是,不是","scores":"1,0"},{"question":"你是否认为人们为保障自己的将来而精打细算、勤俭节约所费的时间太多了？","options":"是,不是","scores":"1,0"},{"question":"你是否曾想过去死？","options":"是,不是","scores":"1,0"},{"question":"若你确知不会被发现时，你会少付给人家钱吗？","options":"是,不是","scores":"0,1"},{"question":"你能使一个联欢会开得成功吗？","options":"是,不是","scores":"1,0"},{"question":"你是否尽力使自己不粗鲁？","options":"是,不是","scores":"0,1"},{"question":"一件使你为难的事情过去之后，是否使你烦恼好久？","options":"是,不是","scores":"1,0"},{"question":"你曾否坚持要照你的想法去办事？","options":"是,不是","scores":"0,1"},{"question":"当你去乘火车时，你是否最后一分钟到达？","options":"是,不是","scores":"1,0"},{"question":"你是否容易紧张？","options":"是,不是","scores":"1,0"},{"question":"你常感到寂寞吗？","options":"是,不是","scores":"1,0"},{"question":"你的言行总是一致吗？","options":"是,不是","scores":"1,0"},{"question":"你有时喜欢玩弄动物吗？","options":"是,不是","scores":"1,0"},{"question":"有人对你或你的工作吹毛求疵时，是否容易伤害你的积极性？","options":"是,不是","scores":"1,0"},{"question":"你去赴约会或上班时，曾否迟到？","options":"是,不是","scores":"0,1"},{"question":"你是否喜欢在你的周围有许多热闹和高兴的事？","options":"是,不是","scores":"1,0"},{"question":"你愿意让别人怕你吗？","options":"是,不是","scores":"1,0"},{"question":"你是否有时兴致勃勃，有时却很懒散不想动弹？","options":"是,不是","scores":"1,0"},{"question":"你有时会把今天应该做的事拖到明天吗？","options":"是,不是","scores":"0,1"},{"question":"别人是否认为你是生气勃勃的？","options":"是,不是","scores":"1,0"},{"question":"别人是否对你说过许多慌话？","options":"是,不是","scores":"1,0"},{"question":"你是否对有些事情易性急生气？","options":"是,不是","scores":"1,0"},{"question":"若你犯有错误你是否愿意承认？","options":"是,不是","scores":"1,0"},{"question":"你是一个整洁严谨、有条不紊的人吗？","options":"是,不是","scores":"0,1"},{"question":"在公园里或马路上，你是否总是把果皮或废纸扔到垃圾箱里？","options":"是,不是","scores":"1,0"},{"question":"遇到为难的事情你是否拿不定主意？","options":"是,不是","scores":"1,0"},{"question":"你是否有过随口骂人的时候？","options":"是,不是","scores":"0,1"},{"question":"若你乘车或坐飞机外出时，你是否担心会碰撞或出意外？","options":"是,不是","scores":"1,0"},{"question":"你是一个爱交往的人吗","options":"是,不是","scores":"1,0"}]}';

						$.post("editQuestionaire.action", {"jsonString" : jsonString},function(result){
							$("body").html(result)}
						); 
					}
			});
								
});
