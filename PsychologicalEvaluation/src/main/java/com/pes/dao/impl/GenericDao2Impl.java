package com.pes.dao.impl;

import java.io.Serializable;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;




import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.pes.dao.GenericDao2;

public class GenericDao2Impl <T, ID extends Serializable> implements GenericDao2<T, ID>{
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
    public GenericDao2Impl(Class<T> type, String className) {   
        this.type = type;   
        this.hql = "from " + className;   
        this.className = className;
     }   
    
    @SuppressWarnings("unchecked")   
    public List<T> findAll() {   
    	String hql = "from " + className;   
        return (List<T>) this.getCurrentSession().createQuery(hql).list(); 
     }   
       
    @SuppressWarnings("unchecked")   
    public T findById(ID id) {   
        return (T) this.getCurrentSession().get(type, id);   
     }   
    public void modify(T entity) {   
        this.getCurrentSession().update(entity);   
     }   
    public void remove(T entity) {   
        this.getCurrentSession().delete(entity);   
     }   
       
    public void removeAll(Collection<T> entities) {   
    	Iterator<T> it = entities.iterator();
    	Session session = this.getCurrentSession();
    	while (it.hasNext()) {
    		T entity = it.next();
    		session.delete(entity);
    	}
     }   
    
    @SuppressWarnings("unchecked")   
    public ID save(T entity) {   
        return (ID) this.getCurrentSession().save(entity);   
     }   
    public int getTotalRows() {   
         String actualHql = "select count(*) "  
                 + hql.substring(hql.indexOf("from"));   
        return ( (Long) this.getCurrentSession().createQuery(actualHql).uniqueResult()).intValue();
     }   
    public int getMaxPageNo(int pageSize) {   
        // 最大页数   
        int maxPageNo;   
        // 实际每页数据条数   
        int actualSize;   
        // 总记录数   
        int totalRows = this.getTotalRows();   
        // 计算实际每页的条数,如果请求的每页数据条数大于总条数, 则等于总条数   
         actualSize = (pageSize > totalRows) ? totalRows : pageSize;   
        if (totalRows > 0) {   
             maxPageNo = (totalRows % actualSize == 0) ? (totalRows / actualSize)   
                     : (totalRows / actualSize + 1);   
         } else {   
             maxPageNo = 0;   
         }   
        return maxPageNo;   
     }   
    @SuppressWarnings("unchecked")   
    public List<T> findByPage(final int pageNo, final int pageSize) {   
        final int maxPageNo = this.getMaxPageNo(pageSize);   
        final int totalRows = this.getTotalRows();   
        // 实际页码   
        int actualPageNo = (pageNo > maxPageNo) ? maxPageNo : pageNo;  
        // 计算实际每页的条数,如果请求的每页数据条数大于总条数, 则等于总条数   
        int actualPageSize = (pageSize > totalRows) ? totalRows : pageSize;   
        // 计算请求页码的第一条记录的索引值,如果 
        Query query = this.getCurrentSession().createQuery("from "+ className);
        int startRow = (actualPageNo > 0) ? (actualPageNo - 1) * actualPageSize : 0;  
        query.setFirstResult(startRow);
        query.setMaxResults(actualPageSize);
        return (List<T>) query.list();   
       
     }
	
	
}
