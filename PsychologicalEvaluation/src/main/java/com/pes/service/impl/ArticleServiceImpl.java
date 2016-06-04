package com.pes.service.impl;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.ArticleDao;
import com.pes.entity.Article;
import com.pes.entity.ArticlePojo;
import com.pes.service.ArticleService;

@Service("articleService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class ArticleServiceImpl implements ArticleService{
	@Autowired
	private ArticleDao articleDao;
	
	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Article entity) {
		// TODO Auto-generated method stub
		return articleDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void remove(Article entity) {
		// TODO Auto-generated method stub
		articleDao.remove(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void removeAll(Collection<Article> entities) {
		// TODO Auto-generated method stub
		articleDao.removeAll(entities);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void modify(Article entity) {
		// TODO Auto-generated method stub
		articleDao.modify(entity);
	}

	@Override
	public Article findById(Integer id) {
		// TODO Auto-generated method stub
		return articleDao.findById(id);
	}

	@Override
	public List<Article> findAll(final boolean asc) {
		// TODO Auto-generated method stub
		return articleDao.findAll(asc);
	}

	@Override
	public List<Article> findByPage(final int pageNo, final int pageSize, final boolean asc) {
		// TODO Auto-generated method stub
		return articleDao.findByPage(pageNo, pageSize, asc);
	}

	@Override
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return articleDao.getTotalRows();
	}

	@Override
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return articleDao.getMaxPageNo(pageSize);
	}

	@Override
	public int findTotalRaws(Integer userId, String keyWord, String userName,
			String className, Date start, Date end) {
		// TODO Auto-generated method stub
		return articleDao.findTotalRaws(userId, keyWord, userName, className, start, end);
	}

	@Override
	public int getMaxArticlePageNo(Integer userId, String keyWord, String userName,
			String className, Date start, Date end, Integer pageSize) {
		// TODO Auto-generated method stub
		return articleDao.getMaxArticlePageNo(userId, keyWord, userName, className, start, end, pageSize);
	}

	@Override
	public List<ArticlePojo> findArticlesByPage(Integer userId, String keyWord, String userName,
			String className, Date start, Date end, Integer pageNo,
			Integer pageSize) {
		// TODO Auto-generated method stub
		return articleDao.findArticlesByPage(userId, keyWord, userName, className, start, end, pageNo, pageSize);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Article entity) {
		// TODO Auto-generated method stub
		articleDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void flush() {
		// TODO Auto-generated method stub
		articleDao.flush();
	}

}
