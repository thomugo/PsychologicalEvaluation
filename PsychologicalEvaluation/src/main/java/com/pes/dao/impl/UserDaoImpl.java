package com.pes.dao.impl;

import java.util.List;



import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.UserDao;
import com.pes.entity.Admin;
import com.pes.entity.User;

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
}
