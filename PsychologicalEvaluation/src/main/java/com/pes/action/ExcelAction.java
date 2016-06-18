package com.pes.action;


import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import com.pes.entity.Answer;
import com.pes.entity.BaseUser;
import com.pes.entity.ChoiceQuestion;
import com.pes.entity.Option;
import com.pes.entity.Questionaire;
import com.pes.entity.User;
import com.pes.service.AnswerService;
import com.pes.service.ArticleService;
import com.pes.service.RulerService;

@Action(value="getResultExcel")
@Results({@Result(name = "excel", type = "stream", params = {  
        "contentType", "application/vnd.ms-excel",  
        "inputName", "excelFile", 
        "contentDisposition","attachment;filename=\"result.xls\"",
        "bufferSize","4096" })}) 
public class ExcelAction extends BaseAction{
	private InputStream excelFile;
	private int answerId;
	@Autowired
	private AnswerService answerService;
	@Autowired
	private ArticleService articleService;
	@Autowired
	private RulerService rulerService;
	private Answer answer;
	private Questionaire questionaire;
	private BaseUser user;
	private HashMap<Integer, Float> scores;
	private HashMap<Integer, Integer> questionaireCount;
	private HashMap<Integer, Float> avgScores;
	private Map<ChoiceQuestion, List<Option>> choiceQuestionAnswers = new HashMap<ChoiceQuestion, List<Option>>();
	public int getAnswerId() {
		return answerId;
	}

	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}
	
	public InputStream getExcelFile() {
		return excelFile;
	}

	@Override
	public String execute() throws Exception {
		user = (BaseUser)httpSession.getAttribute("loginUser");
		System.out.println(user);
		Answer answer = answerService.get(answerId);
		questionaire = answer.getQuestionaire();
		int questionaireId = questionaire.getId();
		HashMap<Integer, Float> scores = answerService.getScores(answerId);
		//System.out.println("scores:"+scores);
		questionaireCount = answerService.getCountInVector(answerId);
		//System.out.println("questionCount:"+questionaireCount);
		avgScores = answerService.getAvgScores(answerId);
		//System.out.println("avgScores:" +avgScores);
		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet(user.getUsername()+"的"+questionaire.getTitle()+"测评结果分析表");
		
		CellStyle setBorder = workbook.createCellStyle();
		//设置边框:
		setBorder.setBorderBottom(HSSFCellStyle.BORDER_THIN); //下边框
		setBorder.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框
		setBorder.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框
		setBorder.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框
		//设置居中:
		setBorder.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 居中
		//设置字体:
		//Font font = workbook.createFont();
		//font.setFontName("黑体");
		//font.setFontHeightInPoints((short) 16);//设置字体大小
		HSSFFont font2 = (HSSFFont) workbook.createFont();
		font2.setFontName("仿宋_GB2312");
		font2.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示
		font2.setFontHeightInPoints((short) 12);
		//设置列宽:
		sheet.setColumnWidth(0, 5500); //第一个参数代表列id(从0开始),第2个参数代表宽度值  参考 ："2012-08-10"的宽度为2500
		sheet.setColumnWidth(1, 6000);
		sheet.setColumnWidth(2, 4500);
		sheet.setColumnWidth(3, 4500);
		sheet.setColumnWidth(4, 25000);
		sheet.setDefaultRowHeightInPoints(30); 
		//设置自动换行:
		setBorder.setWrapText(true);//设置自动换行
		setBorder.setFont(font2);//选择需要用到的字体格式
		//sheet.setDefaultRowHeightInPoints(50); 
		//sheet.setDefaultColumnWidth(30);
		CellStyle doubleStyle = workbook.createCellStyle();  
	    doubleStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));
	    doubleStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
	    CellStyle align = workbook.createCellStyle();
	    align.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		
	    Row row = sheet.createRow(0);
		Cell headCell1 = row.createCell(0);
		headCell1.setCellValue("维度");
		headCell1.setCellStyle(setBorder);
		
		Cell headCell2 = row.createCell(1);
		headCell2.setCellValue("题目数量");
		headCell2.setCellStyle(setBorder);
		
		Cell headCell3 = row.createCell(2);
		headCell3.setCellValue("总分");
		headCell3.setCellStyle(setBorder);
		
		Cell headCell4 = row.createCell(3);
		headCell4.setCellValue("平均分");
		headCell4.setCellStyle(setBorder);
		
		Cell headCell5 = row.createCell(4);
		headCell5.setCellValue("评语及建议");
		headCell5.setCellStyle(setBorder);
		
		Iterator iter = scores.entrySet().iterator();
		int count = 1;
		float score;
		int vector;
		String result;
		while (iter.hasNext()) {
			Map.Entry entry = (Map.Entry) iter.next();
			vector = (int)entry.getKey();
			if(vector != 0){
				score = (float)entry.getValue();
				System.out.println(vector + ":" + score);
				result = rulerService.getRuler(questionaireId, vector, score);
				row = sheet.createRow(count);
				Cell cellvector = row.createCell(0);
				cellvector.setCellValue(vector);
				cellvector.setCellStyle(align);
				
				Cell questionNum = row.createCell(1);
				int qc = questionaireCount.get(vector);
				System.out.println(qc);
				questionNum.setCellValue(qc);
				questionNum.setCellStyle(align);
				
				Cell cellDouble = row.createCell(2);
		        cellDouble.setCellStyle(doubleStyle);
				cellDouble.setCellValue(score);
				
				Cell cellAvg = row.createCell(3);
		        cellAvg.setCellStyle(doubleStyle);
		        float as = avgScores.get(vector);
				cellAvg.setCellValue(as);
				
				Cell cellResult = row.createCell(4);
				cellResult.setCellValue(result);
				cellResult.setCellStyle(align);
				count++;
			}
		}
		
		row = sheet.createRow(count);
		Cell cellvector = row.createCell(0);
		cellvector.setCellValue("总评");
		cellvector.setCellStyle(align);
		
		Cell questionNum = row.createCell(1);
		questionNum.setCellValue(questionaireCount.get(0));
		questionNum.setCellStyle(align);
		
		Cell cellDouble = row.createCell(2);
        cellDouble.setCellStyle(doubleStyle);
        score = scores.get(0);
		cellDouble.setCellValue(score);
		
		Cell avgCell = row.createCell(3);
        avgCell.setCellStyle(doubleStyle);
		avgCell.setCellValue(avgScores.get(0));
		
		Cell cellResult = row.createCell(4);
		cellResult.setCellValue(rulerService.getRuler(questionaireId, 0, score));
		cellResult.setCellStyle(align);
		
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		workbook.write(baos);
		excelFile = new ByteArrayInputStream(baos.toByteArray());
		baos.close();
		return "excel";
	}
	
	@Action(value="getAnswerExcel",
			results={@Result(name = "excel", type = "stream", params = {  
	        "contentType", "application/vnd.ms-excel",  
	        "inputName", "excelFile", 
	        "contentDisposition","attachment;filename=\"result.xls\"",
	        "bufferSize","4096" })} )
	public String getResult(){
		user = (User) httpSession.getAttribute("loginUser");
		Answer answer = answerService.get(answerId);
		questionaire = answer.getQuestionaire();
		int questionaireId = questionaire.getId();
		choiceQuestionAnswers = answer.getChoiceQuestions();
		System.out.println(choiceQuestionAnswers);
		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet(user.getUsername() + "的" + questionaire.getTitle() + "问卷结果表");
		CellStyle setBorder = workbook.createCellStyle();
		//设置边框:
		setBorder.setBorderBottom(HSSFCellStyle.BORDER_THIN); //下边框
		setBorder.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框
		setBorder.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框
		setBorder.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框
		//设置居中:
		setBorder.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 居中
		//设置字体:
		HSSFFont font2 = (HSSFFont) workbook.createFont();
		font2.setFontName("仿宋_GB2312");
		font2.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示
		font2.setFontHeightInPoints((short) 12);
		CellStyle doubleStyle = workbook.createCellStyle();  
	    doubleStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));
	    doubleStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
	    
		//设置列宽:
		sheet.setColumnWidth(0, 25000); //第一个参数代表列id(从0开始),第2个参数代表宽度值  参考 ："2012-08-10"的宽度为2500
		sheet.setColumnWidth(1, 5000);
		sheet.setColumnWidth(2, 8000);
		sheet.setColumnWidth(3, 4500);
		sheet.setDefaultRowHeightInPoints(30); 
		//设置自动换行:
		setBorder.setWrapText(true);//设置自动换行
		setBorder.setFont(font2);//选择需要用到的字体格式
		CellStyle align = workbook.createCellStyle();
	    align.setAlignment(HSSFCellStyle.ALIGN_CENTER);
	    
		Row row = sheet.createRow(0);
		//row.setRowStyle(setBorder);
		Cell head1 = row.createCell(0);
		head1.setCellValue("题目");
		head1.setCellStyle(setBorder);
		
		Cell head2 = row.createCell(1);
		head2.setCellValue("维度");
		head2.setCellStyle(setBorder);
		
		Cell head3 = row.createCell(2);
		head3.setCellValue("选项");
		head3.setCellStyle(setBorder);
		
		Cell head4 = row.createCell(3);
		head4.setCellValue("分值");
		head4.setCellStyle(setBorder);
		
		Iterator iter = choiceQuestionAnswers.entrySet().iterator();
		int count = 1;
		while (iter.hasNext()) {
			Map.Entry entry = (Map.Entry) iter.next();
			ChoiceQuestion choiceQuestion = (ChoiceQuestion)entry.getKey();
			String content = choiceQuestion.getContent();
			List<Option> options = (List<Option>)entry.getValue();
			row = sheet.createRow(count);
			Cell question = row.createCell(0);
			question.setCellValue(content);
			question.setCellStyle(align);
			
			Cell vectorCell = row.createCell(1);
			vectorCell.setCellValue(choiceQuestion.getVector());
			vectorCell.setCellStyle(align);
			
			int i = 2;
			for (Option option : options) {
				String optionContent = option.getContent();
				Cell optionCell = row.createCell(i++);
				optionCell.setCellValue(optionContent);
				optionCell.setCellStyle(align);
				
				Cell scoreCell = row.createCell(i++);
				scoreCell.setCellValue(option.getScore());
				scoreCell.setCellStyle(doubleStyle);
			}
			count++;
		}
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		try {
			workbook.write(baos);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		excelFile = new ByteArrayInputStream(baos.toByteArray());
		try {
			baos.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "excel";
	}
	
}
