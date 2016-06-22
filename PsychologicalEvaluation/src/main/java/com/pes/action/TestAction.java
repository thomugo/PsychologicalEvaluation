package com.pes.action;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;

import com.pes.entity.BaseUser;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Message;
import com.pes.entity.Questionaire;
import com.pes.entity.UserPojo;
import com.pes.service.MessageService;
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
	@Autowired
	private MessageService messageService;
	private int unReadBroadCastMessageCount = 0;
	private int offLineMessageCount = 0;
	private ArrayList<Message> shortOffLineMessages = new ArrayList<Message>();
	private ArrayList<UserPojo> recentUsers = new ArrayList<UserPojo>();
	
	public int getUnReadBroadCastMessageCount() {
		return unReadBroadCastMessageCount;
	}

	public int getOffLineMessageCount() {
		return offLineMessageCount;
	}

	public ArrayList<Message> getShortOffLineMessages() {
		return shortOffLineMessages;
	}
	
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
		BaseUser user = (BaseUser)httpSession.getAttribute("loginUser");
		int ID = user.getId();
		unReadBroadCastMessageCount = messageService.getBroadCastMessageCount() - user.getBroadcast();
		offLineMessageCount = messageService.getOffLineMessageCount(ID);
		if(offLineMessageCount > 0){
			List<Integer> senders = messageService.getOffLineMessagesSenders(ID);
			for (int sendId : senders) {
				shortOffLineMessages.add(messageService.findById(sendId, ID));
			}
		}
		return "success";
	}
	
	
	
}
