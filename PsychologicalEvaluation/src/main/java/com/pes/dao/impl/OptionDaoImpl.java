package com.pes.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.OptionDao;
import com.pes.entity.Option;
import com.pes.entity.User;

@Repository("optionDao")
public class OptionDaoImpl extends GenericDao1Impl<Option, Integer> implements OptionDao {
	public OptionDaoImpl() {   
        super(Option.class, "Option");   
     }   
	

}
