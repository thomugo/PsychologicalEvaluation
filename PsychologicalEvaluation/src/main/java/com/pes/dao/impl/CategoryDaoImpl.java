package com.pes.dao.impl;

import java.util.List;







import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.AnswerDao;
import com.pes.dao.CategoryDao;
import com.pes.entity.Answer;
import com.pes.entity.Category;
import com.pes.entity.User;

/**
 * 
 * @author Administrator
 * 我们采用@Repository注解将其注入为dao的bean，交由spring管理。 
 *
 */
@Repository("categoryDao")
public class CategoryDaoImpl extends GenericDao1Impl<Category, Integer> implements CategoryDao{
	public CategoryDaoImpl() {
		// TODO Auto-generated constructor stub
		super(Category.class, "Category");
	}
	

}
