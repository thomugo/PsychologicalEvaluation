package com.pes.dao;

import java.util.List;

import com.pes.entity.Answer;

public interface AnswerDao extends GenericDao1<Answer, Integer> {

	List<Answer> findByQuestionaire(int userId, int questionaireId);

}
