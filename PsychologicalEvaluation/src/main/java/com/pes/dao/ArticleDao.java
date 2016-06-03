package com.pes.dao;

import java.util.Date;
import java.util.List;

import com.pes.entity.Article;

public interface ArticleDao extends GenericDao2<Article, Integer> {
	/**
	 * 查找符合查询条件的记录数
	 * @param userId : 作者ID
	 * @param userName : 作者名
	 * @param keyWord : 文章标题关键字
	 * @param className : 文章类别
	 * @param start : 开始日期
	 * @param end : 截至日期
	 * @return 符合查询条件的记录数
	 */
	public int findTotalRaws(Integer userId, String keyWord, String userName,
			String className, Date start, Date end);
	
	/**
	 * 获取符合查询条件的记录最大分页号
	 * @param userId : 作者ID
	 * @param userName : 作者名
	 * @param keyWord : 文章标题关键字
	 * @param className : 文章类别
	 * @param start : 开始日期
	 * @param end : 截至日期
	 * @param pageSize : 页面大小
	 * @return int : 符合查询条件的记录最大分页号
	 */
	public int getMaxArticlePageNo(Integer userId, String keyWord, String userName,
			String className, Date start, Date end, Integer pageSize);
	
	/**
	 * 查找符合查询条件的记录
	 * @param userId : 作者ID
	 * @param userName : 作者名
	 * @param keyWord : 文章标题关键字
	 * @param className : 文章类别
	 * @param start : 开始日期
	 * @param end : 截至日期
	 * @param pageNo : 页号
	 * @param pageSize : 页大小
	 * @return 符合查询条件的记录
	 */
	public List<Article> findArticlesByPage(Integer userId, String keyWord, String userName,
			String className, Date start, Date end, Integer pageNo,
			Integer pageSize);

}
