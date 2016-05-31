package com.pes.service.impl;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Propagation;

import com.alibaba.druid.sql.dialect.oracle.ast.stmt.OracleSelectRestriction.ReadOnly;
import com.pes.entity.User;
import com.pes.service.UserService;
import com.pes.dao.UserDao;

/**
 * 
 * @author Administrator
 *  service层我们使用@Service注解将其注入为bean
 *
 */
@Service("userService")
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userInfoDao;
	
	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userInfoDao.findAll();
	}
	
	@Override
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	public Integer save(User entity) {
		// TODO Auto-generated method stub
		return userInfoDao.save(entity);
	}

	@Override
	public boolean isUserExist(String username) {
		return userInfoDao.isUserExist(username);
	}

	@Override
	public User validate(String username, String password) {
		return userInfoDao.validate(username, password);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void remove(User entity) {
		// TODO Auto-generated method stub
		userInfoDao.remove(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void removeAll(Collection<User> entities) {
		// TODO Auto-generated method stub
		userInfoDao.removeAll(entities);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void modify(User entity) {
		// TODO Auto-generated method stub
		userInfoDao.modify(entity);
	}

	@Override
	public User findById(Integer id) {
		// TODO Auto-generated method stub
		return userInfoDao.findById(id);
	}

	@Override
	public List<User> findByPage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return userInfoDao.findByPage(pageNo, pageSize);
	}

	@Override
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return userInfoDao.getTotalRows();
	}

	@Override
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return userInfoDao.getMaxPageNo(pageSize);
	}
	
}
