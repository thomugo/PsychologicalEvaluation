package com.pes.dao;

import com.pes.entity.User;

public  interface UserDao extends GenericDao2<User, Integer> {
	boolean isUserExist(String username);
	User validate(String username, String password);
}
