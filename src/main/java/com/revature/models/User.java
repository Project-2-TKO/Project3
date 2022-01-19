package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	@Column(unique=true)
	private String username;
	private String password;
	private String first_name;
	private String last_name;
	@Column(unique=true)
	private String email_address;
	private String phone_number;
	private String physical_address;
	private String credit_card_number;
	private String credit_card_name;
	
	
}
