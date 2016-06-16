package com.pes.dao.impl;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.RulerDao;
import com.pes.entity.Article;
import com.pes.entity.Ruler;
import com.pes.entity.UserPojo;

@Repository("rulerDao")
public class RulerDaoImpl extends GenericDao1Impl<Ruler, Integer> implements RulerDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public RulerDaoImpl() {   
        super(Ruler.class, "Ruler");   
     }

	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public String getRuler(int questionaireId, int vector, float score) {
        Criteria criteria = this.getCurrentSession().createCriteria(Ruler.class);
        criteria.add( Restrictions.eq("questionaireId", questionaireId));
        criteria.add( Restrictions.eq("vector", vector));
        criteria.add( Restrictions.ge("endScore", score));
        criteria.add( Restrictions.le("startScore", score));
        criteria.setProjection(Projections.property("ruler"));
        String result = criteria.uniqueResult().toString();
        System.out.println(result);
        return result;
	}   
	

}