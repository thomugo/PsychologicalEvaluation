package com.pes.action;

import java.util.ArrayList;
import java.util.List;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import com.pes.entity.BaseUser;
import com.pes.entity.Message;
import com.pes.entity.User;
import com.pes.entity.UserMessage;
import com.pes.interceptor.Authority;
import com.pes.service.MessageService;
import com.pes.service.UserService;

@ParentPackage("myBasicPackage")
@Action(value="index")
@Results(value = { @Result(name="admin", location="/WEB-INF/user/index.jsp" ),
		@Result(name="normal", location="/index.jsp")
})
public class IndexAction extends BaseAction {
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

	@Override
	@Authority(privilege=5)
	public String execute() throws Exception {
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
		if(user != null){
			if(user.getPrivilege() <= 3){
				return "admin";
			}else{
				return "normal";
			}
		}else{
			return "login";
		}
		
	}
	
}
