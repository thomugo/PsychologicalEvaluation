package com.pes.service;


import java.util.HashMap;
import java.util.List;

import com.pes.entity.Answer;
import com.pes.entity.AnswerPojo;



public interface AnswerService extends GenericService1<Answer, Integer>{
	public List<AnswerPojo> findByUserId(int userId);
	public List<Answer> findByQuestionaire(int userId, int questionaireId);
	public HashMap<Integer, Float> getScores(int answerId);
	public HashMap<Integer, Integer> getCountInVector(int answerId);
	public HashMap<Integer, Float> getAvgScores(int answerId);
	public int findTotalRaws(Integer userId);
	public int getMaxAnswerPageNo(Integer userId, Integer pageSize);
	public List<AnswerPojo> findAnswersByPage(Integer userId, Integer pageNo,
			Integer pageSize);
}
