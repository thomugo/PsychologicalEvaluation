$.ajaxSetup({
   type: 'POST',
   headers: { "cache-control": "no-cache" }
});
	var basePath = $("#basePath").val();
	var save = true;
$(document).ready(function() {
				//添加选择题
				$("#addresult").click(function() {
					$("#0").append("<label class='col-xs-12 col-sm-3 col-md-3 control-label no-padding-right' ></label>"
										+"<div class='mystyle'>"
										+"<span class=''>"
										+"<textarea rows='4' cols='55' class='description'></textarea>"
										+" &nbsp"
										+"<input type='text' style='width:43px;font-size:14px;' class='startScore' placeholder='分数'/> —— <input type='text' style="
										+"'width:43px;font-size:14px;' class='endScore' placeholder='区间'/>"
										+"</span>"
										+"</div>");
					});
				$(".addV").each(function(i){
					this.onclick=function(){
						$(this).parent().append("<span class='vec vecto'>"
											+"<textarea rows='4' cols='55' class='description'></textarea>"
											+" "
											+"<input type='text' style='width:43px;font-size:14px;' class='startScore' placeholder='分数'/>"
											+" —— <input type='text' style='width:43px;font-size:14px;' class='endScore' placeholder='区间'/>"
											+"</span>");
					};
				});
			
			
				$("#save0").click(function(){

						//选择题数目
/* alert(1); */
						var vectorNum=$(".vector").length;

//						alert("共有 "+(vectorNum-1)+"维度的评价");

						var questionaire = {};
						var rulers = new Array();
						//遍历选择题
						for(var i=0; i<vectorNum; i++){
							var map2={};
						 	var id=$(".vector").eq(i).attr("id");
						 	
						 	var pingjias=$(".vector").eq(i).find(".description").map(function(){
								
						 			var pingjia = $.trim($(this).val());
						 			if(pingjia.length == 0){	//标记置空
						 				save = false;
						 				alert("有未填写的评价！");
						 			}
						 		return pingjia;
						 	}).get().join(';');
						 	
						 	var starts=$(".vector").eq(i).find(".startScore").map(function(){
					 			var start = $.trim($(this).val());

					 			if(start.length == 0){	//标记置空
					 				save = false;
					 				alert("有未填写的分数！");
					 			}
					 			return start;
					 		}).get().join(',');	
						 	
						 	var ends=$(".vector").eq(i).find(".endScore").map(function(){
					 			var end = $.trim($(this).val());

					 			if(end.length == 0){	//标记置空
					 				save = false;
					 				alert("有未填写的分数！");
					 			}
					 			return end;
					 		}).get().join(',');						 	
						 	
						 	map2["ruler"]=pingjias;
						 	map2["startScore"]=starts;
						 	map2["endScore"]=ends;
						 	map2["vector"]=id;
						 	
						 	rulers[i]=map2;
						 };
						 
						//封装试卷
						questionaire["rulers"] = rulers;
						questionaire["questionaireId"]=questionaireid;
						
											
					if(save){
						//用ajax请求服务器保存数据
						var jsonString = JSON.stringify(questionaire);
						alert(jsonString);
						$.post(basePath+"saveRulers.action", {"jsonString" : jsonString},function(result){
							$("body").html(result)}
						);
					}
				});								
});		