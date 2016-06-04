$(document).ready(function() {

	
	
	
	$(".delete").click(function(){
		alert("test");
		var id= $(this).attr('id');
		alert("delete"+id);
		$.get("deleteUser.action?id="+id,
				function (result){ 
					alert(result); 
		}); 
	});
	$("#prepage").click(function() {
		var pageNum = $("#num").text();
		var totalPages = $("#totalPages").text();
		var pageSize = $("#pageSize").text();
		var map={};
		pageNum -= 1;
		if(pageNum < 0)
			pageNum = 0;
		if(pageNum > totalPages)
			pageNum = totalPages;
		map["pageNum"] = pageNum;
		map["pageSize"] = pageSize;
		var jsonString = JSON.stringify(map);
		$.get("userList.action", {"jsonString" : jsonString},
				function (result){ 
					alert(result); 
		}); 
	});
	$("#nextpage").click(function() {
		var pageNum = $("#num").html();
		var totalPages = $("#totalPages").text();
		var pageSize = $("#pageSize").text();
		var map={};
		pageNum += 1;
		if(pageNum < 0)
			pageNum = 0;
		if(pageNum > totalPages)
			pageNum = totalPages;
		map["pageNum"] = pageNum;
		map["pageSize"] = pageSize;
		var jsonString = JSON.stringify(map);
		$.get("userList.action", {"jsonString" : jsonString},
				function (result){ 
					alert(result); 
		}); 
	});
	
});