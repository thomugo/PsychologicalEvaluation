package com.pes.dao.impl;

import java.util.List;


import org.springframework.stereotype.Repository;

import com.pes.dao.TrueFalseAnswerDao;
import com.pes.entity.TrueFalseAnswer;

@Repository("trueFalseAnswerDao")
public class TrueFalseAnswerDaoImpl extends GenericDao1Impl<TrueFalseAnswer, Integer> implements TrueFalseAnswerDao {
	public TrueFalseAnswerDaoImpl() {
		// TODO Auto-generated constructor stub
		super(TrueFalseAnswer.class, "TrueFalseAnswer");
	}
	

}
