package com.pes.action;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pes.entity.BaseUser;
import com.pes.entity.Message;
import com.pes.entity.Ruler;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.entity.UserPojo;
import com.pes.interceptor.Authority;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.MessageService;
import com.pes.service.QuestionaireService;
import com.pes.service.RulerService;
import com.pes.service.UserService;

@Action(value="editRulers")
@Result(name="success", location="/WEB-INF/user/editRule.jsp")
public class RulerAction extends BaseAction{
	private static final Logger LOGGER = Logger.getLogger(RulerAction.class);
	@Autowired
	private RulerService rulerService;
	@Autowired
	private QuestionaireService questionaireService;
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	private int questionaireId;
	private String jsonString;
	private ArrayList<Integer> vectors = new ArrayList<Integer>();
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
	
	public ArrayList<UserMessage> getOffLineUserMessages() {
		return offLineUserMessages;
	}

	public ArrayList<Integer> getVectors() {
		return vectors;
	}
	public int getQuestionaireId() {
		return questionaireId;
	}
	public void setQuestionaireId(int questionaireId) {
		this.questionaireId = questionaireId;
	}
	public String getJsonString() {
		return jsonString;
	}
	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	@Override
	@Authority(privilege=3)
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		vectors = (ArrayList<Integer>)questionaireService.getVectors(questionaireId);
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
	
	@Action(value="saveRulers", results={
			@Result(name="success", location="/WEB-INF/user/index.jsp")
	})
	@Authority(privilege=3)
	public String fee() throws Exception {
		// TODO Auto-generated method stub
		System.err.println(jsonString);
		JSONObject json = JSONObject.parseObject(jsonString);
		int questionaireId = json.getInteger("questionaireId");
		JSONArray rulers = json.getJSONArray("rulers");
		//ArrayList<Ruler> rulers = new ArrayList<Ruler>();
		for(int i=0; i<rulers.size(); i++){
			JSONObject vector = rulers.getJSONObject(i);
			int vectorId = vector.getInteger("vector");
			String[] startScores = vector.getString("startScore").split(",");
			String[] endScores = vector.getString("endScore").split(",");
			String[] rules = vector.getString("ruler").split(";");
			for(int j=0; j<startScores.length; j++){
				Ruler ruler = new Ruler(questionaireId, vectorId);
				ruler.setStartScore(Float.parseFloat(startScores[j]));
				ruler.setEndScore(Float.parseFloat(endScores[j]));
				ruler.setRuler(rules[j]);
				rulerService.save(ruler);
			}
			
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
		return "success";
	}
	
}
