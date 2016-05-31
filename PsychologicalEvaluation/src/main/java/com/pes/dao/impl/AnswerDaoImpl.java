package com.pes.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.AnswerDao;
import com.pes.dao.UserDao;
import com.pes.entity.Answer;
import com.pes.entity.User;

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
}
