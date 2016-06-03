package com.pes.dao.impl;

import java.util.List;

import javax.persistence.Id;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.ChoiceQuestionDao;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.User;

@Repository("choiceQuestionDao")
public class ChoiceQuestionDaoImpl extends GenericDao1Impl<ChoiceQuestion, Integer> implements ChoiceQuestionDao {
	public ChoiceQuestionDaoImpl() {   
        super(ChoiceQuestion.class, "ChoiceQuestion");   
     }   
	

}
