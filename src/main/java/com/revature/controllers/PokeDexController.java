package com.revature.controllers;

import java.util.List;

import com.google.gson.Gson;
import com.revature.models.PokeDex;
import com.revature.models.User;
import com.revature.services.PokeDexServices;
import com.revature.services.UserServices;

import io.javalin.http.Handler;

public class PokeDexController {
	PokeDexServices ps = new PokeDexServices();

	public Handler getAllPokeDex = ctx -> {
		if(ctx.req.getSession(true) != null) { 
			try {	
				List<PokeDex> allpokeDex = ps.getAllPokeDex();
				Gson gson = new Gson();
				String JSONpokeDex = gson.toJson(allpokeDex);
				ctx.result(JSONpokeDex);
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
	public Handler getPokeDexByPokeDexId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("pokedex_id")) ;
	            PokeDex pokeDex = ps.getPokeDexByPokeDexId(id);
	            Gson gson = new Gson();
	            String JSONpokeDex = gson.toJson(pokeDex);
	            ctx.result(JSONpokeDex);
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
	public Handler getPokeDexByUserId = ctx -> {
		if(ctx.req.getSession() != null) {
	        try {	
	            int user_id =Integer.parseInt(ctx.pathParam("user_id")) ;
	            List<PokeDex> pokeDex = ps.getPokeDexByUserId(user_id);
	            Gson gson = new Gson();
	            String JSONPokeDox = gson.toJson(pokeDex);
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
    public Handler getPokeDexByPokemonId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("pokemon_id"));
	            System.out.println(id);
	            List<PokeDex> pokeDex = ps.getPokeDexByPokemonId(id);
	            Gson gson = new Gson();
	            String JSONpokeDex = gson.toJson(pokeDex);
	            ctx.result(JSONpokeDex);
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
    public Handler insertPokeDex = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				PokeDex pokeDex = gson.fromJson(body, PokeDex.class);
				ps.insertPokeDex(pokeDex);
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
	public Handler updatePokeDex = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				PokeDex pokeDex = gson.fromJson(body, PokeDex.class);
				ps. updatePokeDex(pokeDex);
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
