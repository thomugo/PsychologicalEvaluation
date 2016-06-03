package com.pes.dao.impl;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pes.dao.ArticleDao;
import com.pes.entity.Article;
import com.pes.entity.BaseUser;
import com.pes.entity.User;

@Repository("articleDao")
public class ArticleDaoImpl extends GenericDao2Impl<Article, Integer> implements ArticleDao{
	@Autowired
	private SessionFactory sessionFactory;
	
	public ArticleDaoImpl() {
		super(Article.class, "Article");
		// TODO Auto-generated constructor stub
	}
	
	private Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}
	
	@Override
	public int findTotalRaws(Integer userId, String keyWord, String userName, 
			String className, Date start, Date end) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(Article.class);
				if(userId != null)
					criteria.add( Restrictions.eq("userId", userId));
				if(className != null)
					criteria.add( Restrictions.eq("className", className));
				if(keyWord != null)
					criteria.add( Restrictions.like("userName", "%" + userName + "%"));
				if(userName != null)
					criteria.add( Restrictions.like("title", "%"+keyWord+"%") );
				if(start != null)
					criteria.add( Restrictions.ge("dateTime", start));
				if(end != null)
					criteria.add( Restrictions.le("dateTime", end));
			    criteria.setProjection(Projections.rowCount());
		Integer count = ((Long)criteria.uniqueResult()).intValue();
		return count;
	}

	@Override
	public int getMaxArticlePageNo(Integer userId, String keyWord, String userName,
			String className, Date start, Date end, Integer pageSize) {
		// 最大页数   
        int maxPageNo;   
        // 总记录数   
        int totalRows = this.findTotalRaws(userId, keyWord, userName, className, start, end);   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % pageSize == 0) ? (totalRows / pageSize)   
                     : (totalRows / pageSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
		return maxPageNo;
	}

	@Override
	public List<Article> findArticlesByPage(Integer userId, String keyWord, String userName,
			String className, Date start, Date end, Integer pageNo, Integer pageSize) {
		// TODO Auto-generated method stub
		Criteria criteria = this.getCurrentSession().createCriteria(Article.class);
				if(userId != null)
					criteria.add( Restrictions.eq("userId", userId));
				if(className != null)
					criteria.add( Restrictions.eq("className", className));
				if(keyWord != null)
					criteria.add( Restrictions.like("userName", "%" + userName + "%"));
				if(userName != null)
					criteria.add( Restrictions.like("title", "%"+keyWord+"%") );
				if(start != null)
					criteria.add( Restrictions.ge("dateTime", start));
				if(end != null)
					criteria.add( Restrictions.le("dateTime", end));
			    criteria.addOrder(Order.desc("dateTime"))
			    .setFirstResult(pageNo > 0 ? (pageNo - 1) * pageSize : 0)
			    .setMaxResults(pageSize);
		List<Article> list = (List<Article>)criteria.list();
		return list;
	}

}
