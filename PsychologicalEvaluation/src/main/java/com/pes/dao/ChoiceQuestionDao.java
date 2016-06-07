package com.pes.dao;

import java.util.List;

import com.pes.entity.ChoiceQuestion;

public interface ChoiceQuestionDao extends GenericDao1<ChoiceQuestion, Integer>{
	public List<Integer> getVectors(int questionaireId);
}
