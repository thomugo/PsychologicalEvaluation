package com.pes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.TrueFalseAnswerDao;
import com.pes.entity.TrueFalseAnswer;
import com.pes.service.TrueFalseAnswerService;

@Service("trueFalseAnswerService")
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class TrueFalseAnswerServiceImpl implements TrueFalseAnswerService {
	@Autowired
	private TrueFalseAnswerDao trueFalseAnswerDao;
	
	@Override
	public TrueFalseAnswer load(Integer id) {
		// TODO Auto-generated method stub
		return trueFalseAnswerDao.load(id);
	}

	@Override
	public TrueFalseAnswer get(Integer id) {
		// TODO Auto-generated method stub
		return trueFalseAnswerDao.get(id);
	}

	@Override
	public List<TrueFalseAnswer> findAll() {
		// TODO Auto-generated method stub
		return trueFalseAnswerDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(TrueFalseAnswer entity) {
		// TODO Auto-generated method stub
		trueFalseAnswerDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(TrueFalseAnswer entity) {
		// TODO Auto-generated method stub
		return trueFalseAnswerDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(TrueFalseAnswer entity) {
		// TODO Auto-generated method stub
		trueFalseAnswerDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(TrueFalseAnswer entity) {
		// TODO Auto-generated method stub
		trueFalseAnswerDao.delete(entity);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		trueFalseAnswerDao.flush();
	}

}
