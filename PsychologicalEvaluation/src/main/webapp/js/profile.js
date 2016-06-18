var pageNum = 1;
var icon = $("#icon").val();
var userId = $("#userId").val();
var totalPages = $("#totalPages").val(); 
//alert(icon);
var path = $("#path").val() + "/assets/avatars/" + icon;
var basePath = $("#basePath").val();
//alert(basePath);
//alert(path);
function remove(){
	$(".icon-remove").each(function(){
		 this.onclick=function(){
			 var answerId = $(this).attr('id');
				//alert(answerId);
				$.post(basePath+"deleteAnswer.action?answerId="+answerId,function(result){
					var data = result.split("<script");
					var resultStr = data[0];
					alert(resultStr);
				});
				$(this).parent().parent().parent().remove();
			}
		 });		
}
ref = setInterval(function(){remove();},1000);

$("#more").click(function(){
	pageNum++;
	//alert(pageNum);
	if(pageNum <= totalPages){
		var map = {};
		map["userId"] = userId;
		map["pageNum"] = pageNum;
		var jsonString = JSON.stringify(map);
		//alert(jsonString);
		$.post(basePath+"detail.action", {"jsonString" : jsonString},function(result){
			var data = result.split("<script");
			var resultStr= data[0];
			alert(resultStr);
			var  datas= eval(resultStr);
			for(var i=0; i<datas.length; i++){
				//alert(datas[i].title);
				$("#profile-feed-1").append(
					"<div class='profile-activity clearfix'>"
						+"<div>"
						+	"<img class='pull-left'  src="+path+" />"
						+ " <a class='user' href='#'> "+datas[i].title+" </a>"
								+"<br/>"
								+datas[i].result			
								+"<div class='time'>"
								+"<i class='icon-time bigger-110'></i>"
								+ datas[i].dateTime
								+"</div>"
						+"</div>"

							+"<div class='tools action-buttons'>"
									+"<a href='"+basePath+"getResultExcel.action?answerId="+datas[i].id+"' class='green'>"
									+"<i class='icon-download-alt bigger-125'></i>"
									+"</a>"
									+"<a href='#' class='blue'>"
									+"<i class='icon-pencil bigger-125'></i>"
									+"</a>"
									+"<a href='#' class='red'>"
									+"<i class='icon-remove bigger-125' id='"+datas[i].id+"'></i>"
									+"</a>"
								+"</div>"
							+"</div>"
				);
				
				
			}
				
			}
		); 
	}else{
		alert("没有更多记录");
	}
});