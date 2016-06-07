package com.pes.service;


import java.util.HashMap;
import java.util.List;

import com.pes.entity.Answer;



public interface AnswerService extends GenericService1<Answer, Integer>{

	public List<Answer> findByQuestionaire(int userId, int questionaireId);
	public HashMap<Integer, Float> getScores(int answerId);
}
