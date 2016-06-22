package com.pes.service;


import java.util.List;

import com.pes.entity.User;
import com.pes.entity.UserPojo;

public interface UserService extends GenericService2<User, Integer>{
	
	public boolean isUserExist(String username);
	
	public User validate(String username, String password);
	
	public List<UserPojo> findBaseUserByPage(final int pageNo, final int pageSize, final boolean order);
	
	public List<UserPojo> findExpertByPage(final int pageNo, final int pageSize);
	
	public int findTotalExpertRows();
	
	public int findMaxExpertPageNo(final int pageSize);
	
	public List<User> findApplicantByPage(final int pageNo, final int pageSize);
	
	public int findTotalApplicantRows();
	
	public int findMaxApplicantPageNo(final int pageSize);
	
	public List<UserPojo> findResentUsers(List<Integer> userIds);
	
}
