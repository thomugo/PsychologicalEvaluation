package com.pes.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mysql.fabric.Response;
import com.pes.entity.Answer;
import com.pes.entity.BaseUser;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Message;
import com.pes.entity.Option;
import com.pes.entity.OptionAnswer;
import com.pes.entity.Questionaire;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.interceptor.Authority;
import com.pes.service.AnswerService;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.MessageService;
import com.pes.service.OptionAnswerService;
import com.pes.service.OptionService;
import com.pes.service.QuestionaireService;
import com.pes.service.RulerService;
import com.pes.service.UserService;
import com.pes.util.AjaxUtil;

@Result(name="success", location="/WEB-INF/user/result.jsp")
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
	@Autowired
	private MessageService messageService;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private ArrayList<UserMessage> offLineUserMessages = new ArrayList<UserMessage>();
	
	public int getUnReadBroadCastMessageCount() {
		return unReadBroadCastMessageCount;
	}

	public int getOffLineMessageCount() {
		return offLineMessageCount;
	}
	
	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
	}

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
			@Result(name="success", location="/WEB-INF/user/result.jsp"),
			@Result(name="index", location="/index.jsp")
	})
	@Authority(privilege=5)
	public String showAnswer(){
		
		 answer = answerService.get(answerId);
		 questionaire = answer.getQuestionaire();
		//questionaire = questionaireService.get(questionaireID);
		//answer = answerService.findByQuestionaire(userID, questionaireID).get(0);
		choiceQuestionAnswers = answer.getChoiceQuestions();
		//trueFalseQuestionAnswers = answer.getTrueFalseQuestions();
		
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
	
	@Action(value="saveAnswer", results={
			@Result(name="success", location="/WEB-INF/user/result.jsp"),
			@Result(name="index", location="/index.jsp")})
	@Override
	@Authority(privilege=5)
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
							userMessage.setPrivilege(pojo.getPrivilege());
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
	
	@Action(value="deleteAnswer")
	@Authority(privilege=5)
	public String delete(){
		System.out.println("delete answer: " + answerId);
		answerService.delete(answerService.load(answerId));
		AjaxUtil.ajaxJSONResponse("delete success");
		return NONE;
	}
}
