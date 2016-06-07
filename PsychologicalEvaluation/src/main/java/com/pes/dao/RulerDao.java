package com.pes.dao;

import com.pes.entity.Ruler;

public interface RulerDao extends GenericDao1<Ruler, Integer>{
	public String getRuler(int questionaireId, int vector, float score);
}
