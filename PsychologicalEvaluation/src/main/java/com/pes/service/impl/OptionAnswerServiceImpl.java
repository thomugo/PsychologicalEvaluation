package com.pes.service.impl;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.OptionAnswerDao;
import com.pes.entity.OptionAnswer;
import com.pes.service.OptionAnswerService;

@Service("optionAnswerService")
@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
public class OptionAnswerServiceImpl implements OptionAnswerService {
	@Autowired
	OptionAnswerDao optionAnswerDao;

	@Override
	public OptionAnswer load(Integer id) {
		// TODO Auto-generated method stub
		return optionAnswerDao.load(id);
	}

	@Override
	public OptionAnswer get(Integer id) {
		// TODO Auto-generated method stub
		return optionAnswerDao.get(id);
	}

	@Override
	public List<OptionAnswer> findAll() {
		// TODO Auto-generated method stub
		return optionAnswerDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(OptionAnswer entity) {
		// TODO Auto-generated method stub
		optionAnswerDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(OptionAnswer entity) {
		// TODO Auto-generated method stub
		return optionAnswerDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(OptionAnswer entity) {
		// TODO Auto-generated method stub
		optionAnswerDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		optionAnswerDao.delete(id);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		optionAnswerDao.flush();
	}
	
	

}
