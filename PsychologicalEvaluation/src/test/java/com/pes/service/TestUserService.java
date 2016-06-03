package com.pes.service;

import java.util.Date;
import java.util.List;


import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.context.transaction.BeforeTransaction;

import com.alibaba.fastjson.JSON;
import com.pes.base.test.BaseTestTemplate;
import com.pes.entity.User;


public class TestUserService extends BaseTestTemplate{
	
	private static final Logger LOGGER = Logger
			.getLogger(TestUserService.class);

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
    public void validate(){
    	System.out.println(userService.isUserExist("thomugo"));
    	User userinfo = new User();
    	userinfo.setUsername("thomugo");
    	userinfo.setPassword("haohao");
    	//System.out.println(userService.validate(userinfo));
    }
    @Test
    public void testInsert() {
    	User userInfo = new User();
		userInfo.setUsername("new");
		userInfo.setPassword("new");
		userInfo.setAge(23);
		userInfo.setGender(0);
		userInfo.setVocation("teacher");
		userInfo.setPhone("13212221333");
		Integer id = userService.save(userInfo);
		JSON.toJSONString(id);
    }
    @Test
    public void deleteTest(){
    	User user = userService.findById(5);
    	userService.remove(user);
    }
    @Test
    public void testfindall(){
    	
    	List<User> list = userService.findByPage(1, 2, true);
    	userService.removeAll(list);
    	
    }
    
	@Test
	public void save() {
		User userInfo = new User();
		userInfo.setUsername("doubi");
		userInfo.setPassword("doubi");
		userInfo.setAge(23);
		userInfo.setGender(0);
		userInfo.setVocation("teacher");
		userInfo.setPhone("13212221333");
		userInfo.setDateTime(new Date());
		Integer id = userService.save(userInfo);
		System.out.println(id);
	}
}
