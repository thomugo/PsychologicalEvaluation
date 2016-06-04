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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.pes.dao.UserDao;
import com.pes.entity.Article;
import com.pes.entity.User;
import com.pes.entity.UserPojo;

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
        Criteria criteria = this.getCurrentSession().createCriteria(Article.class);
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
}
