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
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(ChoiceQuestion entity) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void remove(ChoiceQuestion entity) {
		// TODO Auto-generated method stub
		choiceQuestionDao.remove(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void removeAll(Collection<ChoiceQuestion> entities) {
		// TODO Auto-generated method stub
		choiceQuestionDao.removeAll(entities);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void modify(ChoiceQuestion entity) {
		// TODO Auto-generated method stub
		choiceQuestionDao.modify(entity);
	}

	@Override
	public ChoiceQuestion findById(Integer id) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.findById(id);
	}

	@Override
	public List<ChoiceQuestion> findAll() {
		// TODO Auto-generated method stub
		return choiceQuestionDao.findAll();
	}

	@Override
	public List<ChoiceQuestion> findByPage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.findByPage(pageNo, pageSize);
	}

	@Override
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return choiceQuestionDao.getTotalRows();
	}

	@Override
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return choiceQuestionDao.getMaxPageNo(pageSize);
	}
	
	
}
