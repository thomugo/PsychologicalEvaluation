package com.pes.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.CategoryDao;
import com.pes.entity.Category;
import com.pes.service.CategoryService;

@Service("categoryService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryDao categoryDao;
	
	@Override
	public Category load(Integer id) {
		return categoryDao.load(id);
	}

	@Override
	public Category get(Integer id) {
		return categoryDao.get(id);
	}

	@Override
	public List<Category> findAll() {
		return categoryDao.findAll();
	}

	

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(Category entity) {
		categoryDao.persist(entity);

	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Category entity) {
		return categoryDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Category entity) {
		// TODO Auto-generated method stub
		categoryDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		categoryDao.delete(id);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		categoryDao.flush();
	}

}
