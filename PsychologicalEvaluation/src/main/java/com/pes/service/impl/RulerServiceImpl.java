package com.pes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.pes.dao.OptionDao;
import com.pes.dao.RulerDao;
import com.pes.entity.Option;
import com.pes.entity.Ruler;
import com.pes.service.OptionService;
import com.pes.service.RulerService;

@Service("rulerService")
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class RulerServiceImpl implements RulerService {
	@Autowired
	RulerDao rulerDao;

	@Override
	public Ruler load(Integer id) {
		// TODO Auto-generated method stub
		return rulerDao.load(id);
	}

	@Override
	public Ruler get(Integer id) {
		// TODO Auto-generated method stub
		return rulerDao.get(id);
	}

	@Override
	public List<Ruler> findAll() {
		// TODO Auto-generated method stub
		return rulerDao.findAll();
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void persist(Ruler entity) {
		// TODO Auto-generated method stub
		rulerDao.persist(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public Integer save(Ruler entity) {
		// TODO Auto-generated method stub
		return rulerDao.save(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void saveOrUpdate(Ruler entity) {
		// TODO Auto-generated method stub
		rulerDao.saveOrUpdate(entity);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		rulerDao.delete(id);
	}

	@Override
	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
	public void flush() {
		// TODO Auto-generated method stub
		rulerDao.flush();
	}

	@Override
	public String getRuler(int questionaireId, int vector, float score) {
		// TODO Auto-generated method stub
		return rulerDao.getRuler(questionaireId, vector, score);
	}

	
}
