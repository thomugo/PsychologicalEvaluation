package com.pes.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pes.dao.MessageDao;
import com.pes.entity.Message;

@Repository("messageDao")
public class MessageDaoImpl extends GenericDao2Impl<Message, Integer> implements MessageDao{
	@Autowired
	private SessionFactory sessionFactory;
	
	public MessageDaoImpl(){
		super(Message.class, "Message");
	}
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public List<Message> getOffLineMessages(int fromId, int toId) {
		// TODO Auto-generated method stub
		Query query = getCurrentSession().createQuery("from Message as a where a.flag = 0 and a.fromId = ? and a.toId = ? order by a.dateTime");
		query.setInteger(0, fromId);
		query.setInteger(1, toId);
		return (List<Message>)query.list();
	}

	@Override
	public List<Integer> getOffLineMessagesSenders(int userId) {
		Query query = getCurrentSession().createQuery("select distinct ( fromId ) from Message as a where a.flag = 0 and a.toId = ? ");
		query.setInteger(0, userId);
		return (List<Integer>)query.list();
	}

	@Override
	public int getOffLineMessageCount(int userId) {
		// TODO Auto-generated method stub
		String hql = "select count(*) from Message as a where a.flag = 0 and toId = ? " ;
		Query query = getCurrentSession().createQuery(hql);
		query.setInteger(0, userId);
       return ( (Long) query.uniqueResult()).intValue();
	}

	@Override
	public int getBroadCastMessageCount() {
		// TODO Auto-generated method stub
		Query query = this.getCurrentSession()
				.createQuery("select count(*) from Message as a where a.flag = 5  ");
       return ( (Long) query.uniqueResult()).intValue();
	}

	@Override
	public List<Message> getUnreadBroadCastMessages(int number) {
		Query query = this.getCurrentSession()
				.createQuery(" from Message as a where a.flag = 5  order by a.dateTime desc");
        query.setFirstResult(0);
        query.setMaxResults(number);
        return (List<Message>) query.list();   

	}

	@Override
	public List<Message> getAllBroadCastMessages() {
		Query query = this.getCurrentSession()
				.createQuery(" from Message as m where m.flag = 5 order by m.dateTime desc");
		return (List<Message>) query.list();
	}

	@Override
	public List<Message> getAllHistoryMessages(int userId) {
		Query query = this.getCurrentSession()
				.createQuery(" from Message as m where m.flag = 1 and ( m.fromId = ? or m.toId = ? ) order by m.dateTime desc");
		query.setInteger(0, userId);
		query.setInteger(1, userId);
		return (List<Message>) query.list();
	}

	@Override
	public int getMaxHistoryMessagePageNo(int pageSize, int userId) {
		// 最大页数   
        int maxPageNo;   
        // 总记录数   
        int totalRows = this.getHistoryMessagesCount(userId);   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
        return maxPageNo;   
	}

	@Override
	public List<Message> findHistoryMessagesByPage(int pageNo, int pageSize, int userId) {
		final int maxPageNo = this.getMaxHistoryMessagePageNo(pageSize, userId);   
        final int totalRows = this.getHistoryMessagesCount(userId);   
        // 实际页码   
        int actualPageNo = (pageNo > maxPageNo) ? maxPageNo : pageNo;  
        // 计算实际每页的条数,如果请求的每页数据条数大于总条数, 则等于总条数   
        int actualPageSize = (pageSize > totalRows) ? totalRows : pageSize;   
        Query query = this.getCurrentSession().createQuery("from Message as m where m.flag = 1 and ( m.fromId = ? or m.toId = ? ) order by m.dateTime");
        query.setInteger(0, userId);
        query.setInteger(1, userId);
        int startRow = (actualPageNo > 0) ? (actualPageNo - 1) * actualPageSize : 0;  
        query.setFirstResult(startRow);
        query.setMaxResults(actualPageSize);
        return (List<Message>) query.list();   
	}

	@Override
	public int getMaxBCPageNo(int pageSize) {
		// 最大页数   
        int maxPageNo;   
        // 总记录数   
        int totalRows = this.getBroadCastMessageCount();   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
        return maxPageNo;   
	}

	@Override
	public List<Message> findBroadCastMessagesByPage(int pageNo, int pageSize) {
		int totalRows = this.getBroadCastMessageCount();
		int actualPageSize = (pageSize > totalRows) ? totalRows : pageSize; 
        Query query = this.getCurrentSession().createQuery("from Message as m where m.flag = 5 order by m.dateTime desc");
        int startRow = (pageNo > 0) ? (pageNo - 1) * pageSize : 0;  
        query.setFirstResult(startRow);
        query.setMaxResults(actualPageSize);
        return (List<Message>) query.list();   
	}

	@Override
	public int getHistoryMessagesCount(int userId) {
		String hql = "select count(*) from Message as a where a.flag = 1 and (toId = ? or fromId = ? )  " ;
		Query query = getCurrentSession().createQuery(hql);
		query.setInteger(0, userId);
		query.setInteger(1, userId);
       return ( (Long) query.uniqueResult()).intValue();
	}

	@Override
	public void updateOfflineMessageState(int fromId, int toId) {
		// TODO Auto-generated method stub
		String hql = " update Message m set m.flag = 1 where fromId = ? and toId = ? ";
		Query query = getCurrentSession().createQuery(hql);
		query.setInteger(0, fromId);
		query.setInteger(1, toId);
        query.executeUpdate();  
	}

	@Override
	public Message findById(int fromId, int toId) {
		// TODO Auto-generated method stub
		String hqlString = "from Message as m where m.flag = 0 and fromId = ? and toId = ? order by m.dateTime desc";
		 Query query = this.getCurrentSession().createQuery(hqlString);
		 query.setInteger(0, fromId);
		 query.setInteger(1, toId);
		 query.setFirstResult(0);
		 query.setMaxResults(1);
		 Message message =  (Message)query.uniqueResult();
		return message;
	}

	@Override
	public int getRescentUsersCount(int id) {
		// TODO Auto-generated method stub
		String hql = "select count ( distinct fromId ) from Message as a where a.flag <= 1 and toId = ?  " ;
		Query query = getCurrentSession().createQuery(hql);
		query.setInteger(0, id);
       return ( (Long) query.uniqueResult()).intValue();
	}

	@Override
	public int getMaxRescentUsersPageNo(int id, int pageSize) {
		// TODO Auto-generated method stub
		// 最大页数   
        int maxPageNo;   
        // 总记录数   
        int totalRows = getRescentUsersCount(id);   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
        return maxPageNo;   
	}

	@Override
	public List<Integer> getRescentUsersByPage(int pageNo, int pageSize, int id) {
		// TODO Auto-generated method stub
		Query query = getCurrentSession().createQuery
				("select distinct ( fromId ) from Message as a where a.flag <= 1 and a.toId = ? ");
		query.setInteger(0, id);
		return (List<Integer>)query.list();
	}

	@Override
	public Message findLatestMessage(int fromId, int toId) {
		// TODO Auto-generated method stub
		Query query = getCurrentSession().createQuery("from Message as a where a.flag <= 1 and (( a.fromId = ? and a.toId = ? ) or (a.fromId = ? and a.toId = ?)) order by a.dateTime desc ");
		query.setInteger(0, fromId);
		query.setInteger(1, toId);
		query.setInteger(2, toId);
		query.setInteger(3, fromId);
		Message message = (Message) query.list().get(0);
		return message;
	}
	
}
