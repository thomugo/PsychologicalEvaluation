package com.pes.service;


import java.util.List;

import com.pes.entity.Answer;



public interface AnswerService extends GenericService1<Answer, Integer>{

	List<Answer> findByQuestionaire(int userId, int questionaireId);
	
}
