package com.pes.service.impl;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.TrueFalseQuestionDao;
import com.pes.entity.TrueFalseQuestion;
import com.pes.service.TrueFalseQuestionService;

@Service("trueFalseQuestionService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class TrueFalseQuestionServiceImpl implements TrueFalseQuestionService {

	@Autowired
	TrueFalseQuestionDao trueFalseQuestionDao;

	@Override
	public TrueFalseQuestion load(Integer id) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.load(id);
	}

	@Override
	public TrueFalseQuestion get(Integer id) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.get(id);
	}

	@Override
	public List<TrueFalseQuestion> findAll() {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(TrueFalseQuestion entity) {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(TrueFalseQuestion entity) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(TrueFalseQuestion entity) {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.delete(id);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void flush() {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.flush();
	}
	

}
