package com.pes.entity;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="option", catalog="pes")
public class Option implements Serializable{
	private Integer id;
	private ChoiceQuestion question;
	private String content;
	private Integer score;
	public Option() {
		// TODO Auto-generated constructor stub
	}
	public Option(String content){
		this.content = content;
	}
	
	@Id
	@Column(name="id", nullable=false, unique=true)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	
	@Column(name="score")
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	@Column(name="content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@ManyToOne(fetch=FetchType.LAZY, cascade={CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="questionId")
	public ChoiceQuestion getQuestion() {
		return question;
	}
	
	@Override
	public String toString() {
		return "Option [content=" + content + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	public void setQuestion(ChoiceQuestion question) {
		this.question = question;
	}
	
}
