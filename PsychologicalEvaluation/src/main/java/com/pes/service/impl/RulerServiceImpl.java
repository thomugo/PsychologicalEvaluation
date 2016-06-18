package com.pes.service.impl;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

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
	public void delete(Ruler entity) {
		// TODO Auto-generated method stub
		rulerDao.delete(entity);
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

	@Override
	public String getResult(int questionaireId, HashMap<Integer, Float> scores) {
		// TODO Auto-generated method stub
		StringBuilder result = new StringBuilder();
		Iterator iter = scores.entrySet().iterator();
		while (iter.hasNext()) {
			Map.Entry entry = (Map.Entry) iter.next();
			int vector = (int)entry.getKey();
			float score = (float)entry.getValue();
			if(vector != 0)
				result.append(rulerDao.getRuler(questionaireId, vector, score));
		}
		result.append(rulerDao.getRuler(questionaireId, 0, scores.get(0)));
		return result.toString();
	}

	
}
