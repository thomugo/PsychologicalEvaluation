package com.pes.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.AdminDao;
import com.pes.entity.Admin;

/**
 * 
 * @author Administrator
 * 我们采用@Repository注解将其注入为dao的bean，交由spring管理。 
 *
 */
@Repository("adminDao")
public class AdminDaoImpl implements AdminDao{

	@Autowired
	private SessionFactory sessionFactory;

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

	@SuppressWarnings("unchecked")
	@Override
	public boolean validate(Admin admin) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Admin as a where a.username = ? and a.password = ?  ");
		query.setString(0, admin.getUsername());
		query.setString(1, admin.getPassword());
		List<Admin> list = query.list();
		if (list.isEmpty()){
			return false;
		}
		else {
			return true;
		}
	}
}
