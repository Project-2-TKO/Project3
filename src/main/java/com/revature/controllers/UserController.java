package com.revature.controllers;

import java.util.List;

import com.google.gson.Gson;
import com.revature.models.User;
import com.revature.services.UserServices;

import io.javalin.http.Handler;

public class UserController {
	UserServices us = new UserServices();

	public Handler getAllUsers = ctx -> {
		if(ctx.req.getSession(true) != null) { 
			try {	
				List<User> alluser = us.getAllUsers();
				Gson gson = new Gson();
				String JSONuser = gson.toJson(alluser);
				ctx.result(JSONuser);
				ctx.status(200);
			}
			catch(Exception e) {
				ctx.result("User not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
	};
	public Handler getUserByUserId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("user_id")) ;
	            User user = us.getUserByUserId(id);
	            Gson gson = new Gson();
	            String JSONuser = gson.toJson(user);
	            ctx.result(JSONuser);
	            ctx.status(200);
        	}
        	catch(Exception e) {
				ctx.result("User not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
    };	
    public Handler getUserByUsername = ctx -> {
        if(ctx.req.getSession() != null) {
	        try {	
	            String username =ctx.pathParam("username") ;
	            List<User> user = us.getUserByUsername(username);
	            Gson gson = new Gson();
	            String JSONEmployees = gson.toJson(user);
	            ctx.result(JSONEmployees);
	            ctx.status(200);
	        }
	        catch(Exception e) {
				ctx.result("User not found");
				ctx.status(404);	
			}
        } 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
    };	
	public Handler insertUser = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				User user = gson.fromJson(body, User.class);
				us.insertUser(user);
				ctx.result("user was successfully added!");
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.result("User not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
	};
	public Handler updateUser = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				User user = gson.fromJson(body, User.class);
				us. updateUser(user);
				ctx.result("user was update added!");
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.result("User not found");
				ctx.status(404);	
			}
		} 	
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}	
	};
}



