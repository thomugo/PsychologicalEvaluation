package com.pes.dao;

import java.util.HashMap;

import com.pes.entity.Option;

public interface OptionDao extends GenericDao1<Option, Integer>{
	HashMap<Integer, Float> getScores(int answerId);
}
