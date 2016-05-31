package com.pes.dao.impl;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.pes.dao.GenericDao1;

public class GenericDao1Impl <T, ID extends Serializable> implements GenericDao1<T, ID>{
	// 具体的实体类型   
		@Autowired
		private SessionFactory sessionFactory;

	    private Class<T> type;   
	    private String className;
	    // 查询条件   
	    private String hql;   
	    
	    private Session getCurrentSession() {
			return this.sessionFactory.getCurrentSession();
		}
	    /**
	      * <p>
	      * 必须提供的构造方法,以便创建实例的时候就知道具体实体的类型
	      * <p>
	      *
	      * @param type :
	      *             实体类型
	      */  
	    public GenericDao1Impl(Class<T> type, String className) {   
	        this.type = type;   
	        this.hql = "from " + className;   
	        this.className = className;
	     }   
	@Override
	public T load(ID id) {
		// TODO Auto-generated method stub
		return (T)this.getCurrentSession().load(type, id);
	}

	@Override
	public T get(ID id) {
		// TODO Auto-generated method stub
		return (T)this.getCurrentSession().get(type, id);
	}

	@Override
	public List<T> findAll() {
		String hql = "from " + className;   
        return (List<T>) this.getCurrentSession().createQuery(hql).list(); 
	}

	@Override
	public void persist(T entity) {
		// TODO Auto-generated method stub
		this.getCurrentSession().persist(entity);
	}

	@Override
	public ID save(T entity) {
		// TODO Auto-generated method stub
		return (ID) this.getCurrentSession().save(entity); 
	}

	@Override
	public void saveOrUpdate(T entity) {
		// TODO Auto-generated method stub
		this.getCurrentSession().saveOrUpdate(entity);
	}

	@Override
	public void delete(ID id) {
		// TODO Auto-generated method stub
		this.getCurrentSession().delete(id);
	}

	@Override
	public void flush() {
		// TODO Auto-generated method stub
		this.getCurrentSession().flush();
	}

}
