package com.pes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.ArticleClassDao;
import com.pes.entity.ArticleClass;
import com.pes.service.ArticleClassService;

@Service("articleClassService")
@Transactional(readOnly=true, propagation = Propagation.SUPPORTS)
public class ArticleClassServiceImpl implements ArticleClassService{
	@Autowired
	private ArticleClassDao articleClassDao;
	
	@Override
	public ArticleClass load(Integer id) {
		// TODO Auto-generated method stub
		return articleClassDao.load(id);
	}

	@Override
	public ArticleClass get(Integer id) {
		// TODO Auto-generated method stub
		return articleClassDao.get(id);
	}

	@Override
	public List<ArticleClass> findAll() {
		// TODO Auto-generated method stub
		return articleClassDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(ArticleClass entity) {
		// TODO Auto-generated method stub
		articleClassDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(ArticleClass entity) {
		// TODO Auto-generated method stub
		return articleClassDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(ArticleClass entity) {
		// TODO Auto-generated method stub
		articleClassDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		articleClassDao.delete(id);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void flush() {
		// TODO Auto-generated method stub
		articleClassDao.flush();
	}

}
