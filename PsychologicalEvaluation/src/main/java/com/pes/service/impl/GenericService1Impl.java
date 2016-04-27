package com.pes.service.impl;

import java.io.Serializable;
import java.util.List;

import com.pes.dao.GenericDao1;
import com.pes.service.GenericService1;


public class GenericService1Impl <T, ID extends Serializable> implements
GenericService1<T, ID> {
	private GenericDao1<T, ID> genericDao;
	
	@Override
	public T load(ID id) {
		// TODO Auto-generated method stub
		return genericDao.load(id);
	}

	@Override
	public T get(ID id) {
		// TODO Auto-generated method stub
		return genericDao.get(id);
	}

	@Override
	public List<T> findAll() {
		// TODO Auto-generated method stub
		return genericDao.findAll();
	}

	@Override
	public void persist(T entity) {
		// TODO Auto-generated method stub
		genericDao.persist(entity);
	}

	@Override
	public ID save(T entity) {
		// TODO Auto-generated method stub
		return genericDao.save(entity);
	}

	@Override
	public void saveOrUpdate(T entity) {
		// TODO Auto-generated method stub
		genericDao.saveOrUpdate(entity);
	}

	@Override
	public void delete(ID id) {
		// TODO Auto-generated method stub
		genericDao.delete(id);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		genericDao.flush();
	}

}
