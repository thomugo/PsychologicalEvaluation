package com.pes.test.dao;

import java.util.List;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.pes.entity.User;
@Repository("userDao")
public class UserDaoImpl extends GenericDaoImpl<User, Integer> implements UserDao {
	public UserDaoImpl() {   
        super(User.class, "User");   
     }   
	
}
