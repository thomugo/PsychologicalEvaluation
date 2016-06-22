package com.pes.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.AdminDao;
import com.pes.entity.Admin;
import com.pes.entity.User;

/**
 * 
 * @author Administrator
 * 我们采用@Repository注解将其注入为dao的bean，交由spring管理。 
 *
 */
@Repository("adminDao")
public class AdminDaoImpl extends GenericDao2Impl<Admin, Integer> implements AdminDao{

	@Autowired
	private SessionFactory sessionFactory;
	
	public AdminDaoImpl() {   
        super(Admin.class, "Admin");   
     }   
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean isUserExist(String username) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Admin as a where a.username = ? ");
		query.setString(0, username);
		List<Admin> list = query.list();
		if (list.isEmpty()){
			return false;
		}
		else {
			return true;
		}
	}

	@Override
	public Admin validate(String username, String password) {
		// TODO Auto-generated method stub
		Query query = this.getCurrentSession()
				.createQuery("from Admin as a where a.username = ? and a.password = ?  ");
		query.setString(0, username);
		query.setString(1, password);
		Admin user = (Admin) query.uniqueResult();
		return user;
	}

}
