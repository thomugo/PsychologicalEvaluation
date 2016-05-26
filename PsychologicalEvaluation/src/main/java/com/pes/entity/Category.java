package com.pes.entity;

import java.io.Serializable;
import java.util.HashSet;
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
import javax.persistence.Table;


@Entity
@Table(name="question_cate" , catalog="pes")
public class Category implements Serializable{

	private int id;
	private String cateName;
	private Category parent;
	private Set<Category> Children = new HashSet<Category>();
	public Category() {
		// TODO Auto-generated constructor stub
	}
	@Id
	@Column(name="id", unique=true, nullable=false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Column(name="cateName")
	public String getCateName() {
		return cateName;
	}
	public void setCateName(String cateName) {
		this.cateName = cateName;
	}
	@ManyToOne(fetch=FetchType.EAGER, cascade={CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="parentId")
	public Category getParent() {
		return parent;
	}
	public void setParent(Category parent) {
		this.parent = parent;
	}
	@OneToMany(mappedBy="parent", fetch=FetchType.LAZY, 
			cascade={CascadeType.ALL}, orphanRemoval=true)
	public Set<Category> getChildren() {
		return Children;
	}
	public void setChildren(Set<Category> children) {
		Children = children;
	}
	
	
}
