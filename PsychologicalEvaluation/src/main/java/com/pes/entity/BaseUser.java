package com.pes.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseUser {
	protected int id;
	protected String username;
	protected String password;
	protected String email;
	protected int privilege;    //1:超级用户 /3:专家用户 / 4:专家申请者用户 /5：普通用户
	protected int broadcast; //用户已看广播数；
	protected String icon;
	
	public BaseUser(){
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setPrivilege(int privilege) {
		this.privilege = privilege;
	}

	public void setBroadcast(int broadcast) {
		this.broadcast = broadcast;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", unique=true, nullable=false)
	public int getId() {
		return id;
	}
	
	@Column(name="username")
	public String getUsername() {
		return username;
	}
	
	@Column(name="password")
	public String getPassword() {
		return password;
	}
	
	@Column(name="email")
	public String getEmail() {
		return email;
	}
	
	@Column(name="broadcast")
	public int getBroadcast() {
		return broadcast;
	}
	
	@Column(name="privilege")
	public int getPrivilege() {
		return privilege;
	}
	
	@Column(name="icon")
	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	@Override
	public String toString() {
		return "BaseUser [id=" + id + ", username=" + username + ", password="
				+ password + ", email=" + email + ", privilege=" + privilege
				+ ", broadcast=" + broadcast + ", icon=" + icon + "]";
	}
	
	
	
}
