package com.pes.service;

import java.util.ArrayList;
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
import com.pes.entity.Message;


public class TestMessageService extends BaseTestTemplate{
	
	private static final Logger LOGGER = Logger
			.getLogger(TestMessageService.class);

	@Autowired
	private MessageService messageService;
	
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
		for(int i = 0; i < 11; i++ ){
			Message broadcast = new Message("broadcast"+i, 1);
			broadcast.setToId(0);
			broadcast.setFlag(5);
			broadcast.setDateTime(new Date());
			Message message1 = new Message("18hello"+i, 18);
			message1.setToId(20);
			message1.setDateTime(new Date());
			Message message2 = new Message("20hello"+i, 20);
			message2.setToId(18);
			message2.setDateTime(new Date());
			messageService.save(message1);
			messageService.save(message2);
			messageService.save(broadcast);
		}
	}
	
	@Test
	public void broadCast(){
		List<Message> list = (ArrayList<Message>) messageService.findBroadCastMessagesByPage(0, 3);
		List<Message> allbroadcastMessages = (ArrayList<Message>) messageService.getAllBroadCastMessages();
		int count = messageService.getBroadCastMessageCount();
		int num = messageService.getMaxBCPageNo(3);
		List<Message> unread = (ArrayList<Message>)messageService.getUnreadBroadCastMessages(4);
		System.out.println("查找第一页广播消息"+list);
		System.out.println("查找所有广播消息"+ allbroadcastMessages);
		System.out.println("广播消息总数："+count);
		System.out.println("广播消息总分页数："+num);
		System.out.println("未读广播消息"+unread);
	}
	
	@Test
	public void historyMessage(){
		List<Message> historyList1 = (ArrayList<Message>)messageService.findHistoryMessagesByPage(0, 3, 18);
		List<Message> allHistoryMessages = (ArrayList<Message>)messageService.getAllHistoryMessages(18);
		int historyCount = messageService.getHistoryMessagesCount(18);
		int nums = messageService.getMaxHistoryMessagePageNo(3, 18);
		System.out.println("分页历史消息："+historyList1);
		System.out.println("所有历史消息：" + allHistoryMessages);
		System.out.println("历史消息数量：" + historyCount);
		System.out.println("最大分页数"+nums);
	}
	
	@Test
	public void offLineMessage(){
		int offCount = messageService.getOffLineMessageCount(18);
		List<Message> offlineMessages = messageService.getOffLineMessages(20, 18);
		List<Integer> sendersIntegers = (ArrayList<Integer>)messageService.getOffLineMessagesSenders(18);
		System.out.println("离线消息总数："+offCount);
		System.out.println("离线消息20-18"+offlineMessages);
		System.out.println("离线消息发送者ID："+sendersIntegers);
	}
}
