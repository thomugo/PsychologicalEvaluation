function infosPageInit(){
	var indexPage=$(this),loading=false
	getmore=indexPage.find('li.get-more')
	listview=indexPage.find('ul.listview');
	getmore.find('span.ui-icon').remove();
	getmore.live('click', function() {
		var self=$(this),
			page=$(this).data('page'),
			pageurl=$(this).data('pageurl'),
			url=pageurl+page+'/';
		loading=true;
		$.get(url, function(data){
			if($.trim(data).length > 0){
				getmore.before(data);
				listview.listview('refresh');
				self.data('page', page+1);
			}else{
				getmore.find('a').html('已经是最后一页');
				getmore.unbind('vclick');
			}
			loading=false;
		});
	});
}
$('#id_infos_index').live('pageinit', infosPageInit);
$('#id_infos_category').live('pageinit', infosPageInit);

$('#id_cureimg_index').live('pageinit', infosPageInit);

$('#id_magazine_index').live('pageinit', infosPageInit);
$('#id_magazine_category').live('pageinit', infosPageInit);

$('#id_ceshi_index').live('pageinit', infosPageInit);
$('#id_ceshi_category').live('pageinit', infosPageInit);

$('#id_psytest_index').live('pageinit', infosPageInit);
$('#id_psytest_category').live('pageinit', infosPageInit);

$('#id_top').live('click', function(){
	$(window).scrollTop(0);
});

$('#id_account_login').live('pageinit', function(){
	var page=$(this), form=page.find('form');
	form.submit(function(){
		var self=$(this),check=true;
		var username=$.trim(self.find('#id_username').val());
		if(username==''){
			self.find('#id_username_msg').html('请输入你的邮箱');
			check=false;
		}else{
			self.find('#id_username_msg').html('');
		}
		var password=$.trim(self.find('#id_password').val());
		if(password==''){
			self.find('#id_password_msg').html('请输入你的密码');
			check=false;
		}else{
			self.find('#id_password_msg').html('');
		}
		return check;
	});
});

function checkLoginForm() {
	var check=true;
	var username=$.trim($('#id_username').val());
	if(username==''){
		$('#id_username_msg').html('请输入你的邮箱');
		check=false;
	}else{
		$('#id_username_msg').html('');
	}
	var password=$.trim($('#id_password').val());
	if(password==''){
		$('#id_password_msg').html('请输入你的密码');
		check=false;
	}else{
		$('#id_password_msg').html('');
	}
	return check;
}

$('#id_account_register').live('pageinit', function(){
	var page=$(this), form=page.find('form');
	form.submit(function(){
		var self=$(this),check=true;
		var username=$.trim(self.find('#id_username').val());
		if(username==''){
			self.find('#id_username_msg').html('请输入邮箱');
			check=false;
		}else{
			$.ajax({
				url:'/account/check-username/?username='+encodeURI(username)+'&t='+(new Date()).getTime(),
				async:false,
				success: function(data){
					if(!data.status){
						self.find('#id_username_msg').html('该邮箱已经被注册');
						check = false;
					}else{
						self.find('#id_username_msg').html('');
					}
				}
			});
		}
		var nickname=$.trim(self.find('#id_nickname').val());
		if(nickname==''){
			self.find('#id_nickname_msg').html('请输入昵称');
			check=false;
		}else{
			$.ajax({
				url:'/account/check-nickname/?nickname='+encodeURI(nickname)+'&t='+(new Date()).getTime(),
				async:false,
				success: function(data){
					if(!data.status){
						self.find('#id_nickname_msg').html('该昵称已经存在');
						check = false;
					}else{
						self.find('#id_nickname_msg').html('');
					}
				}
			});
		}
		var password1=$.trim(self.find('#id_password1').val());
		if(password1==''){
			self.find('#id_password1_msg').html('请输入密码');
			check=false;
		}else{
			self.find('#id_password1_msg').html('');
		}
		var password2=$.trim(self.find('#id_password2').val());
		if(password1!='' && password2!=password1){
			self.find('#id_password2_msg').html('两次密码输入不相同');
			check=false;
		}else{
			self.find('#id_password2_msg').html('');
		}
		return check;
	});
});

$('#id_ceshi_page').live('pageinit', function() {
	$('#id_start_ceshi').click(function() {
		if($(this).attr('href') == '#') {
			$('#id_ceshi_show').hide();
			$('#id_question_list').show();
			$('.baidu_share').hide();
			$('div.fmappbanner').hide();
			$('.po_footer').hide();
		}
	});
	var labels = $(this).find('label');
	labels.bind('vclick', function() {
		var self = $(this),
			question = self.data('question'),
			qid = parseInt(self.data('qid')),
			choice = self.data('choice');
		var next = $('#id_question_item_' + qid);
		if(next.length == 1) {
			$('#id_question_item_' + question).hide();
			$("#id_prev_" + qid).click(function() {
				$('#id_question_item_' + qid).hide();
				$('#id_question_item_' + question).show();
			});
			$('#id_question_item_' + qid).show();
		} else {
			$('#id_choice').val(choice);
			$('#id_submit_' + question).button('enable');
		}
	});
	$('#id_form').submit(function() {
		var action = $(this).attr('action');
		var data = $(this).serialize();
		$.post(action, data, function(resp) {
			if(resp.code == 0) {
				location.href = resp.next;
			} else {
				alert('提交失败');
			}
		});
		return false;
	});
});
$('#id_ceshi_page').live('pagehide', function(){
	$(this).remove();
});

// $('#id_ceshi_page').live('pageshow', function(){
// var url=$(this).data('url');
// var href=location.href;
// if(href.indexOf(url)==-1){
// location.reload();
// }
// });=======
// $('#id_ceshi_page').live('pageshow', function(){
// var url=$(this).data('url');
// var href=location.href;
// if(href.indexOf(url)==-1){
// location.reload();
// }
// });
