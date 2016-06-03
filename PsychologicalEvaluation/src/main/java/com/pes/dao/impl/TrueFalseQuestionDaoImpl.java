package com.pes.dao.impl;


import org.springframework.stereotype.Repository;

import com.pes.dao.TrueFalseQuestionDao;
import com.pes.entity.TrueFalseQuestion;

@Repository("trueFalseQuestionDao")
public class TrueFalseQuestionDaoImpl extends GenericDao1Impl<TrueFalseQuestion, Integer> implements TrueFalseQuestionDao {
	public TrueFalseQuestionDaoImpl() {
		// TODO Auto-generated constructor stub
		super(TrueFalseQuestion.class, "TrueFalseQuestion");
	}

	
}
