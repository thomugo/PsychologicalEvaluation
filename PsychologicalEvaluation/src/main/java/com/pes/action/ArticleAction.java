package com.pes.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.swing.border.TitledBorder;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ModelDriven;
import com.pes.entity.Article;
import com.pes.entity.ArticlePojo;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.service.ArticleService;
import com.pes.service.MessageService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;
import com.sun.tools.javac.resources.compiler;

@ParentPackage("myBasicPackage")
public class ArticleAction extends BaseAction implements ModelDriven<Article>{
	private static final Logger LOGGER = Logger.getLogger(ArticleAction.class);
	@Autowired
	private ArticleService articleService;
	private int id;
	private Article article;
	private String articleClassName = "class0";
	private String title = null;
	private String userName = null;
	private Date start = null;
	private Date end = null;
	private int pageSize = 6;
	private int totalPages  = 0;
	private int pageNo = 0;
	private String jsonString;
	private List<ArticlePojo> articles = null;
	
	@Override
	public Article getModel(){
		return article;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public int getPageNo() {
		return pageNo;
	}


	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	
	public List<ArticlePojo> getArticles() {
		return articles;
	}

	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	@Action(value="articleList", results={
			@Result(name="articles", location="/article/articleList.jsp")
	})
	public String execute() {
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			pageNo = json.getInteger("pageNo");
			pageSize = json.getInteger("pageSize");
			title = json.getString("title");
			articleClassName = "class0";
			userName = json.getString("userName");
			start = json.getDate("start");
			end = json.getDate("end");
		}
		totalPages = articleService.getMaxArticlePageNo(null, null, userName, articleClassName, start, end, pageSize);
		System.out.println("totalPages = "+totalPages);
		if(pageNo < 0 ){
			pageNo = 0;
		}
		if(pageNo > totalPages){
			pageNo = totalPages;
		}
		articles = articleService.findArticlesByPage(null, null, userName, articleClassName, start, end, pageNo, pageSize);
		System.out.println("find "+articles.size()+"articles");
		System.out.println(articles);
		if(jsonString != null)
			AjaxUtil.ajaxJSONResponse(articles);
		return "articles";
	}
	
	@Action(value = "editArticle")
	public String editArticle()
	{
		String editState;
		article.setDateTime(new Date());
		Integer id = 0;
		id = articleService.save(article);
		if(id != 0){
			System.out.println("add success");
			editState = "edit article success";
			ActionContext.getContext().getValueStack().push(editState);
		}else{
			System.out.println("edit article failed");
			editState = "edit article success";
			ActionContext.getContext().getValueStack().push(editState);
		}
		article.setId(id);
		return NONE;
	}
	
	@Action(value="deleteArticle")
	public String deleteArticle(){
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			id = json.getInteger("id");
			Article article = articleService.findById(id);
			articleService.remove(article);
			System.out.println("delete Article "+id);
		}
		return NONE;
	}
	
	@Action(value="articleDetail", results={
			@Result(name="articleinfo", location="/article/articleInfo.jsp")
			})
	public String detail(){
		Article article = articleService.findById(id);
		ActionContext.getContext().getValueStack().push(article);
		return "articleinfo";
	}

}
