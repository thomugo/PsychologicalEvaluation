package com.pes.dao.impl;

import org.springframework.stereotype.Repository;

import com.pes.dao.MessageDao;
import com.pes.entity.Category;
import com.pes.entity.Message;

@Repository("messageDao")
public class MessageDaoImpl extends GenericDao1Impl<Message, Integer> implements MessageDao{
	public MessageDaoImpl(){
		super(Message.class, "Message");
	}
}
