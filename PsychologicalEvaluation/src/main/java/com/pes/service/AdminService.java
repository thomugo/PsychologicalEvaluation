package com.pes.service;

import com.pes.entity.Admin;

public interface AdminService extends GenericService2<Admin, Integer>{
	boolean isUserExist(String username);
	boolean validate(Admin admin);
}
