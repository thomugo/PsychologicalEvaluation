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
@Table(name="admin" , catalog="pes")
public class Admin extends BaseUser implements Serializable{
	
	public Admin() {
		// TODO Auto-generated constructor stub
		privilege = 1;
		broadcast = 0;
	}
	
	public Admin(String username, String password) {
		// TODO Auto-generated constructor stub
		privilege = 1;
		this.setUsername(username);
		this.setPassword(password);
		broadcast = 0;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", username=" + username + ", password="
				+ password + ", email=" + email + ", privilege=" + privilege
				+ ", broadcast=" + broadcast + ",icon=" + icon + "]";
	}
	
	
}
