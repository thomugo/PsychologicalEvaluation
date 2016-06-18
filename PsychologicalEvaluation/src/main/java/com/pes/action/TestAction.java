package com.pes.action;

import java.util.HashSet;
import java.util.Set;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Questionaire;
import com.pes.service.QuestionaireService;

@Results(value = { @Result(name="success", location="/WEB-INF/test/mtest.jsp" ) })
public class TestAction extends BaseAction{
	@Autowired
	QuestionaireService questionaireService;
	private static final Logger LOGGER = Logger.getLogger(TestAction.class);
	private int id;
	private Questionaire questionaire;
	private Set<ChoiceQuestion> choiceQuestions = new HashSet<ChoiceQuestion>();
	//private Set<TrueFalseQuestion> trueFalseQuestions = new HashSet<TrueFalseQuestion>();
	
	public Questionaire getQuestionaire() {
		return questionaire;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<ChoiceQuestion> getChoiceQuestions() {
		return choiceQuestions;
	}

	/*public Set<TrueFalseQuestion> getTrueFalseQuestions() {
		return trueFalseQuestions;
	}*/

	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		id = Integer.parseInt(httpServletRequest.getParameter("id"));
		System.out.println("id: "+id);
		questionaire = questionaireService.get(id);
		choiceQuestions = questionaire.getChoiceQuestions();
		//trueFalseQuestions = questionaire.getTrueFalseQuestions();
		return "success";
	}
	
	
	
}
