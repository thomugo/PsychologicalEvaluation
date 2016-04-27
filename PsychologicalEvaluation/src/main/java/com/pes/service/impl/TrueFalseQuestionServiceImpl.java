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
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(TrueFalseQuestion entity) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.save(entity);
	}

	@Override
	public void remove(TrueFalseQuestion entity) {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.remove(entity);
	}

	@Override
	public void removeAll(Collection<TrueFalseQuestion> entities) {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.removeAll(entities);
	}

	@Override
	public void modify(TrueFalseQuestion entity) {
		// TODO Auto-generated method stub
		trueFalseQuestionDao.modify(entity);
	}

	@Override
	public TrueFalseQuestion findById(Integer id) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.findById(id);
	}

	@Override
	public List<TrueFalseQuestion> findAll() {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.findAll();
	}

	@Override
	public List<TrueFalseQuestion> findByPage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.findByPage(pageNo, pageSize);
	}

	@Override
	public int getTotalRows() {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.getTotalRows();
	}

	@Override
	public int getMaxPageNo(int pageSize) {
		// TODO Auto-generated method stub
		return trueFalseQuestionDao.getMaxPageNo(pageSize);
	}

}
