package com.pes.action;

import java.util.ArrayList;
import java.util.List;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import com.pes.entity.BaseUser;
import com.pes.entity.Message;
import com.pes.entity.UserPojo;
import com.pes.interceptor.Authority;
import com.pes.service.MessageService;

@ParentPackage("myBasicPackage")
@Action(value="questionaire")
@Result(name="success", location="/WEB-INF/user/editQuestionaire.jsp")
public class QuestionaireAction extends BaseAction {
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
	@Override
	@Authority(privilege=2)
	public String execute() throws Exception {
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
