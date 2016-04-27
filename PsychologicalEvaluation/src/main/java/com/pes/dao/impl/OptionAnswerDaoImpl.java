package com.pes.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.OptionAnswerDao;
import com.pes.entity.OptionAnswer;
import com.pes.entity.User;

@Repository("optionAnswerDao")
public class OptionAnswerDaoImpl extends GenericDao1Impl<OptionAnswer, Integer> implements OptionAnswerDao {
	public OptionAnswerDaoImpl() {   
        super(OptionAnswer.class, "OptionAnswer");   
     }   
	

}
