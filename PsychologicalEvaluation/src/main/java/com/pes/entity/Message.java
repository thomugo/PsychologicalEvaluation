package com.pes.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author thomugo
 * @flag 消息状态：0/未读; 1/已读; 4/无效消息; 5/广播消息
 */
@Entity
@Table(name="message", catalog="pes")
public class Message implements Serializable{
	private int id;
	private int fromId;
	private int toId;
	private String content;
	private int flag;  //消息状态：0/未读; 1/已读; 4/无效消息; 5/广播消息
	private Date dateTime;
	
	public Message() {
		flag = 0;
	}
	
	/**
	 * @author thomugo
	 * @param content : 消息内容
	 * @param fromId : 发送者ID
	 */
	public Message(String content, int fromId) {
		flag = 0;
		this.content = content;
		this.fromId = fromId;
	}
	
	@Id
	@Column(name="id", unique=true, nullable=false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name="fromId")
	public int getFromId() {
		return fromId;
	}
	public void setFromId(int fromId) {
		this.fromId = fromId;
	}
	@Column(name="toId")
	public int getToId() {
		return toId;
	}
	public void setToId(int toId) {
		this.toId = toId;
	}
	@Column(name="content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Column(name="falg")
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}
	@Column(name="dateTime")
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", fromId=" + fromId + ", toId=" + toId
				+ ", content=" + content + ", flag=" + flag +  ", dateTime="
				+ dateTime + "]";
	}
	
}
