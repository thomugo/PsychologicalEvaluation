package com.pes.service.impl;

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

	
}
