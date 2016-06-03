package com.pes.action;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionSupport;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Option;
import com.pes.entity.TrueFalseQuestion;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.TrueFalseQuestionService;

@Action(value="addQuestion")
public class AddQuestions extends ActionSupport{
	private static final Logger LOGGER = Logger.getLogger(AddQuestions.class);
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	@Autowired
	private TrueFalseQuestionService true_false_question_service;
	private String jsonString;
	private List<ChoiceQuestion> choiceQuestions = new ArrayList<ChoiceQuestion>();
	//private List<TrueFalseQuestion> trueFalseQuestions = new ArrayList<TrueFalseQuestion>();
	public String getJsonString() {
		return jsonString;
	}
	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(jsonString);
		//JSONObject json = JSONObject.parseObject(jsonString);
		JSONArray list = JSONArray.parseArray(jsonString);
		//取得questions
		for(int i=0; i<list.size(); i++){
			JSONObject question = list.getJSONObject(i);
			String question_content = question.getString("question");
			System.out.println("ChoiceQuestion=" + question_content);
			ChoiceQuestion choiceQuestion = new ChoiceQuestion(question_content);
			String[] options = question.getString("options").split(",");
			//遍历options
			for(int j=0; j<options.length; j++){
				Option option = new Option(options[j]);
				System.out.println(options[j]);
				//建立关联
				option.setQuestion(choiceQuestion);
				choiceQuestion.getOptions().add(option);
			}
			choiceQuestions.add(choiceQuestion);
			choiceQuestionService.save(choiceQuestion);
		}
		
		return NONE;
	}
}
