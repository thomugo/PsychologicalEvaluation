package com.pes.service;

import com.pes.entity.Admin;

public interface AdminService extends GenericService2<Admin, Integer>{
	public boolean isUserExist(String username);
	public Admin validate(String username, String password);
}
