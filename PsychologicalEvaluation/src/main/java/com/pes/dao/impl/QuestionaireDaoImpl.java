package com.pes.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.QuestionaireDao;
import com.pes.entity.Questionaire;
import com.pes.entity.User;

@Repository("questionaireDao")
public class QuestionaireDaoImpl extends GenericDao1Impl<Questionaire, Integer> implements QuestionaireDao {
	public QuestionaireDaoImpl() {
		// TODO Auto-generated constructor stub
		super(Questionaire.class, "Questionaire");
	} 
	

}
