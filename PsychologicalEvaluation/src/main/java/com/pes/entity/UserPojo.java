package com.pes.entity;

import java.io.Serializable;

public class UserPojo implements Serializable{
	private int id;
	private int age;
	private String phone;
	private int gender;
	private String vocation;
	private String username;
	private String email;
	
	public UserPojo(){
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getGender() {
		return gender;
	}

	public void setGender(int gender) {
		this.gender = gender;
	}

	public String getVocation() {
		return vocation;
	}

	public void setVocation(String vocation) {
		this.vocation = vocation;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserPojo [id=" + id + ", age=" + age + ", phone=" + phone
				+ ", gender=" + gender + ", vocation=" + vocation
				+ ", username=" + username + ", email=" + email + "]";
	}
	
	
}
