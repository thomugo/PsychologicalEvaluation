package com.pes.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.UserDao;
import com.pes.entity.User;
import com.pes.entity.UserPojo;
import com.sun.org.apache.bcel.internal.generic.POP;

/**
 * 
 * @author Administrator
 * 我们采用@Repository注解将其注入为dao的bean，交由spring管理。 
 *
 */
@Repository("userDao")
public class UserDaoImpl  extends GenericDao2Impl<User, Integer> implements UserDao{
	@Autowired
	private SessionFactory sessionFactory;
	
	public UserDaoImpl() {   
        super(User.class, "User");   
     }   
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public boolean isUserExist(String username) {
		Query query = this.getCurrentSession()
				.createQuery("from User as a where a.username = ? ");
		query.setString(0, username);
		List<User> list = query.list();
		if (list.isEmpty()){
			return false;
		}
		else {
			return true;
		}
	}

	@Override
	public User validate(String username, String password) {
		Query query = this.getCurrentSession()
				.createQuery("from User as a where a.username = ? and a.password = ?  ");
		query.setString(0, username);
		query.setString(1, password);
		User user = (User) query.uniqueResult();
		return user;
	}

	@Override
	public List<UserPojo> findBaseUserByPage(int pageNo, int pageSize,
			boolean asc) {
		// TODO Auto-generated method stub
		final int maxPageNo = this.getMaxPageNo(pageSize);   
        final int totalRows = this.getTotalRows();   
        // 实际页码   
        int actualPageNo = (pageNo > maxPageNo) ? maxPageNo : pageNo;  
        // 计算实际每页的条数,如果请求的每页数据条数大于总条数, 则等于总条数   
        int actualPageSize = (pageSize > totalRows) ? totalRows : pageSize;   
        int startRow = (actualPageNo > 0) ? (actualPageNo - 1) * actualPageSize : 0;  
        Criteria criteria = this.getCurrentSession().createCriteria(User.class);
        if(!asc)
        	criteria.addOrder(Order.desc("dateTime"));
        criteria.setFirstResult(startRow).setMaxResults(actualPageSize);
	    criteria.setProjection( Projections.projectionList()
	    		.add( Projections.property("id"), "id" )
	    		.add( Projections.property("age"), "age")
	    		.add( Projections.property("phone"), "phone")
	    		.add( Projections.property("gender"), "gender")
	    		.add( Projections.property("vocation"), "vocation")
	    		.add( Projections.property("email"), "email")
	    		.add( Projections.property("username"), "username"));
	    ScrollableResults srs = criteria.scroll();
	    ArrayList<UserPojo> users = new ArrayList<UserPojo>();
        while(srs.next()){
          UserPojo userPojo = new UserPojo();
          userPojo.setId(srs.getInteger(0));
          userPojo.setAge(srs.getInteger(1));
          userPojo.setPhone(srs.getString(2));
          userPojo.setGender(srs.getInteger(3));
          userPojo.setVocation(srs.getString(4));
          userPojo.setEmail(srs.getString(5));
          userPojo.setUsername(srs.getString(6));
          users.add(userPojo);
       }
		return users;
	}

	@Override
	public List<UserPojo> findExpertByPage(int pageNo, int pageSize) {
		final int maxPageNo = findMaxExpertPageNo(pageSize);   
        final int totalRows = findTotalExpertRows();   
        // 实际页码   
        int actualPageNo = (pageNo > maxPageNo) ? maxPageNo : pageNo;  
        // 计算实际每页的条数,如果请求的每页数据条数大于总条数, 则等于总条数   
        int actualPageSize = (pageSize > totalRows) ? totalRows : pageSize;   
        int startRow = (actualPageNo > 0) ? (actualPageNo - 1) * actualPageSize : 0;  
        Criteria criteria = this.getCurrentSession().createCriteria(User.class);
        criteria.add(Restrictions.eq("privilege", 3));
        criteria.setFirstResult(startRow).setMaxResults(actualPageSize);
	    criteria.setProjection( Projections.projectionList()
	    		.add( Projections.property("id"), "id" )
	    		.add( Projections.property("age"), "age")
	    		.add( Projections.property("phone"), "phone")
	    		.add( Projections.property("gender"), "gender")
	    		.add( Projections.property("vocation"), "vocation")
	    		.add( Projections.property("email"), "email")
	    		.add( Projections.property("username"), "username"));
	    ScrollableResults srs = criteria.scroll();
	    ArrayList<UserPojo> users = new ArrayList<UserPojo>();
        while(srs.next()){
          UserPojo userPojo = new UserPojo();
          userPojo.setId(srs.getInteger(0));
          userPojo.setAge(srs.getInteger(1));
          userPojo.setPhone(srs.getString(2));
          userPojo.setGender(srs.getInteger(3));
          userPojo.setVocation(srs.getString(4));
          userPojo.setEmail(srs.getString(5));
          userPojo.setUsername(srs.getString(6));
          users.add(userPojo);
       }
		return users;
	}

	@Override
	public int findTotalExpertRows() {
		// TODO Auto-generated method stub
		 String actualHql = "select count(*) from User as u where u.privilege = 3 ";   
        return ( (Long) this.getCurrentSession().createQuery(actualHql).uniqueResult()).intValue();
	}

	@Override
	public int findMaxExpertPageNo(int pageSize) {
		// TODO Auto-generated method stub
		int maxPageNo;   
        // 总记录数   
        int totalRows = findTotalExpertRows();   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
		return maxPageNo;
	}

	@Override
	public List<User> findApplicantByPage(int pageNo, int pageSize) {
		final int maxPageNo = findMaxApplicantPageNo(pageSize);   
        final int totalRows = findTotalApplicantRows();   
        // 实际页码   
        int actualPageNo = (pageNo > maxPageNo) ? maxPageNo : pageNo;  
        // 计算实际每页的条数,如果请求的每页数据条数大于总条数, 则等于总条数   
        int actualPageSize = (pageSize > totalRows) ? totalRows : pageSize;   
        // 计算请求页码的第一条记录的索引值,如果 
        Query query = this.getCurrentSession().createQuery("from User as u where u.privilege = 4 ");
        int startRow = (actualPageNo > 0) ? (actualPageNo - 1) * actualPageSize : 0;  
        query.setFirstResult(startRow);
        query.setMaxResults(actualPageSize);
        return (List<User>) query.list();   
	}

	@Override
	public int findTotalApplicantRows() {
		// TODO Auto-generated method stub
		String actualHql = "select count(*) from User as u where u.privilege = 4 ";   
        return ( (Long) this.getCurrentSession().createQuery(actualHql).uniqueResult()).intValue();
	}

	@Override
	public int findMaxApplicantPageNo(int pageSize) {
		// TODO Auto-generated method stub
		int maxPageNo;   
        int totalRows = findTotalApplicantRows();   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
		return maxPageNo;
	}

	@Override
	public List<UserPojo> findResentUsers(List<Integer> userIds) {
		// TODO Auto-generated method stub
		ArrayList<UserPojo> users = new ArrayList<UserPojo>();
        for (Integer userId : userIds) {
        	System.out.println(userId);
			User user = findById(userId);
			System.out.println("user:"+user);
			UserPojo pojo = new UserPojo();
			pojo.setAge(user.getAge());
			pojo.setEmail(user.getEmail());
			pojo.setGender(user.getGender());
			pojo.setId(user.getId());
			pojo.setPhone(user.getPhone());
			pojo.setUsername(user.getUsername());
			pojo.setVocation(user.getVocation());
			//System.out.println(pojo);
			users.add(pojo);
		}
		return users;
	}
}
