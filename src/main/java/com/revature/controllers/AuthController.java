package com.revature.controllers;

import com.google.gson.Gson;
import com.revature.models.User;
import com.revature.services.AuthServices;

import io.javalin.http.Handler;

public class AuthController {
	AuthServices as = new AuthServices();
	
	public Handler loginHandler = (ctx) -> {
		String body = ctx.body();
		Gson gson = new Gson();
		User user = gson.fromJson(body, User.class);
		if(as.login(user.getUsername(),user.getPassword()) == 1) {
			ctx.req.getSession();
			ctx.status(202);
			ctx.result("Login Successful!");
		}
		else {
			ctx.status(401);
			ctx.result("Login Failed");
		}
	};
}

