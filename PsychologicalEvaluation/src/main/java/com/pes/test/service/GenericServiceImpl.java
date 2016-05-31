package com.pes.test.service;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import com.pes.test.dao.GenericDao;

public class GenericServiceImpl<T, ID extends Serializable> implements
		GenericService<T, ID> {
	private GenericDao<T, ID> genericDao;
	public List<T> findAll() {
		return genericDao.findAll();
	}

	public T findById(ID id) {
		return genericDao.findById(id);
	}

	public List<T> findByPage(int pageNo, int pageSize) {
		return genericDao.findByPage(pageNo, pageSize);
	}

	public int getMaxPageNo(int pageSize) {
		return genericDao.getMaxPageNo(pageSize);
	}

	public int getTotalRows() {
		return genericDao.getTotalRows();
	}

	public void modify(T entity) {
		genericDao.modify(entity);
	}

	public void remove(T entity) {
		genericDao.remove(entity);
	}

	public void removeAll(Collection<T> entities) {
		genericDao.removeAll(entities);
	}

	public ID save(T entity) {
		return genericDao.save(entity);
	}

	public void setGenericDao(GenericDao<T, ID> genericDao) {
		this.genericDao = genericDao;
	}
}
