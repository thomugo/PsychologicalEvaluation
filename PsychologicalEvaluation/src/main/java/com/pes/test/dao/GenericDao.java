package com.pes.test.dao;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

public interface GenericDao <T, ID extends Serializable> {
	/**
     * 保存实体
     *
     * @param entity :
     *                实体
     * @return 保存后得到的id
     */  
   public ID save(T entity);   
 
   /**
     * <p>
     * 删除实体
     * </p>
     *
     * @param entity :
     *                实体
     */  
   public void remove(T entity);   
   /**
     * <p>
     * 删除实体集合
     * </p>
     *
     * @param entities :
     *                  实体
     */  
   public void removeAll(Collection<T> entities);   
   /**
     * <p>
     * 修改实体
     * </p>
     *
     * @param entity :
     *                实体
     */  
   public void modify(T entity);   
   /**
     * <p>
     * 通过名字查找
     * </p>
     *
     * @param id :
     *            id
     * @return 找到的实体
     */  
   public T findById(ID id);   
   /**
     * <p/>
     * 查找全部实体
     * <p/>
     *
     * @return 所有实体的列表
     */  
   public List<T> findAll();   
   /**
     * <p>
     * 计算匹配查询条件的记录总数,如果没有注入或者设置hql语句,将使用默认的查询语句返回数据库中所有记录
     * </p>
     *
     * @return 记录总数
     */  
   public int getTotalRows();   
   /**
     * <p>
     * 根据每页记录的数量,计算出总的分页数
     * </p>
     *
     * @param size 每页记录的数量
     * @return 分页总数
     */  
   public int getMaxPageNo(int pageSize);   
   /**
     * <p/>
     * 根据给定的页码进行分页查找,这是纯Hibernate分页.
     * <p/>
     *
     * @param page : 要查询的页码
     *              查询的hql语句
     * @param size : 每页记录数
     *              分页信息,参见PageInfo
     * @return 匹配的实体列表
     */  
   public List<T> findByPage(final int pageNo, final int pageSize);   
}
