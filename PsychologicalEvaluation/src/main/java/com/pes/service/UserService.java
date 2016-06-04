package com.pes.service;


import java.util.List;

import com.pes.entity.User;
import com.pes.entity.UserPojo;

public interface UserService extends GenericService2<User, Integer>{
	
	boolean isUserExist(String username);
	
	User validate(String username, String password);
	
	public List<UserPojo> findBaseUserByPage(final int pageNo, final int pageSize, final boolean order);
}
