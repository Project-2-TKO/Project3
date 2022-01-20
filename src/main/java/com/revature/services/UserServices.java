package com.revature.services;

import java.util.List;

import com.revature.models.User;
import com.revature.repositories.UserDAO;

public class UserServices {
	UserDAO ud = new UserDAO();
	
	public List<User> getAllUsers() throws Exception {
		List<User> result = ud.getAllUsers();
		if(result.get(0).getUser_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public User getUserByUserId(int user_id) throws Exception {
		User result = ud.getUserByUserId(user_id);
		if(result.getUser_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<User> getUserByUsername(String username) throws Exception {
		List<User> result = ud.getUserByUsername(username);
		if(result.get(0).getUser_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public void insertUser(User user) throws Exception {
		int result = ud.insertUser(user);
		if(result == 0) {
			throw new Exception();
		}
	}
	public void updateUser(User user) throws Exception {
		int result = ud.updateUser(user);
		if(result == 0) {
			throw new Exception();
		}
	}


}
