package com.pes.service;


import java.util.HashMap;

import com.pes.entity.Option;

public interface OptionService extends GenericService1<Option, Integer>{
	public HashMap<Integer, Float> getScores(int answerId);
}
