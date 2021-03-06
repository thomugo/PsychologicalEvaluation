package com.pes.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.AnswerDao;
import com.pes.entity.Answer;
import com.pes.entity.AnswerPojo;
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
	public void delete(Answer entity) {
		// TODO Auto-generated method stub
		answerDao.delete(entity);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		answerDao.flush();
	}

	@Override
	public HashMap<Integer, Float> getScores(int answerId) {
		// TODO Auto-generated method stub
		return answerDao.getScores(answerId);
	}

	@Override
	public HashMap<Integer, Integer> getCountInVector(int answerId) {
		// TODO Auto-generated method stub
		return answerDao.getCountInVector(answerId);
	}

	@Override
	public HashMap<Integer, Float> getAvgScores(int answerId) {
		// TODO Auto-generated method stub
		return answerDao.getAvgScores(answerId);
	}

	@Override
	public List<AnswerPojo> findByUserId(int userId) {
		// TODO Auto-generated method stub
		return answerDao.findByUserId(userId);
	}

	@Override
	public int findTotalRaws(Integer userId) {
		// TODO Auto-generated method stub
		return answerDao.findTotalRaws(userId);
	}

	@Override
	public int getMaxAnswerPageNo(Integer userId, Integer pageSize) {
		// TODO Auto-generated method stub
		return answerDao.getMaxAnswerPageNo(userId, pageSize);
	}

	@Override
	public List<AnswerPojo> findAnswersByPage(Integer userId, Integer pageNo,
			Integer pageSize) {
		// TODO Auto-generated method stub
		return answerDao.findAnswersByPage(userId, pageNo, pageSize);
	}

}
