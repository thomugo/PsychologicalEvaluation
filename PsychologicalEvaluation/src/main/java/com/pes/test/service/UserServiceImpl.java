package com.pes.test.service;

import java.util.Collection;
import java.util.List;




import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.entity.User;
import com.pes.test.dao.UserDao;

@Service("userService")
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class UserServiceImpl implements UserService{
	@Autowired
	 private UserDao userDao;
	@Override
	public Integer save(User entity) {
		// TODO Auto-generated method stub
		return userDao.save(entity);
	}

	@Override
	public void remove(User entity) {
		// TODO Auto-generated method stub
		userDao.remove(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void removeAll(Collection<User> entities) {
		// TODO Auto-generated method stub
		userDao.removeAll(entities);
	}

	@Override
	public void modify(User entity) {
		// TODO Auto-generated method stub
		userDao.modify(entity);
	}

	@Override
	public User findById(Integer id) {
		// TODO Auto-generated method stub
		return userDao.findById(id);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public List<User> findByPage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return userDao.findByPage(pageNo, pageSize);
	}

	@Override
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return userDao.getTotalRows();
	}

	@Override
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return userDao.getMaxPageNo(pageSize);
	}
	
}
