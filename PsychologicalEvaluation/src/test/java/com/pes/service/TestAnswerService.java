package com.pes.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.context.transaction.BeforeTransaction;

import com.pes.base.test.BaseTestTemplate;
import com.pes.entity.Answer;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.OptionAnswer;
import com.pes.entity.TrueFalseAnswer;
import com.pes.entity.TrueFalseQuestion;
import com.sun.tools.classfile.Dependency.Finder;

public class TestAnswerService extends BaseTestTemplate{
	private static final Logger LOGGER = Logger
			.getLogger(TestAnswerService.class);
	@Autowired
	private UserService userService;
	@Autowired
	private OptionService optionService;
	@Autowired
	private AnswerService answerService;
	@Autowired
	private OptionAnswerService optionAnswerService;
	@Autowired
	private TrueFalseQuestionService trueFalseQuestionService;
	@Autowired
	private TrueFalseAnswerService trueFalseAnswerService;
	
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
    public void find(){
    	List<Answer> list = answerService.findByQuestionaire(9, 11);
    	System.out.println("number:" + list.size());
    }
    @Test
    public void save(){
    	Answer answer = new Answer();
    	OptionAnswer option1 = new OptionAnswer();
    	OptionAnswer option2 = new OptionAnswer();
    	OptionAnswer option3 = new OptionAnswer();
    	TrueFalseAnswer judge = new TrueFalseAnswer();
    	answer.setUser(userService.findById(9));
    	option1.setAnswer(answer);
    	option1.setOption(optionService.get(64));
    	option2.setAnswer(answer);
    	option2.setOption(optionService.get(68));
    	option3.setAnswer(answer);
    	option3.setOption(optionService.get(69));
    	judge.setAnswer(answer);
    	judge.setOption(1);
    	judge.setQuestion(trueFalseQuestionService.findById(5));
    	Set<OptionAnswer> optionAnswers = new HashSet<OptionAnswer>();
    	optionAnswers.add(option1);
    	optionAnswers.add(option2);
    	optionAnswers.add(option3);
    	answer.setOptionAnswer(optionAnswers);
    	Set<TrueFalseAnswer> trueFalseAnswers = new HashSet<TrueFalseAnswer>();
    	trueFalseAnswers.add(judge);
    	answer.setTrueFalseAnswers(trueFalseAnswers);
    	answerService.save(answer);
    }
    
}
