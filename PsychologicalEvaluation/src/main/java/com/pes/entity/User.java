package com.pes.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
//@Table(name="user_info", catalog="app_psychologic")
@Table(name="user_info", catalog="pes")
public class User extends BaseUser implements Serializable{
	private int gender;  //0:男  ；1：女
	private int age;
	private String vocation;
	private String phone;
	private Date dateTime;
	
	public User() {
		// TODO Auto-generated constructor stub
		privilege = 5;
		broadcast = 0;
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
	@Column(name="dateTime")
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	@Override
	public String toString() {
		return "User [gender=" + gender + ", age=" + age + ", vocation="
				+ vocation + ", phone=" + phone + ", dateTime=" + dateTime
				+ ", id=" + id + ", username=" + username + ", password="
				+ password + ", email=" + email + ", privilege=" + privilege
				+ ", broadcast=" + broadcast + ",icon=" + icon + "]";
	}
	
}
