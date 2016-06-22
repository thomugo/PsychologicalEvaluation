package com.pes.service.impl;

import java.util.Collection;
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
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Message entity) {
		// TODO Auto-generated method stub
		return messageDao.save(entity);
	}

	@Override
	public List<Message> getOffLineMessages(int fromId, int toId) {
		// TODO Auto-generated method stub
		return messageDao.getOffLineMessages(fromId, toId);
	}

	@Override
	public List<Integer> getOffLineMessagesSenders(int userId) {
		// TODO Auto-generated method stub
		return messageDao.getOffLineMessagesSenders(userId);
	}

	@Override
	public int getOffLineMessageCount(int userId) {
		// TODO Auto-generated method stub
		return messageDao.getOffLineMessageCount(userId);
	}

	@Override
	public List<Message> getAllHistoryMessages(int userId) {
		// TODO Auto-generated method stub
		return messageDao.getAllHistoryMessages(userId);
	}

	@Override
	public int getHistoryMessagesCount(int userId) {
		// TODO Auto-generated method stub
		return messageDao.getHistoryMessagesCount(userId);
	}

	@Override
	public int getMaxHistoryMessagePageNo(int pageSize, int userId) {
		// TODO Auto-generated method stub
		return messageDao.getMaxHistoryMessagePageNo(pageSize, userId);
	}

	@Override
	public List<Message> findHistoryMessagesByPage(int pageNo, int pageSize,
			int userId) {
		// TODO Auto-generated method stub
		return messageDao.findHistoryMessagesByPage(pageNo, pageSize, userId);
	}

	@Override
	public int getBroadCastMessageCount() {
		// TODO Auto-generated method stub
		return messageDao.getBroadCastMessageCount();
	}

	@Override
	public List<Message> getUnreadBroadCastMessages(int number) {
		// TODO Auto-generated method stub
		return messageDao.getUnreadBroadCastMessages(number);
	}

	@Override
	public List<Message> getAllBroadCastMessages() {
		// TODO Auto-generated method stub
		return messageDao.getAllBroadCastMessages();
	}

	@Override
	public int getMaxBCPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return messageDao.getMaxBCPageNo(pageSize);
	}

	@Override
	public List<Message> findBroadCastMessagesByPage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return messageDao.findBroadCastMessagesByPage(pageNo, pageSize);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void remove(Message entity) {
		// TODO Auto-generated method stub
		messageDao.remove(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void removeAll(Collection<Message> entities) {
		// TODO Auto-generated method stub
		messageDao.removeAll(entities);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void modify(Message entity) {
		// TODO Auto-generated method stub
		messageDao.modify(entity);
	}

	@Override
	public Message findById(Integer id) {
		// TODO Auto-generated method stub
		return messageDao.findById(id);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Message entity) {
		// TODO Auto-generated method stub
		messageDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void flush() {
		// TODO Auto-generated method stub
		messageDao.flush();
	}
	
	@Override
	@Deprecated
	public List<Message> findAll(boolean asc) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Deprecated
	public List<Message> findByPage(int pageNo, int pageSize, boolean asc) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Deprecated
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Deprecated
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void updateOfflineMessageState(int fromId, int toId) {
		// TODO Auto-generated method stub
		messageDao.updateOfflineMessageState(fromId, toId);
	}

	@Override
	public Message findById(int fromId, int toId) {
		// TODO Auto-generated method stub
		return messageDao.findById(fromId, toId);
	}

	@Override
	public int getRescentUsersCount(int id) {
		// TODO Auto-generated method stub
		return messageDao.getRescentUsersCount(id);
	}

	@Override
	public int getMaxRescentUsersPageNo(int id, int pageSize) {
		// TODO Auto-generated method stub
		return messageDao.getMaxRescentUsersPageNo(id, pageSize);
	}

	@Override
	public List<Integer> getRescentUsersByPage(int pageNo, int pageSize, int id) {
		// TODO Auto-generated method stub
		return messageDao.getRescentUsersByPage(pageNo, pageSize, id);
	}

	@Override
	public Message findLatestMessage(int fromId, int toId) {
		// TODO Auto-generated method stub
		return messageDao.findLatestMessage(fromId, toId);
	}

}
