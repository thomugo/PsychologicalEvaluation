var pageNum = 0;
$("#more").click(function(){
	var userId = $("#userId").val();
	var totalPages = $("#totalPages").val(); 
	pageNum++;
	if(pageNum < totalPages){
		var map = {};
		map["userId"] = userId;
		map["pageNum"] = pageNum;
		var jsonString = JSON.stringify(map);
		alert(jsonString);
		$.post("detail.action", {"jsonString" : jsonString},function(result){
			
			}
		); 
	}
	
});