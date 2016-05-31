package com.pes.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;












import javax.faces.component.EditableValueHolder;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.support.ChildBeanDefinition;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.context.transaction.BeforeTransaction;

import com.pes.base.test.BaseTestTemplate;
import com.pes.entity.Answer;
import com.pes.entity.Category;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Option;
import com.pes.entity.OptionAnswer;
import com.pes.entity.Questionaire;
import com.pes.entity.TrueFalseQuestion;

public class TestQuestionaireService extends BaseTestTemplate{
	private static final Logger LOGGER = Logger
			.getLogger(TestQuestionaireService.class);
	
	@Autowired
	private  QuestionaireService questionaireService;
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	@Autowired
	private OptionService optionService;
	@Autowired
	private CategoryService categoryService;
	@Autowired
	private AnswerService answerService;
	
	@Before
    public void setUp() throws Exception {
	System.out.println("测试开始");
    }

    @After
    public void tearDown() throws Exception {
	System.out.println("测试结束");
    }

    @BeforeTransaction
    public void beforeTransaction() {
	System.out.println("事务开始");
    }

    @AfterTransaction
    public void afterTransaction() {
	System.out.println("事务结束");
    }
    @Test
    public void test2(){
    	Questionaire test = questionaireService.get(10);
    	Set<ChoiceQuestion> questions1 = test.getChoiceQuestions();
    	Set<TrueFalseQuestion> questions2 = test.getTrueFalseQuestions();
    	Iterator<ChoiceQuestion> iterator1 = questions1.iterator();
    	while(iterator1.hasNext()){
    		System.out.println(iterator1.next().toString());
    	}
    	Iterator<TrueFalseQuestion> iterator2 = questions2.iterator();
    	while(iterator2.hasNext()){
    		System.out.println(iterator2.next().toString());
    	}
    }
    @Test
    public void test1(){
    	Questionaire questionaire = new Questionaire();
    	questionaire.setTitle("haohao1");
    	TrueFalseQuestion question1 = new TrueFalseQuestion();
    	question1.setContent("doubi1?");
    	question1.setQuestionaire(questionaire);
    	questionaire.getTrueFalseQuestions().add(question1);
    	questionaireService.save(questionaire);
    	
    }
    @Test
    public void Edit(){
    	Questionaire questionaire = new Questionaire();
    	questionaire.setTitle("paper");
    	ChoiceQuestion question1 = new ChoiceQuestion();
    	question1.setContent("shabi?");
    	Option option1 = new Option();
    	option1.setContent("sha");
    	Option option2 = new Option();
    	option2.setContent("bi");
    	option1.setQuestion(question1);
    	option2.setQuestion(question1);
    	question1.getOptions().add(option1);
    	question1.getOptions().add(option2);
    	questionaireService.save(questionaire);
    	question1.setQuestionaire(questionaire);
    	choiceQuestionService.save(question1);
    }
    @Test
    public void testTitle(){
    	Questionaire test = new Questionaire();
    	test.setTitle("pes");
    	int id =questionaireService.save(test);
    	System.out.println(id);
    	System.out.println(test.getId());
    }
    @Test
    public void loadAnswer1(){
    	Answer answer = answerService.get(1);
    	Set <OptionAnswer> list = answer.getOptionAnswer();
    	answer.getChoiceQuestions();
    }
    @Test
    public void loadAnswer(){
    	Answer answer = answerService.get(1);
    	Set <OptionAnswer> list = answer.getOptionAnswer();
    	Iterator<OptionAnswer> iterator = list.iterator();
    	Map<ChoiceQuestion, Option> map = new HashMap<ChoiceQuestion, Option>();
    	while(iterator.hasNext()){
    		Option option = iterator.next().getOption();
    		ChoiceQuestion question = option.getQuestion();
    		System.out.println(question.getContent());
    		System.out.println(option.getContent());
    		map.put(question, option);
    	}
    }
    @Test
    public void testAnswer(){
    	Answer answer = new Answer();
    	OptionAnswer oa1 = new OptionAnswer();
    	oa1.setOption(optionService.get(33));
    	oa1.setAnswer(answer);
    	OptionAnswer oa2 = new OptionAnswer();
    	oa2.setOption(optionService.get(30));
    	oa2.setAnswer(answer);
    	answer.getOptionAnswer().add(oa1);
    	answer.getOptionAnswer().add(oa2);
    	answerService.save(answer);
    	
    }
    @Test
    public void getOptions(){
    	
    	/*List<Option> options = optionService.findAll();
    	Iterator<Option> iterator = options.iterator();
    	while (iterator.hasNext()){
    		Option option = iterator.next();
    		System.out.println(option.getQuestion().getContent());
    	}*/
    	System.out.println(choiceQuestionService.getMaxPageNo(2));
    	//System.out.println("rows "+ choiceQuestionService.getTotalRows());
    	
    }
    @Test
    public void delete(){
    	
    	//optionService.delete(23);
    }
    @Test
    public void Loadable(){
    	Category category = categoryService.get(3);
    	ChoiceQuestion question2 = new ChoiceQuestion();
    	question2.setContent("what's the basketball's color?");
    	question2.setCategory(category);
    	Option option1 = new Option();
    	option1.setContent("blue");
    	option1.setQuestion(question2);
    	Option option2 = new Option();
    	option2.setContent("red");
    	option2.setQuestion(question2);
    	//question2.getOptions().add(option1);
    	//question2.getOptions().add(option2);
    	//choiceQuestionService.save(question2);
    	optionService.save(option1);
    	optionService.save(option2);
    	
    }
    @Test
    public void score(){
    	ChoiceQuestion question1 = new ChoiceQuestion("test question1");
    	Option option1 = new Option("option1");
    	option1.setScore(22);
    	ChoiceQuestion question2 = new ChoiceQuestion("test question2");
    	Option option2 = new Option("option2");
    	option2.setScore(11);
    	Option option3 = new Option("option3");
    	option3.setScore(12);
    	option1.setQuestion(question1);
		question1.getOptions().add(option1);
		option2.setQuestion(question2);
		question2.getOptions().add(option2);
		option3.setQuestion(question2);
		question2.getOptions().add(option3);
		choiceQuestionService.save(question1);
		choiceQuestionService.save(question2);
    }
    @Test
    public void init()
    {
    	//Category category = categoryService.get(3);
    	
    	//Questionaire paper1 = new Questionaire();
    	//paper1.setTitle("test1");
    	
    	ChoiceQuestion question1 = new ChoiceQuestion();
    	//question1.setCategory(category);
    	question1.setContent("桌子什么颜色？");
    	//question1.setQuestionaire(paper1);
    	//ChoiceQuestion question1 = choiceQuestionService.get(1);
    	Option option1 = new Option();
    	option1.setContent("Blue");
    	option1.setQuestion(question1);
    	Option option2 = new Option();
    	option2.setContent("Yellow");
    	option2.setQuestion(question1);
    	Option option3 = new Option();
    	option3.setContent("red");
    	option3.setQuestion(question1);
    	Option option4 = new Option();
    	option4.setContent("green");
    	option4.setQuestion(question1);
    	
    	
    	//option1.setQuestion(question1);
    	//option2.setQuestion(question1);
    	//questionaireService.save(paper1);
    	
    	//optionService.save(option1);
    	//optionService.save(option2);
    	/*Set<Option> options = new HashSet<Option>();
    	options.add(option1);
    	options.add(option2);
    	question1.setOptions(options);*/
    	question1.getOptions().add(option1);
    	question1.getOptions().add(option2);
    	question1.getOptions().add(option3);
    	question1.getOptions().add(option4);
    	choiceQuestionService.save(question1);
    	//question1.getOptions();
    	//System.out.println(question1.getOptions());
    }
    
}
