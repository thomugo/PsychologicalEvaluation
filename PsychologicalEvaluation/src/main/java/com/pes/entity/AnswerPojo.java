package com.pes.entity;

import java.util.Date;

public class AnswerPojo {
	private int id;
	private int userId;
	private int questionaireId;
	private String title;
	private String result;
	private Date dateTime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getQuestionaireId() {
		return questionaireId;
	}
	public void setQuestionaireId(int questionaireId) {
		this.questionaireId = questionaireId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	@Override
	public String toString() {
		return "AnswerPojo [id=" + id + ", userId=" + userId
				+ ", questionaireId=" + questionaireId + ", title=" + title
				+ ", result=" + result + ", dateTime=" + dateTime + "]";
	}
	
	
	
}
