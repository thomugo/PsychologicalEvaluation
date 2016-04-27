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
import javax.persistence.Table;

@Entity
@Table(name="true_false_question", catalog="pes")
public class TrueFalseQuestion implements Serializable{
	private Integer id;
	private Category category;
	private Questionaire questionaire;
	private String content;
	public TrueFalseQuestion(String content) {
		// TODO Auto-generated constructor stub
		this.content = content;
	}
	public TrueFalseQuestion() {
		// TODO Auto-generated constructor stub
	}
	@Id
	@Column(name="id", unique=true, nullable=false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@ManyToOne(fetch=FetchType.EAGER, targetEntity=Category.class)
	@JoinColumn(name="cateId")
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	@ManyToOne(fetch=FetchType.EAGER, cascade={CascadeType.PERSIST, CascadeType.MERGE},
			targetEntity=Questionaire.class)
	@JoinColumn(name="questionaireId")
	public Questionaire getQuestionaire() {
		return questionaire;
	}
	public void setQuestionaire(Questionaire questionaire) {
		this.questionaire = questionaire;
	}
	@Column(name="content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "TrueFalseQuestion [id=" + id + ", category=" + category
				+ ", questionaire=" + questionaire + ", content=" + content
				+ "]";
	}
	
	
}
