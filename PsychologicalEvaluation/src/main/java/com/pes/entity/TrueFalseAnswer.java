package com.pes.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="true_false_answer", catalog="pes")
public class TrueFalseAnswer implements Serializable{
	private Integer id;
	private TrueFalseQuestion question;
	private Answer answer;
	Integer _option;
	@Id
	@Column(name="id", nullable=false, unique=true)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@OneToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="questionId")
	public TrueFalseQuestion getQuestion() {
		return question;
	}
	public void setQuestion(TrueFalseQuestion question) {
		this.question = question;
	}
	@ManyToOne(cascade={CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="answerId")
	public Answer getAnswer() {
		return answer;
	}
	public void setAnswer(Answer answer) {
		this.answer = answer;
	}
	@Column(name="_option")
	public Integer getOption() {
		return _option;
	}
	public void setOption(Integer _option) {
		this._option = _option;
	}
	
}
