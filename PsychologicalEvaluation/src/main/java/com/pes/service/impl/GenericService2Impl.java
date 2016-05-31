package com.pes.service.impl;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import com.pes.dao.GenericDao2;
import com.pes.service.GenericService2;


public class GenericService2Impl<T, ID extends Serializable> implements
		GenericService2<T, ID> {
	private GenericDao2<T, ID> genericDao;
	
	@Override
	public List<T> findAll() {
		return genericDao.findAll();
	}
	@Override
	public T findById(ID id) {
		return genericDao.findById(id);
	}
	@Override
	public List<T> findByPage(int pageNo, int pageSize) {
		return genericDao.findByPage(pageNo, pageSize);
	}
	@Override
	public int getMaxPageNo(int pageSize) {
		return genericDao.getMaxPageNo(pageSize);
	}
	@Override
	public int getTotalRows() {
		return genericDao.getTotalRows();
	}
	@Override
	public void modify(T entity) {
		genericDao.modify(entity);
	}
	@Override
	public void remove(T entity) {
		genericDao.remove(entity);
	}
	@Override
	public void removeAll(Collection<T> entities) {
		genericDao.removeAll(entities);
	}
	@Override
	public ID save(T entity) {
		return genericDao.save(entity);
	}
	public void setGenericDao(GenericDao2<T, ID> genericDao) {
		this.genericDao = genericDao;
	}
	

}
