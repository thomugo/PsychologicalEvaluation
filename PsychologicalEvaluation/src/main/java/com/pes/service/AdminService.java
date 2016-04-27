package com.pes.service;

import com.pes.entity.Admin;

public interface AdminService {
	boolean isUserExist(String username);
	boolean validate(Admin admin);
}
