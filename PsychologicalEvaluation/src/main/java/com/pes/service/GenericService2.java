package com.pes.service;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

/**
*
* @author thomugo
*
* @param <T> :  持久化的实体Bean
* @param <ID> : 实体Bean的id
*/  
public interface GenericService2<T, ID extends Serializable> {   
    /**
      * 保存实体
      * @param entity :实体
      * @return 保存后得到的id
      */  
    public ID save(T entity);   
    
    void saveOrUpdate(T entity);
    
    void flush();
    
    /**
      * 删除实体
      * @param entity :实体
      */  
    public void remove(T entity);  
       
    /**
      * 删除实体集合
      * @param entities :实体
      */  
    public void removeAll(Collection<T> entities);   
    /**
      * 修改实体
      * @param entity :实体
      */  
    public void modify(T entity);   
    /**
      * 通过名字查找
      * @param id : id
      * @return 找到的实体
      */  
    public T findById(ID id);   
    /**
      * 查找全部实体
      * @param asc :  结果显示顺序:
      * 	true : 正序; false : 逆序
      * @return 所有实体的列表
      */  
    public List<T> findAll(final boolean asc);   
    /**
      * 根据给定的hql语句进行分页查找
      * @param pageNo : 要查询的页码
      * @param pageSize : 每页记录条数
      * @param asc :  结果显示顺序:
      * 	true : 正序; false : 逆序
      * @return 匹配的实体列表
      */  
    public List<T> findByPage(final int pageNo, final int pageSize, final boolean asc);   
    /**
      * 计算匹配查询条件的记录总数,如果没有注入或者设置hql语句,将使用默认的查询语句返回数据库中所有记录
      * @return 记录总数
      */  
    public int getTotalRows();   
    /**
      * 根据每页记录的数量,计算出总的分页数
      * @param pageSize 每页记录的数量
      * @return 分页总数
      */  
    public int getMaxPageNo(int pageSize); 
}   
