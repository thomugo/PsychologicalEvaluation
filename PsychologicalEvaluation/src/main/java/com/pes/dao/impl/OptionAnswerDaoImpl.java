package com.pes.dao.impl;

import java.util.HashMap;
import java.util.List;

import javax.swing.plaf.metal.MetalBorders.OptionDialogBorder;

import org.hibernate.Criteria;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.alibaba.druid.sql.ast.expr.SQLAggregateExpr.Option;
import com.pes.dao.OptionAnswerDao;
import com.pes.entity.Answer;
import com.pes.entity.OptionAnswer;
import com.pes.entity.User;

@Repository("optionAnswerDao")
public class OptionAnswerDaoImpl extends GenericDao1Impl<OptionAnswer, Integer> implements OptionAnswerDao {
	
	public OptionAnswerDaoImpl() {   
        super(OptionAnswer.class, "OptionAnswer");   
     }   
	
}
