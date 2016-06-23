package com.pes.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONObject;
import com.pes.entity.Article;
import com.pes.entity.ArticlePojo;
import com.pes.entity.BaseUser;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.entity.UserPojo;
import com.pes.interceptor.Authority;
import com.pes.service.ArticleService;
import com.pes.service.MessageService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@ParentPackage("myBasicPackage")
public class ArticleAction extends BaseAction{
	private static final Logger LOGGER = Logger.getLogger(ArticleAction.class);
	@Autowired
	private ArticleService articleService;
	private int id;
	private Article article;
	private String articleClassName = null;
	private String title = null;
	private String userName = null;
	private Date start = null;
	private Date end = null;
	private int pageSize = 6;
	private int totalPages  = 0;
	private int pageNo = 0;
	private String jsonString;
	private List<ArticlePojo> articles = null;
	@Autowired
	private UserService userService;
	@Autowired
	private MessageService messageService;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private ArrayList<UserMessage> offLineUserMessages = new ArrayList<UserMessage>();
	
	public int getUnReadBroadCastMessageCount() {
		return unReadBroadCastMessageCount;
	}

	public int getOffLineMessageCount() {
		return offLineMessageCount;
	}

	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
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
			@Result(name="admin", location="/WEB-INF/article/articleList.jsp"),
			@Result(name="normal", location="/WEB-INF/article/marticleList.jsp")
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
		//System.out.println(articles);
		if(jsonString != null){
			jsonString = null;
			AjaxUtil.ajaxJSONResponse(articles);
			return NONE;
		}
		
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					//System.out.println("count:"+messages.size());
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		
		if(user.getPrivilege() == 1){
			System.out.println("admin");
			return "admin";
		}else{
			System.out.println("normal user");
			return "normal";
		}
	}
	
	@Action(value = "editArticle")
	@Authority(privilege=3)
	public String editArticle()
	{
		//System.out.println(jsonString);
		JSONObject json = JSONObject.parseObject(jsonString);
		String title = json.getString("title");
		String content = json.getString("content");
		String className = json.getString("className");
		Article article = new Article();
		article.setClassName(className);
		article.setContent(content);
		article.setDateTime(new Date());
		article.setTitle(title);
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		article.setUserId(user.getId());
		article.setUserName(user.getUsername());
		String editState;
		Integer id = 0;
		id = articleService.save(article);
		article.setId(id);
		if(id != 0){
			System.out.println("add success");
			editState = "edit article success";
		}else{
			System.out.println("edit article failed");
			editState = "edit article success";
		}
		jsonString = null;
		System.out.println(user.getUsername() + "edited an article named :" + title);
		AjaxUtil.ajaxJSONResponse(editState);
		return NONE;
	}
	
	@Action(value="deleteArticle")
	@Authority(privilege=2)
	public String deleteArticle(){
		if(jsonString != null){
			JSONObject json = JSONObject.parseObject(jsonString);
			id = json.getInteger("id");
			Article article = articleService.findById(id);
			articleService.remove(article);
			System.out.println("delete Article "+id);
			jsonString = null;
		}
		return NONE;
	}
	
	@Action(value="articleDetail", results={
			@Result(name="articleinfo", location="/WEB-INF/article/marticle.jsp")
			})
	public String detail(){
		article = articleService.findById(id);
		//System.out.println(article.getContent());
		//ActionContext.getContext().getValueStack().push(article);
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					//System.out.println("count:"+messages.size());
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		return "articleinfo";
	}
	
	@Action(value="article", results={
			@Result(name="success", location="/WEB-INF/user/push.jsp")
			})
	@Authority(privilege=3)
	public String push(){
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					//System.out.println("count:"+messages.size());
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		return "success";
	}

}
