package com.pes.dao;

import com.pes.entity.Admin;
import com.pes.entity.User;


public  interface AdminDao extends GenericDao2<Admin, Integer>{
	public boolean isUserExist(String username);
	public Admin validate(String username, String password);
}
