package com.pes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.MessageDao;
import com.pes.entity.Message;
import com.pes.service.MessageService;

@Service("messageService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class MessageServiceImpl implements MessageService{
	@Autowired
	MessageDao messageDao;
	
	@Override
	public Message load(Integer id) {
		// TODO Auto-generated method stub
		return messageDao.load(id);
	}

	@Override
	public Message get(Integer id) {
		// TODO Auto-generated method stub
		return messageDao.get(id);
	}

	@Override
	public List<Message> findAll() {
		// TODO Auto-generated method stub
		return messageDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(Message entity) {
		// TODO Auto-generated method stub
		messageDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Message entity) {
		// TODO Auto-generated method stub
		return messageDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Message entity) {
		// TODO Auto-generated method stub
		messageDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		messageDao.delete(id);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		messageDao.flush();
	}
}
