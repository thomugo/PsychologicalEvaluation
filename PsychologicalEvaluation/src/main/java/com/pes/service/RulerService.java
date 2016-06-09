package com.pes.service;

import java.util.HashMap;
import java.util.List;

import com.pes.entity.Ruler;

public interface RulerService extends GenericService1<Ruler, Integer>{
	public String getRuler(int questionaireId, int vector, float score);
	public String getResult(int questionaireId, HashMap<Integer, Float> scores);
}
