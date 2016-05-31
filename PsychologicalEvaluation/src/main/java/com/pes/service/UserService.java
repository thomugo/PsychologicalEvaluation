package com.pes.service;


import com.pes.entity.User;

public interface UserService extends GenericService2<User, Integer>{
	
	boolean isUserExist(String username);
	
	User validate(String username, String password);
}
