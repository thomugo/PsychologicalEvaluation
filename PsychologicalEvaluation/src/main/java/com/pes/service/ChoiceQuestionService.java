package com.pes.service;


import java.util.List;

import com.pes.entity.ChoiceQuestion;

public interface ChoiceQuestionService extends GenericService1<ChoiceQuestion, Integer>{
	public List<Integer> getVectors(int questionaireId);
}
