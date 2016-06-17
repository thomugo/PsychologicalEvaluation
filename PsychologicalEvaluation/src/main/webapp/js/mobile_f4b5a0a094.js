function isWeiXin() {
	var e = window.navigator.userAgent.toLowerCase();
	return "micromessenger" == e.match(/MicroMessenger/i)
}

function getUserArticleList() {
	var e = $("#more-article a");
	if (e.data("loading")) return !1;
	var t = e.data("page") || 1;
	t++, e.data("loading", !0), $.ajax({
		url: articleListUrl,
		data: {
			user_id: userId || 0,
			page: t
		},
		success: function(n) {
			e.data("page", t);
			var i = $(n);
			$("#article-list ul").append(i), 0 == i.length && $("div").remove("#more-article")
		},
		error: function() {
			swal("网络错误，请重试", "", "error")
		},
		complete: function() {
			e.data("loading", !1)
		}
	})
}

function getUserHuodongList() {
	var e = $("#more-huodong a");
	if (e.data("loading")) return !1;
	var t = e.data("page") || 1;
	return t++, e.data("loading", !0), $.ajax({
		url: huodongListUrl,
		data: {
			user_id: userId || 0,
			page: t
		},
		success: function(n) {
			e.data("page", t);
			var i = $(n);
			$("#huodong-list ul").append(i), 0 == i.length && $("div").remove("#more-huodong")
		},
		error: function() {
			swal("网络错误，请重试", "", "error")
		},
		complete: function() {
			e.data("loading", !1)
		}
	}), !1
}


function initCommentList() {
	var e = $(this);
	if (e.data("loading")) return !1;
	e.data("loading", !0);
	var t = e.data("page") || 1;
	t++, $.ajax({
		url: commentListUrl,
		data: {
			article_id: articleId,
			page: t
		},
		success: function(t) {
			0 == $(t).length ? e.parent().hide() : $(".pl .list ul").append($(t))
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			e.data("page", t), e.data("loading", !1)
		}
	})
}

function scrollToForm() {
	var e = $(this).data("comment-id"),
		t = $(this).data("nickname"),
		n = $("#comment-form");
	n.find("input[name='reply_object_id']").val(e), n.find("textarea").prop("placeholder", "@" + t + "："), $("html, body").animate({
		scrollTop: $("form").offset().top
	}, 200)
}


function loadMoreArticle() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	$(document).height() <= parseFloat(e) + 1 && getArticleSimilarList()
}

function getArticleSimilarList() {
	var e = $("#similar-list");
	if (e.data("loading")) return !1;
	e.data("loading", !0);
	var t = e.data("page") || 1;
	t++, $.ajax({
		url: articleSimilarListUrl,
		data: {
			user_id: userId || 0,
			page: t,
			category_main_id: categoryMainId
		},
		beforeSend: function() {
			$(".loading .load-more-icon").show().siblings(".load-more-text").hide()
		},
		success: function(n) {
			e.data("page", t);
			var i = $(n);
			i.length > 0 ? e.append(i) : $(window).unbind("scroll")
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			$(".loading .load-more-icon").hide().siblings(".load-more-text").show(), e.data("loading", !1)
		}
	})
}

function initPageStatus() {
	$.ajax({
		url: pageStatusUrl,
		data: {
			article_id: articleId
		},
		success: function(e) {
			0 == e.code && ($(".foot .nav .a1 sup").html(e.data.zannum), $(".foot .nav .a3 sup").html(e.data.favoritenum), $(".foot .nav .a2 sup").html(e.data.commentnum), $(".foot .title .meta .view").html(e.data.viewnum), e.data.is_zan && $(".foot .nav .a1").parent().addClass("selected"), e.data.is_favorite && $(".foot .nav .a3").parent().addClass("selected"))
		}
	})
}


function getArticleListInfo(e, t) {
	var n = $(this);
	return n.data("loading", !0), $.ajax({
		url: articleListUrl,
		data: {
			slug: slug,
			tag: tag,
			page: t || 1
		},
		beforeSend: function() {
			n.children(".load-more-icon").show().siblings(".load-more-text").hide()
		},
		success: function(e) {
			n.data("page", t);
			var i = $(e);
			i.length > 0 ? $("#article-list ul").append(i) : ($("div").remove("#article-more"), $(window).unbind("scroll"))
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			n.children(".load-more-icon").hide().siblings(".load-more-text").show(), n.data("loading", !1)
		}
	}), !1
}

function loadMoreArticleList() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	if ($(document).height() <= parseFloat(e) + 100) {
		var t = $("#article-more");
		if (t.length <= 0) return $(window).unbind("scroll"), !1;
		if (t.data("loading")) return !1;
		var n = t.data("page");
		n++;
		var i = t.data("flag");
		return getArticleListInfo.call(t, i, n), !1
	}
}

function countDown() {
	remainSecond > 0 && remainSecond--, 30 == remainSecond;
	var e = formatNum(Math.floor(remainSecond / 60)),
		t = formatNum(remainSecond % 60);
	$(".expert_act .off-text .min").html(e), $(".expert_act .off-text .sec").html(t)
}

function formatNum(e) {
	var e = parseInt(e, 10);
	return e > 0 ? (9 >= e && (e = "0" + e), String(e)) : "00"
}

function getCallState(e, t) {
	$.get(checkCallUrl, {
		id: t
	}, function(t) {
		e && "function" == typeof e && e(t)
	})
}

function loadMoreDaren() {
	var e = window.screen.height,
		t = $(document).height(),
		n = $(document).scrollTop();
	e >= t - n && getDarenItemList()
}

function getDarenItemList() {
	var e = $("#daren-list");
	if (e.data("loading")) return !1;
	if (e.data("noData")) return !1;
	var t = e.data("page") || 1;
	t++, e.data("loading", !0), $.ajax({
		url: darenListUrl,
		data: {
			page: t
		},
		success: function(n) {
			$(n).length <= 0 ? $(window).unbind("scroll") : (e.data("page", t), e.append($(n)), e.data("loading", !1))
		},
		error: function() {
			$.dialog.tips("网络错误", 1)
		}
	})
}

function loadMoreKecheng() {
	var e = $(document).scrollTop() + 500 >= $(document).height() - $(window).height();
	e && initKechengList()
}

function initKechengList() {
	var e = $(".gkkzb .head ul");
	if (e.data("loading")) return !1;
	e.data("loading", !0);
	var t = e.data("page") || 1,
		n = e.data("slug") || "free";
	t++, $.ajax({
		url: gkkListUrl,
		data: {
			page: t,
			slug: n
		},
		success: function(t) {
			0 == $(t).length ? $(window).unbind("scroll", loadMoreKecheng) : e.append($(t))
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			e.data("page", t), e.data("loading", !1)
		}
	})
}

function setCookie(e, t, n) {
	var i = getsec(n),
		a = new Date;
	a.setTime(a.getTime() + 1 * i), document.cookie = e + "=" + escape(t) + ";expires=" + a.toGMTString()
}

function getsec(e) {
	var t = 1 * e.substring(1, e.length),
		n = e.substring(0, 1);
	return "s" == n ? 1e3 * t : "h" == n ? 60 * t * 60 * 1e3 : "d" == n ? 24 * t * 60 * 60 * 1e3 : void 0
}

function getCookie(e) {
	var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
	return (t = document.cookie.match(n)) ? unescape(t[2]) : null
}

function getCallState(e, t) {
	$.get(checkCallUrl, {
		id: t
	}, function(t) {
		e && "function" == typeof e && e(t)
	})
}

function loadMoreQingsu() {
	var e = window.screen.height,
		t = $(document).height(),
		n = $(document).scrollTop();
	e >= t - n && getQingsuItemList()
}

function getQingsuItemList() {
	var e = $("#qingsu-list");
	if (e.data("loading")) return !1;
	if (e.data("noData")) return !1;
	var t = e.data("page") || 1;
	t++, e.data("loading", !0), $.ajax({
		url: listYuyueUrl,
		data: {
			page: t
		},
		success: function(n) {
			$(n).length <= 0 ? $(window).unbind("scroll") : (e.data("page", t), e.append($(n)), e.data("loading", !1))
		},
		error: function() {
			$.dialog.tips("网络错误", 1)
		}
	})
}

function secToMin(e) {
	e = parseInt(e);
	var t = e % 60,
		n = (e - t) / 60;
	return {
		min: n,
		sec: t
	}
}

function loadMoreSubjectItem() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	$(document).height() <= e && initSubjectItemList()
}

function initSubjectItemList() {
	var e = $("#topic-list");
	if (e.data("loading")) return !1;
	if (e.data("noData")) return !1;
	var t = e.data("page") || 1;
	t++, e.data("loading", !0), $.ajax({
		url: loadMoreSubjectUrl,
		data: {
			page: t
		},
		success: function(n) {
			$(n).length <= 0 ? e.data("noData", !0) : (e.data("page", t), e.append($(n)), e.data("loading", !1))
		},
		error: function() {
			$.dialog.tips("网络错误", 1)
		}
	})
}

function loadUserAnswer() {
	var e = $(document).scrollTop() + 10 >= $(document).height() - $(window).height();
	e && getUserAnswer($("#answer-list"))
}

function getUserAnswer(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: answerListUrl,
		data: {
			user_id: userId || 0,
			page: n
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 ? t.append(i) : $(window).unbind("scroll")
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function loadUserArticle() {
	var e = $(document).scrollTop() + 10 >= $(document).height() - $(window).height();
	e && getUserArticle($("#article-list"))
}

function getUserArticle(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: articleListUrl,
		data: {
			user_id: userId || 0,
			page: n
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 ? t.append(i) : $(window).unbind("scroll")
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function loadMoreCeshi() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	if ($(document).height() <= e) {
		var t = $("#ceshi-list .list");
		getUserCeshiList(t)
	}
}

function getUserCeshiList(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	return n++, t.data("loading", !0), $.ajax({
		url: ceshiListUrl,
		data: {
			page: n,
			is_fufei: isFufei
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 && t.append(i), i.length < 10 && $(window).unbind("scroll")
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	}), !1
}

function loadUserComment() {
	var e = $(document).scrollTop() + 10 >= $(document).height() - $(window).height();
	e && getUserComment($("#comment-list"))
}

function getUserComment(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: commentListUrl,
		data: {
			user_id: userId || 0,
			page: n
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 ? t.append(i) : $(window).unbind("scroll")
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function getUserFavorite(e, t) {
	var n = e;
	if (n.data("loading")) return !1;
	var i = n.data("type"),
		a = n.data("page") || 1;
	n.data("type-class");
	return a++, n.data("loading", !0), $.ajax({
		url: favoriteListUrl,
		data: {
			user_id: userId || 0,
			page: a,
			type: i
		},
		success: function(e) {
			n.data("page", a);
			var i = $(e);
			t.append(i), 0 == i.length && n.hide()
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			n.data("loading", !1)
		}
	}), !1
}

function loadMoreData() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop()),
		t = $(".expert_c_nav li.on"),
		n = t.data("target");
	if ($(document).height() <= e) {
		if (t.data("stop")) return;
		"comments" == n ? getCommentList(t) : "article" == n ? getArticleList(t) : "answer" == n && getAnswerList(t)
	}
}

function getCommentList(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: commentListUrl,
		data: {
			user_id: userId || 0,
			page: n
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 && $("." + t.data("target")).find("ul").append(i)
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function getAnswerList(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: answerListUrl,
		data: {
			user_id: userId || 0,
			page: n,
			is_home: !0
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 && $("." + t.data("target")).find("ul").append(i)
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function getArticleList(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: articleListUrl,
		data: {
			user_id: userId || 0,
			page: n
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 && $("." + t.data("target")).find("ul").append(i)
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function clickNav() {
	var e = $(this),
		t = e.index(),
		n = e.data("target");
	$("#expert_c_nav").offset().top;
	"comments" == n && ($("#nav-" + n).siblings().removeClass("on"), $("#nav-" + n).addClass("on"), t = 1), 0 == t && $(".expert_c_view").size() > 0 ? $(".expert_c_view").show() : $(".expert_c_view").hide(), e.siblings().removeClass("on"), e.addClass("on"), $(".tab-panel").hide(), $(".tab-panel." + n).show(), $(window).scrollTop(0)
}

function loadYuyueNotice() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	$(document).height() <= e && getYuyueNoticeList($("#yuyue-notice"))
}

function getYuyueNoticeList(e) {
	var t = e;
	if (t.data("loading")) return !1;
	var n = t.data("page") || 1;
	n++, t.data("loading", !0), $.ajax({
		url: noticeUrl,
		data: {
			user_id: userId || 0,
			page: n,
			flag: flag || "yuyue"
		},
		success: function(e) {
			t.data("page", n);
			var i = $(e);
			i.length > 0 ? t.append(i) : $(window).unbind("scroll")
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			t.data("loading", !1)
		}
	})
}

function loadYuyueData() {
	var e = 1e3 + parseFloat($(this).scrollTop()),
		t = $(".reserva .tab_hd li.selected"),
		n = t.data("target");
	if ($(document).height() <= e) {
		if (t.data("stop")) return;
		"all" == n ? getYuyueList(t, n) : "unpay" == n ? getYuyueList(t, n) : "unrate" == n && getYuyueList(t, n)
	}
}

function getYuyueList(e, t) {
	var n = e;
	if (n.data("loading")) return !1;
	var i = n.data("page") || 1;
	"all" != t && (i = n.data("page") || 0), i++, n.data("loading", !0), $.ajax({
		url: listYuyueUrl,
		data: {
			status: t || "all",
			page: i
		},
		beforeSend: function() {
			return $("." + n.data("target")).find("ul").html() && "all" != t ? !0 : void 0
		},
		success: function(e) {
			n.data("page", i);
			var t = $(e);
			t.length > 0 ? $("." + n.data("target")).find("ul").append(t) : $(window).unbind("scroll")
		},
		error: function() {
			swal("网络错误，请重试", "", "error")
		},
		complete: function() {
			n.data("loading", !1)
		}
	})
}

function loadMore() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	if ($(document).height() <= parseFloat(e) + 100) {
		var t = $(".exlist .top-nav li.active"),
			n = ($("#" + t.attr("target")), t.attr("target"));
		"recomment-list" == n && (n += " .ex-user-list", queryParam.sort = "host"), initTeacherList(n)
	}
}

function initTeacherList(e) {
	var t = $("#" + e);
	if (t.data("loading")) return !1;
	if (t.data("noData")) return !1;
	var n = t.data("page") || 1;
	"new-list" == e && (n = t.data("page"), queryParam.sort = "new"), "yuyue-list" == e && (n = t.data("page"), queryParam.sort = "yuyue"), "rate-list" == e && (n = t.data("page"), queryParam.sort = "rate"), n++, queryParam.page = n, t.data("loading", !0), $.ajax({
		url: teacherListUrl,
		data: queryParam,
		success: function(i) {
			$(i).length <= 0 ? t.data("noData", !0) : (t.data("page", n), $("#" + e + " ul").append($(i)), t.data("loading", !1), $("img.lazy").lazyload())
		},
		error: function() {
			$.dialog.tips("网络错误", 1)
		}
	})
}

function getStrLength(e) {
	var t = e.match(/[^\x00-\xff]/gi);
	return e.length + (null == t ? 0 : t.length)
}

function checkYuyueForm() {
	var e = $(this),
		t = $("#name"),
		n = $("#age"),
		i = $('input[name="gender"]:checked'),
		a = ($("#phone"), $("#validCode"), $("#zx_num")),
		o = $('input[name="waytype"]'),
		r = $('input[name="tongyi"]');
	$("#isLastYuyue");
	if (e.data("lock")) return !1;
	if ("" == o.val()) return $.dialog.tips("请选择咨询方式", 1), !1;
	if (0 >= a) return $.dialog.tips("咨询次数不小于1", 1), !1;
	if ("" == t.val()) return t.hide().siblings(".f_tip").html("请输入你的称呼").show(), !1;
	if (getStrLength(t.val()) > 8) return t.hide().siblings(".f_tip").html("最多输入4个字符").show(), !1;
	if ("" == n.val() || isNaN(n.val())) return n.hide().siblings(".f_tip").html("请填写真实年龄").show(), !1;
	if (parseInt(n.val()) < 1 || parseInt(n.val()) > 100) return n.hide().siblings(".f_tip").html("年龄只能在1-100之间").show(), !1;
	if ("" == i.val() || i.val() <= 0) return i.parent().parent().siblings(".f_tip").html("请选择性别").show(), !1;
	var s = $("#content").val();
	if ("" == s) return $.dialog.tips("请输入咨询内容", 1), !1;
	if (0 == r.is(":checked")) return $.dialog.tips("请勾选同意", 1), !1;
	e.data("lock", !0);
	var l = e.attr("action"),
		c = e.serialize();
	return c.age = parseInt(c.age), $.post(l, c, function(t) {
		switch (t.code) {
			case 0:
				location.href = t.data;
				break;
			default:
				$.dialog.tips(t.msg, 1)
		}
		e.data("lock", !1)
	}), !1
}

function lastYuyueChange() {
	var e = $(this);
	if (e.data("lock")) return e.attr("checked", !0), !1;
	var t = e.is(":checked");
	t ? (e.attr("lock", !0), $("#isLastYuyue").val("yes"), $.get(lastYuyueUrl, {
		t: $.now()
	}, function(t) {
		0 == t.code && ($(".f_tip").hide(), lastYuyue = t.data, $("#age").val(lastYuyue.age), $("#name").val(lastYuyue.name), 1 == lastYuyue.gender ? $("#male").click() : $("#female").click(), $("#" + lastYuyue.waytype).click(), $("#content").val(lastYuyue.content).keyup(), $("#validCodeBtn").hide().siblings("#phone").css("width", "75%"), $("li.validCode-input").hide(), $("#phone").val(lastYuyue.phone), e.attr("lock", !1))
	})) : (e.attr("lock", !0), $("#validCodeBtn").show().siblings("#phone").css("width", "234px"), $("li.validCode-input").show(), $("#isLastYuyue").val("no"), $("#yuyue-form")[0].reset())
}

function getValidCode() {
	if (validCodeDuration > 0) return !1;
	var e = ($(this), $("#phone").val());
	if ("" == e) return $("#phone").hide().siblings(".f_tip").html("请输入手机号码").show(), !1;
	if (!e.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)) return console.log(12), $("#phone").hide().siblings(".f_tip").html("手机格式不正确").show(), !1;
	$("#phone").show();
	var t = {
		phone: e
	};
	return t.t = $.now(), $.get(validCodeUrl, t, function(e) {
		$.dialog.tips(e.data, 1), 0 == e.code && (validCodeDuration = 120, $("#validCodeBtn").hide(), $("#validCodeWait").show(), $("#validCodeWait").val(validCodeDuration + "秒后重新获取"), handler = setInterval(validCodeDao, 1e3))
	}), !1
}

function validCodeDao() {
	validCodeDuration--, $("#validCodeWait").val(validCodeDuration + "秒后重新获取"), 0 == validCodeDuration && ($("#validCodeBtn").show(), $("#validCodeWait").hide(), clearInterval(handler))
}

function loadTopicData() {
	var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
	if ($(document).height() <= parseFloat(e) + 200) {
		var t = $(".topicslist .top-nav li.active"),
			n = $("#" + t.attr("target"));
		"hot-topic" == t.attr("target") && getTopicList(n, "hot"), "new-topic" == t.attr("target") && getTopicList(n, "new", tagsArr.join(","))
	}
}

function getTopicList(e, t, n) {
	var i = e;
	if (i.data("loading")) return !1;
	if (i.data("noData")) return !1;
	var a = i.data("page") || 1;
	a++, i.data("loading", !0), $.ajax({
		url: teacherTopicListUrl,
		data: {
			nav: t,
			page: a,
			tags: n
		},
		success: function(e) {
			i.data("page", a);
			var t = $(e);
			t.length > 0 && "ex-none" != t[0].className ? (i.append(t), $("img.lazy").lazyload()) : i.data("noData", !0)
		},
		error: function() {
			$.dialog.tips("网络错误，请重试", 1)
		},
		complete: function() {
			i.data("loading", !1)
		}
	})
}! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = e.length,
			n = ae.type(e);
		return "function" === n || ae.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function i(e, t, n) {
		if (ae.isFunction(t)) return ae.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return ae.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (pe.test(t)) return ae.filter(t, e, n);
			t = ae.filter(t, e)
		}
		return ae.grep(e, function(e) {
			return ae.inArray(e, t) >= 0 !== n
		})
	}

	function a(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function o(e) {
		var t = we[e] = {};
		return ae.each(e.match(be) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function r() {
		he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
	}

	function s() {
		(he.addEventListener || "load" === event.type || "complete" === he.readyState) && (r(), ae.ready())
	}

	function l(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var i = "data-" + t.replace(_e, "-$1").toLowerCase();
			if (n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? ae.parseJSON(n) : n
				} catch (a) {}
				ae.data(e, t, n)
			} else n = void 0
		}
		return n
	}

	function c(e) {
		var t;
		for (t in e)
			if (("data" !== t || !ae.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function u(e, t, n, i) {
		if (ae.acceptData(e)) {
			var a, o, r = ae.expando,
				s = e.nodeType,
				l = s ? ae.cache : e,
				c = s ? e[r] : e[r] && r;
			if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[r] = V.pop() || ae.guid++ : r), l[c] || (l[c] = s ? {} : {
				toJSON: ae.noop
			}), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = ae.extend(l[c], t) : l[c].data = ae.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ae.camelCase(t)] = n), "string" == typeof t ? (a = o[t], null == a && (a = o[ae.camelCase(t)])) : a = o, a
		}
	}

	function d(e, t, n) {
		if (ae.acceptData(e)) {
			var i, a, o = e.nodeType,
				r = o ? ae.cache : e,
				s = o ? e[ae.expando] : ae.expando;
			if (r[s]) {
				if (t && (i = n ? r[s] : r[s].data)) {
					ae.isArray(t) ? t = t.concat(ae.map(t, ae.camelCase)) : t in i ? t = [t] : (t = ae.camelCase(t), t = t in i ? [t] : t.split(" ")), a = t.length;
					for (; a--;) delete i[t[a]];
					if (n ? !c(i) : !ae.isEmptyObject(i)) return
				}(n || (delete r[s].data, c(r[s]))) && (o ? ae.cleanData([e], !0) : ne.deleteExpando || r != r.window ? delete r[s] : r[s] = null)
			}
		}
	}

	function p() {
		return !0
	}

	function f() {
		return !1
	}

	function h() {
		try {
			return he.activeElement
		} catch (e) {}
	}

	function m(e) {
		var t = Le.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function g(e, t) {
		var n, i, a = 0,
			o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (i = n[a]); a++) !t || ae.nodeName(i, t) ? o.push(i) : ae.merge(o, g(i, t));
		return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], o) : o
	}

	function v(e) {
		De.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t) {
		return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function b(e) {
		return e.type = (null !== ae.find.attr(e, "type")) + "/" + e.type, e
	}

	function w(e) {
		var t = Xe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function $(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) ae._data(n, "globalEval", !t || ae._data(t[i], "globalEval"))
	}

	function x(e, t) {
		if (1 === t.nodeType && ae.hasData(e)) {
			var n, i, a, o = ae._data(e),
				r = ae._data(t, o),
				s = o.events;
			if (s) {
				delete r.handle, r.events = {};
				for (n in s)
					for (i = 0, a = s[n].length; a > i; i++) ae.event.add(t, n, s[n][i])
			}
			r.data && (r.data = ae.extend({}, r.data))
		}
	}

	function C(e, t) {
		var n, i, a;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ae.expando]) {
				a = ae._data(t);
				for (i in a.events) ae.removeEvent(t, i, a.handle);
				t.removeAttribute(ae.expando)
			}
			"script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ae.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function k(t, n) {
		var i, a = ae(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(a[0])) ? i.display : ae.css(a[0], "display");
		return a.detach(), o
	}

	function _(e) {
		var t = he,
			n = Ze[e];
		return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ke.detach()), Ze[e] = n), n
	}

	function T(e, t) {
		return {
			get: function() {
				var n = e();
				return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
			}
		}
	}

	function S(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = pt.length; a--;)
			if (t = pt[a] + n, t in e) return t;
		return i
	}

	function E(e, t) {
		for (var n, i, a, o = [], r = 0, s = e.length; s > r; r++) i = e[r], i.style && (o[r] = ae._data(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (o[r] = ae._data(i, "olddisplay", _(i.nodeName)))) : (a = Ee(i), (n && "none" !== n || !a) && ae._data(i, "olddisplay", a ? n : ae.css(i, "display"))));
		for (r = 0; s > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
		return e
	}

	function A(e, t, n) {
		var i = lt.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function D(e, t, n, i, a) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += ae.css(e, n + Se[o], !0, a)), i ? ("content" === n && (r -= ae.css(e, "padding" + Se[o], !0, a)), "margin" !== n && (r -= ae.css(e, "border" + Se[o] + "Width", !0, a))) : (r += ae.css(e, "padding" + Se[o], !0, a), "padding" !== n && (r += ae.css(e, "border" + Se[o] + "Width", !0, a)));
		return r
	}

	function N(e, t, n) {
		var i = !0,
			a = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = et(e),
			r = ne.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, o);
		if (0 >= a || null == a) {
			if (a = tt(e, t, o), (0 > a || null == a) && (a = e.style[t]), it.test(a)) return a;
			i = r && (ne.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
		}
		return a + D(e, t, n || (r ? "border" : "content"), i, o) + "px"
	}

	function j(e, t, n, i, a) {
		return new j.prototype.init(e, t, n, i, a)
	}

	function I() {
		return setTimeout(function() {
			ft = void 0
		}), ft = ae.now()
	}

	function M(e, t) {
		var n, i = {
				height: e
			},
			a = 0;
		for (t = t ? 1 : 0; 4 > a; a += 2 - t) n = Se[a], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function q(e, t, n) {
		for (var i, a = (bt[t] || []).concat(bt["*"]), o = 0, r = a.length; r > o; o++)
			if (i = a[o].call(n, t, e)) return i
	}

	function L(e, t, n) {
		var i, a, o, r, s, l, c, u, d = this,
			p = {},
			f = e.style,
			h = e.nodeType && Ee(e),
			m = ae._data(e, "fxshow");
		n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, d.always(function() {
			d.always(function() {
				s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ae.css(e, "display"), u = "none" === c ? ae._data(e, "olddisplay") || _(e.nodeName) : c, "inline" === u && "none" === ae.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
			f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (a = t[i], mt.exec(a)) {
				if (delete t[i], o = o || "toggle" === a, a === (h ? "hide" : "show")) {
					if ("show" !== a || !m || void 0 === m[i]) continue;
					h = !0
				}
				p[i] = m && m[i] || ae.style(e, i)
			} else c = void 0;
		if (ae.isEmptyObject(p)) "inline" === ("none" === c ? _(e.nodeName) : c) && (f.display = c);
		else {
			m ? "hidden" in m && (h = m.hidden) : m = ae._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ae(e).show() : d.done(function() {
				ae(e).hide()
			}), d.done(function() {
				var t;
				ae._removeData(e, "fxshow");
				for (t in p) ae.style(e, t, p[t])
			});
			for (i in p) r = q(h ? m[i] : 0, i, d), i in m || (m[i] = r.start, h && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function z(e, t) {
		var n, i, a, o, r;
		for (n in e)
			if (i = ae.camelCase(n), a = t[i], o = e[n], ae.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = ae.cssHooks[i], r && "expand" in r) {
				o = r.expand(o), delete e[i];
				for (n in o) n in e || (e[n] = o[n], t[n] = a)
			} else t[i] = a
	}

	function O(e, t, n) {
		var i, a, o = 0,
			r = yt.length,
			s = ae.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (a) return !1;
				for (var t = ft || I(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
				return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
			},
			c = s.promise({
				elem: e,
				props: ae.extend({}, t),
				opts: ae.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: ft || I(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = ae.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (a) return this;
					for (a = !0; i > n; n++) c.tweens[n].run(1);
					return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for (z(u, c.opts.specialEasing); r > o; o++)
			if (i = yt[o].call(c, e, u, c.opts)) return i;
		return ae.map(u, q, c), ae.isFunction(c.opts.start) && c.opts.start.call(e, c), ae.fx.timer(ae.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function H(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, a = 0,
				o = t.toLowerCase().match(be) || [];
			if (ae.isFunction(n))
				for (; i = o[a++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function F(e, t, n, i) {
		function a(s) {
			var l;
			return o[s] = !0, ae.each(e[s] || [], function(e, s) {
				var c = s(t, n, i);
				return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
			}), l
		}
		var o = {},
			r = e === Ut;
		return a(t.dataTypes[0]) || !o["*"] && a("*")
	}

	function B(e, t) {
		var n, i, a = ae.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((a[i] ? e : n || (n = {}))[i] = t[i]);
		return n && ae.extend(!0, e, n), e
	}

	function P(e, t, n) {
		for (var i, a, o, r, s = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
		if (a)
			for (r in s)
				if (s[r] && s[r].test(a)) {
					l.unshift(r);
					break
				}
		if (l[0] in n) o = l[0];
		else {
			for (r in n) {
				if (!l[0] || e.converters[r + " " + l[0]]) {
					o = r;
					break
				}
				i || (i = r)
			}
			o = o || i
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}

	function U(e, t, n, i) {
		var a, o, r, s, l, c = {},
			u = e.dataTypes.slice();
		if (u[1])
			for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
		for (o = u.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (r = c[l + " " + o] || c["* " + o], !r)
				for (a in c)
					if (s = a.split(" "), s[1] === o && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
						r === !0 ? r = c[a] : c[a] !== !0 && (o = s[0], u.unshift(s[1]));
						break
					}
			if (r !== !0)
				if (r && e["throws"]) t = r(t);
				else try {
					t = r(t)
				} catch (d) {
					return {
						state: "parsererror",
						error: r ? d : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function R(e, t, n, i) {
		var a;
		if (ae.isArray(t)) ae.each(t, function(t, a) {
			n || Xt.test(e) ? i(e, a) : R(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i)
		});
		else if (n || "object" !== ae.type(t)) i(e, t);
		else
			for (a in t) R(e + "[" + a + "]", t[a], n, i)
	}

	function W() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function Y() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function X(e) {
		return ae.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var V = [],
		G = V.slice,
		Q = V.concat,
		J = V.push,
		K = V.indexOf,
		Z = {},
		ee = Z.toString,
		te = Z.hasOwnProperty,
		ne = {},
		ie = "1.11.2",
		ae = function(e, t) {
			return new ae.fn.init(e, t)
		},
		oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		re = /^-ms-/,
		se = /-([\da-z])/gi,
		le = function(e, t) {
			return t.toUpperCase()
		};
	ae.fn = ae.prototype = {
		jquery: ie,
		constructor: ae,
		selector: "",
		length: 0,
		toArray: function() {
			return G.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
		},
		pushStack: function(e) {
			var t = ae.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return ae.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(ae.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(G.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: J,
		sort: V.sort,
		splice: V.splice
	}, ae.extend = ae.fn.extend = function() {
		var e, t, n, i, a, o, r = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof r && (c = r, r = arguments[s] || {}, s++), "object" == typeof r || ae.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++)
			if (null != (a = arguments[s]))
				for (i in a) e = r[i], n = a[i], r !== n && (c && n && (ae.isPlainObject(n) || (t = ae.isArray(n))) ? (t ? (t = !1,
					o = e && ae.isArray(e) ? e : []) : o = e && ae.isPlainObject(e) ? e : {}, r[i] = ae.extend(c, o, n)) : void 0 !== n && (r[i] = n));
		return r
	}, ae.extend({
		expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === ae.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === ae.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !ae.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;
			try {
				if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (ne.ownLast)
				for (t in e) return te.call(e, t);
			for (t in e);
			return void 0 === t || te.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && ae.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(re, "ms-").replace(se, le)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var a, o = 0,
				r = e.length,
				s = n(e);
			if (i) {
				if (s)
					for (; r > o && (a = t.apply(e[o], i), a !== !1); o++);
				else
					for (o in e)
						if (a = t.apply(e[o], i), a === !1) break
			} else if (s)
				for (; r > o && (a = t.call(e[o], o, e[o]), a !== !1); o++);
			else
				for (o in e)
					if (a = t.call(e[o], o, e[o]), a === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(oe, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? ae.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
		},
		inArray: function(e, t, n) {
			var i;
			if (t) {
				if (K) return K.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, a = e.length; n > i;) e[a++] = t[i++];
			if (n !== n)
				for (; void 0 !== t[i];) e[a++] = t[i++];
			return e.length = a, e
		},
		grep: function(e, t, n) {
			for (var i, a = [], o = 0, r = e.length, s = !n; r > o; o++) i = !t(e[o], o), i !== s && a.push(e[o]);
			return a
		},
		map: function(e, t, i) {
			var a, o = 0,
				r = e.length,
				s = n(e),
				l = [];
			if (s)
				for (; r > o; o++) a = t(e[o], o, i), null != a && l.push(a);
			else
				for (o in e) a = t(e[o], o, i), null != a && l.push(a);
			return Q.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, a;
			return "string" == typeof t && (a = e[t], t = e, e = a), ae.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
				return e.apply(t || this, n.concat(G.call(arguments)))
			}, i.guid = e.guid = e.guid || ae.guid++, i) : void 0
		},
		now: function() {
			return +new Date
		},
		support: ne
	}), ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		Z["[object " + t + "]"] = t.toLowerCase()
	});
	var ce = function(e) {
		function t(e, t, n, i) {
			var a, o, r, s, l, c, d, f, h, m;
			if ((t ? t.ownerDocument || t : F) !== j && N(t), t = t || j, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!i && M) {
				if (11 !== s && (a = ye.exec(e)))
					if (r = a[1]) {
						if (9 === s) {
							if (o = t.getElementById(r), !o || !o.parentNode) return n;
							if (o.id === r) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && O(t, o) && o.id === r) return n.push(o), n
					} else {
						if (a[2]) return K.apply(n, t.getElementsByTagName(e)), n;
						if ((r = a[3]) && $.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
					}
				if ($.qsa && (!q || !q.test(e))) {
					if (f = d = H, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (c = _(e), (d = t.getAttribute("id")) ? f = d.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
						h = be.test(e) && u(t.parentNode) || t, m = c.join(",")
					}
					if (m) try {
						return K.apply(n, h.querySelectorAll(m)), n
					} catch (g) {} finally {
						d || t.removeAttribute("id")
					}
				}
			}
			return S(e.replace(le, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[H] = !0, e
		}

		function a(e) {
			var t = j.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
		}

		function r(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var a, o = e([], n.length, t), r = o.length; r--;) n[a = o[r]] && (n[a] = !(i[a] = n[a]))
				})
			})
		}

		function u(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function d() {}

		function p(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function f(e, t, n) {
			var i = t.dir,
				a = n && "parentNode" === i,
				o = P++;
			return t.first ? function(t, n, o) {
				for (; t = t[i];)
					if (1 === t.nodeType || a) return e(t, n, o)
			} : function(t, n, r) {
				var s, l, c = [B, o];
				if (r) {
					for (; t = t[i];)
						if ((1 === t.nodeType || a) && e(t, n, r)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || a) {
							if (l = t[H] || (t[H] = {}), (s = l[i]) && s[0] === B && s[1] === o) return c[2] = s[2];
							if (l[i] = c, c[2] = e(t, n, r)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var a = e.length; a--;)
					if (!e[a](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function m(e, n, i) {
			for (var a = 0, o = n.length; o > a; a++) t(e, n[a], i);
			return i
		}

		function g(e, t, n, i, a) {
			for (var o, r = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, a)) && (r.push(o), c && t.push(s));
			return r
		}

		function v(e, t, n, a, o, r) {
			return a && !a[H] && (a = v(a)), o && !o[H] && (o = v(o, r)), i(function(i, r, s, l) {
				var c, u, d, p = [],
					f = [],
					h = r.length,
					v = i || m(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !i && t ? v : g(v, p, e, s, l),
					b = n ? o || (i ? e : h || a) ? [] : r : y;
				if (n && n(y, b, s, l), a)
					for (c = g(b, f), a(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
				if (i) {
					if (o || e) {
						if (o) {
							for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
							o(null, b = [], c, l)
						}
						for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(r[c] = d))
					}
				} else b = g(b === r ? b.splice(h, b.length) : b), o ? o(null, r, b, l) : K.apply(r, b)
			})
		}

		function y(e) {
			for (var t, n, i, a = e.length, o = x.relative[e[0].type], r = o || x.relative[" "], s = o ? 1 : 0, l = f(function(e) {
					return e === t
				}, r, !0), c = f(function(e) {
					return ee(t, e) > -1
				}, r, !0), u = [function(e, n, i) {
					var a = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
					return t = null, a
				}]; a > s; s++)
				if (n = x.relative[e[s].type]) u = [f(h(u), n)];
				else {
					if (n = x.filter[e[s].type].apply(null, e[s].matches), n[H]) {
						for (i = ++s; a > i && !x.relative[e[i].type]; i++);
						return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(le, "$1"), n, i > s && y(e.slice(s, i)), a > i && y(e = e.slice(i)), a > i && p(e))
					}
					u.push(n)
				}
			return h(u)
		}

		function b(e, n) {
			var a = n.length > 0,
				o = e.length > 0,
				r = function(i, r, s, l, c) {
					var u, d, p, f = 0,
						h = "0",
						m = i && [],
						v = [],
						y = E,
						b = i || o && x.find.TAG("*", c),
						w = B += null == y ? 1 : Math.random() || .1,
						$ = b.length;
					for (c && (E = r !== j && r); h !== $ && null != (u = b[h]); h++) {
						if (o && u) {
							for (d = 0; p = e[d++];)
								if (p(u, r, s)) {
									l.push(u);
									break
								}
							c && (B = w)
						}
						a && ((u = !p && u) && f--, i && m.push(u))
					}
					if (f += h, a && h !== f) {
						for (d = 0; p = n[d++];) p(m, v, r, s);
						if (i) {
							if (f > 0)
								for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
							v = g(v)
						}
						K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
					}
					return c && (B = w, E = y), m
				};
			return a ? i(r) : r
		}
		var w, $, x, C, k, _, T, S, E, A, D, N, j, I, M, q, L, z, O, H = "sizzle" + 1 * new Date,
			F = e.document,
			B = 0,
			P = 0,
			U = n(),
			R = n(),
			W = n(),
			Y = function(e, t) {
				return e === t && (D = !0), 0
			},
			X = 1 << 31,
			V = {}.hasOwnProperty,
			G = [],
			Q = G.pop,
			J = G.push,
			K = G.push,
			Z = G.slice,
			ee = function(e, t) {
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ae = ie.replace("w", "w#"),
			oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]",
			re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			se = new RegExp(ne + "+", "g"),
			le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			ce = new RegExp("^" + ne + "*," + ne + "*"),
			ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			pe = new RegExp(re),
			fe = new RegExp("^" + ae + "$"),
			he = {
				ID: new RegExp("^#(" + ie + ")"),
				CLASS: new RegExp("^\\.(" + ie + ")"),
				TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + re),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			me = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			be = /[+~]/,
			we = /'|\\/g,
			$e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			xe = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			Ce = function() {
				N()
			};
		try {
			K.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
		} catch (ke) {
			K = {
				apply: G.length ? function(e, t) {
					J.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		$ = t.support = {}, k = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, N = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : F;
			return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, I = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), M = !k(i), $.attributes = a(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), $.getElementsByTagName = a(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), $.getElementsByClassName = ve.test(i.getElementsByClassName), $.getById = a(function(e) {
				return I.appendChild(e).id = H, !i.getElementsByName || !i.getElementsByName(H).length
			}), $.getById ? (x.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && M) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, x.filter.ID = function(e) {
				var t = e.replace($e, xe);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete x.find.ID, x.filter.ID = function(e) {
				var t = e.replace($e, xe);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), x.find.TAG = $.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : $.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					a = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[a++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return o
			}, x.find.CLASS = $.getElementsByClassName && function(e, t) {
				return M ? t.getElementsByClassName(e) : void 0
			}, L = [], q = [], ($.qsa = ve.test(i.querySelectorAll)) && (a(function(e) {
				I.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]")
			}), a(function(e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
			})), ($.matchesSelector = ve.test(z = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && a(function(e) {
				$.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), L.push("!=", re)
			}), q = q.length && new RegExp(q.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(I.compareDocumentPosition), O = t || ve.test(I.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, Y = t ? function(e, t) {
				if (e === t) return D = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !$.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && O(F, e) ? -1 : t === i || t.ownerDocument === F && O(F, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return D = !0, 0;
				var n, a = 0,
					o = e.parentNode,
					s = t.parentNode,
					l = [e],
					c = [t];
				if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
				if (o === s) return r(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) c.unshift(n);
				for (; l[a] === c[a];) a++;
				return a ? r(l[a], c[a]) : l[a] === F ? -1 : c[a] === F ? 1 : 0
			}, i) : j
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== j && N(e), n = n.replace(de, "='$1']"), !(!$.matchesSelector || !M || L && L.test(n) || q && q.test(n))) try {
				var i = z.call(e, n);
				if (i || $.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (a) {}
			return t(n, j, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== j && N(e), O(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== j && N(e);
			var n = x.attrHandle[t.toLowerCase()],
				i = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
			return void 0 !== i ? i : $.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				a = 0;
			if (D = !$.detectDuplicates, A = !$.sortStable && e.slice(0), e.sort(Y), D) {
				for (; t = e[a++];) t === e[a] && (i = n.push(a));
				for (; i--;) e.splice(n[i], 1)
			}
			return A = null, e
		}, C = t.getText = function(e) {
			var t, n = "",
				i = 0,
				a = e.nodeType;
			if (a) {
				if (1 === a || 9 === a || 11 === a) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
				} else if (3 === a || 4 === a) return e.nodeValue
			} else
				for (; t = e[i++];) n += C(t);
			return n
		}, x = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: he,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace($e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace($e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace($e, xe).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = U[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(a) {
						var o = t.attr(a, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, i, a) {
					var o = "nth" !== e.slice(0, 3),
						r = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === i && 0 === a ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, d, p, f, h, m = o !== r ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !l && !s;
						if (g) {
							if (o) {
								for (; m;) {
									for (d = t; d = d[m];)
										if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
									h = m = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [r ? g.firstChild : g.lastChild], r && y) {
								for (u = g[H] || (g[H] = {}), c = u[e] || [], f = c[0] === B && c[1], p = c[0] === B && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
									if (1 === d.nodeType && ++p && d === t) {
										u[e] = [B, f, p];
										break
									}
							} else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === B) p = c[1];
							else
								for (;
									(d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[e] = [B, p]), d !== t)););
							return p -= a, p === i || p % i === 0 && p / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var a, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[H] ? o(n) : o.length > 1 ? (a = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, a = o(e, n), r = a.length; r--;) i = ee(e, a[r]), e[i] = !(t[i] = a[r])
					}) : function(e) {
						return o(e, 0, a)
					}) : o
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						a = T(e.replace(le, "$1"));
					return a[H] ? i(function(e, t, n, i) {
						for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e, a(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace($e, xe),
						function(t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace($e, xe).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === I
				},
				focus: function(e) {
					return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !x.pseudos.empty(e)
				},
				header: function(e) {
					return ge.test(e.nodeName)
				},
				input: function(e) {
					return me.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: c(function() {
					return [0]
				}),
				last: c(function(e, t) {
					return [t - 1]
				}),
				eq: c(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: c(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: c(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: c(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: c(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, x.pseudos.nth = x.pseudos.eq;
		for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) x.pseudos[w] = s(w);
		for (w in {
				submit: !0,
				reset: !0
			}) x.pseudos[w] = l(w);
		return d.prototype = x.filters = x.pseudos, x.setFilters = new d, _ = t.tokenize = function(e, n) {
			var i, a, o, r, s, l, c, u = R[e + " "];
			if (u) return n ? 0 : u.slice(0);
			for (s = e, l = [], c = x.preFilter; s;) {
				(!i || (a = ce.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(o = [])), i = !1, (a = ue.exec(s)) && (i = a.shift(), o.push({
					value: i,
					type: a[0].replace(le, " ")
				}), s = s.slice(i.length));
				for (r in x.filter) !(a = he[r].exec(s)) || c[r] && !(a = c[r](a)) || (i = a.shift(), o.push({
					value: i,
					type: r,
					matches: a
				}), s = s.slice(i.length));
				if (!i) break
			}
			return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
		}, T = t.compile = function(e, t) {
			var n, i = [],
				a = [],
				o = W[e + " "];
			if (!o) {
				for (t || (t = _(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : a.push(o);
				o = W(e, b(a, i)), o.selector = e
			}
			return o
		}, S = t.select = function(e, t, n, i) {
			var a, o, r, s, l, c = "function" == typeof e && e,
				d = !i && _(e = c.selector || e);
			if (n = n || [], 1 === d.length) {
				if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && $.getById && 9 === t.nodeType && M && x.relative[o[1].type]) {
					if (t = (x.find.ID(r.matches[0].replace($e, xe), t) || [])[0], !t) return n;
					c && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (a = he.needsContext.test(e) ? 0 : o.length; a-- && (r = o[a], !x.relative[s = r.type]);)
					if ((l = x.find[s]) && (i = l(r.matches[0].replace($e, xe), be.test(o[0].type) && u(t.parentNode) || t))) {
						if (o.splice(a, 1), e = i.length && p(o), !e) return K.apply(n, i), n;
						break
					}
			}
			return (c || T(e, d))(i, t, !M, n, be.test(e) && u(t.parentNode) || t), n
		}, $.sortStable = H.split("").sort(Y).join("") === H, $.detectDuplicates = !!D, N(), $.sortDetached = a(function(e) {
			return 1 & e.compareDocumentPosition(j.createElement("div"))
		}), a(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), $.attributes && a(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), a(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(te, function(e, t, n) {
			var i;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	ae.find = ce, ae.expr = ce.selectors, ae.expr[":"] = ae.expr.pseudos, ae.unique = ce.uniqueSort, ae.text = ce.getText, ae.isXMLDoc = ce.isXML, ae.contains = ce.contains;
	var ue = ae.expr.match.needsContext,
		de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		pe = /^.[^:#\[\.,]*$/;
	ae.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ae.find.matchesSelector(i, e) ? [i] : [] : ae.find.matches(e, ae.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, ae.fn.extend({
		find: function(e) {
			var t, n = [],
				i = this,
				a = i.length;
			if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
				for (t = 0; a > t; t++)
					if (ae.contains(i[t], this)) return !0
			}));
			for (t = 0; a > t; t++) ae.find(e, i[t], n);
			return n = this.pushStack(a > 1 ? ae.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function(e) {
			return !!i(this, "string" == typeof e && ue.test(e) ? ae(e) : e || [], !1).length
		}
	});
	var fe, he = e.document,
		me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ge = ae.fn.init = function(e, t) {
			var n, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ae.isPlainObject(t))
						for (n in t) ae.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (i = he.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return fe.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = he, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
		};
	ge.prototype = ae.fn, fe = ae(he);
	var ve = /^(?:parents|prev(?:Until|All))/,
		ye = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ae.extend({
		dir: function(e, t, n) {
			for (var i = [], a = e[t]; a && 9 !== a.nodeType && (void 0 === n || 1 !== a.nodeType || !ae(a).is(n));) 1 === a.nodeType && i.push(a), a = a[t];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), ae.fn.extend({
		has: function(e) {
			var t, n = ae(e, this),
				i = n.length;
			return this.filter(function() {
				for (t = 0; i > t; t++)
					if (ae.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, a = this.length, o = [], r = ue.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; a > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? ae.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ae.inArray(this[0], ae(e)) : ae.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(ae.unique(ae.merge(this.get(), ae(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ae.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ae.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ae.dir(e, "parentNode", n)
		},
		next: function(e) {
			return a(e, "nextSibling")
		},
		prev: function(e) {
			return a(e, "previousSibling")
		},
		nextAll: function(e) {
			return ae.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ae.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ae.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ae.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ae.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ae.sibling(e.firstChild)
		},
		contents: function(e) {
			return ae.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ae.merge([], e.childNodes)
		}
	}, function(e, t) {
		ae.fn[e] = function(n, i) {
			var a = ae.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = ae.filter(i, a)), this.length > 1 && (ye[e] || (a = ae.unique(a)), ve.test(e) && (a = a.reverse())), this.pushStack(a)
		}
	});
	var be = /\S+/g,
		we = {};
	ae.Callbacks = function(e) {
		e = "string" == typeof e ? we[e] || o(e) : ae.extend({}, e);
		var t, n, i, a, r, s, l = [],
			c = !e.once && [],
			u = function(o) {
				for (n = e.memory && o, i = !0, r = s || 0, s = 0, a = l.length, t = !0; l && a > r; r++)
					if (l[r].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
			},
			d = {
				add: function() {
					if (l) {
						var i = l.length;
						! function o(t) {
							ae.each(t, function(t, n) {
								var i = ae.type(n);
								"function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
							})
						}(arguments), t ? a = l.length : n && (s = i, u(n))
					}
					return this
				},
				remove: function() {
					return l && ae.each(arguments, function(e, n) {
						for (var i;
							(i = ae.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (a >= i && a--, r >= i && r--)
					}), this
				},
				has: function(e) {
					return e ? ae.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], a = 0, this
				},
				disable: function() {
					return l = c = n = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return c = void 0, n || d.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, n) {
					return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return d
	}, ae.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ae.Callbacks("once memory"), "resolved"],
					["reject", "fail", ae.Callbacks("once memory"), "rejected"],
					["notify", "progress", ae.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ae.Deferred(function(n) {
							ae.each(t, function(t, o) {
								var r = ae.isFunction(e[t]) && e[t];
								a[o[1]](function() {
									var e = r && r.apply(this, arguments);
									e && ae.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ae.extend(e, i) : i
					}
				},
				a = {};
			return i.pipe = i.then, ae.each(t, function(e, o) {
				var r = o[2],
					s = o[3];
				i[o[1]] = r.add, s && r.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = function() {
					return a[o[0] + "With"](this === a ? i : this, arguments), this
				}, a[o[0] + "With"] = r.fireWith
			}), i.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			var t, n, i, a = 0,
				o = G.call(arguments),
				r = o.length,
				s = 1 !== r || e && ae.isFunction(e.promise) ? r : 0,
				l = 1 === s ? e : ae.Deferred(),
				c = function(e, n, i) {
					return function(a) {
						n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : a, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (r > 1)
				for (t = new Array(r), n = new Array(r), i = new Array(r); r > a; a++) o[a] && ae.isFunction(o[a].promise) ? o[a].promise().done(c(a, i, o)).fail(l.reject).progress(c(a, n, t)) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}
	});
	var $e;
	ae.fn.ready = function(e) {
		return ae.ready.promise().done(e), this
	}, ae.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? ae.readyWait++ : ae.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--ae.readyWait : !ae.isReady) {
				if (!he.body) return setTimeout(ae.ready);
				ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || ($e.resolveWith(he, [ae]), ae.fn.triggerHandler && (ae(he).triggerHandler("ready"), ae(he).off("ready")))
			}
		}
	}), ae.ready.promise = function(t) {
		if (!$e)
			if ($e = ae.Deferred(), "complete" === he.readyState) setTimeout(ae.ready);
			else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
		else {
			he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == e.frameElement && he.documentElement
			} catch (i) {}
			n && n.doScroll && ! function a() {
				if (!ae.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(a, 50)
					}
					r(), ae.ready()
				}
			}()
		}
		return $e.promise(t)
	};
	var xe, Ce = "undefined";
	for (xe in ae(ne)) break;
	ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, ae(function() {
			var e, t, n, i;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function() {
			var e = he.createElement("div");
			if (null == ne.deleteExpando) {
				ne.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					ne.deleteExpando = !1
				}
			}
			e = null
		}(), ae.acceptData = function(e) {
			var t = ae.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		_e = /([A-Z])/g;
	ae.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? ae.cache[e[ae.expando]] : e[ae.expando], !!e && !c(e)
		},
		data: function(e, t, n) {
			return u(e, t, n)
		},
		removeData: function(e, t) {
			return d(e, t)
		},
		_data: function(e, t, n) {
			return u(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return d(e, t, !0)
		}
	}), ae.fn.extend({
		data: function(e, t) {
			var n, i, a, o = this[0],
				r = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (a = ae.data(o), 1 === o.nodeType && !ae._data(o, "parsedAttrs"))) {
					for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = ae.camelCase(i.slice(5)), l(o, i, a[i])));
					ae._data(o, "parsedAttrs", !0)
				}
				return a
			}
			return "object" == typeof e ? this.each(function() {
				ae.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ae.data(this, e, t)
			}) : o ? l(o, e, ae.data(o, e)) : void 0
		},
		removeData: function(e) {
			return this.each(function() {
				ae.removeData(this, e)
			})
		}
	}), ae.extend({
		queue: function(e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = ae._data(e, t), n && (!i || ae.isArray(n) ? i = ae._data(e, t, ae.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ae.queue(e, t),
				i = n.length,
				a = n.shift(),
				o = ae._queueHooks(e, t),
				r = function() {
					ae.dequeue(e, t)
				};
			"inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, r, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ae._data(e, n) || ae._data(e, n, {
				empty: ae.Callbacks("once memory").add(function() {
					ae._removeData(e, t + "queue"), ae._removeData(e, n)
				})
			})
		}
	}), ae.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = ae.queue(this, e, t);
				ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ae.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				a = ae.Deferred(),
				o = this,
				r = this.length,
				s = function() {
					--i || a.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) n = ae._data(o[r], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), a.promise(t)
		}
	});
	var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Se = ["Top", "Right", "Bottom", "Left"],
		Ee = function(e, t) {
			return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
		},
		Ae = ae.access = function(e, t, n, i, a, o, r) {
			var s = 0,
				l = e.length,
				c = null == n;
			if ("object" === ae.type(n)) {
				a = !0;
				for (s in n) ae.access(e, t, s, n[s], !0, o, r)
			} else if (void 0 !== i && (a = !0, ae.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
					return c.call(ae(e), n)
				})), t))
				for (; l > s; s++) t(e[s], n, r ? i : i.call(e[s], s, t(e[s], n)));
			return a ? e : c ? t.call(e) : l ? t(e[0], n) : o
		},
		De = /^(?:checkbox|radio)$/i;
	! function() {
		var e = he.createElement("input"),
			t = he.createElement("div"),
			n = he.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
				ne.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete t.test
			} catch (i) {
				ne.deleteExpando = !1
			}
		}
	}(),
	function() {
		var t, n, i = he.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var Ne = /^(?:input|select|textarea)$/i,
		je = /^key/,
		Ie = /^(?:mouse|pointer|contextmenu)|click/,
		Me = /^(?:focusinfocus|focusoutblur)$/,
		qe = /^([^.]*)(?:\.(.+)|)$/;
	ae.event = {
		global: {},
		add: function(e, t, n, i, a) {
			var o, r, s, l, c, u, d, p, f, h, m, g = ae._data(e);
			if (g) {
				for (n.handler && (l = n, n = l.handler, a = l.selector), n.guid || (n.guid = ae.guid++), (r = g.events) || (r = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
						return typeof ae === Ce || e && ae.event.triggered === e.type ? void 0 : ae.event.dispatch.apply(u.elem, arguments)
					}, u.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = qe.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (c = ae.event.special[f] || {}, f = (a ? c.delegateType : c.bindType) || f, c = ae.event.special[f] || {}, d = ae.extend({
					type: f,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: a,
					needsContext: a && ae.expr.match.needsContext.test(a),
					namespace: h.join(".")
				}, l), (p = r[f]) || (p = r[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, d) : p.push(d), ae.event.global[f] = !0);
				e = null
			}
		},
		remove: function(e, t, n, i, a) {
			var o, r, s, l, c, u, d, p, f, h, m, g = ae.hasData(e) && ae._data(e);
			if (g && (u = g.events)) {
				for (t = (t || "").match(be) || [""], c = t.length; c--;)
					if (s = qe.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
						for (d = ae.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) r = p[o], !a && m !== r.origType || n && n.guid !== r.guid || s && !s.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (p.splice(o, 1), r.selector && p.delegateCount--, d.remove && d.remove.call(e, r));
						l && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ae.removeEvent(e, f, g.handle), delete u[f])
					} else
						for (f in u) ae.event.remove(e, f + t[c], n, i, !0);
				ae.isEmptyObject(u) && (delete g.handle, ae._removeData(e, "events"))
			}
		},
		trigger: function(t, n, i, a) {
			var o, r, s, l, c, u, d, p = [i || he],
				f = te.call(t, "type") ? t.type : t,
				h = te.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = u = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Me.test(f + ae.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), r = f.indexOf(":") < 0 && "on" + f, t = t[ae.expando] ? t : new ae.Event(f, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ae.makeArray(n, [t]), c = ae.event.special[f] || {}, a || !c.trigger || c.trigger.apply(i, n) !== !1)) {
				if (!a && !c.noBubble && !ae.isWindow(i)) {
					for (l = c.delegateType || f, Me.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
					u === (i.ownerDocument || he) && p.push(u.defaultView || u.parentWindow || e)
				}
				for (d = 0;
					(s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || f, o = (ae._data(s, "events") || {})[t.type] && ae._data(s, "handle"), o && o.apply(s, n), o = r && s[r], o && o.apply && ae.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
				if (t.type = f, !a && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && ae.acceptData(i) && r && i[f] && !ae.isWindow(i)) {
					u = i[r], u && (i[r] = null), ae.event.triggered = f;
					try {
						i[f]()
					} catch (m) {}
					ae.event.triggered = void 0, u && (i[r] = u)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = ae.event.fix(e);
			var t, n, i, a, o, r = [],
				s = G.call(arguments),
				l = (ae._data(this, "events") || {})[e.type] || [],
				c = ae.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				for (r = ae.event.handlers.call(this, e, l), t = 0;
					(a = r[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = a.elem, o = 0;
						(i = a.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((ae.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, a, o, r = [],
				s = t.delegateCount,
				l = e.target;
			if (s && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (a = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === a[n] && (a[n] = i.needsContext ? ae(n, this).index(l) >= 0 : ae.find(n, this, null, [l]).length), a[n] && a.push(i);
						a.length && r.push({
							elem: l,
							handlers: a
						})
					}
			return s < t.length && r.push({
				elem: this,
				handlers: t.slice(s)
			}), r
		},
		fix: function(e) {
			if (e[ae.expando]) return e;
			var t, n, i, a = e.type,
				o = e,
				r = this.fixHooks[a];
			for (r || (this.fixHooks[a] = r = Ie.test(a) ? this.mouseHooks : je.test(a) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new ae.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, a, o = t.button,
					r = t.fromElement;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, a = i.documentElement, n = i.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== h() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === h() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ae.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return ae.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var a = ae.extend(new ae.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? ae.event.trigger(a, null, t) : ae.event.dispatch.call(t, a), a.isDefaultPrevented() && n.preventDefault()
		}
	}, ae.removeEvent = he.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === Ce && (e[i] = null), e.detachEvent(i, n))
	}, ae.Event = function(e, t) {
		return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
	}, ae.Event.prototype = {
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ae.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		ae.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					a = e.relatedTarget,
					o = e.handleObj;
				return (!a || a !== i && !ae.contains(i, a)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ne.submitBubbles || (ae.event.special.submit = {
		setup: function() {
			return ae.nodeName(this, "form") ? !1 : void ae.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = ae.nodeName(t, "input") || ae.nodeName(t, "button") ? t.form : void 0;
				n && !ae._data(n, "submitBubbles") && (ae.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ae._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ae.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return ae.nodeName(this, "form") ? !1 : void ae.event.remove(this, "._submit")
		}
	}), ne.changeBubbles || (ae.event.special.change = {
		setup: function() {
			return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ae.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ae.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ae.event.simulate("change", this, e, !0)
			})), !1) : void ae.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Ne.test(t.nodeName) && !ae._data(t, "changeBubbles") && (ae.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ae.event.simulate("change", this.parentNode, e, !0)
				}), ae._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ae.event.remove(this, "._change"), !Ne.test(this.nodeName)
		}
	}), ne.focusinBubbles || ae.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			ae.event.simulate(t, e.target, ae.event.fix(e), !0)
		};
		ae.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					a = ae._data(i, t);
				a || i.addEventListener(e, n, !0), ae._data(i, t, (a || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					a = ae._data(i, t) - 1;
				a ? ae._data(i, t, a) : (i.removeEventListener(e, n, !0), ae._removeData(i, t))
			}
		}
	}), ae.fn.extend({
		on: function(e, t, n, i, a) {
			var o, r;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (o in e) this.on(o, t, n, e[o], a);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
			else if (!i) return this;
			return 1 === a && (r = i, i = function(e) {
				return ae().off(e), r.apply(this, arguments)
			}, i.guid = r.guid || (r.guid = ae.guid++)), this.each(function() {
				ae.event.add(this, e, i, n, t)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, a;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (a in e) this.off(a, t, e[a]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
				ae.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ae.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? ae.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		ze = / jQuery\d+="(?:null|\d+)"/g,
		Oe = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
		He = /^\s+/,
		Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Be = /<([\w:]+)/,
		Pe = /<tbody/i,
		Ue = /<|&#?\w+;/,
		Re = /<(?:script|style|link)/i,
		We = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ye = /^$|\/(?:java|ecma)script/i,
		Xe = /^true\/(.*)/,
		Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ge = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Qe = m(he),
		Je = Qe.appendChild(he.createElement("div"));
	Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, ae.extend({
		clone: function(e, t, n) {
			var i, a, o, r, s, l = ae.contains(e.ownerDocument, e);
			if (ne.html5Clone || ae.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))
				for (i = g(o), s = g(e), r = 0; null != (a = s[r]); ++r) i[r] && C(a, i[r]);
			if (t)
				if (n)
					for (s = s || g(e), i = i || g(o), r = 0; null != (a = s[r]); r++) x(a, i[r]);
				else x(e, o);
			return i = g(o, "script"), i.length > 0 && $(i, !l && g(e, "script")), i = s = a = null, o
		},
		buildFragment: function(e, t, n, i) {
			for (var a, o, r, s, l, c, u, d = e.length, p = m(t), f = [], h = 0; d > h; h++)
				if (o = e[h], o || 0 === o)
					if ("object" === ae.type(o)) ae.merge(f, o.nodeType ? [o] : o);
					else if (Ue.test(o)) {
				for (s = s || p.appendChild(t.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, s.innerHTML = u[1] + o.replace(Fe, "<$1></$2>") + u[2], a = u[0]; a--;) s = s.lastChild;
				if (!ne.leadingWhitespace && He.test(o) && f.push(t.createTextNode(He.exec(o)[0])), !ne.tbody)
					for (o = "table" !== l || Pe.test(o) ? "<table>" !== u[1] || Pe.test(o) ? 0 : s : s.firstChild, a = o && o.childNodes.length; a--;) ae.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
				for (ae.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = p.lastChild
			} else f.push(t.createTextNode(o));
			for (s && p.removeChild(s), ne.appendChecked || ae.grep(g(f, "input"), v), h = 0; o = f[h++];)
				if ((!i || -1 === ae.inArray(o, i)) && (r = ae.contains(o.ownerDocument, o), s = g(p.appendChild(o), "script"), r && $(s), n))
					for (a = 0; o = s[a++];) Ye.test(o.type || "") && n.push(o);
			return s = null, p
		},
		cleanData: function(e, t) {
			for (var n, i, a, o, r = 0, s = ae.expando, l = ae.cache, c = ne.deleteExpando, u = ae.event.special; null != (n = e[r]); r++)
				if ((t || ae.acceptData(n)) && (a = n[s], o = a && l[a])) {
					if (o.events)
						for (i in o.events) u[i] ? ae.event.remove(n, i) : ae.removeEvent(n, i, o.handle);
					l[a] && (delete l[a], c ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, V.push(a))
				}
		}
	}), ae.fn.extend({
		text: function(e) {
			return Ae(this, function(e) {
				return void 0 === e ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = e ? ae.filter(e, this) : this, a = 0; null != (n = i[a]); a++) t || 1 !== n.nodeType || ae.cleanData(g(n)), n.parentNode && (t && ae.contains(n.ownerDocument, n) && $(g(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ae.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ae.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return ae.clone(this, e, t)
			})
		},
		html: function(e) {
			return Ae(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ze, "") : void 0;
				if (!("string" != typeof e || Re.test(e) || !ne.htmlSerialize && Oe.test(e) || !ne.leadingWhitespace && He.test(e) || Ge[(Be.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Fe, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ae.cleanData(g(t, !1)), t.innerHTML = e);
						t = 0
					} catch (a) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, ae.cleanData(g(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = Q.apply([], e);
			var n, i, a, o, r, s, l = 0,
				c = this.length,
				u = this,
				d = c - 1,
				p = e[0],
				f = ae.isFunction(p);
			if (f || c > 1 && "string" == typeof p && !ne.checkClone && We.test(p)) return this.each(function(n) {
				var i = u.eq(n);
				f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
			});
			if (c && (s = ae.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (o = ae.map(g(s, "script"), b), a = o.length; c > l; l++) i = s, l !== d && (i = ae.clone(i, !0, !0), a && ae.merge(o, g(i, "script"))), t.call(this[l], i, l);
				if (a)
					for (r = o[o.length - 1].ownerDocument, ae.map(o, w), l = 0; a > l; l++) i = o[l], Ye.test(i.type || "") && !ae._data(i, "globalEval") && ae.contains(r, i) && (i.src ? ae._evalUrl && ae._evalUrl(i.src) : ae.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ve, "")));
				s = n = null
			}
			return this
		}
	}), ae.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ae.fn[e] = function(e) {
			for (var n, i = 0, a = [], o = ae(e), r = o.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ae(o[i])[t](n), J.apply(a, n.get());
			return this.pushStack(a)
		}
	});
	var Ke, Ze = {};
	! function() {
		var e;
		ne.shrinkWrapBlocks = function() {
			if (null != e) return e;
			e = !1;
			var t, n, i;
			return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
		}
	}();
	var et, tt, nt = /^margin/,
		it = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
		at = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (et = function(t) {
		return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
	}, tt = function(e, t, n) {
		var i, a, o, r, s = e.style;
		return n = n || et(e), r = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== r || ae.contains(e.ownerDocument, e) || (r = ae.style(e, t)), it.test(r) && nt.test(t) && (i = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = i, s.minWidth = a, s.maxWidth = o)), void 0 === r ? r : r + ""
	}) : he.documentElement.currentStyle && (et = function(e) {
		return e.currentStyle
	}, tt = function(e, t, n) {
		var i, a, o, r, s = e.style;
		return n = n || et(e), r = n ? n[t] : void 0, null == r && s && s[t] && (r = s[t]), it.test(r) && !at.test(t) && (i = s.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : r, r = s.pixelLeft + "px", s.left = i, o && (a.left = o)), void 0 === r ? r : r + "" || "auto"
	}), ! function() {
		function t() {
			var t, n, i, a;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
				width: "4px"
			}).width, a = t.appendChild(he.createElement("div")), a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight), t.removeChild(a)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = t.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === a[0].offsetHeight, s && (a[0].style.display = "", a[1].style.display = "none", s = 0 === a[0].offsetHeight), n.removeChild(i))
		}
		var n, i, a, o, r, s, l;
		n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = n.getElementsByTagName("a")[0], (i = a && a.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ae.extend(ne, {
			reliableHiddenOffsets: function() {
				return null == s && t(), s
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			pixelPosition: function() {
				return null == o && t(), o
			},
			reliableMarginRight: function() {
				return null == l && t(), l
			}
		}))
	}(), ae.swap = function(e, t, n, i) {
		var a, o, r = {};
		for (o in t) r[o] = e.style[o], e.style[o] = t[o];
		a = n.apply(e, i || []);
		for (o in t) e.style[o] = r[o];
		return a
	};
	var ot = /alpha\([^)]*\)/i,
		rt = /opacity\s*=\s*([^)]*)/,
		st = /^(none|table(?!-c[ea]).+)/,
		lt = new RegExp("^(" + Te + ")(.*)$", "i"),
		ct = new RegExp("^([+-])=(" + Te + ")", "i"),
		ut = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		dt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		pt = ["Webkit", "O", "Moz", "ms"];
	ae.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = tt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ne.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var a, o, r, s = ae.camelCase(t),
					l = e.style;
				if (t = ae.cssProps[s] || (ae.cssProps[s] = S(l, s)), r = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n) return r && "get" in r && void 0 !== (a = r.get(e, !1, i)) ? a : l[t];
				if (o = typeof n, "string" === o && (a = ct.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(ae.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ae.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i))))) try {
					l[t] = n
				} catch (c) {}
			}
		},
		css: function(e, t, n, i) {
			var a, o, r, s = ae.camelCase(t);
			return t = ae.cssProps[s] || (ae.cssProps[s] = S(e.style, s)), r = ae.cssHooks[t] || ae.cssHooks[s], r && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (a = parseFloat(o), n === !0 || ae.isNumeric(a) ? a || 0 : o) : o
		}
	}), ae.each(["height", "width"], function(e, t) {
		ae.cssHooks[t] = {
			get: function(e, n, i) {
				return n ? st.test(ae.css(e, "display")) && 0 === e.offsetWidth ? ae.swap(e, ut, function() {
					return N(e, t, i)
				}) : N(e, t, i) : void 0
			},
			set: function(e, n, i) {
				var a = i && et(e);
				return A(e, n, i ? D(e, t, i, ne.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, a), a) : 0)
			}
		}
	}), ne.opacity || (ae.cssHooks.opacity = {
		get: function(e, t) {
			return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				i = e.currentStyle,
				a = ae.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ae.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, a) : o + " " + a)
		}
	}), ae.cssHooks.marginRight = T(ne.reliableMarginRight, function(e, t) {
		return t ? ae.swap(e, {
			display: "inline-block"
		}, tt, [e, "marginRight"]) : void 0
	}), ae.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ae.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[e + Se[i] + t] = o[i] || o[i - 2] || o[0];
				return a
			}
		}, nt.test(e) || (ae.cssHooks[e + t].set = A)
	}), ae.fn.extend({
		css: function(e, t) {
			return Ae(this, function(e, t, n) {
				var i, a, o = {},
					r = 0;
				if (ae.isArray(t)) {
					for (i = et(e), a = t.length; a > r; r++) o[t[r]] = ae.css(e, t[r], !1, i);
					return o
				}
				return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return E(this, !0)
		},
		hide: function() {
			return E(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ee(this) ? ae(this).show() : ae(this).hide()
			})
		}
	}), ae.Tween = j, j.prototype = {
		constructor: j,
		init: function(e, t, n, i, a, o) {
			this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ae.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = j.propHooks[this.prop];
			return e && e.get ? e.get(this) : j.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = j.propHooks[this.prop];
			return this.pos = t = this.options.duration ? ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
		}
	}, j.prototype.init.prototype = j.prototype, j.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ae.cssProps[e.prop]] || ae.cssHooks[e.prop]) ? ae.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ae.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ae.fx = j.prototype.init, ae.fx.step = {};
	var ft, ht, mt = /^(?:toggle|show|hide)$/,
		gt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
		vt = /queueHooks$/,
		yt = [L],
		bt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					a = gt.exec(t),
					o = a && a[3] || (ae.cssNumber[e] ? "" : "px"),
					r = (ae.cssNumber[e] || "px" !== o && +i) && gt.exec(ae.css(n.elem, e)),
					s = 1,
					l = 20;
				if (r && r[3] !== o) {
					o = o || r[3], a = a || [], r = +i || 1;
					do s = s || ".5", r /= s, ae.style(n.elem, e, r + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
				}
				return a && (r = n.start = +r || +i || 0, n.unit = o, n.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2]), n
			}]
		};
	ae.Animation = ae.extend(O, {
			tweener: function(e, t) {
				ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, a = e.length; a > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? yt.unshift(e) : yt.push(e)
			}
		}), ae.speed = function(e, t, n) {
			var i = e && "object" == typeof e ? ae.extend({}, e) : {
				complete: n || !n && t || ae.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !ae.isFunction(t) && t
			};
			return i.duration = ae.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ae.fx.speeds ? ae.fx.speeds[i.duration] : ae.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				ae.isFunction(i.old) && i.old.call(this), i.queue && ae.dequeue(this, i.queue)
			}, i
		}, ae.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(Ee).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var a = ae.isEmptyObject(e),
					o = ae.speed(t, n, i),
					r = function() {
						var t = O(this, ae.extend({}, e), o);
						(a || ae._data(this, "finish")) && t.stop(!0)
					};
				return r.finish = r, a || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						a = null != e && e + "queueHooks",
						o = ae.timers,
						r = ae._data(this);
					if (a) r[a] && r[a].stop && i(r[a]);
					else
						for (a in r) r[a] && r[a].stop && vt.test(a) && i(r[a]);
					for (a = o.length; a--;) o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(n), t = !1, o.splice(a, 1));
					(t || !n) && ae.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = ae._data(this),
						i = n[e + "queue"],
						a = n[e + "queueHooks"],
						o = ae.timers,
						r = i ? i.length : 0;
					for (n.finish = !0, ae.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), ae.each(["toggle", "show", "hide"], function(e, t) {
			var n = ae.fn[t];
			ae.fn[t] = function(e, i, a) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, a)
			}
		}), ae.each({
			slideDown: M("show"),
			slideUp: M("hide"),
			slideToggle: M("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			ae.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), ae.timers = [], ae.fx.tick = function() {
			var e, t = ae.timers,
				n = 0;
			for (ft = ae.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || ae.fx.stop(), ft = void 0
		}, ae.fx.timer = function(e) {
			ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
		}, ae.fx.interval = 13, ae.fx.start = function() {
			ht || (ht = setInterval(ae.fx.tick, ae.fx.interval))
		}, ae.fx.stop = function() {
			clearInterval(ht), ht = null
		}, ae.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ae.fn.delay = function(e, t) {
			return e = ae.fx ? ae.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		function() {
			var e, t, n, i, a;
			t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), a = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = a.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !a.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
		}();
	var wt = /\r/g;
	ae.fn.extend({
		val: function(e) {
			var t, n, i, a = this[0];
			return arguments.length ? (i = ae.isFunction(e), this.each(function(n) {
				var a;
				1 === this.nodeType && (a = i ? e.call(this, n, ae(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : ae.isArray(a) && (a = ae.map(a, function(e) {
					return null == e ? "" : e + ""
				})), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
			})) : a ? (t = ae.valHooks[a.type] || ae.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
		}
	}), ae.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ae.find.attr(e, "value");
					return null != t ? t : ae.trim(ae.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, a = e.selectedIndex, o = "select-one" === e.type || 0 > a, r = o ? null : [], s = o ? a + 1 : i.length, l = 0 > a ? s : o ? a : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== a || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ae.nodeName(n.parentNode, "optgroup"))) {
							if (t = ae(n).val(), o) return t;
							r.push(t)
						}
					return r
				},
				set: function(e, t) {
					for (var n, i, a = e.options, o = ae.makeArray(t), r = a.length; r--;)
						if (i = a[r], ae.inArray(ae.valHooks.option.get(i), o) >= 0) try {
							i.selected = n = !0
						} catch (s) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (e.selectedIndex = -1), a
				}
			}
		}
	}), ae.each(["radio", "checkbox"], function() {
		ae.valHooks[this] = {
			set: function(e, t) {
				return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) >= 0 : void 0
			}
		}, ne.checkOn || (ae.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var $t, xt, Ct = ae.expr.attrHandle,
		kt = /^(?:checked|selected)$/i,
		_t = ne.getSetAttribute,
		Tt = ne.input;
	ae.fn.extend({
			attr: function(e, t) {
				return Ae(this, ae.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					ae.removeAttr(this, e)
				})
			}
		}),
		ae.extend({
			attr: function(e, t, n) {
				var i, a, o = e.nodeType;
				return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ce ? ae.prop(e, t, n) : (1 === o && ae.isXMLDoc(e) || (t = t.toLowerCase(), i = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? xt : $t)), void 0 === n ? i && "get" in i && null !== (a = i.get(e, t)) ? a : (a = ae.find.attr(e, t), null == a ? void 0 : a) : null !== n ? i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : void ae.removeAttr(e, t)) : void 0
			},
			removeAttr: function(e, t) {
				var n, i, a = 0,
					o = t && t.match(be);
				if (o && 1 === e.nodeType)
					for (; n = o[a++];) i = ae.propFix[n] || n, ae.expr.match.bool.test(n) ? Tt && _t || !kt.test(n) ? e[i] = !1 : e[ae.camelCase("default-" + n)] = e[i] = !1 : ae.attr(e, n, ""), e.removeAttribute(_t ? n : i)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!ne.radioValue && "radio" === t && ae.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), xt = {
			set: function(e, t, n) {
				return t === !1 ? ae.removeAttr(e, n) : Tt && _t || !kt.test(n) ? e.setAttribute(!_t && ae.propFix[n] || n, n) : e[ae.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = Ct[t] || ae.find.attr;
			Ct[t] = Tt && _t || !kt.test(t) ? function(e, t, i) {
				var a, o;
				return i || (o = Ct[t], Ct[t] = a, a = null != n(e, t, i) ? t.toLowerCase() : null, Ct[t] = o), a
			} : function(e, t, n) {
				return n ? void 0 : e[ae.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), Tt && _t || (ae.attrHooks.value = {
			set: function(e, t, n) {
				return ae.nodeName(e, "input") ? void(e.defaultValue = t) : $t && $t.set(e, t, n)
			}
		}), _t || ($t = {
			set: function(e, t, n) {
				var i = e.getAttributeNode(n);
				return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
			}
		}, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
			var i;
			return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
		}, ae.valHooks.button = {
			get: function(e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : void 0
			},
			set: $t.set
		}, ae.attrHooks.contenteditable = {
			set: function(e, t, n) {
				$t.set(e, "" === t ? !1 : t, n)
			}
		}, ae.each(["width", "height"], function(e, t) {
			ae.attrHooks[t] = {
				set: function(e, n) {
					return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
				}
			}
		})), ne.style || (ae.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || void 0
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		});
	var St = /^(?:input|select|textarea|button|object)$/i,
		Et = /^(?:a|area)$/i;
	ae.fn.extend({
		prop: function(e, t) {
			return Ae(this, ae.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ae.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), ae.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var i, a, o, r = e.nodeType;
			return e && 3 !== r && 8 !== r && 2 !== r ? (o = 1 !== r || !ae.isXMLDoc(e), o && (t = ae.propFix[t] || t, a = ae.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ae.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : St.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), ne.hrefNormalized || ae.each(["href", "src"], function(e, t) {
		ae.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ne.optSelected || (ae.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ae.propFix[this.toLowerCase()] = this
	}), ne.enctype || (ae.propFix.enctype = "encoding");
	var At = /[\t\r\n\f]/g;
	ae.fn.extend({
		addClass: function(e) {
			var t, n, i, a, o, r, s = 0,
				l = this.length,
				c = "string" == typeof e && e;
			if (ae.isFunction(e)) return this.each(function(t) {
				ae(this).addClass(e.call(this, t, this.className))
			});
			if (c)
				for (t = (e || "").match(be) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
						for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
						r = ae.trim(i), n.className !== r && (n.className = r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, a, o, r, s = 0,
				l = this.length,
				c = 0 === arguments.length || "string" == typeof e && e;
			if (ae.isFunction(e)) return this.each(function(t) {
				ae(this).removeClass(e.call(this, t, this.className))
			});
			if (c)
				for (t = (e || "").match(be) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
						for (o = 0; a = t[o++];)
							for (; i.indexOf(" " + a + " ") >= 0;) i = i.replace(" " + a + " ", " ");
						r = e ? ae.trim(i) : "", n.className !== r && (n.className = r)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ae.isFunction(e) ? function(n) {
				ae(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var t, i = 0, a = ae(this), o = e.match(be) || []; t = o[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
				else(n === Ce || "boolean" === n) && (this.className && ae._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ae._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ae.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ae.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Dt = ae.now(),
		Nt = /\?/,
		jt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ae.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, i = null,
			a = ae.trim(t + "");
		return a && !ae.trim(a.replace(jt, function(e, t, a, o) {
			return n && t && (i = 0), 0 === i ? e : (n = a || t, i += !o - !a, "")
		})) ? Function("return " + a)() : ae.error("Invalid JSON: " + t)
	}, ae.parseXML = function(t) {
		var n, i;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (a) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), n
	};
	var It, Mt, qt = /#.*$/,
		Lt = /([?&])_=[^&]*/,
		zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Ht = /^(?:GET|HEAD)$/,
		Ft = /^\/\//,
		Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Pt = {},
		Ut = {},
		Rt = "*/".concat("*");
	try {
		Mt = location.href
	} catch (Wt) {
		Mt = he.createElement("a"), Mt.href = "", Mt = Mt.href
	}
	It = Bt.exec(Mt.toLowerCase()) || [], ae.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Mt,
			type: "GET",
			isLocal: Ot.test(It[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Rt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ae.parseJSON,
				"text xml": ae.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? B(B(e, ae.ajaxSettings), t) : B(ae.ajaxSettings, e)
		},
		ajaxPrefilter: H(Pt),
		ajaxTransport: H(Ut),
		ajax: function(e, t) {
			function n(e, t, n, i) {
				var a, u, v, y, w, x = t;
				2 !== b && (b = 2, s && clearTimeout(s), c = void 0, r = i || "", $.readyState = e > 0 ? 4 : 0, a = e >= 200 && 300 > e || 304 === e, n && (y = P(d, $, n)), y = U(d, y, $, a), a ? (d.ifModified && (w = $.getResponseHeader("Last-Modified"), w && (ae.lastModified[o] = w), w = $.getResponseHeader("etag"), w && (ae.etag[o] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, u = y.data, v = y.error, a = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), $.status = e, $.statusText = (t || x) + "", a ? h.resolveWith(p, [u, x, $]) : h.rejectWith(p, [$, x, v]), $.statusCode(g), g = void 0, l && f.trigger(a ? "ajaxSuccess" : "ajaxError", [$, d, a ? u : v]), m.fireWith(p, [$, x]), l && (f.trigger("ajaxComplete", [$, d]), --ae.active || ae.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, a, o, r, s, l, c, u, d = ae.ajaxSetup({}, t),
				p = d.context || d,
				f = d.context && (p.nodeType || p.jquery) ? ae(p) : ae.event,
				h = ae.Deferred(),
				m = ae.Callbacks("once memory"),
				g = d.statusCode || {},
				v = {},
				y = {},
				b = 0,
				w = "canceled",
				$ = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!u)
								for (u = {}; t = zt.exec(r);) u[t[1].toLowerCase()] = t[2];
							t = u[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? r : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) g[t] = [g[t], e[t]];
							else $.always(e[$.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return c && c.abort(t), n(0, t), this
					}
				};
			if (h.promise($).complete = m.add, $.success = $.done, $.error = $.fail, d.url = ((e || d.url || Mt) + "").replace(qt, "").replace(Ft, It[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ae.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Bt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === It[1] && i[2] === It[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (It[3] || ("http:" === It[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ae.param(d.data, d.traditional)), F(Pt, d, t, $), 2 === b) return $;
			l = ae.event && d.global, l && 0 === ae.active++ && ae.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ht.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Nt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Lt.test(o) ? o.replace(Lt, "$1_=" + Dt++) : o + (Nt.test(o) ? "&" : "?") + "_=" + Dt++)), d.ifModified && (ae.lastModified[o] && $.setRequestHeader("If-Modified-Since", ae.lastModified[o]), ae.etag[o] && $.setRequestHeader("If-None-Match", ae.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && $.setRequestHeader("Content-Type", d.contentType), $.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]);
			for (a in d.headers) $.setRequestHeader(a, d.headers[a]);
			if (d.beforeSend && (d.beforeSend.call(p, $, d) === !1 || 2 === b)) return $.abort();
			w = "abort";
			for (a in {
					success: 1,
					error: 1,
					complete: 1
				}) $[a](d[a]);
			if (c = F(Ut, d, t, $)) {
				$.readyState = 1, l && f.trigger("ajaxSend", [$, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
					$.abort("timeout")
				}, d.timeout));
				try {
					b = 1, c.send(v, n)
				} catch (x) {
					if (!(2 > b)) throw x;
					n(-1, x)
				}
			} else n(-1, "No Transport");
			return $
		},
		getJSON: function(e, t, n) {
			return ae.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return ae.get(e, void 0, t, "script")
		}
	}), ae.each(["get", "post"], function(e, t) {
		ae[t] = function(e, n, i, a) {
			return ae.isFunction(n) && (a = a || i, i = n, n = void 0), ae.ajax({
				url: e,
				type: t,
				dataType: a,
				data: n,
				success: i
			})
		}
	}), ae._evalUrl = function(e) {
		return ae.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, ae.fn.extend({
		wrapAll: function(e) {
			if (ae.isFunction(e)) return this.each(function(t) {
				ae(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ae(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return this.each(ae.isFunction(e) ? function(t) {
				ae(this).wrapInner(e.call(this, t))
			} : function() {
				var t = ae(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ae.isFunction(e);
			return this.each(function(n) {
				ae(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ae.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ae.css(e, "display"))
	}, ae.expr.filters.visible = function(e) {
		return !ae.expr.filters.hidden(e)
	};
	var Yt = /%20/g,
		Xt = /\[\]$/,
		Vt = /\r?\n/g,
		Gt = /^(?:submit|button|image|reset|file)$/i,
		Qt = /^(?:input|select|textarea|keygen)/i;
	ae.param = function(e, t) {
		var n, i = [],
			a = function(e, t) {
				t = ae.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function() {
			a(this.name, this.value)
		});
		else
			for (n in e) R(n, e[n], t, a);
		return i.join("&").replace(Yt, "+")
	}, ae.fn.extend({
		serialize: function() {
			return ae.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ae.prop(this, "elements");
				return e ? ae.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ae(this).is(":disabled") && Qt.test(this.nodeName) && !Gt.test(e) && (this.checked || !De.test(e))
			}).map(function(e, t) {
				var n = ae(this).val();
				return null == n ? null : ae.isArray(n) ? ae.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Vt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Vt, "\r\n")
				}
			}).get()
		}
	}), ae.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || Y()
	} : W;
	var Jt = 0,
		Kt = {},
		Zt = ae.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Kt) Kt[e](void 0, !0)
	}), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ae.ajaxTransport(function(e) {
		if (!e.crossDomain || ne.cors) {
			var t;
			return {
				send: function(n, i) {
					var a, o = e.xhr(),
						r = ++Jt;
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (a in e.xhrFields) o[a] = e.xhrFields[a];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (a in n) void 0 !== n[a] && o.setRequestHeader(a, n[a] + "");
					o.send(e.hasContent && e.data || null), t = function(n, a) {
						var s, l, c;
						if (t && (a || 4 === o.readyState))
							if (delete Kt[r], t = void 0, o.onreadystatechange = ae.noop, a) 4 !== o.readyState && o.abort();
							else {
								c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
								try {
									l = o.statusText
								} catch (u) {
									l = ""
								}
								s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
							}
						c && i(s, l, c, o.getAllResponseHeaders())
					}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[r] = t : t()
				},
				abort: function() {
					t && t(void 0, !0)
				}
			}
		}
	}), ae.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ae.globalEval(e), e
			}
		}
	}), ae.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ae.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = he.head || ae("head")[0] || he.documentElement;
			return {
				send: function(i, a) {
					t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var en = [],
		tn = /(=)\?(?=&|$)|\?\?/;
	ae.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = en.pop() || ae.expando + "_" + Dt++;
			return this[e] = !0, e
		}
	}), ae.ajaxPrefilter("json jsonp", function(t, n, i) {
		var a, o, r, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + a) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
			return r || ae.error(a + " was not called"), r[0]
		}, t.dataTypes[0] = "json", o = e[a], e[a] = function() {
			r = arguments
		}, i.always(function() {
			e[a] = o, t[a] && (t.jsonpCallback = n.jsonpCallback, en.push(a)), r && ae.isFunction(o) && o(r[0]), r = o = void 0
		}), "script") : void 0
	}), ae.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || he;
		var i = de.exec(e),
			a = !n && [];
		return i ? [t.createElement(i[1])] : (i = ae.buildFragment([e], t, a), a && a.length && ae(a).remove(), ae.merge([], i.childNodes))
	};
	var nn = ae.fn.load;
	ae.fn.load = function(e, t, n) {
		if ("string" != typeof e && nn) return nn.apply(this, arguments);
		var i, a, o, r = this,
			s = e.indexOf(" ");
		return s >= 0 && (i = ae.trim(e.slice(s, e.length)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && ae.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: t
		}).done(function(e) {
			a = arguments, r.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e)
		}).complete(n && function(e, t) {
			r.each(n, a || [e.responseText, t, e])
		}), this
	}, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ae.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ae.expr.filters.animated = function(e) {
		return ae.grep(ae.timers, function(t) {
			return e === t.elem
		}).length
	};
	var an = e.document.documentElement;
	ae.offset = {
		setOffset: function(e, t, n) {
			var i, a, o, r, s, l, c, u = ae.css(e, "position"),
				d = ae(e),
				p = {};
			"static" === u && (e.style.position = "relative"), s = d.offset(), o = ae.css(e, "top"), l = ae.css(e, "left"), c = ("absolute" === u || "fixed" === u) && ae.inArray("auto", [o, l]) > -1, c ? (i = d.position(), r = i.top, a = i.left) : (r = parseFloat(o) || 0, a = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + r), null != t.left && (p.left = t.left - s.left + a), "using" in t ? t.using.call(e, p) : d.css(p)
		}
	}, ae.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				ae.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0,
					left: 0
				},
				a = this[0],
				o = a && a.ownerDocument;
			return o ? (t = o.documentElement, ae.contains(t, a) ? (typeof a.getBoundingClientRect !== Ce && (i = a.getBoundingClientRect()), n = X(o), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === ae.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (n = e.offset()), n.top += ae.css(e[0], "borderTopWidth", !0), n.left += ae.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ae.css(i, "marginTop", !0),
					left: t.left - n.left - ae.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || an; e && !ae.nodeName(e, "html") && "static" === ae.css(e, "position");) e = e.offsetParent;
				return e || an
			})
		}
	}), ae.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		ae.fn[e] = function(i) {
			return Ae(this, function(e, i, a) {
				var o = X(e);
				return void 0 === a ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? ae(o).scrollLeft() : a, n ? a : ae(o).scrollTop()) : e[i] = a)
			}, e, i, arguments.length, null)
		}
	}), ae.each(["top", "left"], function(e, t) {
		ae.cssHooks[t] = T(ne.pixelPosition, function(e, n) {
			return n ? (n = tt(e, t), it.test(n) ? ae(e).position()[t] + "px" : n) : void 0
		})
	}), ae.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		ae.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			ae.fn[i] = function(i, a) {
				var o = arguments.length && (n || "boolean" != typeof i),
					r = n || (i === !0 || a === !0 ? "margin" : "border");
				return Ae(this, function(t, n, i) {
					var a;
					return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? ae.css(t, n, r) : ae.style(t, n, i, r)
				}, t, o ? i : void 0, o, null)
			}
		})
	}), ae.fn.size = function() {
		return this.length
	}, ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ae
	});
	var on = e.jQuery,
		rn = e.$;
	return ae.noConflict = function(t) {
		return e.$ === ae && (e.$ = rn), t && e.jQuery === ae && (e.jQuery = on), ae
	}, typeof t === Ce && (e.jQuery = e.$ = ae), ae
}), ! function(e, t, n) {
	"use strict";
	! function i(e, t, n) {
		function a(r, s) {
			if (!t[r]) {
				if (!e[r]) {
					var l = "function" == typeof require && require;
					if (!s && l) return l(r, !0);
					if (o) return o(r, !0);
					var c = new Error("Cannot find module '" + r + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var u = t[r] = {
					exports: {}
				};
				e[r][0].call(u.exports, function(t) {
					var n = e[r][1][t];
					return a(n ? n : t)
				}, u, u.exports, i, e, t, n)
			}
			return t[r].exports
		}
		for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) a(n[r]);
		return a
	}({
		1: [function(i) {
			var a, o, r, s, l = function(e) {
					return e && e.__esModule ? e : {
						"default": e
					}
				},
				c = i("./modules/handle-dom"),
				u = i("./modules/utils"),
				d = i("./modules/handle-swal-dom"),
				p = i("./modules/handle-click"),
				f = i("./modules/handle-key"),
				h = l(f),
				m = i("./modules/default-params"),
				g = l(m),
				v = i("./modules/set-params"),
				y = l(v);
			r = s = function() {
				function i(e) {
					var t = r;
					return t[e] === n ? g["default"][e] : t[e]
				}
				var r = arguments[0];
				if (c.addClass(t.body, "stop-scrolling"), d.resetInput(), r === n) return u.logStr("SweetAlert expects at least 1 attribute!"), !1;
				var l = u.extend({}, g["default"]);
				switch (typeof r) {
					case "string":
						l.title = r, l.text = arguments[1] || "", l.type = arguments[2] || "";
						break;
					case "object":
						if (r.title === n) return u.logStr('Missing "title" argument!'), !1;
						l.title = r.title;
						for (var f in g["default"]) l[f] = i(f);
						l.confirmButtonText = l.showCancelButton ? "Confirm" : g["default"].confirmButtonText, l.confirmButtonText = i("confirmButtonText"), l.doneFunction = arguments[1] || null;
						break;
					default:
						return u.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof r), !1
				}
				y["default"](l), d.fixVerticalPosition(), d.openModal(arguments[1]);
				for (var m = d.getModal(), v = m.querySelectorAll("button"), b = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], w = function(e) {
						return p.handleButton(e, l, m)
					}, $ = 0; $ < v.length; $++)
					for (var x = 0; x < b.length; x++) {
						var C = b[x];
						v[$][C] = w
					}
				d.getOverlay().onclick = w, a = e.onkeydown;
				var k = function(e) {
					return h["default"](e, l, m)
				};
				e.onkeydown = k, e.onfocus = function() {
					setTimeout(function() {
						o !== n && (o.focus(), o = n)
					}, 0)
				}, s.enableButtons()
			}, r.setDefaults = s.setDefaults = function(e) {
				if (!e) throw new Error("userParams is required");
				if ("object" != typeof e) throw new Error("userParams has to be a object");
				u.extend(g["default"], e)
			}, r.close = s.close = function() {
				var i = d.getModal();
				c.fadeOut(d.getOverlay(), 5), c.fadeOut(i, 5), c.removeClass(i, "showSweetAlert"), c.addClass(i, "hideSweetAlert"), c.removeClass(i, "visible");
				var r = i.querySelector(".sa-icon.sa-success");
				c.removeClass(r, "animate"), c.removeClass(r.querySelector(".sa-tip"), "animateSuccessTip"), c.removeClass(r.querySelector(".sa-long"), "animateSuccessLong");
				var s = i.querySelector(".sa-icon.sa-error");
				c.removeClass(s, "animateErrorIcon"), c.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
				var l = i.querySelector(".sa-icon.sa-warning");
				return c.removeClass(l, "pulseWarning"), c.removeClass(l.querySelector(".sa-body"), "pulseWarningIns"), c.removeClass(l.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
					var e = i.getAttribute("data-custom-class");
					c.removeClass(i, e)
				}, 300), c.removeClass(t.body, "stop-scrolling"), e.onkeydown = a, e.previousActiveElement && e.previousActiveElement.focus(), o = n, clearTimeout(i.timeout), !0
			}, r.showInputError = s.showInputError = function(e) {
				var t = d.getModal(),
					n = t.querySelector(".sa-input-error");
				c.addClass(n, "show");
				var i = t.querySelector(".sa-error-container");
				c.addClass(i, "show"), i.querySelector("p").innerHTML = e, setTimeout(function() {
					r.enableButtons()
				}, 1), t.querySelector("input").focus()
			}, r.resetInputError = s.resetInputError = function(e) {
				if (e && 13 === e.keyCode) return !1;
				var t = d.getModal(),
					n = t.querySelector(".sa-input-error");
				c.removeClass(n, "show");
				var i = t.querySelector(".sa-error-container");
				c.removeClass(i, "show")
			}, r.disableButtons = s.disableButtons = function() {
				var e = d.getModal(),
					t = e.querySelector("button.confirm"),
					n = e.querySelector("button.cancel");
				t.disabled = !0, n.disabled = !0
			}, r.enableButtons = s.enableButtons = function() {
				var e = d.getModal(),
					t = e.querySelector("button.confirm"),
					n = e.querySelector("button.cancel");
				t.disabled = !1, n.disabled = !1
			}, "undefined" != typeof e ? e.sweetAlert = e.swal = r : u.logStr("SweetAlert is a frontend module!")
		}, {
			"./modules/default-params": 2,
			"./modules/handle-click": 3,
			"./modules/handle-dom": 4,
			"./modules/handle-key": 5,
			"./modules/handle-swal-dom": 6,
			"./modules/set-params": 8,
			"./modules/utils": 9
		}],
		2: [function(e, t, n) {
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i = {
				title: "",
				text: "",
				type: null,
				allowOutsideClick: !1,
				showConfirmButton: !0,
				showCancelButton: !1,
				closeOnConfirm: !0,
				closeOnCancel: !0,
				confirmButtonText: "OK",
				confirmButtonColor: "#8CD4F5",
				cancelButtonText: "Cancel",
				imageUrl: null,
				imageSize: null,
				timer: null,
				customClass: "",
				html: !1,
				animation: !0,
				allowEscapeKey: !0,
				inputType: "text",
				inputPlaceholder: "",
				inputValue: "",
				showLoaderOnConfirm: !1
			};
			n["default"] = i, t.exports = n["default"]
		}, {}],
		3: [function(t, n, i) {
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = t("./utils"),
				o = (t("./handle-swal-dom"), t("./handle-dom")),
				r = function(t, n, i) {
					function r(e) {
						h && n.confirmButtonColor && (f.style.backgroundColor = e)
					}
					var c, u, d, p = t || e.event,
						f = p.target || p.srcElement,
						h = -1 !== f.className.indexOf("confirm"),
						m = -1 !== f.className.indexOf("sweet-overlay"),
						g = o.hasClass(i, "visible"),
						v = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
					switch (h && n.confirmButtonColor && (c = n.confirmButtonColor, u = a.colorLuminance(c, -.04), d = a.colorLuminance(c, -.14)), p.type) {
						case "mouseover":
							r(u);
							break;
						case "mouseout":
							r(c);
							break;
						case "mousedown":
							r(d);
							break;
						case "mouseup":
							r(u);
							break;
						case "focus":
							var y = i.querySelector("button.confirm"),
								b = i.querySelector("button.cancel");
							h ? b.style.boxShadow = "none" : y.style.boxShadow = "none";
							break;
						case "click":
							var w = i === f,
								$ = o.isDescendant(i, f);
							if (!w && !$ && g && !n.allowOutsideClick) break;
							h && v && g ? s(i, n) : v && g || m ? l(i, n) : o.isDescendant(i, f) && "BUTTON" === f.tagName && sweetAlert.close()
					}
				},
				s = function(e, t) {
					var n = !0;
					o.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
				},
				l = function(e, t) {
					var n = String(t.doneFunction).replace(/\s/g, ""),
						i = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
					i && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
				};
			i["default"] = {
				handleButton: r,
				handleConfirm: s,
				handleCancel: l
			}, n.exports = i["default"]
		}, {
			"./handle-dom": 4,
			"./handle-swal-dom": 6,
			"./utils": 9
		}],
		4: [function(n, i, a) {
			Object.defineProperty(a, "__esModule", {
				value: !0
			});
			var o = function(e, t) {
					return new RegExp(" " + t + " ").test(" " + e.className + " ")
				},
				r = function(e, t) {
					o(e, t) || (e.className += " " + t)
				},
				s = function(e, t) {
					var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
					if (o(e, t)) {
						for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
						e.className = n.replace(/^\s+|\s+$/g, "")
					}
				},
				l = function(e) {
					var n = t.createElement("div");
					return n.appendChild(t.createTextNode(e)), n.innerHTML
				},
				c = function(e) {
					e.style.opacity = "", e.style.display = "block"
				},
				u = function(e) {
					if (e && !e.length) return c(e);
					for (var t = 0; t < e.length; ++t) c(e[t])
				},
				d = function(e) {
					e.style.opacity = "", e.style.display = "none"
				},
				p = function(e) {
					if (e && !e.length) return d(e);
					for (var t = 0; t < e.length; ++t) d(e[t])
				},
				f = function(e, t) {
					for (var n = t.parentNode; null !== n;) {
						if (n === e) return !0;
						n = n.parentNode
					}
					return !1
				},
				h = function(e) {
					e.style.left = "-9999px", e.style.display = "block";
					var t, n = e.clientHeight;
					return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
				},
				m = function(e, t) {
					if (+e.style.opacity < 1) {
						t = t || 16, e.style.opacity = 0, e.style.display = "block";
						var n = +new Date,
							i = function(e) {
								function t() {
									return e.apply(this, arguments)
								}
								return t.toString = function() {
									return e.toString()
								}, t
							}(function() {
								e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
							});
						i()
					}
					e.style.display = "block"
				},
				g = function(e, t) {
					t = t || 16, e.style.opacity = 1;
					var n = +new Date,
						i = function(e) {
							function t() {
								return e.apply(this, arguments)
							}
							return t.toString = function() {
								return e.toString()
							}, t
						}(function() {
							e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
						});
					i()
				},
				v = function(n) {
					if ("function" == typeof MouseEvent) {
						var i = new MouseEvent("click", {
							view: e,
							bubbles: !1,
							cancelable: !0
						});
						n.dispatchEvent(i)
					} else if (t.createEvent) {
						var a = t.createEvent("MouseEvents");
						a.initEvent("click", !1, !1), n.dispatchEvent(a)
					} else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
				},
				y = function(t) {
					"function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
				};
			a.hasClass = o, a.addClass = r, a.removeClass = s, a.escapeHtml = l, a._show = c, a.show = u, a._hide = d, a.hide = p, a.isDescendant = f, a.getTopMargin = h, a.fadeIn = m, a.fadeOut = g, a.fireClick = v, a.stopEventPropagation = y
		}, {}],
		5: [function(t, i, a) {
			Object.defineProperty(a, "__esModule", {
				value: !0
			});
			var o = t("./handle-dom"),
				r = t("./handle-swal-dom"),
				s = function(t, i, a) {
					var s = t || e.event,
						l = s.keyCode || s.which,
						c = a.querySelector("button.confirm"),
						u = a.querySelector("button.cancel"),
						d = a.querySelectorAll("button[tabindex]");
					if (-1 !== [9, 13, 32, 27].indexOf(l)) {
						for (var p = s.target || s.srcElement, f = -1, h = 0; h < d.length; h++)
							if (p === d[h]) {
								f = h;
								break
							}
						9 === l ? (p = -1 === f ? c : f === d.length - 1 ? d[0] : d[f + 1], o.stopEventPropagation(s), p.focus(), i.confirmButtonColor && r.setFocusStyle(p, i.confirmButtonColor)) : 13 === l ? ("INPUT" === p.tagName && (p = c, c.focus()), p = -1 === f ? c : n) : 27 === l && i.allowEscapeKey === !0 ? (p = u, o.fireClick(p, s)) : p = n
					}
				};
			a["default"] = s, i.exports = a["default"]
		}, {
			"./handle-dom": 4,
			"./handle-swal-dom": 6
		}],
		6: [function(n, i, a) {
			var o = function(e) {
				return e && e.__esModule ? e : {
					"default": e
				}
			};
			Object.defineProperty(a, "__esModule", {
				value: !0
			});
			var r = n("./utils"),
				s = n("./handle-dom"),
				l = n("./default-params"),
				c = o(l),
				u = n("./injected-html"),
				d = o(u),
				p = ".sweet-alert",
				f = ".sweet-overlay",
				h = function() {
					var e = t.createElement("div");
					for (e.innerHTML = d["default"]; e.firstChild;) t.body.appendChild(e.firstChild)
				},
				m = function(e) {
					function t() {
						return e.apply(this, arguments)
					}
					return t.toString = function() {
						return e.toString()
					}, t
				}(function() {
					var e = t.querySelector(p);
					return e || (h(), e = m()), e
				}),
				g = function() {
					var e = m();
					return e ? e.querySelector("input") : void 0
				},
				v = function() {
					return t.querySelector(f)
				},
				y = function(e, t) {
					var n = r.hexToRgb(t);
					e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
				},
				b = function(n) {
					var i = m();
					s.fadeIn(v(), 10), s.show(i), s.addClass(i, "showSweetAlert"), s.removeClass(i, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
					var a = i.querySelector("button.confirm");
					a.focus(), setTimeout(function() {
						s.addClass(i, "visible")
					}, 500);
					var o = i.getAttribute("data-timer");
					if ("null" !== o && "" !== o) {
						var r = n;
						i.timeout = setTimeout(function() {
							var e = (r || null) && "true" === i.getAttribute("data-has-done-function");
							e ? r(null) : sweetAlert.close()
						}, o)
					}
				},
				w = function() {
					var e = m(),
						t = g();
					s.removeClass(e, "show-input"), t.value = c["default"].inputValue, t.setAttribute("type", c["default"].inputType), t.setAttribute("placeholder", c["default"].inputPlaceholder), $()
				},
				$ = function(e) {
					if (e && 13 === e.keyCode) return !1;
					var t = m(),
						n = t.querySelector(".sa-input-error");
					s.removeClass(n, "show");
					var i = t.querySelector(".sa-error-container");
					s.removeClass(i, "show")
				},
				x = function() {
					var e = m();
					e.style.marginTop = s.getTopMargin(m())
				};
			a.sweetAlertInitialize = h, a.getModal = m, a.getOverlay = v, a.getInput = g, a.setFocusStyle = y, a.openModal = b, a.resetInput = w, a.resetInputError = $, a.fixVerticalPosition = x
		}, {
			"./default-params": 2,
			"./handle-dom": 4,
			"./injected-html": 7,
			"./utils": 9
		}],
		7: [function(e, t, n) {
			Object.defineProperty(n, "__esModule", {
				value: !0
			});
			var i = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
			n["default"] = i, t.exports = n["default"]
		}, {}],
		8: [function(e, t, i) {
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = e("./utils"),
				o = e("./handle-swal-dom"),
				r = e("./handle-dom"),
				s = ["error", "warning", "info", "success", "input", "prompt"],
				l = function(e) {
					var t = o.getModal(),
						i = t.querySelector("h2"),
						l = t.querySelector("p"),
						c = t.querySelector("button.cancel"),
						u = t.querySelector("button.confirm");
					if (i.innerHTML = e.html ? e.title : r.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text : r.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && r.show(l), e.customClass) r.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
					else {
						var d = t.getAttribute("data-custom-class");
						r.removeClass(t, d), t.setAttribute("data-custom-class", "")
					}
					if (r.hide(t.querySelectorAll(".sa-icon")), e.type && !a.isIE8()) {
						var p = function() {
							for (var i = !1, a = 0; a < s.length; a++)
								if (e.type === s[a]) {
									i = !0;
									break
								}
							if (!i) return logStr("Unknown alert type: " + e.type), {
								v: !1
							};
							var l = ["success", "error", "warning", "info"],
								c = n; - 1 !== l.indexOf(e.type) && (c = t.querySelector(".sa-icon.sa-" + e.type), r.show(c));
							var u = o.getInput();
							switch (e.type) {
								case "success":
									r.addClass(c, "animate"), r.addClass(c.querySelector(".sa-tip"), "animateSuccessTip"), r.addClass(c.querySelector(".sa-long"), "animateSuccessLong");
									break;
								case "error":
									r.addClass(c, "animateErrorIcon"), r.addClass(c.querySelector(".sa-x-mark"), "animateXMark");
									break;
								case "warning":
									r.addClass(c, "pulseWarning"), r.addClass(c.querySelector(".sa-body"), "pulseWarningIns"), r.addClass(c.querySelector(".sa-dot"), "pulseWarningIns");
									break;
								case "input":
								case "prompt":
									u.setAttribute("type", e.inputType), u.value = e.inputValue, u.setAttribute("placeholder", e.inputPlaceholder), r.addClass(t, "show-input"), setTimeout(function() {
										u.focus(), u.addEventListener("keyup", swal.resetInputError)
									}, 400)
							}
						}();
						if ("object" == typeof p) return p.v
					}
					if (e.imageUrl) {
						var f = t.querySelector(".sa-icon.sa-custom");
						f.style.backgroundImage = "url(" + e.imageUrl + ")", r.show(f);
						var h = 80,
							m = 80;
						if (e.imageSize) {
							var g = e.imageSize.toString().split("x"),
								v = g[0],
								y = g[1];
							v && y ? (h = v, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
						}
						f.setAttribute("style", f.getAttribute("style") + "width:" + h + "px; height:" + m + "px")
					}
					t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? c.style.display = "inline-block" : r.hide(c), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? u.style.display = "inline-block" : r.hide(u), e.cancelButtonText && (c.innerHTML = r.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (u.innerHTML = r.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (u.style.backgroundColor = e.confirmButtonColor, u.style.borderLeftColor = e.confirmLoadingButtonColor, u.style.borderRightColor = e.confirmLoadingButtonColor, o.setFocusStyle(u, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
					var b = !!e.doneFunction;
					t.setAttribute("data-has-done-function", b), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
				};
			i["default"] = l, t.exports = i["default"]
		}, {
			"./handle-dom": 4,
			"./handle-swal-dom": 6,
			"./utils": 9
		}],
		9: [function(t, n, i) {
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e
				},
				o = function(e) {
					var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
					return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
				},
				r = function() {
					return e.attachEvent && !e.addEventListener
				},
				s = function(t) {
					e.console && e.console.log("SweetAlert: " + t)
				},
				l = function(e, t) {
					e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
					var n, i, a = "#";
					for (i = 0; 3 > i; i++) n = parseInt(e.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length);
					return a
				};
			i.extend = a, i.hexToRgb = o, i.isIE8 = r, i.logStr = s, i.colorLuminance = l
		}, {}]
	}, {}, [1]), "function" == typeof define && define.amd ? define(function() {
		return sweetAlert
	}) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document),
function(e, t, n, i) {
	function a(i, a) {
		var o = this;
		return o.options = e.extend({}, s, a), o.parent = i, o.wrapper = o.parent.children(), o.slides = o.wrapper.children(), o.currentSlide = 0, o.CSS3support = !0, o.init(), o.build(), o.play(), o.options.touchDistance && o.swipe(), e(n).on("keyup", function(e) {
			39 === e.keyCode && o.slide(1), 37 === e.keyCode && o.slide(-1)
		}), o.parent.add(o.arrows).add(o.nav).on("mouseover mouseout", function(e) {
			o.pause(), "mouseout" === e.type && o.play()
		}), e(t).on("resize", function() {
			o.init(), o.slide(0)
		}), {
			current: function() {
				return -o.currentSlide + 1
			},
			play: function() {
				o.play()
			},
			pause: function() {
				o.pause()
			},
			next: function(e) {
				o.slide(1, !1, e)
			},
			prev: function(e) {
				o.slide(-1, !1, e)
			},
			jump: function(e, t) {
				o.slide(e - 1, !0, t)
			},
			nav: function(e) {
				o.navWrapper && o.navWrapper.remove(), o.options.nav = e ? e : o.options.nav, o.navigation()
			},
			arrows: function(e) {
				o.arrowsWrapper && o.arrowsWrapper.remove(), o.options.arrows = e ? e : o.options.arrows, o.arrows()
			}
		}
	}

	function o(e) {
		var a = !1,
			o = "Khtml ms O Moz Webkit".split(" "),
			r = n.createElement("div"),
			s = null;
		if (e = e.toLowerCase(), r.style[e] !== i && (a = !0), a === !1) {
			s = e.charAt(0).toUpperCase() + e.substr(1);
			for (var l = 0; l < o.length; l++)
				if (r.style[o[l] + s] !== i) {
					a = !0;
					break
				}
		}
		return t.opera && t.opera.version() < 13 && (a = !1), a
	}
	var r = "glide",
		s = {
			autoplay: 4e3,
			animationTime: 500,
			arrows: !0,
			arrowsWrapperClass: "slider-arrows",
			arrowMainClass: "slider-arrow",
			arrowRightClass: "slider-arrow--right",
			arrowRightText: "next",
			arrowLeftClass: "slider-arrow--left",
			arrowLeftText: "prev",
			nav: !0,
			navCenter: !0,
			navClass: "slider-nav",
			navItemClass: "slider-nav__item",
			navCurrentItemClass: "slider-nav__item--current",
			touchDistance: 60,
			slideCurrentItemClass: "slide__item--current"
		};
	a.prototype.build = function() {
		var e = this;
		e.options.arrows && e.arrows(), e.options.nav && e.navigation()
	}, a.prototype.navigation = function() {
		var t = this;
		try {
			if (t.slides.length > 1) {
				var n = t.options,
					i = t.options.nav === !0 ? t.parent : t.options.nav;
				t.navWrapper = e("<div />", {
					"class": n.navClass
				}).appendTo(i);
				for (var a, o = t.navWrapper, r = 0; r < t.slides.length; r++) a = e("<a />", {
					href: "#",
					"class": n.navItemClass,
					"data-distance": r
				}).appendTo(o), o[r + 1] = a;
				var s = o.children();
				s.eq(0).addClass(n.navCurrentItemClass), t.slides.eq(0).addClass(n.slideCurrentItemClass), n.navCenter && o.css({
					left: "50%",
					width: s.outerWidth(!0) * s.length,
					"margin-left": -o.outerWidth(!0) / 2
				}), s.on("click touchstart", function(n) {
					n.preventDefault(), t.slide(e(this).data("distance"), !0)
				})
			}
		} catch (l) {}
	}, a.prototype.arrows = function() {
		var t = this;
		try {
			if (t.slides.length > 1) {
				var n = t.options,
					i = t.options.arrows === !0 ? t.parent : t.options.arrows;
				t.arrowsWrapper = e("<div />", {
					"class": n.arrowsWrapperClass
				}).appendTo(i);
				var a = t.arrowsWrapper;
				a.right = e("<a />", {
					href: "#",
					"class": n.arrowMainClass + " " + n.arrowRightClass,
					"data-distance": "1",
					html: n.arrowRightText
				}).appendTo(a), a.left = e("<a />", {
					href: "#",
					"class": n.arrowMainClass + " " + n.arrowLeftClass,
					"data-distance": "-1",
					html: n.arrowLeftText
				}).appendTo(a), a.children().on("click touchstart", function(n) {
					n.preventDefault(), t.slide(e(this).data("distance"), !1)
				})
			}
		} catch (o) {}
	}, a.prototype.slide = function(e, t, n) {
		var i = this,
			a = t ? 0 : i.currentSlide,
			o = -(i.slides.length - 1),
			r = i.options.navCurrentItemClass,
			s = i.slides.spread;
		slideCurrentClass = i.options.slideCurrentItemClass, i.pause(), 0 === a && -1 === e ? a = o : a === o && 1 === e ? a = 0 : a += -e;
		var l = s * a + "px";
		i.CSS3support ? i.wrapper.css({
			"-webkit-transform": "translate3d(" + l + ", 0px, 0px)",
			"-moz-transform": "translate3d(" + l + ", 0px, 0px)",
			"-ms-transform": "translate3d(" + l + ", 0px, 0px)",
			"-o-transform": "translate3d(" + l + ", 0px, 0px)",
			transform: "translate3d(" + l + ", 0px, 0px)"
		}) : i.wrapper.stop().animate({
			"margin-left": l
		}, i.options.animationTime), i.options.nav && i.navWrapper.children().eq(-a).addClass(r).siblings().removeClass(r), i.currentSlide = a, i.slides.eq(-a).addClass(slideCurrentClass).siblings().removeClass(slideCurrentClass), "undefined" !== n && "function" == typeof n && n(), i.play()
	}, a.prototype.play = function() {
		var e = this;
		e.options.autoplay && (e.auto = setInterval(function() {
			e.slide(1, !1)
		}, e.options.autoplay))
	}, a.prototype.pause = function() {
		this.options.autoplay && (this.auto = clearInterval(this.auto))
	}, a.prototype.swipe = function() {
		var e, t, n, i, a, o, r, s, l, c, u, d, p, f = this,
			h = 180 / Math.PI;
		f.parent.on("touchstart", function(t) {
			e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], n = e.pageX, i = e.pageY
		}), f.parent.on("touchmove", function(t) {
			e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], a = e.pageX, o = e.pageY, c = a - n, u = o - i, d = Math.abs(c << 2), p = Math.abs(u << 2), r = Math.sqrt(d + p), s = Math.sqrt(p), l = Math.asin(s / r), 32 > l * h && t.preventDefault()
		}), f.parent.on("touchend", function(i) {
			e = i.originalEvent.touches[0] || i.originalEvent.changedTouches[0], t = e.pageX - n, t > f.options.touchDistance ? f.slide(-1) : t < -f.options.touchDistance && f.slide(1)
		})
	}, a.prototype.init = function() {
		var e = this,
			t = e.parent.width();
		e.slides.spread = t, e.wrapper.width(t * e.slides.length), e.slides.width(e.slides.spread), o("transition") && o("transform") || (e.CSS3support = !1)
	}, e.fn[r] = function(t) {
		return this.each(function() {
			e.data(this, "api_" + r) || e.data(this, "api_" + r, new a(e(this), t))
		})
	}
}(jQuery, window, document), ! function(e, t, n, i) {
	var a = function(e, t) {
			function n() {}
			var i;
			return n.prototype.make = function(t) {
				return i = "undefined" != typeof t ? parseInt(t) : 0, this[e.options.type](), this
			}, n.prototype.after = function(t) {
				return setTimeout(function() {
					t()
				}, e.options.animationDuration + 20)
			}, n.prototype.slider = function() {
				var n = e[e.size] * (e.current - 1),
					a = t.Clones.shift - e.paddings;
				t.Run.isStart() ? (a = e.options.centered ? Math.abs(a) : 0, t.Arrows.disable("prev")) : t.Run.isEnd() ? (a = e.options.centered ? Math.abs(a) : Math.abs(2 * a), t.Arrows.disable("next")) : (a = Math.abs(a), t.Arrows.enable()), e.track.css({
					transition: t.Transition.get("all"),
					transform: t.Translate.set(e.axis, n - a - i)
				})
			}, n.prototype.carousel = function() {
				var n, a = e[e.size] * e.current;
				n = e.options.centered ? t.Clones.shift - e.paddings : t.Clones.shift, t.Run.isOffset("<") && (a = 0, t.Run.flag = !1, this.after(function() {
					e.track.css({
						transition: t.Transition.clear("all"),
						transform: t.Translate.set(e.axis, e[e.size] * e.length + n)
					})
				})), t.Run.isOffset(">") && (a = e[e.size] * e.length + e[e.size], t.Run.flag = !1, this.after(function() {
					e.track.css({
						transition: t.Transition.clear("all"),
						transform: t.Translate.set(e.axis, e[e.size] + n)
					})
				})), e.track.css({
					transition: t.Transition.get("all"),
					transform: t.Translate.set(e.axis, a + n - i)
				})
			}, n.prototype.slideshow = function() {
				e.slides.css("transition", t.Transition.get("opacity")).eq(e.current - 1).css("opacity", 1).siblings().css("opacity", 0)
			}, new n
		},
		o = function(e, t) {
			function n() {}
			return n.prototype.instance = function() {
				return {
					current: function() {
						return e.current
					},
					go: function(e, n) {
						t.Run.pause(), t.Run.make(e, n), t.Run.play()
					},
					jump: function(e, n) {
						return t.Transition.jumping = !0, t.Animation.after(function() {
							t.Transition.jumping = !1
						}), t.Run.make(e, n)
					},
					animate: function(e) {
						t.Transition.jumping = !0, t.Animation.make(e), t.Transition.jumping = !1
					},
					start: function(n) {
						return t.Run.running = !0, e.options.autoplay = parseInt(n), t.Run.play()
					},
					play: function() {
						return t.Run.play()
					},
					pause: function() {
						return t.Run.pause()
					},
					destroy: function() {
						t.Run.pause(), t.Clones.remove(), t.Helper.removeStyles([e.track, e.slides]), t.Bullets.remove(), e.slider.removeData("glide_api"), t.Events.unbind(), t.Touch.unbind(), t.Arrows.unbind(), t.Bullets.unbind(), delete e.slider, delete e.track, delete e.slides, delete e.width, delete e.length
					},
					refresh: function() {
						t.Run.pause(), e.collect(), e.setup(), t.Clones.remove().init(), t.Bullets.remove().init(), t.Build.init(), t.Run.make("=" + parseInt(e.options.startAt), t.Run.play())
					}
				}
			}, new n
		},
		r = function(t, n) {
			function i() {
				this.build(), this.bind()
			}
			return i.prototype.build = function() {
				this.wrapper = t.slider.find("." + t.options.classes.arrows), this.items = this.wrapper.children()
			}, i.prototype.disable = function(e) {
				var i = t.options.classes;
				return this.items.filter("." + i["arrow" + n.Helper.capitalise(e)]).unbind("click.glide touchstart.glide").addClass(i.disabled).siblings().bind("click.glide touchstart.glide", this.click).removeClass(i.disabled)
			}, i.prototype.enable = function() {
				return this.bind(), this.items.removeClass(t.options.classes.disabled)
			}, i.prototype.click = function(t) {
				t.preventDefault(), n.Events.disabled || (n.Run.pause(), n.Run.make(e(this).data("glide-dir")), n.Animation.after(function() {
					n.Run.play()
				}))
			}, i.prototype.bind = function() {
				return this.items.on("click.glide touchstart.glide", this.click)
			}, i.prototype.unbind = function() {
				return this.items.off("click.glide touchstart.glide")
			}, new i
		},
		s = function(e, t) {
			function n() {
				this.init()
			}
			return n.prototype.init = function() {
				this[e.options.type](), this.active(), t.Height.set()
			}, n.prototype.isType = function(t) {
				return e.options.type === t
			}, n.prototype.isMode = function(t) {
				return e.options.mode === t
			}, n.prototype.slider = function() {
				t.Transition.jumping = !0, e.slides[e.size](e[e.size]), e.track.css(e.size, e[e.size] * e.length), this.isMode("vertical") && t.Height.set(!0), t.Animation.make(), t.Transition.jumping = !1
			}, n.prototype.carousel = function() {
				t.Transition.jumping = !0, t.Clones.shift = e[e.size] * t.Clones.items.length / 2 - e[e.size], e.slides[e.size](e[e.size]), e.track.css(e.size, e[e.size] * e.length + t.Clones.getGrowth()), this.isMode("vertical") && t.Height.set(!0), t.Animation.make(), t.Clones.append(), t.Transition.jumping = !1
			}, n.prototype.slideshow = function() {
				t.Transition.jumping = !0, t.Animation.make(), t.Transition.jumping = !1
			}, n.prototype.active = function() {
				e.slides.eq(e.current - 1).addClass(e.options.classes.active).siblings().removeClass(e.options.classes.active)
			}, new n
		},
		l = function(t, n) {
			function i() {
				this.init(), this.bind()
			}
			return i.prototype.init = function() {
				return this.build(), this.active(), this
			}, i.prototype.build = function() {
				this.wrapper = t.slider.children("." + t.options.classes.bullets);
				for (var n = 1; n <= t.length; n++) e("<button>", {
					"class": t.options.classes.bullet,
					"data-glide-dir": "=" + n
				}).appendTo(this.wrapper);
				this.items = this.wrapper.children()
			}, i.prototype.active = function() {
				return this.items.eq(t.current - 1).addClass("active").siblings().removeClass("active")
			}, i.prototype.remove = function() {
				return this.items.remove(), this
			}, i.prototype.click = function(t) {
				t.preventDefault(), n.Events.disabled || (n.Run.pause(), n.Run.make(e(this).data("glide-dir")), n.Animation.after(function() {
					n.Run.play()
				}))
			}, i.prototype.bind = function() {
				return this.wrapper.on("click.glide touchstart.glide", "button", this.click)
			}, i.prototype.unbind = function() {
				return this.wrapper.off("click.glide touchstart.glide", "button")
			}, new i
		},
		c = function(e, t) {
			function n() {
				this.init()
			}
			var i, a = [0, 1];
			return n.prototype.init = function() {
				return this.items = [], this.map(), this.collect(), this.shift = 0, this
			}, n.prototype.map = function() {
				var e;
				for (i = [], e = 0; e < a.length; e++) i.push(-1 - e, e)
			}, n.prototype.collect = function() {
				var t, n;
				for (n = 0; n < i.length; n++) t = e.slides.eq(i[n]).clone().addClass(e.options.classes.clone), this.items.push(t)
			}, n.prototype.append = function() {
				var t, n;
				for (n = 0; n < this.items.length; n++) t = this.items[n][e.size](e[e.size]), i[n] >= 0 ? t.appendTo(e.track) : t.prependTo(e.track)
			}, n.prototype.remove = function() {
				var e;
				for (e = 0; e < this.items.length; e++) this.items[e].remove();
				return this
			}, n.prototype.getGrowth = function() {
				return e.width * this.items.length
			}, new n
		},
		u = function(e, t) {
			function n() {
				for (var n in t) this[n] = new t[n](e, this)
			}
			return new n
		},
		d = function(n, i) {
			function a() {
				this.disabled = !1, this.keyboard(), this.hoverpause(), this.resize(), this.bindTriggers()
			}
			var o = e("[data-glide-trigger]");
			return a.prototype.keyboard = function() {
				n.options.keyboard && e(t).on("keyup.glide", function(e) {
					39 === e.keyCode && i.Run.make(">"), 37 === e.keyCode && i.Run.make("<")
				})
			}, a.prototype.hoverpause = function() {
				n.options.hoverpause && n.track.on("mouseover.glide", function() {
					i.Run.pause(), i.Events.trigger("mouseOver")
				}).on("mouseout.glide", function() {
					i.Run.play(), i.Events.trigger("mouseOut")
				})
			}, a.prototype.resize = function() {
				e(t).on("resize.glide." + n._uid, i.Helper.throttle(function() {
					i.Transition.jumping = !0, n.setup(), i.Build.init(), i.Run.make("=" + n.current, !1), i.Run.play(), i.Transition.jumping = !1
				}, n.options.throttle))
			}, a.prototype.bindTriggers = function() {
				o.length && o.off("click.glide touchstart.glide").on("click.glide touchstart.glide", this.handleTrigger)
			}, a.prototype.handleTrigger = function(t) {
				t.preventDefault();
				var n = e(this).data("glide-trigger").split(" ");
				if (!this.disabled)
					for (var i in n) {
						var a = e(n[i]).data("glide_api");
						a.pause(), a.go(e(this).data("glide-dir"), this.activeTrigger), a.play()
					}
			}, a.prototype.disable = function() {
				return this.disabled = !0, this
			}, a.prototype.enable = function() {
				return this.disabled = !1, this
			}, a.prototype.detachClicks = function() {
				return n.track.find("a").each(function(t, n) {
					e(n).attr("data-href", e(n).attr("href")).removeAttr("href")
				}), this
			}, a.prototype.attachClicks = function() {
				return n.track.find("a").each(function(t, n) {
					e(n).attr("href", e(n).attr("data-href"))
				}), this
			}, a.prototype.preventClicks = function(e) {
				return "mousemove" === e.type && n.track.one("click", "a", function(e) {
					e.preventDefault()
				}), this
			}, a.prototype.call = function(e) {
				return "undefined" !== e && "function" == typeof e && e(this.getParams()), this
			}, a.prototype.trigger = function(e) {
				return n.slider.trigger(e + ".glide", [this.getParams()]), this
			}, a.prototype.getParams = function() {
				return {
					index: n.current,
					length: n.slides.length,
					current: n.slides.eq(n.current - 1),
					slider: n.slider,
					swipe: {
						distance: i.Touch.distance || 0
					}
				}
			}, a.prototype.unbind = function() {
				n.track.off("keyup.glide").off("mouseover.glide").off("mouseout.glide"), o.off("click.glide touchstart.glide"), e(t).off("keyup.glide").off("resize.glide." + n._uid)
			}, new a
		},
		p = function(e, t) {
			function n() {
				e.options.autoheight && e.wrapper.css({
					transition: t.Transition.get("height")
				})
			}
			return n.prototype.get = function() {
				var t = "y" === e.axis ? 2 * e.paddings : 0;
				return e.slides.eq(e.current - 1).height() + t
			}, n.prototype.set = function(t) {
				return e.options.autoheight || t ? e.wrapper.height(this.get()) : !1
			}, new n
		},
		f = function(e, t) {
			function n() {}
			return n.prototype.byAxis = function(t, n) {
				return "y" === e.axis ? n : t
			}, n.prototype.capitalise = function(e) {
				return e.charAt(0).toUpperCase() + e.slice(1)
			}, n.prototype.now = Date.now || function() {
				return (new Date).getTime()
			}, n.prototype.throttle = function(e, t, n) {
				var i, a, o, r = this,
					s = null,
					l = 0;
				n || (n = {});
				var c = function() {
					l = n.leading === !1 ? 0 : r.now(), s = null, o = e.apply(i, a), s || (i = a = null)
				};
				return function() {
					var u = r.now();
					l || n.leading !== !1 || (l = u);
					var d = t - (u - l);
					return i = this, a = arguments, 0 >= d || d > t ? (s && (clearTimeout(s), s = null), l = u, o = e.apply(i, a), s || (i = a = null)) : s || n.trailing === !1 || (s = setTimeout(c, d)), o
				}
			}, n.prototype.removeStyles = function(e) {
				for (var t = 0; t < e.length; t++) e[t].removeAttr("style")
			}, new n
		},
		h = function(e, t) {
			function n() {
				this.running = !1, this.flag = !1, this.play()
			}
			return n.prototype.play = function() {
				var t = this;
				return (e.options.autoplay || this.running) && "undefined" == typeof this.interval && (this.interval = setInterval(function() {
					t.pause(), t.make(">"), t.play()
				}, this.getInterval())), this.interval
			}, n.prototype.getInterval = function() {
				return e.slides.eq(e.current - 1).data("glide-autoplay") || e.options.autoplay
			}, n.prototype.pause = function() {
				return (e.options.autoplay || this.running) && this.interval >= 0 && (this.interval = clearInterval(this.interval)), this.interval
			}, n.prototype.isStart = function() {
				return 1 === e.current
			}, n.prototype.isEnd = function() {
				return e.current === e.length
			}, n.prototype.isOffset = function(e) {
				return this.flag && this.direction === e
			}, n.prototype.make = function(n, i) {
				var a = this;
				switch (this.direction = n.substr(0, 1), this.steps = n.substr(1) ? n.substr(1) : 0, e.options.hoverpause || this.pause(), i !== !1 && t.Events.disable().call(e.options.beforeTransition).trigger("beforeTransition"), this.direction) {
					case ">":
						this.isEnd() ? (e.current = 1, this.flag = !0) : ">" === this.steps ? e.current = e.length : e.current = e.current + 1;
						break;
					case "<":
						this.isStart() ? (e.current = e.length, this.flag = !0) : "<" === this.steps ? e.current = 1 : e.current = e.current - 1;
						break;
					case "=":
						e.current = parseInt(this.steps)
				}
				t.Height.set(), t.Bullets.active(), t.Animation.make().after(function() {
					t.Build.active(), i !== !1 && t.Events.enable().call(i).call(e.options.afterTransition).trigger("afterTransition"), e.options.hoverpause || a.play()
				}), t.Events.call(e.options.duringTransition).trigger("duringTransition")
			}, new n
		},
		m = function(t, n) {
			function i() {
				this.dragging = !1, t.options.touchDistance && t.track.on({
					"touchstart.glide": e.proxy(this.start, this)
				}), t.options.dragDistance && t.track.on({
					"mousedown.glide": e.proxy(this.start, this)
				})
			}
			var a;
			return i.prototype.unbind = function() {
				t.track.off("touchstart.glide mousedown.glide").off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")
			}, i.prototype.start = function(i) {
				n.Events.disabled || this.dragging || (a = "mousedown" === i.type ? i.originalEvent : i.originalEvent.touches[0] || i.originalEvent.changedTouches[0], n.Transition.jumping = !0, this.touchStartX = parseInt(a.pageX), this.touchStartY = parseInt(a.pageY), this.touchSin = null, this.dragging = !0, t.track.on({
					"touchmove.glide mousemove.glide": n.Helper.throttle(e.proxy(this.move, this), t.options.throttle),
					"touchend.glide touchcancel.glide mouseup.glide mouseleave.glide": e.proxy(this.end, this)
				}), n.Events.detachClicks().call(t.options.swipeStart).trigger("swipeStart"), n.Run.pause())
			}, i.prototype.move = function(e) {
				if (!n.Events.disabled && this.dragging) {
					a = "mousemove" === e.type ? e.originalEvent : e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
					var i = parseInt(a.pageX) - this.touchStartX,
						o = parseInt(a.pageY) - this.touchStartY,
						r = Math.abs(i << 2),
						s = Math.abs(o << 2),
						l = Math.sqrt(r + s),
						c = Math.sqrt(n.Helper.byAxis(s, r));
					if (this.touchSin = Math.asin(c / l), this.distance = n.Helper.byAxis(a.pageX - this.touchStartX, a.pageY - this.touchStartY), 180 * this.touchSin / Math.PI < 45 && n.Animation.make(n.Helper.byAxis(i, o)), n.Events.preventClicks(e).call(t.options.swipeMove).trigger("swipeMove"), n.Build.isMode("vertical")) {
						if (n.Run.isStart() && o > 0) return;
						if (n.Run.isEnd() && 0 > o) return
					}
					if (!(180 * this.touchSin / Math.PI < 45)) return;
					e.stopPropagation(), e.preventDefault(), t.track.addClass(t.options.classes.dragging)
				}
			}, i.prototype.end = function(e) {
				if (!n.Events.disabled && this.dragging) {
					a = "mouseup" === e.type || "mouseleave" === e.type ? e.originalEvent : e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
					var i = n.Helper.byAxis(a.pageX - this.touchStartX, a.pageY - this.touchStartY),
						o = 180 * this.touchSin / Math.PI;
					n.Transition.jumping = !1, n.Build.isType("slider") && (n.Run.isStart() && i > 0 && (i = 0), n.Run.isEnd() && 0 > i && (i = 0)), "mouseup" === e.type || "mouseleave" === e.type ? distanceLimiter = t.options.dragDistance : distanceLimiter = t.options.touchDistance, i > distanceLimiter && 45 > o ? n.Run.make("<") : i < -distanceLimiter && 45 > o ? n.Run.make(">") : n.Animation.make(), n.Animation.after(function() {
						n.Events.enable(), n.Run.play()
					}), this.dragging = !1, n.Events.attachClicks().disable().call(t.options.swipeEnd).trigger("swipeEnd"), t.track.removeClass(t.options.classes.dragging).off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")
				}
			}, new i
		},
		g = function(e, t) {
			function n() {
				this.jumping = !1
			}
			return n.prototype.get = function(t) {
				return this.jumping ? this.clear("all") : t + " " + e.options.animationDuration + "ms " + e.options.animationTimingFunc
			}, n.prototype.clear = function(t) {
				return t + " 0ms " + e.options.animationTimingFunc
			}, new n
		},
		v = function(e, t) {
			function n() {}
			var i = {
				x: 0,
				y: 0,
				z: 0
			};
			return n.prototype.set = function(e, t) {
				return i[e] = parseInt(t), "translate3d(" + -1 * i.x + "px, " + -1 * i.y + "px, " + -1 * i.z + "px)"
			}, new n
		},
		y = function(t, n) {
			var i = {
				autoplay: 4e3,
				type: "carousel",
				mode: "horizontal",
				startAt: 1,
				hoverpause: !0,
				keyboard: !0,
				touchDistance: 80,
				dragDistance: 120,
				animationDuration: 400,
				animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
				throttle: 16,
				autoheight: !1,
				paddings: 0,
				centered: !0,
				classes: {
					base: "glide",
					wrapper: "glide__wrapper",
					track: "glide__track",
					slide: "glide__slide",
					arrows: "glide__arrows",
					arrow: "glide__arrow",
					arrowNext: "next",
					arrowPrev: "prev",
					bullets: "glide__bullets",
					bullet: "glide__bullet",
					clone: "clone",
					active: "active",
					dragging: "dragging",
					disabled: "disabled"
				},
				beforeInit: function(e) {},
				afterInit: function(e) {},
				beforeTransition: function(e) {},
				duringTransition: function(e) {},
				afterTransition: function(e) {},
				swipeStart: function(e) {},
				swipeEnd: function(e) {},
				swipeMove: function(e) {}
			};
			this.options = e.extend({}, i, n), this._uid = Math.floor(1e3 * Math.random()), this.current = parseInt(this.options.startAt), this.element = t, this.collect(), this.setup(), this.options.beforeInit({
				index: this.current,
				length: this.slides.length,
				current: this.slides.eq(this.current - 1),
				slider: this.slider
			});
			var y = new u(this, {
				Helper: f,
				Translate: v,
				Transition: g,
				Run: h,
				Animation: a,
				Clones: c,
				Arrows: r,
				Bullets: l,
				Height: p,
				Build: s,
				Events: d,
				Touch: m,
				Api: o
			});
			return y.Events.call(this.options.afterInit), y.Api.instance()
		};
	y.prototype.collect = function() {
		var e = this.options,
			t = e.classes;
		this.slider = this.element.addClass(t.base + "--" + e.type).addClass(t.base + "--" + e.mode), this.track = this.slider.find("." + t.track), this.wrapper = this.slider.find("." + t.wrapper), this.slides = this.track.find("." + t.slide).not("." + t.clone)
	}, y.prototype.setup = function() {
		var e = {
			horizontal: ["width", "x"],
			vertical: ["height", "y"]
		};
		this.size = e[this.options.mode][0], this.axis = e[this.options.mode][1], this.length = this.slides.length, this.paddings = this.getPaddings(), this[this.size] = this.getSize()
	}, y.prototype.getPaddings = function() {
		var e = this.options.paddings;
		if ("string" == typeof e) {
			var t = parseInt(e, 10),
				n = e.indexOf("%") >= 0;
			return n ? parseInt(this.slider[this.size]() * (t / 100)) : t
		}
		return e
	}, y.prototype.getSize = function() {
		return this.slider[this.size]() - 2 * this.paddings
	}, e.fn.glide2 = function(t) {
		return this.each(function() {
			e.data(this, "glide_api") || e.data(this, "glide_api", new y(e(this), t))
		})
	}
}(jQuery, window, document), /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent), $(function() {
		$("body").on("click", ".fx", function() {
			$(".share").hasClass("on") ? ($(".share").slideUp(), $(".share").removeClass("on")) : ($(".share").slideDown(), $(".share").addClass("on"))
		}), $(".a5_1").click(function() {
			$(".tc").hasClass("on") ? ($(".tc").slideUp(), $(".tc").removeClass("on")) : ($(".tc").slideDown(), $(".tc").addClass("on"))
		}), $(".footnav li,.hdxq .nav li,.wzxq .nav li,.pl .list li .info dd a").click(function() {
			$(this).addClass("selected")
		}), $(".footnav .a5").click(function() {
			return $(".tc").is(":visible") ? ($(".tc").hide(), $(this).parent().removeClass("selected")) : ($(".tc").show(), $(this).parent().addClass("selected")), !1
		}), $(".sharejs").click(function() {
			return $(".share").is(":visible") ? ($(".share").hide(), $(this).removeClass("selected")) : ($(".share").show(), $(this).addClass("selected")), !1
		});
		var e = $(".sy-nav li");
		$(".sy-nav ul").css("width", e.size() * (e.width() + 40));
		var t = $(".sy .hd-list li");
		$(".sy .hd-list ul").css("width", t.size() * (t.width() + 40));
		var n = $(".sy .sy-imgs li");
		$(".sy .sy-imgs ul").css("width", n.size() * (n.width() + 20));
		var t = $(".sy .activity .body li");
		if ($(".sy .activity .body ul").css("width", t.size() * (t.width() + 34)), $(".list .tags .btn").click(function() {
				return $(".list .tags").hasClass("selected") ? $(".list .tags").removeClass("selected") : $(".list .tags").addClass("selected"), !1
			}), $(".sy-nav li a").click(function() {
				$(this).parent().addClass("on")
			}), $(".article-new .tags .btn").click(function() {
				return $(".article-new .tags").hasClass("selected") ? $(".article-new .tags").removeClass("selected") : $(".article-new .tags").addClass("selected"), !1
			}), $(".selectr select").change(function() {
				$(this).parent().find("strong").html($(this).val())
			}), $(".wzxq .card .body em").click(function() {
				$(this).parent().hasClass("selected") ? $(this).parent().removeClass("selected") : $(this).parent().addClass("selected")
			}), $(".wz-banner").size() > 0 || $(".sy-banner").size() > 0 || $(".topic-slide").size() > 0) {
			$(".wz-banner,.sy-banner,.topic-slide").glide({
				animationTime: 500,
				arrows: !1,
				arrowRightText: "",
				arrowLeftText: "",
				nav: !0,
				navCenter: !0,
				navClass: "slider-nav",
				navItemClass: "slider-nav__item",
				navCurrentItemClass: "slider-nav__item--current"
			})
		}
		$(".nav-select li h2").click(function() {
			return $(this).parent().hasClass("selected") ? ($(this).parent().removeClass("selected"), $("body").css("overflow", "auto"), !1) : ($(this).parent().parent().find("li").removeClass("selected"), $(this).parent().addClass("selected"), $("body").css("overflow", "hidden"), !1)
		}), $(".nav-select li dd").click(function() {
			return $(this).addClass("selected"), $(this).parent().parent().find("h2").html($(this).html()), $(this).parent().parent().removeClass("selected"), $(this).parent().parent().parent().find("dd").removeClass("selected"), $(this).addClass("selected"), $("body").css("overflow", "auto"), !1
		}), $(".grzy .zx-foot .a1").click(function() {
			return $(this).parent().addClass("on"), !1
		}), $(".sy-new-nav li .more").click(function() {
			return $(".dialog").css("display", "block"), !1
		}), $(".dialog .close").click(function() {
			$(this).parent().parent().css("display", "none")
		}), $(".info-nav li").click(function() {
			return $(".info-nav li").removeClass("selected").eq($(this).index()).addClass("selected"), $(".info-tab").hide().eq($(this).index()).show(), !1
		}), $("#share-mask").click(function() {
			return $("#share-mask").css("display", "none"), $("html").removeClass("noscroll"), $("body").removeClass("noscroll"), !1
		});
		var i = 0,
			a = 0;
		$(window).scroll(function(e) {
			i = $(this).scrollTop(), i >= a ? ($(".wzxq .nav,.grzy .foot,.grzy .zx-foot").addClass("hide"), $(".sharejs").removeClass("selected")) : $(".wzxq .nav,.grzy .foot,.grzy .zx-foot").removeClass("hide"), setTimeout(function() {
				a = i
			}, 0)
		}), $(".reserve_detail .detail .more a").click(function() {
			var e = $(".reserve_detail .detail");
			return e.hasClass("on") ? (e.removeClass("on"), !1) : (e.addClass("on"), !1)
		}), $(".expert_c_detail .more a").click(function() {
			var e = $(".expert_c_detail");
			return e.hasClass("on") ? (e.removeClass("on"), !1) : (e.addClass("on"), !1)
		}), $("#sixin").click(function() {
			var e = $(this);
			return "" == myId || myId <= 0 ? (window.location.href = "/account/login/?next=" + window.location.href, !1) : void $.dialog({
				title: "发送私信",
				content: '<form id="message-form" action="" method="post"><p><textarea id="content" class="content" placeholder="@' + e.data("nickname") + '：" name="content" style="width: 225px;padding:3px 5px; height:65px;margin:5px 0;resize:none;"></textarea></p></form>',
				ok: function() {
					var t = $(this.DOM.content).find("#content").val();
					if ("" == t) return $.dialog.tips("内容不能为空！", 1, ""), !1;
					var n = {
						other_id: e.attr("target"),
						content: t
					};
					$.ajax({
						url: postUserMessageUrl,
						type: "POST",
						data: n,
						success: function(e) {
							0 == e.code ? $.dialog.tips(e.message, 1, "success.png") : $.dialog.tips(e.message, 1)
						}
					})
				},
				cancel: !0,
				lock: !0,
				min: !1,
				max: !1,
				fixed: !0
			})
		})
	}), $(function() {
		var e = $(window).height();
		$(".md-screen .wrap").css({
			height: e,
			"overflow-y": "auto",
			"overflow-x": "hidden"
		}), $(".md-screen .section .hd").click(function() {
			var e = $(this).parent();
			e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
		}), $(".md-screen .close").click(function() {
			$(".md-screen").hide(), $("body").css("overflow-y", "auto")
		}), $(".details .head .arrow").click(function() {
			var e, t = $(this),
				n = $(".details-pull-down"),
				i = $(".details-pull-down .wrap"),
				a = $(".details-pull-down .mask"),
				o = function() {
					t.addClass("selected"), n.css({
						display: "block"
					}), a.css("height", "auto").fadeIn(500).one("click", r), i.animate({
						height: i.data().h + "px"
					}, 500)
				},
				r = function() {
					t.removeClass("selected"), e = i.height(), a.fadeOut(500), i.data({
						h: e
					}), i.animate({
						height: 0
					}, 500, function() {
						n.css({
							display: "none"
						})
					})
				};
			$(this).hasClass("selected") ? r().call($(this)) : o().call($(this))
		}), $(".h_expert_texts_1 .h_expert_btn").click(function() {
			return $(this).hasClass("on") ? ($(".text-wrap").css({
				height: 570
			}), $(this).find("a").html("展开更多"), $(this).removeClass("on")) : ($(this).addClass("on"), $(".text-wrap").css({
				height: "auto"
			}), $(this).find("a").html("收起详情")), !1
		})
	}),
	function(e, t, n) {
		var i, a, o, r, s = t.ActiveXObject && !t.XMLHttpRequest,
			l = function() {},
			c = 0,
			u = /^url:/,
			d = t.document,
			p = "JDG" + +new Date,
			f = '<table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭(esc键)">×</a></div></div></td></tr><tr><td class="ui_icon"></td><td class="ui_main"><div class="ui_content"></div></td></tr><tr><td colspan="2"><div class="ui_buttons"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb"></td></tr></tbody></table>',
			h = (function(e, t, n) {
				for (var i = e.length; i > t && (n = d.querySelector ? e[t].src : e[t].getAttribute("src", 4), -1 === n.substr(n.lastIndexOf("/")).indexOf("lhgdialog")); t++);
				return n = n.split("?"), o = n[1], n[0].substr(0, n[0].lastIndexOf("/") + 1)
			}(d.getElementsByTagName("script"), 0), "mobile_xinli001.re"),
			m = function(e) {
				try {
					r = e.top.document, r.getElementsByTagName
				} catch (t) {
					return r = e.document, e
				}
				return r.getElementsByTagName("frameset").length > 0 ? (r = e.document, e) : e.top
			}(t),
			g = r.documentElement,
			v = "BackCompat" === r.compatMode;
		_$doc = e(r), _$top = e(m), _$html = e(r.getElementsByTagName("html")[0]);
		try {
			r.execCommand("BackgroundImageCache", !1, !0)
		} catch (y) {}! function(e) {
			if (!e) {
				var t = r.getElementsByTagName("head")[0],
					n = r.createElement("link");
				n.href = "http://lappbox.xinli001.com/skins/" + h + ".css", n.rel = "stylesheet", n.id = "lhgdialoglink", t.insertBefore(n, t.firstChild)
			}
		}(r.getElementById("lhgdialoglink")), s && function(e) {
			"fixed" !== _$html.css(e) && _$html.css({
				zoom: 1,
				backgroundImage: "url(about:blank)",
				backgroundAttachment: "fixed"
			})
		}("backgroundAttachment");
		var b = function(e) {
			e = e || {};
			var t, a = b.setting;
			for (var o in a) e[o] === n && (e[o] = a[o]);
			return e.id = e.id || p + c, (t = b.list[e.id]) ? t.zindex().focus() : (e.button = e.button || [], e.ok && e.button.push({
				id: "ok",
				name: e.okVal,
				callback: e.ok,
				focus: e.focus
			}), e.cancel && e.button.push({
				id: "cancel",
				name: e.cancelVal,
				callback: e.cancel
			}), b.setting.zIndex = e.zIndex, c++, b.list[e.id] = i ? i._init(e) : new b.fn._init(e))
		};
		b.fn = b.prototype = {
			constructor: b,
			_init: function(e) {
				var n, a = this,
					o = e.content,
					r = u.test(o);
				return a.opener = t, a.config = e, a.DOM = n = a.DOM || a._getDOM(), a.closed = !1, a.data = e.data, e.icon && !r ? (e.min = !1, e.max = !1, n.icon[0].style.display = "", n.icon[0].innerHTML = '<img src="' + e.path + "skins/icons/" + e.icon + '" class="ui_icon_bg"/>') : n.icon[0].style.display = "none", n.wrap.addClass(e.skin), n.rb[0].style.cursor = e.resize ? "se-resize" : "auto", n.title[0].style.cursor = e.drag ? "move" : "auto", n.max[0].style.display = e.max ? "inline-block" : "none", n.min[0].style.display = e.min ? "inline-block" : "none", n.close[0].style.display = e.cancel === !1 ? "none" : "inline-block", n.content[0].style.padding = e.padding, a.button.apply(a, e.button), a.title(e.title).content(o, !0, r).size(e.width, e.height).position(e.left, e.top).time(e.time)[e.show ? "show" : "hide"](!0).zindex(), e.focus && a.focus(), e.lock && a.lock(), a._ie6PngFix()._addEvent(), i = null, !r && e.init && e.init.call(a, t), a
			},
			button: function() {
				for (var t, n, i, a, o, s = this, l = s.DOM, c = l.buttons[0], u = "ui_state_highlight", d = s._listeners = s._listeners || {}, f = [].slice.call(arguments), h = 0; h < f.length; h++) t = f[h], n = t.name, i = t.id || n, a = !d[i], o = a ? r.createElement("input") : d[i].elem, o.type = "button", d[i] || (d[i] = {}), n && (o.value = n), t.callback && (d[i].callback = t.callback), t.focus && (s._focus && s._focus.removeClass(u), s._focus = e(o).addClass(u), s.focus()), o[p + "callback"] = i, o.disabled = !!t.disabled, a && (d[i].elem = o, c.appendChild(o));
				return c.style.display = f.length ? "" : "none", s._ie6SelectFix(), s
			},
			title: function(e) {
				if (e === n) return this;
				var t = this.DOM,
					i = t.border,
					a = t.title[0];
				return e === !1 ? (a.style.display = "none", a.innerHTML = "", i.addClass("ui_state_tips")) : (a.style.display = "", a.innerHTML = e, i.removeClass("ui_state_tips")), this
			},
			content: function(e, t, i) {
				if (e === n) return this;
				var a = this,
					o = a.DOM,
					r = o.wrap[0],
					s = r.offsetWidth,
					l = r.offsetHeight,
					c = parseInt(r.style.left),
					u = parseInt(r.style.top),
					d = r.style.width,
					p = o.content,
					f = b.setting.content;
				return i ? (p[0].innerHTML = f, a._iframe(e.split("url:")[1])) : p.html(e), t || (s = r.offsetWidth - s, l = r.offsetHeight - l, c -= s / 2, u -= l / 2, r.style.left = Math.max(c, 0) + "px", r.style.top = Math.max(u, 0) + "px", d && "auto" !== d && (r.style.width = r.offsetWidth + "px"), a._autoPositionType()), a._ie6SelectFix(), a
			},
			size: function(e, t) {
				var n = this,
					i = n.DOM,
					a = i.wrap[0],
					o = i.main[0].style;
				return a.style.width = "auto", "number" == typeof e && (e += "px"), "number" == typeof t && (t += "px"), o.width = e, o.height = t, "auto" !== e && (a.style.width = a.offsetWidth + "px"), n._ie6SelectFix(), n
			},
			position: function(e, t) {
				var i = this,
					a = i.config,
					o = i.DOM.wrap[0],
					r = o.style,
					l = s ? !1 : a.fixed,
					c = s && a.fixed,
					u = _$top.scrollLeft(),
					d = _$top.scrollTop(),
					p = l ? 0 : u,
					f = l ? 0 : d,
					h = _$top.width(),
					m = _$top.height(),
					g = o.offsetWidth,
					v = o.offsetHeight;
				return (e || 0 === e) && (i._left = -1 !== e.toString().indexOf("%") ? e : null, e = i._toNumber(e, h - g), "number" == typeof e && (e = c ? e += u : e + p, e = Math.max(e, p) + "px"), r.left = e), (t || 0 === t) && (i._top = -1 !== t.toString().indexOf("%") ? t : null, t = i._toNumber(t, m - v), "number" == typeof t && (t = c ? t += d : t + f, t = Math.max(t, f) + "px"), r.top = t), e !== n && t !== n && i._autoPositionType(), i
			},
			time: function(e, t) {
				var n = this,
					i = n._timer;
				return i && clearTimeout(i), t && t.call(n), e && (n._timer = setTimeout(function() {
					n._click("cancel")
				}, 1e3 * e)), n
			},
			show: function(t) {
				return this.DOM.wrap[0].style.visibility = "visible", this.DOM.border.addClass("ui_state_visible"), !t && this._lock && (e("#ldg_lockmask", r)[0].style.display = ""), this
			},
			hide: function(t) {
				return this.DOM.wrap[0].style.visibility = "hidden", this.DOM.border.removeClass("ui_state_visible"), !t && this._lock && (e("#ldg_lockmask", r)[0].style.display = "none"), this
			},
			zindex: function() {
				var e = this,
					t = e.DOM,
					n = e._load,
					i = b.focus,
					a = b.setting.zIndex++;
				return t.wrap[0].style.zIndex = a, i && i.DOM.border.removeClass("ui_state_focus"), b.focus = e, t.border.addClass("ui_state_focus"), n && n.style.zIndex && (n.style.display = "none"), i && i !== e && i.iframe && (i._load.style.display = ""), e
			},
			focus: function() {
				try {
					elemFocus = this._focus && this._focus[0] || this.DOM.close[0], elemFocus && elemFocus.focus()
				} catch (e) {}
				return this
			},
			lock: function() {
				var t, n = this,
					i = b.setting.zIndex - 1,
					a = (n.config, e("#ldg_lockmask", r)[0]),
					o = a ? a.style : "",
					l = s ? "absolute" : "fixed";
				return a || (t = '<iframe src="javascript:\'\'" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>', a = r.createElement("div"), a.id = "ldg_lockmask", a.style.cssText = "position:" + l + ";left:0;top:0;width:100%;height:100%;overflow:hidden;", o = a.style, s && (a.innerHTML = t), r.body.appendChild(a)), "absolute" === l && (o.width = _$top.width(), o.height = _$top.height(), o.top = _$top.scrollTop(), o.left = _$top.scrollLeft(), n._setFixed(a)), o.zIndex = i, o.display = "", n.zindex(), n.DOM.border.addClass("ui_state_lock"), n._lock = !0, n
			},
			unlock: function() {
				var t = this,
					n = t.config,
					i = e("#ldg_lockmask", r)[0];
				if (i && t._lock) {
					if (n.parent && n.parent._lock) {
						var a = n.parent.DOM.wrap[0].style.zIndex;
						i.style.zIndex = parseInt(a, 10) - 1
					} else i.style.display = "none";
					t.DOM.border.removeClass("ui_state_lock")
				}
				return t._lock = !1, t
			},
			close: function() {
				var n = this,
					a = n.DOM,
					o = a.wrap,
					r = b.list,
					s = n.config.close;
				if (n.time(), n.iframe) {
					if ("function" == typeof s && s.call(n, n.iframe.contentWindow, t) === !1) return n;
					e(n.iframe).unbind("load", n._fmLoad).attr("src", "javascript:''").remove(), a.content.removeClass("ui_state_full"), n._frmTimer && clearTimeout(n._frmTimer)
				} else if ("function" == typeof s && s.call(n, t) === !1) return n;
				if (n.unlock(), n._maxState && (_$html.removeClass("ui_lock_scroll"), a.res[0].style.display = "none"), b.focus === n && (b.focus = null), n._removeEvent(), delete r[n.config.id], i) o.remove();
				else {
					i = n, n._minState && (a.main[0].style.display = "", a.buttons[0].style.display = "", a.dialog[0].style.width = ""), a.wrap[0].style.cssText = "left:0;top:0;", a.wrap[0].className = "", a.border.removeClass("ui_state_focus"), a.title[0].innerHTML = "", a.content.html(""), a.icon[0].innerHTML = "", a.buttons[0].innerHTML = "", n.hide(!0)._setAbsolute();
					for (var l in n) n.hasOwnProperty(l) && "DOM" !== l && delete n[l]
				}
				return n.closed = !0, n
			},
			max: function() {
				var e, t = this,
					n = t.DOM,
					i = n.wrap[0].style,
					a = n.main[0].style,
					o = n.rb[0].style,
					r = n.title[0].style,
					l = t.config,
					c = _$top.scrollTop(),
					u = _$top.scrollLeft();
				return t._maxState ? (_$html.removeClass("ui_lock_scroll"), i.top = t._or.t, i.left = t._or.l, t.size(t._or.w, t._or.h)._autoPositionType(), l.drag = t._or.d, l.resize = t._or.r, o.cursor = t._or.rc, r.cursor = t._or.tc, n.res[0].style.display = "none", n.max[0].style.display = "inline-block", delete t._or, t._maxState = !1) : (_$html.addClass("ui_lock_scroll"), t._minState && t.min(), t._or = {
					t: i.top,
					l: i.left,
					w: a.width,
					h: a.height,
					d: l.drag,
					r: l.resize,
					rc: o.cursor,
					tc: r.cursor
				}, i.top = c + "px", i.left = u + "px", e = t._maxSize(), t.size(e.w, e.h)._setAbsolute(), s && v && (i.width = _$top.width() + "px"), l.drag = !1, l.resize = !1, o.cursor = "auto", r.cursor = "auto", n.max[0].style.display = "none", n.res[0].style.display = "inline-block", t._maxState = !0), t
			},
			min: function() {
				var e = this,
					t = e.DOM,
					n = t.main[0].style,
					i = t.buttons[0].style,
					a = t.dialog[0].style,
					o = t.rb[0].style.cursor,
					r = e.config.resize;
				return e._minState ? (n.display = "", i.display = e._minRz.btn, a.width = "", r = e._minRz, o.cursor = e._minRz.rzs ? "se-resize" : "auto", delete e._minRz, e._minState = !1) : (e._maxState && e.max(), e._minRz = {
					rzs: r,
					btn: i.display
				}, n.display = "none", i.display = "none", a.width = n.width, o.cursor = "auto", r = !1, e._minState = !0), e._ie6SelectFix(), e
			},
			get: function(e, t) {
				return b.list[e] ? 1 === t ? b.list[e] : b.list[e].content || null : null
			},
			reload: function(n, i, a) {
				n = n || t;
				try {
					n.location.href = i ? i : n.location.href
				} catch (o) {
					i = this.iframe.src, e(this.iframe).attr("src", i)
				}
				return a && a.call(this), this
			},
			_iframe: function(t) {
				var n, i, a, o, l, c, u, d = this,
					p = d.DOM.content,
					f = d.config,
					h = d._load = e(".ui_loading", p[0])[0],
					g = "position:absolute;left:-9999em;border:none 0;background:transparent",
					v = "width:100%;height:100%;border:none 0;";
				if (f.cache === !1) {
					var y = (new Date).getTime(),
						b = t.replace(/([?&])_=[^&]*/, "$1_=" + y);
					t = b + (b === t ? (/\?/.test(t) ? "&" : "?") + "_=" + y : "")
				}
				n = d.iframe = r.createElement("iframe"), n.name = f.id, n.style.cssText = g, n.setAttribute("frameborder", 0, 0), i = e(n), p[0].appendChild(n), d._frmTimer = setTimeout(function() {
					i.attr("src", t)
				}, 1);
				var w = d._fmLoad = function() {
					p.addClass("ui_state_full");
					var t = d.DOM,
						i = (t.lt[0].offsetHeight, t.main[0].style);
					h.style.cssText = "display:none;position:absolute;background:#FFF;opacity:0;filter:alpha(opacity=0);z-index:1;width:" + i.width + ";height:" + i.height + ";";
					try {
						a = d.content = n.contentWindow, o = e(a.document), l = e(a.document.body)
					} catch (r) {
						return void(n.style.cssText = v)
					}
					c = "auto" === f.width ? o.width() + (s ? 0 : parseInt(l.css("marginLeft"))) : f.width, u = "auto" === f.height ? o.height() : f.height, setTimeout(function() {
						n.style.cssText = v
					}, 0), d._maxState || d.size(c, u).position(f.left, f.top), h.style.width = i.width, h.style.height = i.height, f.init && f.init.call(d, a, m)
				};
				d.iframe.api = d, i.bind("load", w)
			},
			_getDOM: function() {
				var t = r.createElement("div"),
					n = r.body;
				t.style.cssText = "position:absolute;left:0;top:0;visibility:hidden;", t.innerHTML = f;
				for (var i, a = 0, o = {
						wrap: e(t)
					}, s = t.getElementsByTagName("*"), l = s.length; l > a; a++) i = s[a].className.split("ui_")[1], i && (o[i] = e(s[a]));
				return n.insertBefore(t, n.firstChild), o
			},
			_toNumber: function(e, t) {
				return "number" == typeof e ? e : (-1 !== e.indexOf("%") && (e = parseInt(t * e.split("%")[0] / 100)), e)
			},
			_maxSize: function() {
				var e, t, n = this,
					i = n.DOM,
					a = i.wrap[0],
					o = i.main[0];
				return e = _$top.width() - a.offsetWidth + o.offsetWidth, t = _$top.height() - a.offsetHeight + o.offsetHeight, {
					w: e,
					h: t
				}
			},
			_ie6PngFix: function() {
				if (s)
					for (var e, t, n, i, a = 0, o = b.setting.path + "/skins/", r = this.DOM.wrap[0].getElementsByTagName("*"); a < r.length; a++) e = r[a], t = e.currentStyle.png, t && (n = o + t, i = e.runtimeStyle, i.backgroundImage = "none", i.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + n + "',sizingMethod='scale')");
				return this
			},
			_ie6SelectFix: s ? function() {
				var e = this.DOM.wrap,
					t = e[0],
					n = n + "iframeMask",
					i = e[n],
					a = t.offsetWidth,
					o = t.offsetHeight;
				a += "px", o += "px", i ? (i.style.width = a, i.style.height = o) : (i = t.appendChild(r.createElement("iframe")), e[n] = i, i.src = "javascript:''", i.style.cssText = "position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:" + a + ";height:" + o)
			} : l,
			_autoPositionType: function() {
				this[this.config.fixed ? "_setFixed" : "_setAbsolute"]()
			},
			_setFixed: function(e) {
				var t = e ? e.style : this.DOM.wrap[0].style;
				if (s) {
					var n = _$top.scrollLeft(),
						i = _$top.scrollTop(),
						a = parseInt(t.left) - n,
						o = parseInt(t.top) - i,
						r = v ? "this.ownerDocument.body" : "this.ownerDocument.documentElement";
					this._setAbsolute(), t.setExpression("left", r + ".scrollLeft +" + a), t.setExpression("top", r + ".scrollTop +" + o)
				} else t.position = "fixed"
			},
			_setAbsolute: function() {
				var e = this.DOM.wrap[0].style;
				s && (e.removeExpression("left"), e.removeExpression("top")), e.position = "absolute"
			},
			_click: function(e) {
				var n = this,
					i = n._listeners[e] && n._listeners[e].callback;
				return "function" != typeof i || i.call(n, t) !== !1 ? n.close() : n
			},
			_reset: function() {
				var n, i = !!t.ActiveXObject,
					a = this,
					o = _$top.width(),
					l = _$top.height(),
					c = a._winSize || o * l,
					u = a._lockDocW || o,
					d = a._left,
					p = a._top;
				if (!i || (a._lock && s && e("#ldg_lockmask", r).css({
						width: o + "px",
						height: l + 17 + "px"
					}), newWidth = a._lockDocW = o, n = a._winSize = o * l, c !== n)) {
					if (a._maxState) {
						var f = a._maxSize();
						a.size(f.w, f.h)
					}
					i && 17 === Math.abs(u - newWidth) || (d || p) && a.position(d, p)
				}
			},
			_addEvent: function() {
				var e, t = this,
					n = t.config,
					i = t.DOM;
				t._winResize = function() {
					e && clearTimeout(e), e = setTimeout(function() {
						t._reset()
					}, 140)
				}, _$top.bind("resize", t._winResize), i.wrap.bind("click", function(e) {
					var n, a = e.target;
					return a.disabled ? !1 : a === i.close[0] ? (t._click("cancel"), !1) : a === i.max[0] || a === i.res[0] || a === i.max_b[0] || a === i.res_b[0] || a === i.res_t[0] ? (t.max(), !1) : a === i.min[0] || a === i.min_b[0] ? (t.min(), !1) : (n = a[p + "callback"], void(n && t._click(n)))
				}).bind("mousedown", function(e) {
					t.zindex();
					var a = e.target;
					return n.drag !== !1 && a === i.title[0] || n.resize !== !1 && a === i.rb[0] ? (w(e), !1) : void 0
				}), n.max && i.title.bind("dblclick", function() {
					return t.max(), !1
				})
			},
			_removeEvent: function() {
				var e = this,
					t = e.DOM;
				t.wrap.unbind(), t.title.unbind(), _$top.unbind("resize", e._winResize)
			}
		}, b.fn._init.prototype = b.fn, b.focus = null, b.list = {}, a = function(e) {
			var t = (e.target, b.focus),
				n = e.keyCode;
			t && t.config.esc && t.config.cancel !== !1 && 27 === n && t._click(t.config.cancelVal)
		}, _$doc.bind("keydown", a), m != t && e(t).bind("unload", function() {
			var t = b.list;
			for (var n in t) t[n] && t[n].close();
			i && i.DOM.wrap.remove(), _$doc.unbind("keydown", a), e("#ldg_lockmask", r)[0] && e("#ldg_lockmask", r).remove(), e("#ldg_dragmask", r)[0] && e("#ldg_dragmask", r).remove()
		}), b.setting = {
			content: '<div class="ui_loading"><span>loading...</span></div>',
			title: "视窗 ",
			button: null,
			ok: null,
			cancel: null,
			init: null,
			close: null,
			okVal: "确定",
			cancelVal: "取消",
			skin: "",
			esc: !0,
			show: !0,
			width: "auto",
			height: "auto",
			icon: null,
			path: "http://lappbox.xinli001.com/",
			lock: !1,
			focus: !0,
			parent: null,
			padding: "10px",
			fixed: !1,
			left: "50%",
			top: "38.2%",
			max: !0,
			min: !0,
			zIndex: 1976,
			resize: !0,
			drag: !0,
			cache: !0,
			data: null,
			extendDrag: !1
		};
		var w, $ = "setCapture" in g,
			x = "onlosecapture" in g;
		b.dragEvent = {
			onstart: l,
			start: function(e) {
				var t = b.dragEvent;
				return _$doc.bind("mousemove", t.move).bind("mouseup", t.end), t._sClientX = e.clientX, t._sClientY = e.clientY, t.onstart(e.clientX, e.clientY), !1
			},
			onmove: l,
			move: function(e) {
				var t = b.dragEvent;
				return t.onmove(e.clientX - t._sClientX, e.clientY - t._sClientY), !1
			},
			onend: l,
			end: function(e) {
				var t = b.dragEvent;
				return _$doc.unbind("mousemove", t.move).unbind("mouseup", t.end), t.onend(e.clientX, e.clientY), !1
			}
		}, w = function(t) {
			var n, i, a, o, l, c, u = b.focus,
				d = u.config,
				p = u.DOM,
				f = p.wrap[0],
				h = p.title,
				g = p.main[0],
				v = b.dragEvent,
				y = "getSelection" in m ? function() {
					m.getSelection().removeAllRanges()
				} : function() {
					try {
						r.selection.empty()
					} catch (e) {}
				};
			v.onstart = function(e, t) {
				c ? (i = g.offsetWidth, a = g.offsetHeight) : (o = f.offsetLeft, l = f.offsetTop), _$doc.bind("dblclick", v.end), !s && x ? h.bind("losecapture", v.end) : _$top.bind("blur", v.end), $ && h[0].setCapture(), p.border.addClass("ui_state_drag"), u.focus()
			}, v.onmove = function(t, r) {
				if (c) {
					var s = f.style,
						p = g.style,
						h = t + i,
						m = r + a;
					s.width = "auto", d.width = p.width = Math.max(0, h) + "px", s.width = f.offsetWidth + "px", d.height = p.height = Math.max(0, m) + "px", u._load && e(u._load).css({
						width: p.width,
						height: p.height
					})
				} else {
					var p = f.style,
						v = t + o,
						b = r + l;
					d.left = Math.max(n.minX, Math.min(n.maxX, v)), d.top = Math.max(n.minY, Math.min(n.maxY, b)), p.left = d.left + "px", p.top = d.top + "px"
				}
				y()
			}, v.onend = function(e, t) {
				_$doc.unbind("dblclick", v.end), !s && x ? h.unbind("losecapture", v.end) : _$top.unbind("blur", v.end), $ && h[0].releaseCapture(), s && u._autoPositionType(), p.border.removeClass("ui_state_drag")
			}, c = t.target === p.rb[0], n = function(e) {
				var t = f.offsetWidth,
					n = h[0].offsetHeight || 20,
					i = _$top.width(),
					a = _$top.height(),
					o = e ? 0 : _$top.scrollLeft(),
					r = e ? 0 : _$top.scrollTop();
				return maxX = i - t + o, maxY = a - n + r, {
					minX: o,
					minY: r,
					maxX: maxX,
					maxY: maxY
				}
			}("fixed" === f.style.position), v.start(t)
		}, e(function() {
			setTimeout(function() {
				c || b({
					left: "-9999em",
					time: 9,
					fixed: !1,
					lock: !1,
					focus: !1
				})
			}, 150), b.setting.extendDrag && function(e) {
				var t = r.createElement("div"),
					n = t.style,
					i = s ? "absolute" : "fixed";
				t.id = "ldg_dragmask", n.cssText = "display:none;position:" + i + ";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF;pointer-events:none;", r.body.appendChild(t), e._start = e.start, e._end = e.end, e.start = function() {
					var t = b.focus,
						a = t.DOM.main[0],
						o = t.iframe;
					e._start.apply(this, arguments), n.display = "block", n.zIndex = b.setting.zIndex + 3, "absolute" === i && (n.width = _$top.width() + "px", n.height = _$top.height() + "px", n.left = _$doc.scrollLeft() + "px", n.top = _$doc.scrollTop() + "px"), o && a.offsetWidth * a.offsetHeight > 307200 && (a.style.visibility = "hidden")
				}, e.end = function() {
					var t = b.focus;
					e._end.apply(this, arguments), n.display = "none", t && (t.DOM.main[0].style.visibility = "visible")
				}
			}(b.dragEvent)
		}), e.fn.dialog = function() {
			var e = arguments;
			return this.bind("click", function() {
				return b.apply(this, e), !1
			}), this
		}, t.lhgdialog = e.dialog = b
	}(this.jQuery || this.lhgcore, this),
	function(e, t, n) {
		var i = function() {
			return t.setting.zIndex
		};
		t.alert = function(e, n, a) {
			return t({
				title: e.title || "警告",
				id: e.id || "Alert",
				zIndex: i(),
				icon: e.icon || "alert.gif",
				fixed: e.fixed || !0,
				lock: e.lock || !0,
				content: e.content || "",
				ok: !0,
				resize: !1,
				close: n,
				parent: a || null
			})
		}, t.confirm = function(e, n, a, o) {
			return t({
				title: e.title || "确认",
				id: "confirm.gif",
				zIndex: i(),
				icon: e.icon,
				fixed: !0,
				lock: !0,
				content: e.content,
				resize: !1,
				min: !1,
				max: !1,
				okVal: e.okVal || "确认",
				cancelVal: e.cancelVal || "取消",
				parent: o || null,
				ok: function(e) {
					return n.call(this, e)
				},
				cancel: function(e) {
					return a && a.call(this, e)
				}
			})
		}, t.prompt = function(e, n, a, o) {
			a = a || "";
			var r;
			return t({
				title: "提问",
				id: "Prompt",
				zIndex: i(),
				icon: "prompt.gif",
				fixed: !0,
				lock: !0,
				parent: o || null,
				content: ['<div style="margin-bottom:5px;font-size:12px">', e, "</div>", "<div>", '<input value="', a, '" style="width:18em;padding:6px 4px" />', "</div>"].join(""),
				init: function() {
					r = this.DOM.content[0].getElementsByTagName("input")[0], r.select(), r.focus()
				},
				ok: function(e) {
					return n && n.call(this, r.value, e)
				},
				cancel: !0
			})
		}, t.tips = function(e, n, a, o) {
			var r = a ? function() {
				this.DOM.icon[0].innerHTML = '<img src="' + this.config.path + "skins/icons/" + a + '" class="ui_icon_bg"/>', this.DOM.icon[0].style.display = "", o && (this.config.close = o)
			} : function() {
				this.DOM.icon[0].style.display = "none", o && (this.config.close = o)
			};
			return t({
				id: "Tips",
				zIndex: i(),
				title: !1,
				cancel: !1,
				fixed: !0,
				lock: !1,
				resize: !1
			}).content(e).time(n || 1.5, r)
		}
	}(this.jQuery || this.lhgcore, this.lhgdialog), window.zhuge = window.zhuge || [], window.zhuge.methods = "_init debug identify track trackLink trackForm page".split(" "), window.zhuge.factory = function(e) {
		return function() {
			var t = Array.prototype.slice.call(arguments);
			return t.unshift(e), window.zhuge.push(t), window.zhuge
		}
	};
for (var i = 0; i < window.zhuge.methods.length; i++) {
	var key = window.zhuge.methods[i];
	window.zhuge[key] = window.zhuge.factory(key)
}
window.zhuge.load = function(e, t) {
		if (!document.getElementById("zhuge-js")) {
			var n = document.createElement("script"),
				i = new Date,
				a = i.getFullYear().toString() + i.getMonth().toString() + i.getDate().toString();
			n.type = "text/javascript", n.id = "zhuge-js", n.async = !0, n.src = ("http:" == location.protocol ? "http://sdk.zhugeio.com/zhuge-lastest.min.js?v=" : "https://zgsdk.zhugeio.com/zhuge-lastest.min.js?v=") + a;
			var o = document.getElementsByTagName("script")[0];
			o.parentNode.insertBefore(n, o), window.zhuge._init(e, t)
		}
	}, window.zhuge.load("bbcffc6dadbb4f7ca0616a671be21b30"), window.loginUserId && (zhuge.identify(String(window.loginUserId)), console.log(window.loginUserId)),
	function(e, t, n, i) {
		var a = e(t);
		e.fn.lazyload = function(o) {
			function r() {
				var t = 0;
				l.each(function() {
					var n = e(this);
					if (!c.skip_invisible || n.is(":visible"))
						if (e.abovethetop(this, c) || e.leftofbegin(this, c));
						else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
						if (++t > c.failure_limit) return !1
					} else n.trigger("appear"), t = 0
				})
			}
			var s, l = this,
				c = {
					threshold: 0,
					failure_limit: 0,
					event: "scroll",
					effect: "show",
					container: t,
					data_attribute: "original",
					skip_invisible: !0,
					appear: null,
					load: null,
					placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
				};
			return o && (i !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), i !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(c, o)), s = c.container === i || c.container === t ? a : e(c.container), 0 === c.event.indexOf("scroll") && s.bind(c.event, function() {
				return r()
			}), this.each(function() {
				var t = this,
					n = e(t);
				t.loaded = !1, n.attr("src") !== i && n.attr("src") !== !1 || n.is("img") && n.attr("src", c.placeholder), n.one("appear", function() {
					if (!this.loaded) {
						if (c.appear) {
							var i = l.length;
							c.appear.call(t, i, c)
						}
						e("<img />").bind("load", function() {
							var i = n.attr("data-" + c.data_attribute);
							n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[c.effect](c.effect_speed), t.loaded = !0;
							var a = e.grep(l, function(e) {
								return !e.loaded
							});
							if (l = e(a), c.load) {
								var o = l.length;
								c.load.call(t, o, c)
							}
						}).attr("src", n.attr("data-" + c.data_attribute))
					}
				}), 0 !== c.event.indexOf("scroll") && n.bind(c.event, function() {
					t.loaded || n.trigger("appear")
				})
			}), a.bind("resize", function() {
				r()
			}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow", function(t) {
				t.originalEvent && t.originalEvent.persisted && l.each(function() {
					e(this).trigger("appear")
				})
			}), e(n).ready(function() {
				r()
			}), this
		}, e.belowthefold = function(n, o) {
			var r;
			return r = o.container === i || o.container === t ? (t.innerHeight ? t.innerHeight : a.height()) + a.scrollTop() : e(o.container).offset().top + e(o.container).height(), r <= e(n).offset().top - o.threshold
		}, e.rightoffold = function(n, o) {
			var r;
			return r = o.container === i || o.container === t ? a.width() + a.scrollLeft() : e(o.container).offset().left + e(o.container).width(), r <= e(n).offset().left - o.threshold
		}, e.abovethetop = function(n, o) {
			var r;
			return r = o.container === i || o.container === t ? a.scrollTop() : e(o.container).offset().top, r >= e(n).offset().top + o.threshold + e(n).height()
		}, e.leftofbegin = function(n, o) {
			var r;
			return r = o.container === i || o.container === t ? a.scrollLeft() : e(o.container).offset().left, r >= e(n).offset().left + o.threshold + e(n).width()
		}, e.inviewport = function(t, n) {
			return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
		}, e.extend(e.expr[":"], {
			"below-the-fold": function(t) {
				return e.belowthefold(t, {
					threshold: 0
				})
			},
			"above-the-top": function(t) {
				return !e.belowthefold(t, {
					threshold: 0
				})
			},
			"right-of-screen": function(t) {
				return e.rightoffold(t, {
					threshold: 0
				})
			},
			"left-of-screen": function(t) {
				return !e.rightoffold(t, {
					threshold: 0
				})
			},
			"in-viewport": function(t) {
				return e.inviewport(t, {
					threshold: 0
				})
			},
			"above-the-fold": function(t) {
				return !e.belowthefold(t, {
					threshold: 0
				})
			},
			"right-of-fold": function(t) {
				return e.rightoffold(t, {
					threshold: 0
				})
			},
			"left-of-fold": function(t) {
				return !e.rightoffold(t, {
					threshold: 0
				})
			}
		})
	}(jQuery, window, document), window.onerror = function(e, t, n) {
		return zhuge.track("全局错误", {
			"信息": e,
			"网址": t,
			"行数": n
		}), !0
	};
var pageName = pageName || "";
if (console.log("module:load:" + pageName), Array.prototype.indexOf = function(e) {
		for (var t = 0; t < this.length; t++)
			if (this[t] == e) return t;
		return -1
	}, Array.prototype.remove = function(e) {
		var t = this.indexOf(e);
		t > -1 && this.splice(t, 1)
	}, $(function() {
		getHeaderAvatarBtnWidget()
	}), "mobile/article/comment" == pageName && $(function() {
		$(".pl .list .info").delegate(".btn-zan", "click", clickZan), $(".pl .list .info").delegate(".btn-reply", "click", scrollToForm), $(".pl .pl-more a").bind("click", initCommentList), $("#comment-form").bind("submit", addReply), $(".pl .list ul li").size() < 10 && $(".pl .pl-more").hide()
	}), "mobile/article/detail" == pageName && $(function() {
		$(window).bind("scroll", loadMoreArticle), $(".foot .nav .a1").bind("click", clickArticleZan), $(".foot .nav .a3").bind("click", clickArticleFavorite), initPageStatus()
	}), "mobile/article/list" == pageName && $(function() {
		$(window).bind("scroll", loadMoreArticleList)
	}), "mobile/daren/index" == pageName && $(function() {
		function e() {
			remainSecond > 0 && remainSecond--, 30 == remainSecond;
			var e = t(Math.floor(remainSecond / 60)),
				n = t(remainSecond % 60);
			$(".countdown .min").html(e), $(".countdown .sec").html(n)
		}

		function t(e) {
			var e = parseInt(e, 10);
			return e > 0 ? (9 >= e && (e = "0" + e), String(e)) : "00"
		}
		$(".explain").on("click", function(e) {
			var t = $(this).find(".explain-win");
			t.is(":visible") ? t.hide(500) : t.show(500)
		}), $(".explain-win").on("click", function(e) {
			"btn" == e.target.className && $(this).hide(500)
		}), $("#exTalk").size() && $.get(getOnlineStatusUrl, {}, function(t) {
			if (0 === t.code) {
				var n = Date.parse(new Date);
				n /= 1e3;
				var i = parseInt(t.data.online_time) + parseInt(onlineSecond);
				i - n > 0 && "0" !== t.data.ting_status && ($("#exTalk").addClass("on"), remainSecond = i - n, remainCounter = setInterval(e, 1e3), $(".countdown").show())
			}
		}), parseInt(isJin) > 0 && $("#exTalk").css("background-color", "#eeeeee"), $("#exTalk").on("click", function(t) {
			if (parseInt(isJin) > 0) return !1;
			var n = $(this),
				i = "";
			n.hasClass("on") ? ($(".um-event.click-qt-end-order").submit(), i = "offline") : ($(".um-event.click-qt-start-order").submit(), i = "online"), $.ajax({
				url: updateOnlineStatusUrl,
				data: {
					status: i
				},
				type: "post",
				success: function(t) {
					$.dialog.tips('<span style="white-space: nowrap;">' + t.message + "</span>", 3), 0 == t.code && (n.hasClass("on") ? (n.removeClass("on"), clearInterval(remainCounter), $(".countdown").hide()) : (n.addClass("on"), remainSecond = onlineSecond, remainCounter = setInterval(e, 1e3), $(".countdown").show()))
				}
			})
		})
	}), "mobile/daren/list" == pageName && $(function() {
		$.dialog.setting.top = "250px", $(document).bind("scroll", loadMoreDaren), $("#exTalk").size() && $.get(getOnlineStatusUrl, {}, function(e) {
			if (0 === e.code) {
				var t = Date.parse(new Date);
				t /= 1e3;
				var n = parseInt(e.data.online_time) + parseInt(onlineSecond);
				n - t > 0 && "0" !== e.data.ting_status && ($("#exTalk").removeClass("on").addClass("off"), remainSecond = n - t, remainCounter = setInterval(countDown, 1e3))
			}
		}), parseInt(isJin) > 0 && $("#exTalk").css("background-color", "#eeeeee"), $("#exTalk").on("click", function(e) {
			if (parseInt(isJin) > 0) return !1;
			var t = $(this),
				n = "";
			t.hasClass("off") ? ($(".um-event.click-qt-end-order").submit(), n = "offline") : ($(".um-event.click-qt-start-order").submit(), n = "online"), $.ajax({
				url: updateOnlineStatusUrl,
				data: {
					status: n
				},
				type: "post",
				success: function(e) {
					$.dialog.tips('<span style="white-space: nowrap;">' + e.message + "</span>", 3), 0 == e.code && (t.hasClass("off") ? (t.removeClass("off").addClass("on"), clearInterval(remainCounter)) : (t.removeClass("on").addClass("off"), remainSecond = onlineSecond, remainCounter = setInterval(countDown, 1e3)))
				}
			})
		}), $(".reserva .calluser").on("click", function() {
			var t = $(this),
				n = t.data("logid") || 0;
			e.show(), $.ajax({
				url: makeCallUrl,
				type: "GET",
				data: {
					id: n
				},
				dataType: "json",
				success: function(t) {
					var i = 0;
					if (0 === t.code && t.data && 0 === t.data.code) var a = setInterval(function() {
						getCallState(function(t) {
							if (0 === t.code && null != t.data && t.data) {
								var n = parseInt(t.data.errorCode);
								0 == n && "4" == t.data.callStatus && void 0 == window.pickUpClick && (window.pickUpClick = 1, $(".call-status-text").text("通话中..."), $(".call-tips-text").text("")), 0 > n && i >= 30 && ($.dialog.tips('<span style="white-space: nowrap;">暂时无法接通，请稍后再试</span>', 3), clearInterval(a), e.hide()), 0 == n && "5" == t.data.callStatus && ($.dialog.tips('<span style="white-space: nowrap;">通话结束</span>', 3), clearInterval(a), e.hide())
							}
						}, n), i++
					}, 1e3)
				}
			})
		});
		var e = {
			show: function() {
				var e = $("<div></div>").addClass("mask");
				e.appendTo($("body")).fadeIn(500), $(".win_calluser").addClass("show")
			},
			hide: function(e) {
				e ? e.fadeOut(500) : $(".mask").fadeOut(500), $(".win_calluser").removeClass("show")
			}
		};
		$(".reserva .complete-service").on("click", function() {
			var e = $(this),
				t = e.data("logid") || 0,
				n = e.data("id");
			$.dialog.confirm({
				width: "150px",
				title: "请确认服务完成",
				content: '<div style="max-width:440px; text-align:center;">尽量确保剩余时间用完，避免用户投诉</div>',
				okVal: "取消",
				cancelVal: "确认"
			}, function() {
				return !0
			}, function() {
				$.post(completeServiceUrl, {
					id: t
				}, function(e) {
					var t = e.data;
					$.dialog.tips(t.data.message, 2), 0 === t.code && t.data && t.data && 0 === t.data.ErrorCode && "OK" == t.data.ActionStatus && ($("#daren-" + n).removeClass("gb_green").addClass("gb_blue").find(".order-state").text("等待用户确认"), $("a").remove("#daren-" + n + " .foot a"))
				}, "json")
			})
		})
	}), "mobile/gkk/index" == pageName && $(function() {
		$(window).bind("scroll", loadMoreKecheng)
	}), "mobile/index" == pageName && ($(function() {}), window.onload = function() {
		void 0 === myCookie.getCookie("indexRedSpotTest") | "" === myCookie.getCookie("indexRedSpotTest") && $(".sy-new-nav .icon-ceshi").addClass("hasMsg").on("click", function() {
			myCookie.setCookie("indexRedSpotTest", "true", 365)
		})
	}), "mobile/account/login" == pageName && ($(function() {
		null != getCookie("history_phone") && $("#logIn-form-phone").find('input[name="username"]').val(getCookie("history_phone")), $(".info-nav dd").on("click", function() {
			var e = $(".info-nav dd"),
				t = e.index($(this)),
				n = $(".logIn-form");
			e.removeClass("selected"), $(this).addClass("selected"), n.removeClass("show").eq(t).addClass("show"), "tab-email" == $(this).attr("id") && $("#logIn-form-phone").find('input[name="username"]').val(getCookie("history_email"))
		}), $(".form-group").on("input blur focus", "input", function(e) {
			var t = $(this),
				n = t.parents(".form-group");
			"focusin" == e.type ? n.hasClass("on") ? "" : n.addClass("on") : "focusout" == e.type && ("" != t.val() ? n.hasClass("on") ? "" : n.addClass("on") : n.removeClass("on"))
		}), $(".form-group").on("click", ".clear", function(e) {
			e.preventDefault(), e.stopPropagation();
			var t = $(this);
			t.parents(".form-group").removeClass("on"), t.siblings("input").val("")
		}), $("#logIn-form-phone").on("click", ".form-control-btn", function() {
			var e = $(this),
				t = e.parents("form");
			if ("" == t.find('input[name="username"]').val()) return $.dialog.tips("请输入手机号码", 1), !1;
			if (t.find('input[name="username"]').val().length > 11) return $.dialog.tips("手机号码不正确", 1), !1;
			if (e.hasClass("off")) return !1;
			e.addClass("off");
			var n = e.find(".wait .sec"),
				i = 1 * n.text();
			countSec = function() {
				0 != i ? (n.text(i--), setTimeout("countSec()", 1e3)) : (n.text(180), e.removeClass("off"))
			}, $.ajax({
				url: sendPwdUrl,
				type: "post",
				data: {
					phone: t.find('input[name="username"]').val()
				},
				dataType: "json",
				success: function(t) {
					$.dialog.tips(t.message, 1), 0 == t.code ? countSec() : e.removeClass("off")
				}
			})
		}), $("form").on("click", ".logIn-form-submit", function(e) {

		})
	}), $.validate = function(e, t) {
		var n = e.val();
		return 1 != n ? "empty" : void 0
	}), "mobile/qingsu/index" == pageName && $(function() {
		function e() {
			remainSecond > 0 && remainSecond--;
			var e = Math.floor(remainSecond / 60) > 0 ? t(Math.floor(remainSecond / 60)) : "00",
				n = t(remainSecond % 60);
			$(".countdown .min").html(e), $(".countdown .sec").html(n)
		}

		function t(e) {
			var e = parseInt(e, 10);
			return e > 0 ? (9 >= e && (e = "0" + e), String(e)) : "00"
		}

		function n() {
			var e = window.screen.height,
				t = $(document).height(),
				n = $(document).scrollTop();
			e >= t - n && i()
		}

		function i() {
			var e = $("#online-list");
			if (e.data("loading")) return !1;
			if (e.data("noData")) return !1;
			var t = e.data("page") || 1;
			t++, e.data("loading", !0), $.ajax({
				url: getOnlineTeacherUrl,
				data: {
					page: t
				},
				success: function(n) {
					$(n).length <= 0 ? $(window).unbind("scroll") : (e.data("page", t), e.append($(n)), e.data("loading", !1))
				},
				error: function() {
					$.dialog.tips("网络错误", 1)
				}
			})
		}
		$(".qs-stream .body").glide2({
			type: "carousel",
			mode: "vertical",
			animationTime: 0,
			arrows: !1,
			arrowRightText: "",
			arrowLeftText: "",
			nav: 0
		}), $(document).on("click", ".qs-expert_on li", function() {
			for (var e = $(this).find("img"), t = e.attr("src"), n = e.attr("data-name"), i = e.attr("data-title"), a = e.attr("data-time"), o = e.attr("data-vote"), r = e.attr("data-tags").split(","), s = "", l = 0; l < r.length; l++) "" != r[l] && (s = s + "<li>" + r[l] + "</li>");
			var c = $(".expert_on-info");
			c.find(".avatar img").attr("src", t), c.find(".name").text(n), c.find(".title").text(i),
				c.find(".time").text(a), c.find(".vote").text(o), c.find(".tags").html(s);
			var u = ($(window).height() - c.height() - parseInt(c.css("paddingTop")) - parseInt(c.css("paddingBottom"))) / 2;
			$(".mask").fadeIn(500), c.css("top", u)
		}), $(".expert_on-info .close").on("click", function() {
			$(".expert_on-info").css("top", "-1000px"), $(".mask").fadeOut(500)
		}), $(".explain").on("click", function(e) {
			var t = $(this).find(".explain-win");
			t.is(":visible") ? t.hide(500) : t.show(500)
		}), $(".explain-win").on("click", function(e) {
			"btn" == e.target.className && $(this).hide(500)
		}), $("#exTalk").size() && $.get(getOnlineStatusUrl, {}, function(t) {
			if (0 == t.code) {
				var n = Date.parse(new Date);
				n /= 1e3;
				var i = parseInt(t.data.online_time) + parseInt(onlineSecond);
				i - n > 0 && "0" !== t.data.ting_status && ($("#exTalk").addClass("on"), remainSecond = i - n, remainCounter = setInterval(e, 1e3), $(".countdown").show())
			}
		}), $("#talk").click(function() {
			$.get(qingsuUrl, {}, function(e) {
				0 == e.code || "-30" == e.code ? window.location.href = e.url : "-20" == e.code ? window.location.href = e.url : "40001" == e.code ? window.location.href = "/account/login" : $.dialog.tips(e.message, 1)
			})
		}), $("#exTalk").on("click", function(t) {
			var n = $(this),
				i = "";
			n.hasClass("on") ? (n.removeClass("on"), i = "offline", clearInterval(remainCounter), $(".countdown").hide()) : (n.addClass("on"), i = "online", remainSecond = onlineSecond, remainCounter = setInterval(e, 1e3), $(".countdown").show()), $.ajax({
				url: updateOnlineStatusUrl,
				data: {
					status: i
				},
				type: "post",
				success: function(e) {
					$.dialog.tips('<span style="white-space: nowrap;">' + e.message + "</span>", 3)
				}
			})
		}), "1" != isTeacher && $(document).bind("scroll", n)
	}), "mobile/qingsu/detail" == pageName && $(function() {
		function e() {
			$.get(getDetailUrl, {
				id: id
			}, function(e) {
				if (console.log(e), 0 === e.code && e.data.qingsu) {
					var t = parseInt(e.data.qingsu.fennum) - parseInt(e.data.qingsu.fennum_used),
						n = parseInt(e.data.qingsu.fennum_used),
						i = r.secToMin(t),
						o = r.secToMin(n);
					a = i.min || 1, a = 0 == i.min ? i.sec + " 秒钟" : i.min + " 分钟", $(".qs-connect .qs-matchText .time span").text(i.min + "分钟"), $(".explain-win .f_blue").text(i.min + "分钟"), $(".qs-conn-count .time .min").text(o.min), $(".qs-conn-count .time .sec").text(o.sec), r.count.min_t = o.min, r.count.sec_t = o.sec
				}
			})
		}

		function t(e) {
			$.post(makeCallUrl, {
				id: id
			}, function(t) {
				return 0 == t.code && 0 != t.data.code ? ($.dialog.tips(t.data.message), !1) : (s.connect(), void(e && "function" == typeof e && e(t)))
			})
		}

		function n(e) {
			$.get(checkCallStatusUrl, function(t) {
				e && "function" == typeof e && e(t)
			})
		}

		function i(e) {
			$.post(updateMyStatusUrl, {
				id: id,
				operation: "complete"
			}, function(t) {
				e && "function" == typeof e && e(t)
			})
		}
		var a = 0,
			o = null,
			r = {
				secToMin: function(e) {
					e = parseInt(e);
					var t = e % 60,
						n = (e - t) / 60;
					return {
						min: n,
						sec: t
					}
				},
				count: {
					min: $(".qs-connect .time .min"),
					sec: $(".qs-connect .time .sec"),
					min_t: 0,
					sec_t: 0
				},
				countDown: {
					sec: $(".qs-matching .title .countDown .sec"),
					msec: $(".qs-matching .title .countDown .msec"),
					sec_t: 60,
					msec_t: 0
				},
				startTime: function() {
					var e = this;
					o = setInterval(function() {
						59 == e.count.sec_t++ ? (e.count.min.text(++e.count.min_t), e.count.sec_t = 0, e.count.sec.text(e.count.sec_t)) : e.count.sec.text(e.count.sec_t), 0 == e.count.sec_t && 0 == this.count.min_t && clearInterval(o)
					}, 1e3)
				},
				stopTime: function() {
					clearTimeout(o)
				},
				startCountDown: function() {
					var e = 0,
						t = 0,
						n = this,
						i = function(e) {
							return 0 >= e ? e = e : e, e
						};
					if (0 == n.countDown.msec_t) {
						if (n.countDown.sec.text(--n.countDown.sec_t), 0 != n.countDown.sec_t) {
							n.countDown.msec_t = 9;
							var a = i(n.countDown.msec_t);
							n.countDown.msec.text(a)
						}
						$.get(getDetailUrl, {
							id: id
						}, function(i) {
							var a = i.data.qingsu;
							window.paystate = a.paystate, window.to = a.to_user_id, 0 == i.code && "success" == a.paystate && a.to_user_id > 0 && (e = 1), e && !t && (t = 1, n.stopCountDown(), s.match())
						})
					} else {
						var a = i(--n.countDown.msec_t);
						n.countDown.msec.text(a)
					}
					tCD = setTimeout(function() {
						r.startCountDown.call(n)
					}, 100), "0" == n.countDown.sec_t && ("success" != window.paystate && l.show("payError"), "success" == window.paystate && window.to <= 0 && l.show("busy"), n.stopCountDown())
				},
				stopCountDown: function() {
					clearTimeout(tCD)
				}
			},
			s = {
				init: function() {
					var t = this;
					$(".qs-matching").hide(500), e(), isFirstCall ? ($(".qs-matching").fadeIn(1e3, function() {
						$(".explain").click()
					}), r.startCountDown()) : ($(".qs-connect").removeClass("").addClass("connecting going canEnd").show(), t.canEnd.call(t))
				},
				match: function() {
					var e = this,
						t = setTimeout(function() {
							$.get(getDetailUrl, {
								id: id
							}, function(n) {
								if (0 === n.code && n.data.qingsu.to_user_id) {
									clearInterval(t), $(".qs-matching .title").text("正在为你匹配专家…"), $("#qingsu-to-user .avatar").html('<img src="' + n.data.touser.avatar + '!80">'), $("#qingsu-to-user .to-user-nickname").text(n.data.touser.nickname), $("#qingsu-to-user .to-user-zizhi").html(n.data.zizhi);
									var i = parseInt(n.data.qingfen / 60) ? parseInt(n.data.qingfen / 60) : 0;
									$("#qingsu-to-user .to-fennum").text("倾听" + i + "分钟");
									var a = 100;
									$("#qingsu-to-user .to-like-num").text(" 好评率" + a + "%");
									var o = $(".explain").find(".explain-win");
									o.is(":visible") && $(".explain").click(), e.connect.call(e)
								}
							})
						}, 3e3)
				},
				connect: function() {
					var e = this;
					$(".qs-matching").hide(500), $(".qs-connect").removeClass("going canEnd").addClass("connecting").show();
					var t = 0,
						i = 60;
					$(".qs-matchText .hints").html("");
					var a = setInterval(function() {
						$(".qs-matchText .hints").html("已等待" + t + "秒"), n(function(n) {
							if (0 === n.code && null != n.data && n.data) {
								var o = parseInt(n.data.errorCode);
								0 == o && "4" == n.data.callStatus && void 0 == window.pickUpClick && (clearInterval(a), window.pickUpClick = 1, e.pickUp.call(e)), (0 == o && "5" == n.data.callStatus || 0 > o && t >= i) && ($.dialog.tips('<span style="white-space: nowrap;">暂时无法接通，请稍后再试</span>', 3), clearInterval(a), e.canEnd.call(e))
							} else t > i && ($.dialog.tips('<span style="white-space: nowrap;">暂时无法接通，请稍后再试</span>', 3), clearInterval(a), e.canEnd.call(e))
						}), t++
					}, 1e3)
				},
				pickUp: function() {
					var e = this;
					$(".qs-matchText .conn-text").text("正在倾诉···");
					var t = setInterval(function() {
						n(function(n) {
							if (0 == n.code && n.data) {
								var i = parseInt(n.data.errorCode);
								0 == i && "5" == n.data.callStatus && (clearInterval(t), n.data.is_end ? window.location.href = qingsuCommentUrl : e.canEnd.call(e))
							}
						})
					}, 1e3)
				},
				canEnd: function() {
					e(), $(".qs-connect").removeClass("connecting").addClass("going canEnd"), $("#qs-end").on("click", function(e) {
						e.stopPropagation(), e.preventDefault(), $.dialog.confirm({
							width: "100px",
							title: "请确认完成服务",
							content: '<div style="max-width:440px; text-align:center;">壹心理将定期把倾诉费用转到专家账户</div>',
							okVal: "取消",
							cancelVal: "确认"
						}, function() {}, function() {
							i(function(e) {
								0 == e.code && setTimeout(function() {
									window.location.href = qingsuCommentUrl
								}, 1e3), $.dialog.tips(e.message)
							})
						})
					})
				}
			};
		s.init(), $(".reconn-go").bind("click", function(e) {
			$(".ui_state_focus .ui_title").css("color", "#888"), $.dialog.confirm({
				title: "你的倾诉时间剩余",
				content: '<div style="max-width:440px; min-width: 200px; text-align:center; font-size: 18px; color: #505050;">' + a + '</div><div class="time-tips" style="margin-top: 15px; text-align: center;">三天后失效</div>',
				okVal: "稍后再说",
				cancelVal: "呼叫专家"
			}, function() {}, function() {
				t()
			})
		}), $(".explain").on("click", function(e) {
			var t = $(this).find(".explain-win");
			t.is(":visible") ? t.hide(500) : t.show(500)
		}), $(".explain-win").on("click", function(e) {
			"btn" == e.target.className && $(this).hide(500)
		}), $(".notice-win .btn").on("click", function() {
			$(".notice-win").fadeOut(500)
		});
		var l = {
			ele: $(".error-win"),
			payError: {
				title: "支付状态异常",
				body: "<p>如果您已成功支付，请耐心等待10分钟。如仍未与专家通话，请联系客服：<br>020-66642155</p>"
			},
			busy: {
				title: "专家繁忙",
				body: "当前倾诉用户太多，请耐心等待10分钟。如仍未与专家通话，我们将自动为您退款。"
			},
			show: function(e) {
				l.ele.find(".head h1").html(l[e].title), l.ele.find(".body").html(l[e].body), l.ele.find(".foot .btn").one("click", function() {
					l.ele.removeClass("show")
				}), l.ele.addClass("show")
			}
		}
	}), "mobile/qingsu/user-list" == pageName && $(function() {
		function e(e) {
			var e = parseInt(e, 10);
			return e > 0 ? (9 >= e && (e = "0" + e), String(e)) : "00"
		}

		function t() {
			var e = window.screen.height,
				t = $(document).height(),
				i = $(document).scrollTop();
			e >= t - i && n()
		}

		function n() {
			var e = $("#online-list");
			if (e.data("loading")) return !1;
			if (e.data("noData")) return !1;
			var t = e.data("page") || 1;
			t++, e.data("loading", !0), $.ajax({
				url: getOnlineTeacherUrl,
				data: {
					page: t
				},
				success: function(n) {
					$(n).length <= 0 ? ($(window).unbind("scroll"), $(".qs-expert_on").addClass("isEnd")) : (e.data("page", t), e.append($(n)), e.data("loading", !1))
				},
				error: function() {
					$.dialog.tips("网络错误", 1)
				}
			})
		}

		function i() {
			remainSecond > 0 && remainSecond--;
			var t = Math.floor(remainSecond / 60) > 0 ? e(Math.floor(remainSecond / 60)) : "00",
				n = e(remainSecond % 60);
			$(".min").html(t), $(".sec").html(n)
		}
		$(document).bind("scroll", loadMoreQingsu), $(document).on("click", ".foot .qingsu-repeat-buy", function() {
			var e = $(this),
				t = e.data("teacher-id");
			$.get("/ajax/qingsu-repeat-buy-" + t + ".json", {}, function(e) {
				return 0 !== e.code ? ($.dialog.setting.top = "250px", $.dialog.alert({
					title: " ",
					content: '<div style="padding: 0px 80px 5px !important; display:block;font-size: 16px; font-weight: bold; color: #000000; line-height:25px;">' + e.message + '</div><span style="color: #444444;font-size: 12px;text-align: center;width: 100%;display: inline-block;margin-bottom: 5px;">请稍后再下单</span>'
				}), $(".ui_icon_bg").hide(), $(".ui_title").css("height", "10px"), $(".ui_buttons:first").attr("style", "text-align: center"), !1) : void(window.location.href = e.url)
			}, "json")
		}), "1" != isTeacher && $(document).bind("scroll", t), $(document).on("click", "#jiedan", function() {
			var e = $(this),
				t = "";
			e.hasClass("off") ? (e.removeClass("off"), t = "offline", clearInterval(remainCounter), $(".countdown").hide()) : (e.addClass("off"), t = "online", remainSecond = onlineSecond, remainCounter = setInterval(i, 1e3), $(".countdown").show()), $.ajax({
				url: updateOnlineStatusUrl,
				data: {
					status: t
				},
				type: "post",
				success: function(e) {
					$.dialog.tips('<span style="white-space: nowrap;">' + e.message + "</span>", 3)
				}
			})
		}), $(document).on("click", ".foot .qingsu-replay-user", function() {
			var e = $(this),
				t = e.data("logid") || 0;
			a.show(), $.ajax({
				url: makeCallUrl,
				type: "POST",
				data: {
					id: t
				},
				dataType: "json",
				success: function(e) {
					var n = 0;
					if (0 === e.code && e.data && 0 === e.data.code) var i = setInterval(function() {
						getCallState(function(e) {
							if (0 === e.code && null != e.data && e.data) {
								var t = parseInt(e.data.errorCode);
								0 == t && "4" == e.data.callStatus && void 0 == window.pickUpClick && (window.pickUpClick = 1, $(".call-status-text").text("通话中..."), $(".call-tips-text").text("")), 0 > t && n >= 30 && ($.dialog.tips('<span style="white-space: nowrap;">暂时无法接通，请稍后再试</span>', 3), clearInterval(i), a.hide()), 0 == t && "5" == e.data.callStatus && ($.dialog.tips('<span style="white-space: nowrap;">通话结束</span>', 3), clearInterval(i), a.hide())
							}
						}, t), n++
					}, 1e3);
					else $.dialog.tips('<span style="white-space: nowrap;">' + e.data.message + "</span>", 3), a.hide()
				}
			})
		});
		var a = {
			show: function() {
				var e = $("<div></div>").addClass("mask");
				e.appendTo($("body")).fadeIn(500), $(".win_calluser").addClass("show")
			},
			hide: function(e) {
				e ? e.fadeOut(500) : $(".mask").fadeOut(500), $(".win_calluser").removeClass("show")
			}
		}
	}), "mobile/qingsu/pay" == pageName && $(function() {
		$(".numCtrl").on("click", {
			min: 25,
			mCall: function(e, t, n) {
				var i = $(".foot .fr span"),
					a = 58 + (t - 25) / 5 * n;
				i.text(a)
			},
			pCall: function(e, t, n) {
				var i = $(".foot .fr span"),
					a = 58 + (t - 25) / 5 * n;
				i.text(a)
			}
		}, function(e) {
			var t = $(this).find(".numCtrl-v"),
				n = ($(this).find(".numCtrl-p"), $(this).find(".numCtrl-m")),
				i = $(".qs-fennum span:first"),
				a = parseInt(t.val());
			if ("numCtrl-p" == e.target.className) {
				if (a >= 120) return $.dialog.tips("最长倾诉时长为120分钟！", 3), !1;
				var o = a + 5;
				o >= e.data.max ? a = e.data.max : (a = o, n.css("color", "#FF7D00")), t.val(a), i.text(a), e.data.pCall && "function" == typeof e.data.pCall && e.data.pCall(58, a, 10)
			}
			if ("numCtrl-m" == e.target.className) {
				var o = a - 5;
				o == e.data.min && n.css("color", "#B8B8B8"), o >= e.data.min ? a = o : o <= e.data.min && ($.dialog.tips("最短倾诉时长为25分钟！", 3), a = e.data.min), t.val(a), i.text(a), e.data.mCall && "function" == typeof e.data.mCall && e.data.mCall(58, a, 10)
			}
		})
	}), "mobile/qingsu/bind-phone" == pageName && $(function() {
		$("#logIn-form-phone").on("click", ".form-control-btn", function() {
			var e = $(this),
				t = e.parents("form");
			if ("" == t.find('input[name="phone"]').val()) return $.dialog.tips("请输入手机号码", 1), !1;
			if (t.find('input[name="phone"]').val().length > 11) return $.dialog.tips("手机号码不正确", 1), !1;
			if (e.hasClass("off")) return !1;
			e.addClass("off");
			var n = e.find(".wait .sec"),
				i = 1 * n.text();
			countSec = function() {
				0 != i ? (n.text(i--), setTimeout("countSec()", 1e3)) : (n.text(180), e.removeClass("off"))
			}, $.ajax({
				url: sendValidCodeUrl,
				type: "post",
				data: {
					phone: t.find('input[name="phone"]').val()
				},
				dataType: "json",
				success: function(t) {
					$.dialog.tips(t.message, 1), 0 == t.code ? countSec() : e.removeClass("off")
				}
			})
		}), $("form").on("click", ".logIn-form-submit", function(e) {
			if($("#logIn-form-email_username").val()==""){
				e.preventDefault(), e.stopPropagation();
				$.dialog.tips("请输入用户名", 1);
			}else if($("#logIn-form-email_password").val()==""){
				e.preventDefault(), e.stopPropagation();
				$.dialog.tips("请输入密码", 1);
			}
		})
	}), "mobile/qingsu/comment" == pageName && $(function() {
		var e = parseInt(fennum_used),
			t = secToMin(e);
		$(".qs-comm-time .time .min").text(t.min), $(".qs-comm-time .time .sec").text(t.sec), $(".qs-comm-comm li").on("click", function(e) {
			$(".qs-comm-comm li").removeClass("on"), $(this).addClass("on")
		}), $("#comment-btn").on("click", function() {
			var e = $('input[name="comm"]:checked').val(),
				t = $("#content").val();
			$.post(postCommentUrl, {
				score: e || 2,
				is_anonymous: 1,
				content: t
			}, function(e) {
				$.dialog.tips(e.message, 1), 0 == e.code && (window.location.href = qingsuListUrl)
			}, "json")
		}), $(".qs-comm-buy .btn-repeat-buy").on("click", function() {
			$.get(repeatBuyUrl, {}, function(e) {
				return 40002 == e.code ? ($.dialog.tips(e.message, 2), !1) : 1 == e.code ? ($.dialog.alert({
					title: " ",
					content: '<div style="padding: 0px 80px 5px !important; display:block;font-size: 16px; font-weight: bold; color: #000000; line-height:25px;">' + e.message + '</div><span style="color: #444444;font-size: 12px;text-align: center;width: 100%;display: inline-block;margin-bottom: 5px;">请稍后再下单</span>'
				}), $(".ui_icon_bg").hide(), $(".ui_title").css("height", "10px"), $(".ui_buttons:first").attr("style", "text-align: center"), !1) : void(0 != e.code && -20 != e.code || (window.location.href = e.url))
			})
		})
	}), "mobile/subject" == pageName && $(function() {
		$(window).bind("scroll", loadMoreSubjectItem)
	}), "mobile/user/answer-list" == pageName && $(function() {
		$(window).bind("scroll", loadUserAnswer)
	}), "mobile/user/article-list" == pageName && $(function() {
		$(window).bind("scroll", loadUserArticle)
	}), "mobile/user/article" != pageName && "mobile/user/huodong" != pageName && "mobile/user/member" != pageName || $(window).scroll(function() {
		var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
		if ($(document).height() <= e && void 0 != $("#more-article").html() && getUserArticleList(), $(document).height() <= e && void 0 != $("#more-huodong").html() && getUserHuodongList(), $(document).height() <= e && void 0 != $("#more-member").html()) {
			var t = $("#more-member a");
			if (t.data("loading")) return !1;
			var n = t.data("page") || 1;
			n++, t.data("loading", !0), $.ajax({
				url: memberListUrl,
				data: {
					user_id: userId || 0,
					page: n
				},
				success: function(e) {
					t.data("page", n);
					var i = $(e);
					$("#member-list ul").append(i), 0 == i.length && $("div").remove("#more-member")
				},
				error: function() {
					$.dialog.tips("网络错误，请重试", 1)
				},
				complete: function() {
					t.data("loading", !1)
				}
			})
		}
	}), "mobile/user/ceshi" == pageName && $(window).bind("scroll", loadMoreCeshi), "mobile/user/comment-list" == pageName && $(function() {
		$(window).bind("scroll", loadUserComment)
	}), "mobile/user/favorite" == pageName && $(function() {
		$(".info-nav dd").click(function() {
			$(".info-nav dd").removeClass("selected").eq($(this).index()).addClass("selected"), $(".info-tab").hide().eq($(this).index()).show();
			var e = $(this).find("a").prop("href");
			return "#" == e && "javascript:;" == e && "javascript:void(0);" == e || (location.href = e), !1
		}), $(window).scroll(function() {
			var e = parseFloat($(this).height()) + parseFloat($(this).scrollTop());
			$(".info-nav .selected").hasClass("d1") && $(document).height() <= e && void 0 != $("#more-article").html() && getUserFavorite($("#more-article a"), $("#article-list ul")), $(".info-nav .selected").hasClass("d2") && $(document).height() <= e && void 0 != $("#more-ceshi").html() && getUserFavorite($("#more-ceshi a"), $("#ceshi-list ul"))
		})
	}), "mobile/user/index" == pageName && $(function() {
		$.get(userPageStatusUrl, {
			user_id: userId
		}, function(e) {
			if (!(e.code < 0)) {
				var t = e.data;
				t.is_follow && $("#btn-follow").addClass("selected").children("a").text("已关注"), t.kaizixunnum && $("#kaizixunnum").html(e.kaizixunnum), t.xiangzixun && $("#btn-xiang-zixun").addClass("selected"), t.is_like && $(".zx-foot").addClass("on")
			}
		}), $("#btn-follow").on("click", function() {
			console.log("event:click:follow");
			var e = $(this);
			return e.data("loading") ? !1 : void $.ajax({
				url: toggleFollowUrl,
				type: "post",
				data: {
					user_id: userId || 0
				},
				success: function(t) {
					if (0 == t.code) {
						if ($.dialog.tips(t.message, 1, "success.png"), t.data.is_follow) return void e.addClass("selected").children("a").text("已关注");
						e.removeClass("selected").children("a").text("关注")
					} else 40001 == t.code ? window.location.href = "/account/login/?next=/user/" + userId : $.dialog.tips(t.message, 1)
				},
				error: function() {
					$.dialog.tips(result.message, 1)
				},
				complete: function() {
					e.data("loading", !1)
				}
			})
		}), $("#btn-xiang-zixun").on("click", function() {
			var e = $(this);
			if (e.data("loading")) return !1;
			var t = e.data("user-id");
			$.ajax({
				url: toggleXiangZixunUrl,
				type: "post",
				data: {
					user_id: t || 0
				},
				success: function(n) {
					0 == n.code ? (n.data.is_like ? e.addClass("selected") : e.removeClass("selected"), $.dialog.tips(n.message, 1, "success.png")) : 40001 == n.code && (window.location.href = "/account/login/?next=/user/" + t)
				},
				error: function() {
					$.dialog.tips("网络错误，请重试", 1)
				},
				complete: function() {
					e.data("loading", !1)
				}
			})
		}), $("#btn-support").on("click", function() {
			var e = $(this);
			return e.data("loading") ? !1 : void $.ajax({
				url: kaiZixunUrl,
				type: "post",
				data: {
					user_id: userId || 0
				},
				success: function(t) {
					0 == t.code ? (e.data("clicked", !0), e.unbind("click").removeClass("order-none").addClass("thinks").children("a").text("谢谢支持"), $.dialog.tips(t.message, 1, "success.png")) : 40001 == t.code ? window.location.href = "/account/login/?next=/user/" + userId : $.dialog.tips(t.message, 1)
				},
				error: function() {
					$.dialog.tips("网络错误，请重试", 1)
				},
				complete: function() {
					e.data("loading", !1)
				}
			})
		}), $(".expert_c_nav li").bind("click", clickNav), $("#btn-comment-tab").bind("click", clickNav), $(window).bind("scroll", loadMoreData)
	}), "mobile/user/message" == pageName && $(function() {
		function e() {
			var e = $(this);
			if (e.data("loading")) return !1;
			var t = e.find('textarea[name="content"]').val();
			return "" == t ? (swal("请填写内容", "", "error"), !1) : (e.data("loading", !0), $.ajax({
				url: postUserMessageUrl,
				type: "post",
				data: e.serialize(),
				success: function(e) {
					0 == e.code ? ($.dialog.tips(e.message, 1, "success.png"), location.reload()) : $.dialog.tips(e.message, 1)
				},
				error: function() {
					$.dialog.tips("网络错误，请重试", 1)
				},
				complete: function() {
					e.data("loading", !1)
				}
			}), !1)
		}
		$("#message-chat-reply-form").bind("submit", e)
	}), "mobile/user/notice" == pageName && $(function() {
		$(window).bind("scroll", loadYuyueNotice)
	}), "mobile/user/yuyue-comment" == pageName && $(function() {
		$(".evaluation .imgs li").click(function() {
			$("#score").val($(this).data("score")), $(".evaluation .imgs li").removeClass("selected").eq($(this).index()).addClass("selected")
		}), $(".evaluation .btns .anonymous").click(function() {
			return $(this).hasClass("on") ? ($(this).removeClass("on"), $("#anonymous").val(0), !1) : ($(this).addClass("on"), $("#anonymous").val(1), !1)
		}), $("#comment-form").submit(function(e) {
			var t = $(this).find("#score"),
				n = $(this).find("#anonymous"),
				i = $(this).find("#content");
			if ("" == t.val()) return $.dialog.tips("请选择一个评价级别", 1), !1;
			if ("" == i.val()) return $.dialog.tips("请输入评价内容", 1), !1;
			var a = {
				id: yuyueId || 0,
				score: t.val(),
				is_guest: n.val() || 0,
				content: i.val()
			};
			return $.post($(this).attr("action"), a, function(e) {
				0 == e.code ? location.href = e.data : $.dialog.tips(e.msg, 1)
			}), !1
		})
	}), "mobile/user/yuyue-detail" == pageName) {
	var cancelHtml = '<form id="cancel-form" action="" method="post"><p><textarea class="cancel_content" name="cancel_content" style="width: 450px;padding:5px 10px; height:130px;margin:10px 0;resize:none;"></textarea></p></form>',
		params = {
			id: yuyueId || 0,
			userId: userId || 0
		};
	$(function() {
		$(".accept-yuyue").on("click", function() {
			var e = $(this),
				t = e.data("phone");
			$.ajax({
				url: acceptYuyueUrl,
				type: "POST",
				data: params,
				success: function(t) {
					return 0 == t.code ? $.dialog.tips(t.message, 1, "success.png", function() {
						e.removeClass().addClass("btn_tx complete-tips").text("提醒预约者确认完成").parent("li").prev("li").children(".denied-yuyue").removeClass().addClass("btn_qx runcode cancel-yuyue").text("取消预约"), $(".yuyue-status").text("待协商"), $("div").remove(".tip_time"), $(".status").after('<div class="status_tip">*请尽快和预约者联系，确认咨询时间！</div>'), e.unbind("click")
					}) : $.dialog.tips(t.message, 1), !0
				}
			}), $.dialog.confirm({
				title: "预约确认提示",
				content: '<div style="max-width:440px; text-align:center;">接受预约成功！请尽快和预约者联系，确认咨询时间</div>',
				okVal: "立即联系",
				cancelVal: "稍后联系"
			}, function() {
				window.location.href = "tel:" + t
			}, function() {
				location.reload()
			})
		}), $(document).on("click", ".cancel-yuyue, .denied-yuyue", function() {
			var e = $(this).attr("id"),
				t = "取消原因";
			"denied-yuyue" == e && (t = "拒绝原因"), $.dialog({
				title: t,
				content: cancelHtml,
				min: !1,
				max: !1,
				ok: function() {
					var t = $(this.DOM.content).find(".cancel_content").val();
					return "" == t ? ($.dialog.tips("内容不能为空！", 1, ""), !1) : (params.content = t, params.status = "denied-yuyue" == e ? 2 : 5, void $.ajax({
						url: cancelYuyueUrl,
						type: "POST",
						data: params,
						success: function(e) {
							return 0 == e.code ? $.dialog.tips(e.message, 1, "success.png", function() {
								location.reload()
							}) : $.dialog.tips(e.message, 1), !0
						}
					}))
				},
				cancel: !0,
				lock: !0
			})
		}), $(document).on("click", ".complete-tips", function() {
			$.ajax({
				url: tipsCompleteUrl,
				type: "GET",
				data: params,
				success: function(e) {
					return 0 == e.code ? $.dialog.tips(e.message, 1, "success.png") : $.dialog.tips(e.message, 1), !0
				}
			})
		}), $("#green-yuyue-complete").click(function() {
			$.dialog.confirm({
				title: "请确认咨询是否已完成",
				content: '<div style="max-width:440px; text-align:center;">确认后，您支付的咨询费用将通过壹心理平台转入专家账户</div>'
			}, function(e) {
				$.ajax({
					url: YuYueCompleteUrl,
					type: "POST",
					data: params,
					success: function(e) {
						return 0 == e.code ? $.dialog.tips(e.message, 1, "success.png", function() {
							location.reload()
						}) : $.dialog.tips(e.message, 1), !0
					}
				})
			})
		}), $("#tips-teacher-confirm").click(function() {
			var e = $(this);
			$.ajax({
				url: tipsTeacherCompleteUrl,
				type: "GET",
				data: params,
				success: function(t) {
					0 == t.code ? (swal(t.message, "", "success"), e.css({
						"border-color": "#eee",
						color: "#999999"
					}).text("已提醒专家").unbind("click")) : swal(t.message, "", "warning")
				}
			})
		}), $("#userCancel").click(function() {
			$.dialog.confirm({
				content: "是否取消本次预约？",
				okVal: "取消预约",
				cancelVal: "再考虑下"
			}, function(e) {
				$.ajax({
					url: userCancelUrl,
					type: "POST",
					data: params,
					success: function(e) {
						return 0 == e.code ? $.dialog.tips(e.message, 1, "success.png", function() {
							location.reload()
						}) : $.dialog.tips(e.message, 1), !0
					}
				})
			})
		}), $("#notCancel").click(function() {
			$.dialog.tips("用户还没付款，无需取消", 1)
		}), $("#notAccept").click(function() {
			$.dialog.tips("用户还没付款，无法接受此预约", 1)
		})
	})
}
if ("mobile/user/yuyue-list" == pageName && $(function() {
		function e(e) {
			var t = {
				id: parseInt(e.data("id")) || 0,
				userId: parseInt(e.data("user-id")) || 0
			};
			return t
		}
		$.dialog.setting.top = "200px", $(".layout").css("min-height", "427px"), $(window).bind("scroll", loadYuyueData), $(".reserva .tab_hd li").click(function() {
			$(".reserva .tab_hd li").removeClass("selected").eq($(this).index()).addClass("selected"), $(".reserva .tab_bd").hide().eq($(this).index()).show(), "all" != $(this).data("target") && void 0 == $(this).data("load") && (getYuyueList($(this), $(this).data("target")), $(this).data("load", !0))
		}), $(document).on("click", ".accept-yuyue", function() {
			var t = $(this),
				n = t.data("id"),
				i = t.data("phone");
			$.ajax({
				url: acceptYuyueUrl,
				type: "POST",
				data: e(t),
				success: function(e) {
					return 0 == e.code ? ($.dialog.tips(e.message, 1, "success.png"), $("#" + n).removeClass("gb_blue").addClass("gb_green").children(".head").find(".r_tip span").text("待协商"), t.text("提醒确认").addClass("complete-tips").removeClass("accept-yuyue")) : $.dialog.tips(e.message, 1), !0
				}
			}), $.dialog.confirm({
				title: "预约确认提示",
				content: '<div style="max-width:440px; text-align:center;">接受预约成功！请尽快和预约者联系，确认咨询时间</div>',
				okVal: "立即联系",
				cancelVal: "稍后联系"
			}, function(e) {
				window.location.href = "tel:" + i
			})
		}), $(document).on("click", ".complete-tips", function() {
			var t = $(this);
			$.dialog.confirm({
				content: "是否发送提醒？"
			}, function(n) {
				$.ajax({
					url: tipsCompleteUrl,
					type: "GET",
					data: e(t),
					success: function(e) {
						return 0 == e.code ? $.dialog.tips(e.message, 1, "success.png") : $.dialog.tips(e.message, 1), !0
					}
				})
			})
		}), $(document).on("click", ".green-yuyue-complete", function() {
			var t = $(this);
			$.dialog.confirm({
				title: "请确认咨询是否已完成",
				content: '<div style="max-width:440px; text-align:center;">确认后，您支付的咨询费用将通过壹心理平台转入专家账户</div>'
			}, function(n) {
				$.ajax({
					url: YuYueCompleteUrl,
					type: "POST",
					data: e(t),
					success: function(e) {
						return 0 == e.code ? $.dialog.tips(e.message, 1, "success.png", function() {
							location.reload()
						}) : $.dialog.tips(e.message, 1), !0
					}
				})
			})
		}), $(document).on("click", ".tips-teacher-confirm", function() {
			var t = $(this);
			$.ajax({
				url: tipsTeacherCompleteUrl,
				type: "GET",
				data: e(t),
				success: function(e) {
					0 == e.code ? $.dialog.tips(e.message, 1, "success.png") : $.dialog.tips(e.message, 1)
				}
			})
		})
	}), "mobile/zx/list" == pageName) {
	var queryParam = {
		category_id: "",
		city: city || "",
		price: "",
		sort: "",
		page: 2,
		tag: ""
	};
	$(function() {
		$("img.lazy").lazyload(), $(".header  .avatar").css("display", "none"), $(".btn-filter").css("display", "block"), $(".ex-user-list").on("click", "li", function() {
			"" == $(this).data("teacherurl") && void 0 == $(this).data("teacherurl") || (window.location.href = $(this).data("teacherurl"))
		}), queryParam.city && $(".place .list li").each(function(e) {
			return $(this).data("city") == queryParam.city ? ($(this).addClass("active").siblings().removeClass("active"), $(".place .city-show").html(queryParam.city), !1) : void 0
		}), $(window).bind("scroll", loadMore), $(".exlist .top-nav li").click(function() {
			$(this).addClass("active").siblings().removeClass("active"), $(".exlist .tab").hide().eq($(this).index()).show();
			var e = $(this).attr("target");
			"recomment-list" != e && "" == $("#" + e + " ul").html() && ($("#" + e).data("page", 0), initTeacherList(e))
		}), $(".btn-filter").click(function() {
			$(".filter-box1").show(), $(".mask").show(), $("body").css("overflow-y", "hidden")
		});
		var e = [],
			t = [];
		$(".section .list li").click(function() {
			var n = $(this).data("name"),
				i = $(this).data("pid"),
				a = $(this).data("cid"),
				o = $("#cat_id_" + i).find(".section-tags");
			if ($(this).hasClass("active")) {
				$(this).removeClass("active"), e.remove(a), t.remove(n);
				var r = o.text().split(" . ");
				r.remove(n), o.html(r.join(" . ")), t.length <= 0 && $(".category-show").html("全部")
			} else t.length >= 3 ? $.dialog.tips("标签选择不能超过3个", 1) : ($(this).addClass("active"), e.push(a), t.push(n), "" == o.html() ? o.html(n) : o.append(" . " + n)), $(".category-show").html("")
		}), $(".place .list li").click(function() {
			var e = $(this).data("city");
			$(this).addClass("active").siblings().removeClass("active"), "全国" == e || $(this).index() <= 0 ? $(".place .city-show").html("") : $(".place .city-show").html(e), queryParam.city = e
		}), $(".places .list li").click(function() {
			var e = $(this).data("value");
			$(".places .list li").removeClass("active"), $(this).addClass("active"), $(".place .city-show").html(e), queryParam.city = e
		}), $(".price .list li").click(function() {
			$(this).addClass("active").siblings().removeClass("active"), $(".price .price-show").html($(this).data("name")), queryParam.price = $(this).data("value")
		}), $(".clear-option").click(function() {
			$(".price .list li:first").addClass("active").siblings().removeClass("active"), $(".place .list li:first").addClass("active").siblings().removeClass("active"), $(".category-tag-list li").removeClass("active"), $(".section-tags").html(""), $(".place .city-show").html("全国"), $(".price .price-show").html("不限"), $(".category-show").html("全部"), e = [], t = [], queryParam = {
				city: "",
				price: "",
				tag: ""
			}
		}), $(".md-screen .tit .more").click(function() {
			var e = $(".place .city-show");
			$(".places .list li").each(function(t, n) {
				return $(this).data("value") == e.text() ? ($(".places .list li").removeClass("active"), $(this).addClass("active"), void(queryParam.city = $(this).data("value"))) : void 0
			}), $(".more-city").show()
		}), $(".city-close").click(function() {
			$(".more-city").hide()
		}), $(".btn-add-city").click(function() {
			$(".place .list li").each(function(e, t) {
				var n = $(this).data("city");
				return n == queryParam.city ? ($(this).addClass("active").siblings().removeClass("active"), $(".place .city-show").html(n), !1) : void $(".place .list li").removeClass("active")
			}), $(".more-city").hide()
		}), $(".btn-search").click(function() {
			var e = $(".exlist .top-nav li.active"),
				n = $(".section .list li.active");
			if (n.length > 3) return $.dialog.tips("标签选择不能超过3个", 1), !1;
			var i = e.attr("target");
			"recomment-list" == i && (queryParam.sort = "hot"), "new-list" == i && (queryParam.sort = "new"), "yuyue-list" == i && (queryParam.sort = "yuyue"), "rate-list" == i && (queryParam.sort = "rate"), queryParam.tag = t.join(","), queryParam.page = 1, $.ajax({
				url: teacherListUrl,
				data: queryParam,
				success: function(e) {
					$(".filter-box1").hide(), $(".mask").hide(), $("body").css("overflow-y", "auto"), $("#" + i + " .ex-user-list ul").html(e), $("img.lazy").lazyload()
				},
				error: function() {
					$.dialog.tips("网络错误", 1)
				}
			})
		})
	})
}
if ("mobile/zx/new-yuyue" == pageName) {
	$(function() {
		$("#waytype li:first").click(), $(".f_tip").click(function(e) {
			var t = $(this).text();
			$(this).siblings(".text").attr("placeholder");
			"" == t && void 0 == t || $(this).html("").siblings(".text").show().focus()
		}), $("#content").keyup(function() {
			for (var e = 600, t = $(this).val(), e = e ? e : 200, n = e, i = t.length, a = 0; a < t.length; a++)(t.charCodeAt(a) < 0 || t.charCodeAt(a) > 299) && (n -= 1);
			n >= i ? $("#contentNum").html("还可输入 " + Math.floor((n - i) / 2) + " 字").css("color", "") : $("#contentNum").html("已经超过 " + Math.ceil((i - n) / 2) + " 字").css("color", "#FF0000")
		}), $("#phone").keyup(function(e) {
			$("#validCodeBtn").show().siblings("#phone").css("width", "234px"), $("li.validCode-input").show(), $("#isLastYuyue").val("no")
		})
	});
	var validCodeDuration = 0,
		handler
}
"mobile/zx/topic" == pageName && $(function() {
	$("#hot-topic").on("click", "li", function() {
		"" == $(this).data("url") && void 0 == $(this).data("url") || (window.location.href = $(this).data("url"))
	}), $(window).bind("scroll", loadTopicData), $(".topicslist").on("click", ".top-nav li", function() {
		var e = $(this),
			t = e.attr("target");
		if (e.addClass("active").siblings().removeClass("active"), $(".topic-tab").hide().eq(e.index()).show(), "new-topic" == t) {
			$(".btn-filter, .btn-search").show(), $(".avatar").hide();
			var n = e.data("page") || 1;
			$.ajax({
				url: filterTopicListUrl,
				type: "GET",
				data: {
					nav: "new",
					tags: "",
					page: n
				},
				beforeSend: function() {
					var e = $.trim($("#" + t).html());
					return "" != e ? !1 : void 0
				},
				success: function(i) {
					e.data("page", n), i.length > 0 && $("#" + t).append(i)
				},
				complete: function() {
					n++, e.data("loading", !1)
				}
			})
		}
		"hot-topic" == t && ($(".btn-filter").hide(), $(".avatar").show())
	}), $(".btn-filter").click(function() {
		$(".md-screen").show(), $(".mask").show(), $("body").css("overflow-y", "hidden")
	});
	var e = [];
	tagsArr = [], $(".section .list li").click(function() {
		var t = $(this).data("name"),
			n = $(this).data("pid"),
			i = $(this).data("cid"),
			a = $("#cat_id_" + n).find(".section-tags");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active"), e.remove(i), tagsArr.remove(t);
			var o = a.text().split(" . ");
			o.remove(t), a.html(o.join(" . ")), tagsArr.length <= 0 && $(".category-show").html("全部")
		} else tagsArr.length >= 3 ? $.dialog.tips("标签选择不能超过3个", 1) : ($(this).addClass("active"), e.push(i), tagsArr.push(t), "" == a.html() ? a.html(t) : a.append(" . " + t), $(".category-show").html(""))
	}), $(".btn-confirm").click(function() {
		var e = $(".section .list li.active");
		return e.length > 3 ? ($.dialog.tips("标签选择不能超过3个", 1), !1) : void $.ajax({
			url: filterTopicListUrl,
			type: "GET",
			data: {
				nav: "new",
				tags: tagsArr.join(","),
				page: 1
			},
			success: function(e) {
				$("#new-topic").html(e), $(".md-screen").hide(), $(".mask").hide(), $("body").css("overflow-y", "auto")
			},
			error: function() {
				$.dialog.tips("网络错误，请重试", 1)
			},
			complete: function() {
				$("#new-topic").data("page", 1), $("#new-topic").data("loading", !1)
			}
		})
	}), $(".clear-option").click(function() {
		$(".category-tag-list li").removeClass("active"), $(".section-tags").html(""), $(".category-show").html("全部"), e = [], tagsArr = []
	})
}), "mobile/zx/yuyue-pay" == pageName && $(function() {
	$('input[name="payway"]').change(function() {
		var e = $(this).val(),
			t = $("." + e + "-ico").children("img").attr("src"),
			n = "支付宝";
		"weixinpay" == e && (n = "微信"), $("#use-pay-img").attr("src", t), $("#payName").html(n)
	}), $("#complete-tips").click(function() {
		$.dialog.confirm({
			content: "是否发送提醒？"
		}, function(e) {
			$.ajax({
				url: tipsTeacherCompleteUrl,
				type: "GET",
				data: {
					id: Id,
					userId: toUserId || 0
				},
				success: function(e) {
					return 0 == e.code ? ($("#complete-tips").text("已提醒专家").unbind("click"), $.dialog.tips(e.message, 1, "success.png")) : $.dialog.tips(e.message, 1), !0
				}
			})
		})
	})
});