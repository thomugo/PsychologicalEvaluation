package com.pes.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pes.entity.Answer;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Option;
import com.pes.entity.OptionAnswer;
import com.pes.entity.Questionaire;
import com.pes.entity.Ruler;
import com.pes.entity.User;
import com.pes.service.AnswerService;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.OptionAnswerService;
import com.pes.service.OptionService;
import com.pes.service.QuestionaireService;
import com.pes.service.RulerService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@Result(name="success", location="/user/result.jsp")
public class SaveAnswerAction extends BaseAction{
	private static final Logger LOGGER = Logger.getLogger(SaveAnswerAction.class);
	@Autowired
	private UserService userService;
	@Autowired
	private AnswerService answerService;
	@Autowired
	private OptionService optionService;
	@Autowired
	private RulerService rulerService;
	@Autowired 
	QuestionaireService questionaireService;
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	/*@Autowired
	private TrueFalseQuestionService trueFalseQuestionService;*/
	@Autowired
	private OptionAnswerService optionAnswerService ;
	/*@Autowired
	private TrueFalseAnswerService trueFalseAnswerService;*/
	private String jsonString;
	private int answerId;
	private Answer answer = new Answer();
	private Questionaire questionaire ;
	private Map<ChoiceQuestion, List<Option>> choiceQuestionAnswers = new HashMap<ChoiceQuestion, List<Option>>();
	//private Map<TrueFalseQuestion, Integer> trueFalseQuestionAnswers = new HashMap<TrueFalseQuestion, Integer>();
	
	
	public String getJsonString() {
		return jsonString;
	}
	
	
	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}


	public Questionaire getQuestionaire() {
		return questionaire;
	}


	public Map<ChoiceQuestion, List<Option>> getChoiceQuestionAnswers() {
		return choiceQuestionAnswers;
	}

	
	public int getAnswerId() {
		return answerId;
	}


	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}
	
	

	public Answer getAnswer() {
		return answer;
	}


	/*public Map<TrueFalseQuestion, Integer> getTrueFalseQuestionAnswers() {
		return trueFalseQuestionAnswers;
	}*/
	@Action(value="showAnswer", results={
			@Result(name="success", location="/user/result.jsp"),
			@Result(name="index", location="/index.jsp")
	})
	public String showAnswer(){
		 answer = answerService.get(answerId);
		 questionaire = answer.getQuestionaire();
		//questionaire = questionaireService.get(questionaireID);
		//answer = answerService.findByQuestionaire(userID, questionaireID).get(0);
		choiceQuestionAnswers = answer.getChoiceQuestions();
		//trueFalseQuestionAnswers = answer.getTrueFalseQuestions();
		return "success";
	}
	
	@Action(value="saveAnswer", results={
			@Result(name="success", location="/user/result.jsp"),
			@Result(name="index", location="/index.jsp")})
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("jsonString:" + jsonString);
		JSONObject json = JSONObject.parseObject(jsonString);
		User user = (User)httpSession.getAttribute("loginUser");
		answer.setUser(user);
		answer.setDateTime(new Date());
		Integer questionaireId = json.getInteger("questionaire");
		//System.out.println(questionaireId);
		questionaire = questionaireService.get(questionaireId);
		answer.setQuestionaire(questionaire);
		
		JSONArray choiceList = json.getJSONArray("choiceQuestions");
		//JSONArray judgeList = json.getJSONArray("judgeQuestions");
		
		//保存选择题
		for(int i=0; i<choiceList.size(); i++)
		{
			JSONObject object  =  choiceList.getJSONObject(i);
			int oid = object.getInteger("option");
			int qid = object.getInteger("question");
			Option option = optionService.get(oid);
			ChoiceQuestion question = choiceQuestionService.get(qid);
			OptionAnswer optionAnswer = new OptionAnswer();
			
			//建立answer与optonAnswer的关联
			optionAnswer.setAnswer(answer);
			optionAnswer.setOption(option);
			//选项是否属于同一个问题
			if(choiceQuestionAnswers.containsKey(question))
			{
				//若属于同一问题则合并选项
				choiceQuestionAnswers.get(question).add(option);
				
			}else {
				//不属于同一问题
				List<Option> options = new ArrayList<Option>();
				options.add(option);
				choiceQuestionAnswers.put(question, options);
			}
			//建立answer与optonAnswer的关联
			answer.getOptionAnswer().add(optionAnswer);
		}
		//保存判断题
		/*for(int j=0; j<judgeList.size(); j++)
		{
			JSONObject object = judgeList.getJSONObject(j);
			int qid = object.getInteger("question");
			//System.out.println(qid);
			int option = object.getInteger("option");
			TrueFalseQuestion question = trueFalseQuestionService.get(qid);
			TrueFalseAnswer trueFalseAnswer = new TrueFalseAnswer();
			trueFalseQuestionAnswers.put(question, option);
			//建立trueFalseAnswer与answer的关联
			trueFalseAnswer.setAnswer(answer);
			trueFalseAnswer.setOption(option);
			trueFalseAnswer.setQuestion(question);
			
			answer.getTrueFalseAnswers().add(trueFalseAnswer);
		}*/
		answerService.save(answer);
		HashMap<Integer, Float> scores = answerService.getScores(answer.getId());
		System.out.println(scores);
		String result = rulerService.getResult(questionaireId, scores);
		System.out.println(result);
		answer.setResult(result);
		answerService.saveOrUpdate(answer);
		System.out.println(result);
		//System.out.println("questionaire:" + questionaire.getTitle());
		//System.out.println(choiceQuestionAnswers.size());
		//AjaxUtil.ajaxJSONResponse(answer.getId());
		return "success";
		
	}
}
