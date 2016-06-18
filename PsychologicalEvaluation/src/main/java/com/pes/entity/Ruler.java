package com.pes.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@Table(name="rule" , catalog="app_psychologic")
@Table(name="rule" , catalog="pes")
public class Ruler implements Serializable{
	private Integer id;
	private Integer questionaireId;
	private int vector; //问卷维度
	private float startScore;
	private float endScore;
	private String ruler;
	
	public Ruler() {
		// TODO Auto-generated constructor stub
	}
	
	public Ruler(int questionaireId, int vector){
		this.questionaireId = questionaireId;
		this.vector = vector;
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
	
	@Column(name="vecotr", nullable=false)
	public int getVector() {
		return vector;
	}

	public void setVector(int vector) {
		this.vector = vector;
	}

	public Integer getQuestionaireId() {
		return questionaireId;
	}

	public void setQuestionaireId(Integer questionaireId) {
		this.questionaireId = questionaireId;
	}

	public float getStartScore() {
		return startScore;
	}

	public void setStartScore(float startScore) {
		this.startScore = startScore;
	}

	public float getEndScore() {
		return endScore;
	}

	public void setEndScore(float endScore) {
		this.endScore = endScore;
	}

	public String getRuler() {
		return ruler;
	}

	public void setRuler(String ruler) {
		this.ruler = ruler;
	}

	@Override
	public String toString() {
		return "Ruler [id=" + id + ", questionaireId=" + questionaireId
				+ ", vector=" + vector + ", startScore=" + startScore
				+ ", endScore=" + endScore + ", ruler=" + ruler + "]";
	}	
	
}
