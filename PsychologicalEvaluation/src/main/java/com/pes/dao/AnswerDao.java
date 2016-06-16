package com.pes.dao;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import com.pes.entity.Answer;
import com.pes.entity.AnswerPojo;
import com.pes.entity.ArticlePojo;

public interface AnswerDao extends GenericDao1<Answer, Integer> {

	public List<Answer> findByQuestionaire(int userId, int questionaireId);
	public List<AnswerPojo> findByUserId(int userId);
	public HashMap<Integer, Float> getScores(int answerId);
	public HashMap<Integer, Integer> getCountInVector(int answerId);
	public HashMap<Integer, Float> getAvgScores(int answerId);
	public int findTotalRaws(Integer userId);
	public int getMaxAnswerPageNo(Integer userId, Integer pageSize);
	public List<AnswerPojo> findAnswersByPage(Integer userId, Integer pageNo,
			Integer pageSize);
}
