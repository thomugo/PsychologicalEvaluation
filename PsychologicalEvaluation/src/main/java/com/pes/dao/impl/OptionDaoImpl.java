package com.pes.dao.impl;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.OptionDao;
import com.pes.entity.Option;
import com.pes.entity.OptionAnswer;
import com.pes.entity.User;

@Repository("optionDao")
public class OptionDaoImpl extends GenericDao1Impl<Option, Integer> implements OptionDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public OptionDaoImpl() {   
        super(Option.class, "Option");   
     }   
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public HashMap<Integer, Float> getScores(int answerId) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(OptionAnswer.class);
		criteria.createAlias("option", "o");
		criteria.createAlias("o.question", "q");
		criteria.createAlias("answer", "a");
		criteria.add( Restrictions.eq("a.id", answerId));
		 criteria.setProjection( Projections.projectionList()
		    		.add( Projections.groupProperty("q.vector"))
		    		.add( Projections.sum("o.score"), "score"));
		 ScrollableResults srs = criteria.scroll();
		 HashMap<Integer, Float> scores = new HashMap<Integer, Float>();
	         while(srs.next()){
	        	 scores.put(srs.getInteger(0), srs.getDouble(1).floatValue());
	        }
		return scores;
	}   
}
