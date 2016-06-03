package com.pes.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
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
import javax.persistence.OneToOne;
import javax.persistence.OrderColumn;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="answer", catalog="pes")
public class Answer  implements Serializable{
	private Integer id;
	private User user;
	private String result;
	private Date dateTime;
	private Questionaire questionaire;
	private Set<OptionAnswer> optionAnswer = new HashSet<OptionAnswer>();
	private Set<TrueFalseAnswer>  trueFalseAnswers = new HashSet<TrueFalseAnswer>();
	private Map<ChoiceQuestion, List<Option>> choiceQuestions = new HashMap<ChoiceQuestion, List<Option>>();
	private Map<TrueFalseQuestion, Integer> trueFalseQuestions = new HashMap<TrueFalseQuestion, Integer>();
	
	public Answer() {
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
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="userId")
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Column(name="result")
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	@Column(name="dateTime")
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	@OneToMany(targetEntity=OptionAnswer.class, mappedBy="answer", fetch=FetchType.LAZY,
			cascade=CascadeType.ALL, orphanRemoval=true)
	public Set<OptionAnswer> getOptionAnswer() {
		return optionAnswer;
	}
	public void setOptionAnswer(Set<OptionAnswer> optionAnswer) {
		this.optionAnswer = optionAnswer;
	}
	@OneToMany(targetEntity=TrueFalseAnswer.class, mappedBy="answer", fetch=FetchType.LAZY,
			cascade=CascadeType.ALL, orphanRemoval=true)
	public Set<TrueFalseAnswer> getTrueFalseAnswers() {
		return trueFalseAnswers;
	}
	public void setTrueFalseAnswers(Set<TrueFalseAnswer> trueFalseAnswers) {
		this.trueFalseAnswers = trueFalseAnswers;
	}
	
	@ManyToOne(fetch=FetchType.EAGER, cascade={CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="questionaireId")
	public Questionaire getQuestionaire() {
		return questionaire;
	}
	public void setQuestionaire(Questionaire questionaire) {
		this.questionaire = questionaire;
	}
	
	
	@Transient
	public Map<ChoiceQuestion, List<Option>> getChoiceQuestions(){
		Iterator<OptionAnswer> iterator = optionAnswer.iterator();
		while(iterator.hasNext()){
			Option option = iterator.next().getOption();
			ChoiceQuestion question = option.getQuestion();
			//去重
			if(choiceQuestions.containsKey(question))
			{
				//选项属于相同的问题
				choiceQuestions.get(question).add(option);
				//System.out.println(question.getContent());
				//System.out.println(option.getContent());
			}else{
				List<Option> options = new ArrayList<Option>();
				options.add(option);
				choiceQuestions.put(question, options);
			}
		}
		
		return choiceQuestions;
	}
	@Transient
	public Map<TrueFalseQuestion, Integer> getTrueFalseQuestions(){
		Iterator<TrueFalseAnswer> iterator = trueFalseAnswers.iterator();
		while(iterator.hasNext()){
			TrueFalseAnswer answer = iterator.next();
			TrueFalseQuestion question = answer.getQuestion();
			//System.out.println(question.getContent());
			//System.out.println(answer.getOption());
			trueFalseQuestions.put(question, answer.getOption());
		}
		return trueFalseQuestions;
	}
	
}
