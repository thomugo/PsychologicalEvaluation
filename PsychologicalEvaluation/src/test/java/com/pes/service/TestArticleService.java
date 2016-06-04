package com.pes.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.xml.stream.events.EndDocument;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.context.transaction.BeforeTransaction;

import com.pes.base.test.BaseTestTemplate;
import com.pes.entity.Admin;
import com.pes.entity.Article;
import com.pes.entity.ArticlePojo;
import com.pes.entity.User;


public class TestArticleService extends BaseTestTemplate{
	
	private static final Logger LOGGER = Logger
			.getLogger(TestArticleService.class);

	@Autowired
	private ArticleService articleService;
	
	@Autowired
	private UserService userService;
	
	@Before
    public void setUp() throws Exception {
	System.out.println("测试开始");
    }

    @After
    public void tearDown() throws Exception {
	System.out.println("测试结束");
    }

    @BeforeTransaction
    public void beforeTransaction() {
	System.out.println("事务开始");
    }

    @AfterTransaction
    public void afterTransaction() {
	System.out.println("事务结束");
    }
  
    
	@Test
	public void save() {
		User user = userService.findById(18);
		for(int i = 0; i < 11; i++ ){
			Article article = new Article();
			article.setUserId(18);
			article.setUserName("thomugo");
			article.setClassName("class" + i/3);
			article.setContent("content" + i);
			article.setDateTime(new Date());
			article.setTitle("Title" + i);
			articleService.save(article);
		}
	}
	
	@Test
	public void find(){
		Date end = new Date();
		Date start = new Date(end.getTime()-10000000);
		int count = articleService.findTotalRaws(18, "title", "thomugo", null, null, null);
		System.out.println(count);
	}
	
	@Test
	public void findByPage(){
		List<ArticlePojo> list1 = articleService.findArticlesByPage(18, "title", "thomugo", null, null,	 null, 1, 2);
		List<Article> list2 = articleService.findByPage(1, 3, true);
		List<Article> list3 = articleService.findByPage(1, 3, false);
		System.out.println(list1);
		System.out.println(list2);
		System.out.println(list3);
	}
	
}
