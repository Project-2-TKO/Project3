package com.revature.controllers;

import java.util.List;

import com.google.gson.Gson;
import com.revature.models.PokeDex;
import com.revature.models.User;
import com.revature.services.PokeDexServices;
import com.revature.services.UserServices;

import io.javalin.http.Handler;

public class PokeDexController {
	PokeDexServices pd = new PokeDexServices();

	public Handler getAllPokeDex = ctx -> {
		if(ctx.req.getSession(true) != null) { 
			try {	
				List<PokeDex> allpokeDex = pd.getAllPokeDex();
				Gson gson = new Gson();
				String JSONpokeDex = gson.toJson(allpokeDex);
				ctx.result(JSONpokeDex);
				ctx.status(200);
			}
			catch(Exception e) {
				ctx.result("PokeDex not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
	};
	public Handler getPokeDexByPokeDexId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("Pokedex_id")) ;
	            PokeDex pokeDex = pd.getPokeDexByPokeDexId(id);
	            Gson gson = new Gson();
	            String JSONpokeDex = gson.toJson(pokeDex);
	            ctx.result(JSONpokeDex);
	            ctx.status(200);
        	}	
        	catch(Exception e) {
				ctx.result("PokeDex not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
    };
	public Handler getPokeDexByUserId = ctx -> {
		if(ctx.req.getSession() != null) {
	        try {	
	            int user_id =Integer.parseInt(ctx.pathParam("user_id")) ;
	            List<PokeDex> pokeDex = pd.getPokeDexByUserId(user_id);
	            Gson gson = new Gson();
	            String JSONPokeDox = gson.toJson(pokeDex);
	            ctx.result(JSONPokeDox);
	            ctx.status(200);
	        }
	        catch(Exception e) {
				ctx.result("PokeDex not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
    };
    public Handler getPokeDexByPokemonId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("pokemon_id")) ;   
	            List<PokeDex> pokeDex = pd.getPokeDexByPokemonId(id);
	            Gson gson = new Gson();
	            String JSONpokeDex = gson.toJson(pokeDex);
	            ctx.result(JSONpokeDex);
	            ctx.status(200);
        	}
        	catch(Exception e) {
				ctx.result("PokeDex not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
    };    
    public Handler insertPokeDex = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				PokeDex pokeDex = gson.fromJson(body, PokeDex.class);
				pd.insertPokeDex(pokeDex);
				ctx.result("PokeDex successfully added");
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.result("PokeDex not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}
	};
	public Handler updatePokeDex = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				PokeDex pokeDex = gson.fromJson(body, PokeDex.class);
				pd. updatePokeDex(pokeDex);
				ctx.result("PokeDex was update added!");
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.result("PokeDex not found");
				ctx.status(404);	
			}
		} 
		else {
			ctx.result("Unauthorized User");
			ctx.status(403);
		}	
	};


	

}
