package com.pes.dao;

import com.pes.entity.Admin;


public  interface AdminDao  {
	boolean isUserExist(String username);
	boolean validate(Admin admin);
}
