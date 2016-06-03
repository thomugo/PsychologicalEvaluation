package com.pes.action;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionSupport;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Option;
import com.pes.entity.Questionaire;
import com.pes.entity.TrueFalseQuestion;
import com.pes.interceptor.Authority;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.QuestionaireService;
import com.pes.service.TrueFalseQuestionService;
import com.pes.util.AjaxUtil;

@ParentPackage("myBasicPackage")
@Action(value = "editQuestionaire")
public class EditQuestionaire extends ActionSupport {
	private static final Logger LOGGER = Logger.getLogger(EditQuestionaire.class);
	@Autowired
	private QuestionaireService questionaireService;
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	@Autowired
	private TrueFalseQuestionService trueFalseQuestionService;
	private String jsonString;
	private Questionaire questionaire = new Questionaire();
	private List<ChoiceQuestion> choiceQuestions = new ArrayList<ChoiceQuestion>();
	private List<TrueFalseQuestion> trueFalseQuestions = new ArrayList<TrueFalseQuestion>();

	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}

	@Override
	@Authority(privilege=2)
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(jsonString);
		JSONObject json = JSONObject.parseObject(jsonString);
		// 取得标题并保存问卷
		questionaire.setTitle(json.getString("title"));
		questionaireService.save(questionaire);
		JSONArray choiceList = json.getJSONArray("choiceQuestions");
		JSONArray judgeList = json.getJSONArray("trueFalseQuestions");

		// 取得所有选择题并保存
		for (int i = 0; i < choiceList.size(); i++) {
			JSONObject question = choiceList.getJSONObject(i);
			String question_content = question.getString("question");
			System.out.println("ChoiceQuestion=" + question_content);
			ChoiceQuestion choiceQuestion = new ChoiceQuestion(question_content);
			String[] options = question.getString("options").split(",");
			// 遍历options
			for (int j = 0; j < options.length; j=j+2) {
				Option option = new Option(options[j]);
				System.out.println(options[j]+":" + options[j+1]);
				option.setScore(Integer.parseInt(options[j+1]));
				// 建立关联
				option.setQuestion(choiceQuestion);
				choiceQuestion.getOptions().add(option);
			}
			choiceQuestion.setQuestionaire(questionaire);
			choiceQuestionService.save(choiceQuestion);
			choiceQuestions.add(choiceQuestion);
			
		}
		System.out.println("save choice questions over");
		// 取得判断题并保存
		// 取得所有选择题并保存
		for (int i = 0; i < judgeList.size(); i++) {
			JSONObject question = judgeList.getJSONObject(i);
			String question_content = question.getString("question");
			String score = question.getString("score");
			System.out.println("TrueFalseQuestion=" + question_content);
			System.out.println("truefalsequestion score:" + score);
			TrueFalseQuestion true_false_question = new TrueFalseQuestion(question_content);
			true_false_question.setScore(Integer.parseInt(score));
			true_false_question.setQuestionaire(questionaire);
			trueFalseQuestionService.save(true_false_question);
			trueFalseQuestions.add(true_false_question);
		}
		System.out.println("save true false questions over");
		AjaxUtil.ajaxJSONResponse("success");
		System.out.println("edit success");
		return NONE;
	}
}
