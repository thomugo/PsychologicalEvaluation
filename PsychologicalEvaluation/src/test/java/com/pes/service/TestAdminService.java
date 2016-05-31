package com.pes.service;

import java.util.Date;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.context.transaction.BeforeTransaction;

import com.alibaba.fastjson.JSON;
import com.pes.action.SaveAnswerAction;
import com.pes.base.test.BaseTestTemplate;
import com.pes.entity.Admin;


public class TestAdminService extends BaseTestTemplate{
	
	private static final Logger LOGGER = Logger
			.getLogger(TestAdminService.class);

	@Autowired
	private AdminService adminService;
	
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
    	Admin admin = new Admin();
    	admin.setUsername("doubi");
    	admin.setPassword("doubi");
    	admin.setEmail("doubi@qq.com");
    }
    
    @Test
    public void isUserExit() {
    	Admin admin = new Admin();
    	String username = "thomugo";
    	admin.setUsername(username);
    	System.out.println(adminService.isUserExist(admin.getUsername()));
    }
    
    
	@Test
	public void validate(){
		Admin admin = new Admin();
    	admin.setUsername("thomugo");
    	admin.setPassword("haohao");
    	System.out.println(adminService.validate(admin));
	}
}
