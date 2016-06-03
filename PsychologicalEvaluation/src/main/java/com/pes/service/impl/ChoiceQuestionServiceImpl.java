package com.pes.service.impl;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.ChoiceQuestionDao;
import com.pes.entity.ChoiceQuestion;
import com.pes.service.ChoiceQuestionService;

@Service("choiceQuestionService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class ChoiceQuestionServiceImpl implements ChoiceQuestionService {
	@Autowired
	ChoiceQuestionDao choiceQuestionDao;

	@Override
	public ChoiceQuestion load(Integer id) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.load(id);
	}

	@Override
	public ChoiceQuestion get(Integer id) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.get(id);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public List<ChoiceQuestion> findAll() {
		// TODO Auto-generated method stub
		return choiceQuestionDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(ChoiceQuestion entity) {
		// TODO Auto-generated method stub
		choiceQuestionDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(ChoiceQuestion entity) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(ChoiceQuestion entity) {
		// TODO Auto-generated method stub
		choiceQuestionDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		choiceQuestionDao.delete(id);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void flush() {
		// TODO Auto-generated method stub
		choiceQuestionDao.flush();
	}
	
	
}
