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
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="option_answer", catalog="pes")
public class OptionAnswer implements Serializable{
	private Integer id;
	private Option option;
	private Answer answer;
	@Id
	@Column(name="id", unique = true, nullable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@OneToOne(fetch=FetchType.EAGER)
	//@PrimaryKeyJoinColumn
	@JoinColumn(name="optionId")
	public Option getOption() {
		return option;
	}
	public void setOption(Option option) {
		this.option = option;
	}
	@ManyToOne(cascade={CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="answerId")
	public Answer getAnswer() {
		return answer;
	}
	public void setAnswer(Answer answer) {
		this.answer = answer;
	}
	
	
	
}
