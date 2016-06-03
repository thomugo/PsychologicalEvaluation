package com.pes.dao.impl;

import org.springframework.stereotype.Repository;

import com.pes.dao.ArticleClassDao;
import com.pes.entity.ArticleClass;

@Repository("articleClassDao")
public class ArticleClassDaoImpl extends GenericDao1Impl<ArticleClass, Integer> implements ArticleClassDao{

	public ArticleClassDaoImpl() {
		super(ArticleClass.class, "ArticleClass");
		// TODO Auto-generated constructor stub
	}
}
