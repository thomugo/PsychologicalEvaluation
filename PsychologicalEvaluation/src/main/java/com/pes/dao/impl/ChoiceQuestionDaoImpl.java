package com.pes.dao.impl;

import java.util.List;

import javax.management.Query;
import javax.persistence.Id;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.ChoiceQuestionDao;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.User;

@Repository("choiceQuestionDao")
public class ChoiceQuestionDaoImpl extends GenericDao1Impl<ChoiceQuestion, Integer> implements ChoiceQuestionDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public ChoiceQuestionDaoImpl() {   
        super(ChoiceQuestion.class, "ChoiceQuestion");   
     }   
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public List<Integer> getVectors(int questionaireId) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(ChoiceQuestion.class)
				.setFetchMode("questionaire",FetchMode.JOIN)   
				//.createAlias("questionaire", "q")  
	            .add(Restrictions.eq("questionaire.id", questionaireId));  
		criteria.setProjection(Projections.groupProperty("vector"));
		List<Integer> list = criteria.list();
		return list;
	} 
}
