package com.pes.dao.impl;

import java.util.HashMap;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.AnswerDao;
import com.pes.entity.Answer;

@Repository("answerDao")
public class AnswerDaoImpl extends GenericDao1Impl<Answer, Integer> implements AnswerDao{
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	public AnswerDaoImpl() {   
        super(Answer.class, "Answer");   
     }

	@Override
	public List<Answer> findByQuestionaire(int userId, int questionaireId) {
		// TODO Auto-generated method stub
		String sqlString = "select * from answer where userId = ? and questionaireId = ?  ";
		Query query = getCurrentSession()
				.createSQLQuery(sqlString).addEntity(Answer.class);
		query.setInteger(0, userId);
		query.setInteger(1, questionaireId);
		List<Answer> list = query.list(); 
		return list;
	}

	@Override
	public HashMap<Integer, Float> getScores(int answerId) {
		Criteria criteria = this.getCurrentSession().createCriteria(Answer.class);
		criteria.createAlias("optionAnswer", "oa");
		criteria.createAlias("oa.option", "o");
		criteria.createAlias("o.question", "q");
		criteria.add( Restrictions.idEq(answerId));
		 criteria.setProjection( Projections.projectionList()
		    		.add( Projections.groupProperty("q.vector"))
		    		.add( Projections.sum("o.score"), "score"));
		 ScrollableResults srs = criteria.scroll();
		 HashMap<Integer, Float> scores = new HashMap<Integer, Float>();
	         while(srs.next()){
	        	 scores.put(srs.getInteger(0), srs.getDouble(1).floatValue());
	        }
	     if(scores.containsKey(0)){
	    	 return scores;
	     }
	     else{
	    	 Criteria criteria2 = this.getCurrentSession().createCriteria(Answer.class);
		     criteria2.createAlias("optionAnswer", "oa");
		     criteria2.createAlias("oa.option", "o");
		     criteria2.add(Restrictions.idEq(answerId))
		     	.setProjection(Projections.sum("o.score"));
		     float sum = (float)((double)criteria2.uniqueResult());
		     scores.put(0, sum);
	     }
	     
		return scores;
	}

	@Override
	public HashMap<Integer, Integer> getCountInVector(int answerId) {
		Criteria criteria = this.getCurrentSession().createCriteria(Answer.class);
		criteria.createAlias("optionAnswer", "oa");
		criteria.createAlias("oa.option", "o");
		criteria.createAlias("o.question", "q");
		criteria.add( Restrictions.idEq(answerId));
		 criteria.setProjection( Projections.projectionList()
		    		.add( Projections.groupProperty("q.vector"))
		    		.add( Projections.count("o.id")));
		 ScrollableResults srs = criteria.scroll();
		 HashMap<Integer, Integer> scores = new HashMap<Integer, Integer>();
	         while(srs.next()){
	        	 scores.put(srs.getInteger(0), srs.getLong(1).intValue());
	        }
	     if(scores.containsKey(0)){
	    	 return scores;
	     }
	     else{
	    	 Criteria criteria2 = this.getCurrentSession().createCriteria(Answer.class);
		     criteria2.createAlias("optionAnswer", "oa");
		     criteria2.createAlias("oa.option", "o");
		     criteria2.add(Restrictions.idEq(answerId))
		     	.setProjection(Projections.count("o.id"));
		     int sum = ((Long)criteria2.uniqueResult()).intValue();
		     scores.put(0, sum);
	     }
	     
		return scores;
	}

	@Override
	public HashMap<Integer, Float> getAvgScores(int answerId) {
		Criteria criteria = this.getCurrentSession().createCriteria(Answer.class);
		criteria.createAlias("optionAnswer", "oa");
		criteria.createAlias("oa.option", "o");
		criteria.createAlias("o.question", "q");
		criteria.add( Restrictions.idEq(answerId));
		 criteria.setProjection( Projections.projectionList()
		    		.add( Projections.groupProperty("q.vector"))
		    		.add( Projections.avg("o.score")));
		 ScrollableResults srs = criteria.scroll();
		 HashMap<Integer, Float> scores = new HashMap<Integer, Float>();
	         while(srs.next()){
	        	 scores.put(srs.getInteger(0), srs.getDouble(1).floatValue());
	        }
	     if(scores.containsKey(0)){
	    	 return scores;
	     }
	     else{
	    	 Criteria criteria2 = this.getCurrentSession().createCriteria(Answer.class);
		     criteria2.createAlias("optionAnswer", "oa");
		     criteria2.createAlias("oa.option", "o");
		     criteria2.add(Restrictions.idEq(answerId))
		     	.setProjection(Projections.avg("o.score"));
		     float sum = (float)((double)criteria2.uniqueResult());
		     scores.put(0, sum);
	     }
	     
		return scores;
	}

	
}
