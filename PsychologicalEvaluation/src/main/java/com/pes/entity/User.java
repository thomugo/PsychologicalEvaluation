package com.pes.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_info", catalog="pes")
public class User extends BaseUser implements Serializable{
	private int gender;
	private int age;
	private String vocation;
	private String phone;
	private Date regdate;
	public User() {
		// TODO Auto-generated constructor stub
		privilege = 2;
	}
	
	@Column(name="gender")
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public void setAge(int age){
		this.age = age;
	}
	@Column(name="age")
	public int getAge(){
		return age;
	}
	@Column(name="vocation")
	public String getVocation() {
		return vocation;
	}
	public void setVocation(String vocation) {
		this.vocation = vocation;
	}
	@Column(name="phone")
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Column(name="regdate")
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	
}
