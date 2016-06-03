package com.pes.dao;

import com.pes.entity.Admin;
import com.pes.entity.User;


public  interface AdminDao extends GenericDao2<Admin, Integer>{
	boolean isUserExist(String username);
	boolean validate(Admin admin);
}
