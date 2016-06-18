package com.pes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.QuestionaireDao;
import com.pes.entity.Questionaire;
import com.pes.service.QuestionaireService;

@Service("questionaireService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class QuestionaireServiceImpl implements QuestionaireService {
	@Autowired
	QuestionaireDao questionDao;
	
	@Override
	public Questionaire load(Integer id) {
		// TODO Auto-generated method stub
		return questionDao.load(id);
	}

	@Override
	public Questionaire get(Integer id) {
		// TODO Auto-generated method stub
		return questionDao.get(id);
	}

	@Override
	public List<Questionaire> findAll() {
		// TODO Auto-generated method stub
		return questionDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(Questionaire entity) {
		// TODO Auto-generated method stub
		questionDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Questionaire entity) {
		// TODO Auto-generated method stub
		return questionDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Questionaire entity) {
		// TODO Auto-generated method stub
		questionDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Questionaire entity) {
		// TODO Auto-generated method stub
		questionDao.delete(entity);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		questionDao.flush();
	}

	@Override
	public List<Integer> getVectors(int id) {
		// TODO Auto-generated method stub
		return questionDao.getVectors(id);
	}

	@Override
	public int findTotalRaws(String title, String note) {
		// TODO Auto-generated method stub
		return questionDao.findTotalRaws(title, note);
	}

	@Override
	public int getMaxPageNo(String title, String note, Integer pageSize) {
		// TODO Auto-generated method stub
		return questionDao.getMaxPageNo(title, note, pageSize);
	}

	@Override
	public List<Questionaire> findQuestionairesByPage(String title,
			String note, Integer pageNo, Integer pageSize, boolean asc) {
		// TODO Auto-generated method stub
		return questionDao.findQuestionairesByPage(title, note, pageNo, pageSize, asc);
	}

}
