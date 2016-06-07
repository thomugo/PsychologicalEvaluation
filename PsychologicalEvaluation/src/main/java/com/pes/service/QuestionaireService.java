package com.pes.service;


import java.util.List;

import com.pes.entity.Questionaire;

public interface QuestionaireService extends GenericService1<Questionaire, Integer>{
	public List<Integer> getVectors(int id);
	public int findTotalRaws(String title, String note);
	public int getMaxPageNo(String title, String note, Integer pageSize);
	public List<Questionaire> findQuestionairesByPage(String title, String note,Integer pageNo, Integer pageSize, boolean asc);
}
