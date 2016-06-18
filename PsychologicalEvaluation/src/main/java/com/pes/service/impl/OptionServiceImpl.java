package com.pes.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.OptionDao;
import com.pes.entity.Option;
import com.pes.service.OptionService;

@Service("optionService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class OptionServiceImpl implements OptionService {
	@Autowired
	OptionDao optionDao;
	
	@Override
	public Option load(Integer id) {
		// TODO Auto-generated method stub
		return optionDao.load(id);
	}

	@Override
	public Option get(Integer id) {
		// TODO Auto-generated method stub
		return optionDao.get(id);
	}

	@Override
	public List<Option> findAll() {
		// TODO Auto-generated method stub
		return optionDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(Option entity) {
		// TODO Auto-generated method stub
		optionDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Option entity) {
		// TODO Auto-generated method stub
		return optionDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Option entity) {
		// TODO Auto-generated method stub
		optionDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Option entity) {
		// TODO Auto-generated method stub
		optionDao.delete(entity);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		optionDao.flush();
	}

	@Override
	public HashMap<Integer, Float> getScores(int answerId) {
		// TODO Auto-generated method stub
		return optionDao.getScores(answerId);
	}

}
