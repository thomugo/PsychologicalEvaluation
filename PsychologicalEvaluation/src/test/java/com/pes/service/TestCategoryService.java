package com.pes.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.objectweb.asm.tree.IntInsnNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.context.transaction.BeforeTransaction;

import com.pes.base.test.BaseTestTemplate;
import com.pes.entity.Category;

public class TestCategoryService extends BaseTestTemplate{
	
	private static final Logger LOGGER = Logger
			.getLogger(TestCategoryService.class);

	@Autowired
	private CategoryService categoryService;
	
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
    public void save(){
    	
    	Category root = categoryService.get(1);
    	Category cate1 = new Category();
    	cate1.setCateName("test cate1");
    	cate1.setParent(root);
    	Category cate2 = new Category();
    	cate2.setCateName("test cate2");
    	cate2.setParent(root);
    	root .getChildren().add(cate1);
    	root.getChildren().add(cate2);
    	
    	categoryService.save(cate1);
    	
    }
  /*  @Test
    public void findall(){
    	List<Category> list = categoryService.getChildren(1);
    	System.out.println(list);
    }*/
}
