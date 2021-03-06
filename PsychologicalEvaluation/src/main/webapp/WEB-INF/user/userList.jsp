<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>管理员</title>

		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link rel="stylesheet" href="<%=path%>/assets/css/bootstrap.min.css"/>
		<link rel="stylesheet" href="<%=path%>/assets/css/font-awesome.min.css" />

		<link rel="stylesheet" href="<%=path%>/assets/css/jquery-ui-1.10.3.full.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/datepicker.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ui.jqgrid.css" />

		<link rel="stylesheet" href="<%=path%>/style/family.css" />

		<link rel="stylesheet" href="<%=path%>/assets/css/ace.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="<%=path%>/assets/css/ace-skins.min.css" />



<style type="text/css">
#grid-table th{
	text-align:center;
}
</style>
</head>

<body>
		<input type="hidden" id="basePath" value="<%=basePath%>">
		<div class="navbar navbar-default" id="navbar">
			<script type="text/javascript">
				try{ace.settings.check('navbar' , 'fixed')}catch(e){}
			</script>

			<div class="navbar-container" id="navbar-container">
				<div class="navbar-header pull-left">
					<a href="#" class="navbar-brand">
						<small>
							<i class="icon-leaf"></i>
							我们的小组-管理员后台
						</small>
					</a><!-- /.brand -->
				</div><!-- /.navbar-header -->

				<div class="navbar-header pull-right" role="navigation">
					<ul class="nav ace-nav">

						<li class="purple">
							<a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<i class="icon-bell-alt icon-animated-bell"></i>
								<span class="badge badge-important" id="broadcast">${unReadBroadCastMessageCount}</span>
							</a>

							<ul class="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li class="dropdown-header">
									<i class="icon-warning-sign"></i>
									${unReadBroadCastMessageCount}条广播通知
								</li>

								<li>
									<a href="<%=path%>/getOffLineMessage.action">
										<div class="clearfix">
											<span class="pull-left">
												<i class="btn btn-xs no-hover btn-pink icon-comment"></i>
												未读广播消息
											</span>
											<span class="pull-right badge badge-info">+${unReadBroadCastMessageCount}</span>
										</div>
									</a>
								</li>

								<li>
									<a>
										查看所有通知
										<i class="icon-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						<li class="green">
							<a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<i class="icon-envelope icon-animated-vertical"></i>
								<span class="badge badge-success" id="offLineMessage">${offLineMessageCount}</span>
							</a>

							<ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close" id="recent">
								<li class="dropdown-header">
									<i class="icon-envelope-alt"></i>
									${offLineMessageCount}条离线消息
								</li>
							</ul>
						</li>

						<li class="light-blue">
							<a data-toggle="dropdown" href="#" class="dropdown-toggle">
								<img class="nav-user-photo" src="assets/avatars/${loginUser.icon}" alt="登陆" />
								<span class="user-info">
									<small>欢迎光临</small>
								</span>

								<i class="icon-caret-down"></i>
							</a>

							<ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i class="icon-cog"></i>
										设置
									</a>
								</li>


								<li class="divider"></li>

								<li>
									<a href="<%=path%>/logout.action">
										<i class="icon-off"></i>
										退出
									</a>
								</li>
							</ul>
						</li>
					</ul><!-- /.ace-nav -->
				</div><!-- /.navbar-header -->
			</div><!-- /.container -->
		</div>

		<div class="main-container" id="main-container">
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>

			<div class="main-container-inner">
				<a class="menu-toggler" id="menu-toggler" href="#">
					<span class="menu-text"></span>
				</a>

				<div class="sidebar" id="sidebar">
					<script type="text/javascript">
						try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
					</script>

					<div class="sidebar-shortcuts" id="sidebar-shortcuts">
						<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
							<button class="btn btn-success">
								<i class="icon-signal"></i>
							</button>

							<button class="btn btn-info">
								<i class="icon-pencil"></i>
							</button>

							<button class="btn btn-warning">
								<i class="icon-group"></i>
							</button>

							<button class="btn btn-danger">
								<i class="icon-cogs"></i>
							</button>
						</div>

						<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
							<span class="btn btn-success"></span>

							<span class="btn btn-info"></span>

							<span class="btn btn-warning"></span>

							<span class="btn btn-danger"></span>
						</div>
					</div><!-- #sidebar-shortcuts -->

					<ul class="nav nav-list">
						<li >
							<a href="<%=path%>/index.action">
								<i class="icon-dashboard"></i>
								<span class="menu-text"> 控制台 </span>
							</a>
						</li>

						<li class="active open">
							<a href="#" class="dropdown-toggle">
								<i class="icon-list"></i>
								<span class="menu-text"> 用户管理 </span>

								<b class="arrow icon-angle-down"></b>
							</a>

							<ul class="submenu">
								<li class="active">
									<a href="<%=path%>/userList.action">
										<i class="icon-double-angle-right"></i>
										用户列表
									</a>
								</li>

								<li>
									<a href="<%=path%>/user/profile.jsp">
										<i class="icon-double-angle-right"></i>
										用户信息
									</a>
								</li>
							</ul>
						</li>

						<li >
							<a href="#" class="dropdown-toggle">
								<i class="icon-edit"></i>
								<span class="menu-text"> 编辑 </span>

								<b class="arrow icon-angle-down"></b>
							</a>

							<ul class="submenu">
								<li>
									<a href="<%=path%>/questionaireList.action">
										<i class="icon-double-angle-right"></i>
										问卷
									</a>
								</li>
								
								<li>
									<a href="<%=path%>/questionaire.action">
										<i class="icon-double-angle-right"></i>
										编辑测评问卷
									</a>
								</li>

								<li>
									<a href="<%=path%>/articleList.action">
										<i class="icon-double-angle-right"></i>
										文章
									</a>
								</li>

								<li>
									<a href="<%=path%>/article.action">
										<i class="icon-double-angle-right"></i>
										文章推送
									</a>
								</li>

							</ul>
						</li>						

						<li>
							<a href="<%=path%>/feedback.action">
								<i class="icon-text-width"></i>
								<span class="menu-text"> 用户反馈 </span>
							</a>
						</li>

						<li>
							<a href="#" class="dropdown-toggle">
								<i class="icon-file-alt"></i>

								<span class="menu-text">
									其他页面
									<span class="badge badge-primary ">3</span>
								</span>

								<b class="arrow icon-angle-down"></b>
							</a>

							<ul class="submenu">

								<li>
									<a href="<%=path%>/user/error-404.jsp">
										<i class="icon-double-angle-right"></i>
										404错误页面
									</a>
								</li>

								<li>
									<a href="<%=path%>/error-500.jsp">
										<i class="icon-double-angle-right"></i>
										500错误页面
									</a>
								</li>

								<li>
									<a href="<%=path%>/user/file.jsp">
										<i class="icon-double-angle-right"></i>
										文件上传
									</a>
								</li>													
							</ul>
						</li>										
					</ul><!-- /.nav-list -->

				</div>

				<div class="main-content">
					<div class="breadcrumbs" id="breadcrumbs">
						<script type="text/javascript">
							try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
						</script>

						<ul class="breadcrumb">
							<li>
								<i class="icon-home home-icon"></i>
								<a href="<%=path%>/index.jsp">首页</a>
							</li>
							<li class="active">用户管理</li>
						</ul><!-- .breadcrumb -->

						<div class="nav-search" id="nav-search">
							<form class="form-search">
								<span class="input-icon">
									<input type="text" placeholder="查找 ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
									<i class="icon-search nav-search-icon"></i>
								</span>
							</form>
						</div><!-- #nav-search -->
					</div>
					<div class="page-content">

						<div class="row">
							<div class="col-xs-12">
								<table id="grid-table"></table>
									
								<div id="grid-pager"></div>
								<script type="text/javascript">
									var $path_base = "<%=path%>/";//this will be used in gritter alerts containing images
								</script>
								<!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div><!-- /.main-content -->

			</div><!-- /.main-container-inner -->

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="icon-double-angle-up icon-only bigger-110"></i>
			</a>	
		</div><!-- /.main-container -->
		
		<!-- basic scripts -->
	<script type="text/javascript" src="<%=path%>/js/jquery.min.js"></script>
	<script type="text/javascript" src="<%=path%>/js/user.js"></script>
	<script type="text/javascript" src="<%=path%>/js/json2.js"></script>	

		<script src="<%=path%>/assets/js/bootstrap.min.js"></script>
		<script src="<%=path%>/assets/js/typeahead-bs2.min.js"></script>


		<script src="<%=path%>/assets/js/date-time/bootstrap-datepicker.min.js"></script>
		<script src="<%=path%>/assets/js/jqGrid/jquery.jqGrid.min.js"></script>
		<script src="<%=path%>/assets/js/jqGrid/i18n/grid.locale-en.js"></script>

		<script src="<%=path%>/assets/js/ace-elements.min.js"></script>
		<script src="<%=path%>/assets/js/ace.min.js"></script>
		<script>
			var basepath = $("#basePath").val();
			var k=1;
			var total=parseInt(${shortOffLineMessages.size()});
			
				if(total<4){
					<c:forEach var="sender" items="${offLineUserMessages}">
						var name="${sender.username}";
						var icon="${sender.icon}";
						if(parseInt("${sender.privilege}")!=4){
							icon=basepath+"assets/avatars/"+icon;
						}
						var id="${sender.userId}";
						var time="${sender.dateTime}";
						var content="${sender.content}";
						var clock=time.substr(11,2);
						var min=time.substr(14,2);
						if(k<=total){
							$("#recent").append("<li><img src='"+icon+"' class='msg-photo'/>"
											+"<span class='msg-body'>"
											+"<span class='msg-title'>"+"<span class='blue'><a href='"
											+basepath+"chat.action?id="
											+id+"'>"+name
											+"</a></span>"
											+content
											+"<span class='msg-time'>"
											+"<i class='icon-time'></i>"
											+"<span>"+clock+":"+min+"</span>"
											+"</span></span></li>");
							k++;
						}
					</c:forEach>
				}else{
					<c:forEach var="sender" items="${offLineUserMessages}">
						var name="${sender.username}";
						var icon="${sender.icon}";
						if(parseInt("${sender.privilege}")!=4){
							icon=basepath+"assets/avatars/"+icon;
						}						
						var id="${sender.userId}";
						var time="${sender.dateTime}";
						var content="${sender.content}";
						var clock=time.substr(11,2);
						var min=time.substr(14,2);
						if(k<4){
							$("#recent").append("<li><img src='"+icon+"' class='msg-photo'/>"
											+"<span class='msg-body'>"
											+"<span class='msg-title'>"+"<span class='blue'><a href='"
											+basepath+"chat.action?id="
											+id+"'>"+name
											+":</a></span>"
											+content
										    +"<span class='msg-time'>"
											+" &nbsp;<i class='icon-time'></i>"
											+"<span>"+clock+":"+min+"</span></span> "
											+"</span></span></li>");
							k++;
						}
					</c:forEach>
				}
			$("#recent").append("<li>"
								+"<a href='"+basepath+"recent.action'>"
								+"查看所有消息"
								+"<i class='icon-arrow-right'></i>"
								+"</a></li>");
		
		</script>
		
		<script type="text/javascript">
	var basePath = $("#basePath").val();
			var grid_data=[];
			var i=0;
			
			<c:forEach var="user" items="${users}">
				grid_data[i++]={username:"<a href='"+basePath+"detail.action?id="+"${user.id}"+"'>"+"${user.username}"+"</a>",id:"${user.id}",email:"${user.email}",age:"${user.age}",gender:(${user.gender})?'女':'男',phone:"${user.phone}",dateTime:"${user.dateTime}",vocation:"${user.vocation}"};
			</c:forEach>
			
			jQuery(function($) {
				var grid_selector = "#grid-table";
				var pager_selector = "#grid-pager";
			
				jQuery(grid_selector).jqGrid({
					
					data: grid_data,
					datatype: "local",
					height: 250,
					colNames:['操作', 'ID','用户名','电子邮箱', '联系电话', '注册日期','性别','年龄','职业'],
					colModel:[
						{name:'myac',index:'', width:80, fixed:true, sortable:false, resize:false,
							formatter:'actions', 
							formatoptions:{ 
								keys:true,
								
								delOptions:{recreateForm: true, beforeShowForm:beforeDeleteCallback},
							}
						},
						{name:'id',index:'id', width:90, sorttype:"int", editable: true},

						{name:'username',index:'username', width:90,editable: true,editoptions:{size:"20",maxlength:"30"}},

						{name:'email',index:'email', width:150,editable: true,editoptions:{size:"20",maxlength:"30"}},

						{name:'phone',index:'phone', width:110,editable: true,editoptions:{size:"20",maxlength:"25"}},

						{name:'dateTime',index:'dateTime',width:150, editable:true, sorttype:"date",unformat: pickDate},
						
						{name:'gender',index:'gender', width:40, editable: true,edittype:"select",editoptions:{value:"FE:男;IN:女"}},
						
						{name:'age',index:'age', width:40, editable: true,editoptions:{size:"20",maxlength:"25"}},						
						
						{name:'vocation',index:'vocation', width:130,editable: true,editoptions:{size:"25",maxlength:"30"}}
					], 						
			
					viewrecords : true,
					rowNum:10,
					rowList:[10,20,30],
					pager : pager_selector,
					altRows: true,
					//toppager: true,
					
					multiselect: true,
					//multikey: "ctrlKey",
			        multiboxonly: true,
			
					loadComplete : function() {
						var table = this;
						setTimeout(function(){
							//styleCheckbox(table);
							
							//updateActionIcons(table);
							//updatePagerIcons(table);
							//enableTooltips(table);
						}, 0);
					},
			
					editurl: $path_base+"/deleteUser.action",//nothing is saved
					caption: "用户信息",
					autowidth: true
			
				});
			
				function aceSwitch( cellvalue, options, cell ) {
					setTimeout(function(){
						$(cell) .find('input[type=checkbox]')
								.wrap('<label class="inline" />')
							.addClass('ace ace-switch ace-switch-5')
							.after('<span class="lbl"></span>');
					}, 0);
				}
				//enable datepicker
				function pickDate( cellvalue, options, cell ) {
					setTimeout(function(){
						$(cell) .find('input[type=text]')
								.datepicker({format:'yyyy-mm-dd' , autoclose:true}); 
					}, 0);
				}
			
			
				//navButtons
				jQuery(grid_selector).jqGrid('navGrid',pager_selector,
					{ 	//navbar options
						edit: true,
						editicon : 'icon-pencil blue',
						add: true,
						addicon : 'icon-plus-sign purple',
						del: true,
						delicon : 'icon-trash red',
						search: true,
						searchicon : 'icon-search orange',
						refresh: true,
						refreshicon : 'icon-refresh green',
						view: true,
						viewicon : 'icon-zoom-in grey',
					},
					{
						//edit record form
						//closeAfterEdit: true,
						recreateForm: true,
						beforeShowForm : function(e) {
							var form = $(e[0]);
							form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
							style_edit_form(form);
						}
					},
					{
						//new record form
						closeAfterAdd: true,
						recreateForm: true,
						viewPagerButtons: false,
						beforeShowForm : function(e) {
							var form = $(e[0]);
							form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
							style_edit_form(form);
						}
					},
					{
						//delete record form
						recreateForm: true,
						beforeShowForm : function(e) {
							var form = $(e[0]);
							if(form.data('styled')) return false;
							
							form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
							style_delete_form(form);
							
							form.data('styled', true);
						},
						onClick : function(e) {
							alert(1);
						}
					},
					{
						//search form
						recreateForm: true,
						afterShowSearch: function(e){
							var form = $(e[0]);
							form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
							style_search_form(form);
						},
						afterRedraw: function(){
							style_search_filters($(this));
						},
						
						multipleSearch: true,
						/**
						multipleGroup:true,
						showQuery: true
						*/
					},
					{
						//view record form
						recreateForm: true,
						beforeShowForm: function(e){
							var form = $(e[0]);
							form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
						}
					}
				)
			
			
				
				function style_edit_form(form) {
					//enable datepicker on "sdate" field and switches for "stock" field
					form.find('input[name=dateTime]').datepicker({format:'yyyy-mm-dd' , autoclose:true})
						.end().find('input[name=stock]')
							  .addClass('ace ace-switch ace-switch-5').wrap('<label class="inline" />').after('<span class="lbl"></span>');
			
					//update buttons classes
					var buttons = form.next().find('.EditButton .fm-button');
					buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();//ui-icon, s-icon
					buttons.eq(0).addClass('btn-primary').prepend('<i class="icon-ok"></i>');
					buttons.eq(1).prepend('<i class="icon-remove"></i>')
					
					buttons = form.next().find('.navButton a');
					buttons.find('.ui-icon').remove();
					buttons.eq(0).append('<i class="icon-chevron-left"></i>');
					buttons.eq(1).append('<i class="icon-chevron-right"></i>');		
				}
			
				function style_delete_form(form) {
					var buttons = form.next().find('.EditButton .fm-button');
					buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();//ui-icon, s-icon
					buttons.eq(0).addClass('btn-danger').prepend('<i class="icon-trash"></i>');
					buttons.eq(1).prepend('<i class="icon-remove"></i>')
				}
				
				function style_search_filters(form) {
					form.find('.delete-rule').val('X');
					form.find('.add-rule').addClass('btn btn-xs btn-primary');
					form.find('.add-group').addClass('btn btn-xs btn-success');
					form.find('.delete-group').addClass('btn btn-xs btn-danger');
				}
				function style_search_form(form) {
					var dialog = form.closest('.ui-jqdialog');
					var buttons = dialog.find('.EditTable')
					buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info').find('.ui-icon').attr('class', 'icon-retweet');
					buttons.find('.EditButton a[id*="_query"]').addClass('btn btn-sm btn-inverse').find('.ui-icon').attr('class', 'icon-comment-alt');
					buttons.find('.EditButton a[id*="_search"]').addClass('btn btn-sm btn-purple').find('.ui-icon').attr('class', 'icon-search');
				}
				
				function beforeDeleteCallback(e) {
					var form = $(e[0]);
					if(form.data('styled')) return false;
					
					form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
					style_delete_form(form);
					
					form.data('styled', true);
				}
				
				function beforeEditCallback(e) {
					var form = $(e[0]);
					form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
					style_edit_form(form);
				}
				
				//replace icons with FontAwesome icons like above
				function updatePagerIcons(table) {
					var replacement = 
					{
						'ui-icon-seek-first' : 'icon-double-angle-left bigger-140',
						'ui-icon-seek-prev' : 'icon-angle-left bigger-140',
						'ui-icon-seek-next' : 'icon-angle-right bigger-140',
						'ui-icon-seek-end' : 'icon-double-angle-right bigger-140'
					};
					$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
						var icon = $(this);
						var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
						
						if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
					})
				}
			
				function enableTooltips(table) {
					$('.navtable .ui-pg-button').tooltip({container:'body'});
					$(table).find('.ui-pg-div').tooltip({container:'body'});
				}
						
			});
		</script>
	</body>
</html>
