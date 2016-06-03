package com.pes.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

import org.hibernate.annotations.BatchSize;

@Entity
@Table(name="questionaire", catalog="pes")
public class Questionaire implements Serializable{
	private Integer id;
	private String title;
	private String note;
	private Set<ChoiceQuestion> choiceQuestions = new HashSet<ChoiceQuestion>();
	private Set<TrueFalseQuestion> trueFalseQuestions = new HashSet<TrueFalseQuestion>();
	public  Questionaire() {
		// TODO Auto-generated constructor stub
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
	@Column(name="title")
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	@Column(name="note")
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	@OneToMany(targetEntity=ChoiceQuestion.class, mappedBy="questionaire", fetch=FetchType.LAZY,
			cascade=CascadeType.ALL, orphanRemoval=true)
	@BatchSize(size=5)
	public Set<ChoiceQuestion> getChoiceQuestions() {
		return choiceQuestions;
	}
	public void setChoiceQuestions(Set<ChoiceQuestion> choiceQuestions) {
		this.choiceQuestions = choiceQuestions;
	}
	@OneToMany(targetEntity=TrueFalseQuestion.class, mappedBy="questionaire", fetch=FetchType.LAZY,
			cascade=CascadeType.ALL, orphanRemoval=true)
	@BatchSize(size=5)
	public Set<TrueFalseQuestion> getTrueFalseQuestions() {
		return trueFalseQuestions;
	}
	public void setTrueFalseQuestions(Set<TrueFalseQuestion> trueFalseQuestions) {
		this.trueFalseQuestions = trueFalseQuestions;
	}
	
}
