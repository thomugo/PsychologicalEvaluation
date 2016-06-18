package com.pes.action;

import java.util.ArrayList;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pes.entity.ArticleClass;
import com.pes.service.ArticleClassService;
import com.pes.util.AjaxUtil;

@ParentPackage("myBasicPackage")
public class ArticleClassAction extends BaseAction {
	private static final Logger LOGGER = Logger.getLogger(ArticleClassAction.class);
	@Autowired
	private ArticleClassService articleService;
	private String jsonString;
	private ArrayList<ArticleClass> articleClasses = null;
	
	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	@Action(value="modifyArticleClass")
	public String modify(){
		JSONObject json = JSON.parseObject(jsonString);
		JSONArray articleClassListJSON = json.getJSONArray("articleClasses");
		if(articleClassListJSON.size() > 0)
			articleClasses.clear();
		for(int i=0; i< articleClassListJSON.size(); i++){
			JSONObject articleClassJSON = articleClassListJSON.getJSONObject(i);
			int id = articleClassJSON.getInteger("id");
			String className = articleClassJSON.getString("className");
			System.out.println("modify articleClassID=" + id + "; articleClassName = " + className);
			ArticleClass articleClass = articleService.get(id);
			articleClass.setClassName(className);
			articleService.saveOrUpdate(articleClass);
			articleClasses.add(articleClass);
		}
		return NONE;
	}
	
	@Action(value="deleteArticleClass")
	public String delete(){
		JSONObject json = JSON.parseObject(jsonString);
		JSONArray articleClassListJSON = json.getJSONArray("articleClasses");
		for(int i=0; i< articleClassListJSON.size(); i++){
			int id = articleClassListJSON.getInteger(i);
			System.out.println("delete articleClassID=" + id );
			articleService.delete(articleService.load(id));
		}
		return NONE;
	}

	@Override
	@Action(value="articleClassList", results={
			@Result(name="articleClassList", location="/WEB-INF/article/artileClassDemo.jsp")
			})
	public String execute() {
		JSONObject json = JSONObject.parseObject(jsonString);
		if(articleClasses != null)
			articleClasses.clear();
		articleClasses = (ArrayList<ArticleClass>)articleService.findAll();
		System.out.println(articleClasses);
		if(json != null)
			AjaxUtil.ajaxJSONResponse(articleClasses);
		return "articleClassList";

	}

}
