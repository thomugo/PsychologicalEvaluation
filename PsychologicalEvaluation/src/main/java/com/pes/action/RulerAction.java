package com.pes.action;

import java.util.ArrayList;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.pes.entity.Ruler;
import com.pes.service.ChoiceQuestionService;
import com.pes.service.QuestionaireService;
import com.pes.service.RulerService;

@Action(value="editRulers")
@Result(name="success", location="/WEB-INF/user/editRule.jsp")
public class RulerAction extends BaseAction{
	private static final Logger LOGGER = Logger.getLogger(RulerAction.class);
	@Autowired
	private RulerService rulerService;
	@Autowired
	private QuestionaireService questionaireService;
	@Autowired
	private ChoiceQuestionService choiceQuestionService;
	private int questionaireId;
	private String jsonString;
	private ArrayList<Integer> vectors = new ArrayList<Integer>();
	
	public ArrayList<Integer> getVectors() {
		return vectors;
	}
	public int getQuestionaireId() {
		return questionaireId;
	}
	public void setQuestionaireId(int questionaireId) {
		this.questionaireId = questionaireId;
	}
	public String getJsonString() {
		return jsonString;
	}
	public void setJsonString(String jsonString) {
		this.jsonString = jsonString;
	}
	
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		vectors = (ArrayList<Integer>)questionaireService.getVectors(questionaireId);
		return "success";
	}
	
	@Action(value="saveRulers", results={
			@Result(name="success", location="/WEB-INF/user/index.jsp")
	})
	public String fee() throws Exception {
		// TODO Auto-generated method stub
		System.err.println(jsonString);
		JSONObject json = JSONObject.parseObject(jsonString);
		int questionaireId = json.getInteger("questionaireId");
		JSONArray rulers = json.getJSONArray("rulers");
		//ArrayList<Ruler> rulers = new ArrayList<Ruler>();
		for(int i=0; i<rulers.size(); i++){
			JSONObject vector = rulers.getJSONObject(i);
			int vectorId = vector.getInteger("vector");
			String[] startScores = vector.getString("startScore").split(",");
			String[] endScores = vector.getString("endScore").split(",");
			String[] rules = vector.getString("ruler").split(";");
			for(int j=0; j<startScores.length; j++){
				Ruler ruler = new Ruler(questionaireId, vectorId);
				ruler.setStartScore(Float.parseFloat(startScores[j]));
				ruler.setEndScore(Float.parseFloat(endScores[j]));
				ruler.setRuler(rules[j]);
				rulerService.save(ruler);
			}
			
		}
		return "success";
	}
	
}
