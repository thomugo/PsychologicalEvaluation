package com.pes.dao;

import java.util.HashMap;
import java.util.List;

import com.pes.entity.Answer;

public interface AnswerDao extends GenericDao1<Answer, Integer> {

	public List<Answer> findByQuestionaire(int userId, int questionaireId);
	public HashMap<Integer, Float> getScores(int answerId);
	public HashMap<Integer, Integer> getCountInVector(int answerId);
	public HashMap<Integer, Float> getAvgScores(int answerId);
}
