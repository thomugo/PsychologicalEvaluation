package com.pes.service;

import java.io.Serializable;
import java.util.List;


public interface GenericService1 <T, ID extends Serializable>{
	T load(ID id);

	T get(ID id);

	List<T> findAll();
	
	void persist(T entity);

	ID save(T entity);

	void saveOrUpdate(T entity);

	void delete(ID id);

	void flush();
}
