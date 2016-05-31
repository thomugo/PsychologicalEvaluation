package com.pes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.AnswerDao;
import com.pes.entity.Answer;
import com.pes.service.AnswerService;

@Service("answerService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class AnswerServiceImpl implements AnswerService{

	@Autowired
	AnswerDao answerDao;
	
	@Override
	public Answer load(Integer id) {
		// TODO Auto-generated method stub
		return answerDao.load(id);
	}

	@Override
	public Answer get(Integer id) {
		// TODO Auto-generated method stub
		return answerDao.get(id);
	}

	@Override
	public List<Answer> findAll() {
		// TODO Auto-generated method stub
		return answerDao.findAll();
	}
	
	@Override
	public List<Answer> findByQuestionaire(int userId, int questionaireId){
		return answerDao.findByQuestionaire(userId, questionaireId);
	}
	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(Answer entity) {
		// TODO Auto-generated method stub
		answerDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Answer entity) {
		// TODO Auto-generated method stub
		return answerDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Answer entity) {
		// TODO Auto-generated method stub
		answerDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		answerDao.delete(id);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		answerDao.flush();
	}

}
