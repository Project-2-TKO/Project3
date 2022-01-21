package com.revature.models;

import java.util.Objects;
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
	@Column(name = "user_id")
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
	
	
	
	
	//(Boiler Plate Code)===============================================================================================
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int user_id, String username, String password, String first_name, String last_name,
			String email_address, String phone_number, String physical_address, String credit_card_number,
			String credit_card_name) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_address = email_address;
		this.phone_number = phone_number;
		this.physical_address = physical_address;
		this.credit_card_number = credit_card_number;
		this.credit_card_name = credit_card_name;
	}
	public User(String username, String password, String first_name, String last_name, String email_address,
			String phone_number, String physical_address, String credit_card_number, String credit_card_name) {
		super();
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_address = email_address;
		this.phone_number = phone_number;
		this.physical_address = physical_address;
		this.credit_card_number = credit_card_number;
		this.credit_card_name = credit_card_name;
	}
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail_address() {
		return email_address;
	}
	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getPhysical_address() {
		return physical_address;
	}
	public void setPhysical_address(String physical_address) {
		this.physical_address = physical_address;
	}
	public String getCredit_card_number() {
		return credit_card_number;
	}
	public void setCredit_card_number(String credit_card_number) {
		this.credit_card_number = credit_card_number;
	}
	public String getCredit_card_name() {
		return credit_card_name;
	}
	public void setCredit_card_name(String credit_card_name) {
		this.credit_card_name = credit_card_name;
	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", password=" + password + ", first_name="
				+ first_name + ", last_name=" + last_name + ", email_address=" + email_address + ", phone_number="
				+ phone_number + ", physical_address=" + physical_address + ", credit_card_number=" + credit_card_number
				+ ", credit_card_name=" + credit_card_name + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(credit_card_name, credit_card_number, email_address, first_name, last_name, password,
				phone_number, physical_address, user_id, username);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(credit_card_name, other.credit_card_name)
				&& Objects.equals(credit_card_number, other.credit_card_number)
				&& Objects.equals(email_address, other.email_address) && Objects.equals(first_name, other.first_name)
				&& Objects.equals(last_name, other.last_name) && Objects.equals(password, other.password)
				&& Objects.equals(phone_number, other.phone_number)
				&& Objects.equals(physical_address, other.physical_address) && user_id == other.user_id
				&& Objects.equals(username, other.username);
	}
}
