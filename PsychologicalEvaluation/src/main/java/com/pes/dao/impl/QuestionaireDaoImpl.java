package com.pes.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.management.Query;

import org.hibernate.Criteria;
import org.hibernate.FetchMode;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.QuestionaireDao;
import com.pes.entity.Article;
import com.pes.entity.ArticlePojo;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Questionaire;
import com.pes.entity.User;

@Repository("questionaireDao")
public class QuestionaireDaoImpl extends GenericDao1Impl<Questionaire, Integer> implements QuestionaireDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public QuestionaireDaoImpl() {
		// TODO Auto-generated constructor stub
		super(Questionaire.class, "Questionaire");
	}

	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public List<Integer> getVectors(int id) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(Questionaire.class)
				.createAlias("choiceQuestions","q") 
	            .add( Restrictions.idEq(id));
		criteria.setProjection(Projections.groupProperty("q.vector"));
		List<Integer> list = criteria.list();
		return list;
	}

	@Override
	public int findTotalRaws(String title, String note) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(Questionaire.class);
		if(title != null)
			criteria.add( Restrictions.like("title", "%" + title + "%"));
		if(note != null)
			criteria.add( Restrictions.like("note", "%" + note + "%"));
	    criteria.setProjection(Projections.rowCount());
	    Integer count = ((Long)criteria.uniqueResult()).intValue();
	    return count;
	}

	@Override
	public int getMaxPageNo(String title, String note, Integer pageSize) {
		// TODO Auto-generated method stub
		// 最大页数   
        int maxPageNo;   
        // 总记录数   
        int totalRows = this.findTotalRaws(title, note);   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
		return maxPageNo;
	}

	@Override
	public List<Questionaire> findQuestionairesByPage(String title,
			String note, Integer pageNo, Integer pageSize, boolean asc) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(Questionaire.class);
		if(title != null)
			criteria.add( Restrictions.like("title", "%" + title + "%"));
		if(note != null)
			criteria.add( Restrictions.like("note", "%" + note + "%"));
		if(asc){
			criteria.addOrder(Order.asc("id"));
		}else {
			criteria.addOrder(Order.desc("id"));
		}
	    criteria.setFirstResult(pageNo > 0 ? (pageNo - 1) * pageSize : 0)
	    .setMaxResults(pageSize);
	    criteria.setProjection( Projections.projectionList()
	    		.add( Projections.property("id"), "id" )
	    		.add( Projections.property("title"), "title")
	    		.add( Projections.property("note"), "note"));
	    ScrollableResults srs = criteria.scroll();
	    ArrayList<Questionaire> questionaires = new ArrayList<Questionaire>();
         while(srs.next()){
           Questionaire questionaire = new Questionaire();
           questionaire.setId(srs.getInteger(0));
           questionaire.setTitle(srs.getString(1));
           questionaire.setNote(srs.getString(2));
           questionaires.add(questionaire);
        }
		return questionaires;
	}

}
