package com.pes.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
import javax.persistence.OrderBy;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

import org.hibernate.action.internal.OrphanRemovalAction;
import org.hibernate.annotations.BatchSize;

@Entity
@Table(name="choice_question" , catalog="pes")
public class ChoiceQuestion implements Serializable{
	private Integer id;
	private int vector; //问题所属维度
	private Questionaire questionaire;
	private String content;
	private List<Option> options = new ArrayList<Option>();
	
	public ChoiceQuestion() {
		// TODO Auto-generated constructor stub
	}
	
	public ChoiceQuestion(String content){
		this.content = content;
	}
	
	@Id
	@Column(name="id", unique=true, nullable=false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name="vector", nullable=false)
	public int getVector() {
		return vector;
	}

	public void setVector(int vector) {
		this.vector = vector;
	}

	@Column(name="content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@OneToMany(targetEntity=Option.class, mappedBy="question", fetch=FetchType.LAZY,
			cascade=CascadeType.ALL, orphanRemoval=true)
	@OrderColumn(name="optionsIndex")
	@BatchSize(size=2)
	public List<Option> getOptions() {
		return options;
	}
	public void setOptions(List<Option> options) {
		this.options = options;
	}
	@ManyToOne(fetch=FetchType.EAGER, cascade={CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="questionaireId")
	public Questionaire getQuestionaire() {
		return questionaire;
	}
	public void setQuestionaire(Questionaire questionaire) {
		this.questionaire = questionaire;
	}

	@Override
	public String toString() {
		return "ChoiceQuestion [id=" + id + ", vector=" + vector
				+ ", questionaire=" + questionaire + ", content=" + content
				+ ", options=" + options + "]";
	}
	
	
}
