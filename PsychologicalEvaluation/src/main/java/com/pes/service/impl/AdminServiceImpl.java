package com.pes.service.impl;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Propagation;

import com.pes.entity.Admin;
import com.pes.service.AdminService;
import com.pes.dao.AdminDao;

/**
 * 
 * @author Administrator
 *  service层我们使用@Service注解将其注入为bean
 *
 */
@Service("adminService")
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminDao adminDao;

	@Override
	public boolean validate(Admin admin) {
		return adminDao.validate(admin);
	}

	@Override
	public boolean isUserExist(String username) {
		return adminDao.isUserExist(username);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Admin entity) {
		// TODO Auto-generated method stub
		return adminDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void remove(Admin entity) {
		// TODO Auto-generated method stub
		adminDao.remove(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void removeAll(Collection<Admin> entities) {
		// TODO Auto-generated method stub
		adminDao.removeAll(entities);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void modify(Admin entity) {
		// TODO Auto-generated method stub
		adminDao.modify(entity);
	}

	@Override
	public Admin findById(Integer id) {
		// TODO Auto-generated method stub
		return adminDao.findById(id);
	}

	@Override
	public List<Admin> findAll(boolean asc) {
		// TODO Auto-generated method stub
		return adminDao.findAll(asc);
	}

	@Override
	public List<Admin> findByPage(int pageNo, int pageSize, boolean asc) {
		// TODO Auto-generated method stub
		return adminDao.findByPage(pageNo, pageSize, asc);
	}

	@Override
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return adminDao.getTotalRows();
	}

	@Override
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return adminDao.getMaxPageNo(pageSize);
	}

	@Override
	@Deprecated
	public void saveOrUpdate(Admin entity) {
		// TODO Auto-generated method stub
	}

	@Override
	@Deprecated
	public void flush() {
		// TODO Auto-generated method stub
	}

	
}
