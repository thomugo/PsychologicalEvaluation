package com.pes.action;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pes.entity.BaseUser;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Message;
import com.pes.entity.Option;
import com.pes.entity.Questionaire;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.entity.UserPojo;
import com.pes.interceptor.Authority;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.MessageService;
import com.pes.service.QuestionaireService;
import com.pes.service.TrueFalseQuestionService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@ParentPackage("myBasicPackage")
@Action(value="editQuestionaire")
@Result(name="success", location="/WEB-INF/user/editRule.jsp")
public class EditQuestionaire extends BaseAction {
	private static final Logger LOGGER = Logger.getLogger(EditQuestionaire.class);
	@Autowired
	private QuestionaireService questionaireService;
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	@Autowired
	private TrueFalseQuestionService trueFalseQuestionService;
	private String title = null;
	private String note = null;
	private int pageNo = 0;
	private int pageSize = 6;
	private String jsonString;
	private Questionaire questionaire = new Questionaire();
	private List<ChoiceQuestion> choiceQuestions = new ArrayList<ChoiceQuestion>();
	private ArrayList<Integer> vectors = new ArrayList<Integer>();
	private ArrayList<Questionaire> questionaires = new ArrayList<Questionaire>();
	@Autowired
	private MessageService messageService;
	@Autowired
	private UserService userService;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private ArrayList<UserMessage> offLineUserMessages = new ArrayList<UserMessage>();
	
	public int getUnReadBroadCastMessageCount() {
		return unReadBroadCastMessageCount;
	}

	public int getOffLineMessageCount() {
		return offLineMessageCount;
	}

	//private List<TrueFalseQuestion> trueFalseQuestions = new ArrayList<TrueFalseQuestion>();

	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
	}

	public String getJsonString() {
		return jsonString;
	}

	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	public ArrayList<Integer> getVectors() {
		return vectors;
	}
	
	public Questionaire getQuestionaire() {
		return questionaire;
	}
	
	public ArrayList<Questionaire> getQuestionaires() {
		return questionaires;
	}

	@Override
	@Authority(privilege=3)
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(jsonString);
		JSONObject json = JSONObject.parseObject(jsonString);
		// 取得标题并保存问卷
		questionaire.setTitle(json.getString("title"));
		questionaire.setNote(json.getString("description"));
		JSONArray choiceList = json.getJSONArray("choiceQuestions");
		//JSONArray judgeList = json.getJSONArray("trueFalseQuestions");//暂不开放

		// 取得所有选择题并保存
		for (int i = 0; i < choiceList.size(); i++) {
			JSONObject question = choiceList.getJSONObject(i);
			String question_content = question.getString("question");
			int question_vector = question.getInteger("vector");
			//int question_vector = 0;
			//System.out.println("ChoiceQuestion=" + question_content);
			ChoiceQuestion choiceQuestion = new ChoiceQuestion(question_content);
			choiceQuestion.setVector(question_vector);
			String[] options = question.getString("options").split(",");
			String[] scores = question.getString("scores").split(",");
			// 遍历options
			for (int j = 0; j < options.length; j++) {
				Option option = new Option(options[j]);
				//System.out.println(options[j]+":" + options[j+1]);
				//option.setScore(Integer.parseInt(options[j+1]));
				// 建立关联
				option.setScore(Float.parseFloat(scores[j]));
				option.setQuestion(choiceQuestion);
				choiceQuestion.getOptions().add(option);
			}
			choiceQuestion.setQuestionaire(questionaire);
			questionaire.getChoiceQuestions().add(choiceQuestion);
			choiceQuestions.add(choiceQuestion);
		}
		questionaireService.save(questionaire);
		// 取得判断题并保存
		// 取得所有选择题并保存
		//暂不开放
		/*
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
		System.out.println("save true false questions over");*/
		System.out.println("edit questionaire success");
		//AjaxUtil.ajaxJSONResponse("success");
		vectors = (ArrayList<Integer>)choiceQuestionService.getVectors(questionaire.getId());
		
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					//System.out.println("count:"+messages.size());
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		return "success";
	}
	@Action(value="questionaireList", results={
			@Result(name="success", location="/WEB-INF/test/mtestList.jsp"),
			@Result(name="admin", location="/WEB-INF/test/testList.jsp")
	})
	public String questionaireList(){
		if(jsonString != null){
			JSONObject json = JSON.parseObject(jsonString);
			title = json.getString("title");
			note = json.getString("note");
			pageNo = json.getInteger("pageNo");
			pageSize = json.getInteger("pageSize");
		}
		questionaires = (ArrayList<Questionaire>)questionaireService.findQuestionairesByPage(title, note, pageNo, pageSize, false);
		
		if(jsonString != null){
			jsonString = null;
			AjaxUtil.ajaxJSONResponse(questionaires);
			return NONE;
		}
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		offLineUserMessages.clear();
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			int i = 0;
			for (int sendId : senders) {
				if(i<5){
					User pojo = userService.findById(sendId);
					List<Message> messages = messageService.getOffLineMessages(sendId, ID);
					//System.out.println("count:"+messages.size());
					for (Message message : messages) {
						if(i<5){
							UserMessage userMessage = new UserMessage();
							userMessage.setUserId(sendId);
							userMessage.setUsername(pojo.getUsername());
							userMessage.setIcon(pojo.getIcon());
							userMessage.setContent(message.getContent());
							userMessage.setDateTime(message.getDateTime());
							userMessage.setFlag(message.getFlag());
							userMessage.setMessageId(message.getId());
							offLineUserMessages.add(userMessage);
							i++;
						}else{
							break;
						}
					}
				}else{
					break;
				}
			}
		}
		if(user.getPrivilege() == 1){
			return "admin";
		}
		else{
			return "success";
		}
	}

	
}
