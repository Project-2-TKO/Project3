package com.revature.controllers;

import java.util.List;

import com.google.gson.Gson;
import com.revature.models.Reviews;
import com.revature.services.ReviewsServices;

import io.javalin.http.Handler;

public class ReviewsController {
	ReviewsServices rs = new ReviewsServices();

	public Handler getAllReviews = ctx -> {
		if(ctx.req.getSession(true) != null) { 
			try {	
				List<Reviews> allreviews = rs.getAllReviews();
				Gson gson = new Gson();
				String JSONreviews = gson.toJson(allreviews);
				ctx.result(JSONreviews);
				ctx.status(200);
			}
			catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}
	};
	public Handler getReviewsByReviewsId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("review_id")) ;
	            Reviews reviews = rs.getReviewsByReviewsId(id);
	            Gson gson = new Gson();
	            String JSONreviews = gson.toJson(reviews);
	            ctx.result(JSONreviews);
	            ctx.status(200);
        	}	
        	catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}
    };
	public Handler getReviewsByUserId = ctx -> {
		if(ctx.req.getSession() != null) {
	        try {	
	            int user_id =Integer.parseInt(ctx.pathParam("user_id")) ;
	            List<Reviews> reviews = rs.getReviewsByUserId(user_id);
	            Gson gson = new Gson();
	            String JSONPokeDox = gson.toJson(reviews);
	            ctx.result(JSONPokeDox);
	            ctx.status(200);
	        }
	        catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}
    };
    public Handler getReviewsByPokemonId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("pokemon_id"));
	            System.out.println(id);
	            List<Reviews> reviews = rs.getReviewsByPokemonId(id);
	            Gson gson = new Gson();
	            String JSONreviews = gson.toJson(reviews);
	            ctx.result(JSONreviews);
	            ctx.status(200);
        	}
        	catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}
    };    
    public Handler insertReviews = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				Reviews reviews = gson.fromJson(body, Reviews.class);
				rs.insertReviews(reviews);
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}
	};
	public Handler updateReviews = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				Reviews reviews = gson.fromJson(body, Reviews.class);
				rs. updateReviews(reviews);
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}	
	};
}
