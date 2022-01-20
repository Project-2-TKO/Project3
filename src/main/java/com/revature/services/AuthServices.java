package com.revature.services;

import java.util.List;

import com.revature.models.User;
import com.revature.repositories.UserDAO;

public class AuthServices {
	UserDAO ud = new UserDAO();
	
	public int login(String username, String password) {   
    	List<User> CheckUsername = ud.getUserByUsername(username);
    	try{
    		User Check = CheckUsername.get(0);
    		String Username = Check.getUsername();
        	String Password = Check.getPassword();
            if (Username.equals(username) && Password.equals(password)) {
            	return 1;
            }
            else {
            	return 0;
            }
    	}
    	catch(IndexOutOfBoundsException e) {
    		System.out.println("That Username or Password didn't match our system");
    		return 0;
    	}
    	
    }
	
}