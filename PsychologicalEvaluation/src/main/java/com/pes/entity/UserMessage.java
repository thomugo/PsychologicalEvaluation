package com.pes.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * @author thomugo
 * @flag 消息状态：0/未读; 1/已读; 4/无效消息; 5/广播消息
 */

public class UserMessage implements Serializable{
	private int messageId;
	private int userId;
	private String content;
	private int flag;  //消息状态：0/未读; 1/已读; 4/无效消息; 5/广播消息
	private Date dateTime;
	private String username;
	private String icon;

	public int getMessageId() {
		return messageId;
	}
	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	@Override
	public String toString() {
		return "UserMessage [messageId=" + messageId + ", userId=" + userId
				+ ", content=" + content + ", flag=" + flag + ", dateTime="
				+ dateTime + ", username=" + username + ", icon=" + icon + "]";
	}
	
}
