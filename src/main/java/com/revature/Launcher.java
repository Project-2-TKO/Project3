package com.revature;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import com.revature.controllers.AuthController;
import com.revature.controllers.PokeDexController;
import com.revature.controllers.UserController;
import com.revature.utils.HibernateUtil;

import io.javalin.Javalin;

public class Launcher {
	public static void main(String[] args) {
		
		AuthController ac = new AuthController();
		PokeDexController pc = new PokeDexController();
		UserController uc = new UserController();
		//test
//		try (Session ses = HibernateUtil.getSession()){
//			System.out.println("Connection Successful");
//		}
//		catch (HibernateException e) {
//			System.out.println("Connection Failed");
//			e.printStackTrace();
//		}
		
	        Javalin app = Javalin.create(
			config -> {
				config.enableCorsForAllOrigins();
				//config.enableCorsForOrigin("http://localhost:4200/");
			}
			).start(3000);
	        app.post("/login", ac.loginHandler);
	        
	        app.get("/user", uc.getAllUsers);
	        app.post("/user", uc.insertUser);
	        app.put("/user/{user_id}", uc.updateUser);
	        app.get("/user/{user_id}", uc.getUserByUserId);
	        app.get("/user/username/{username}", uc.getUserByUsername);
	        app.put("/reset", uc.resetPassword);
	        
	        app.get("/pokedex", pc.getAllPokeDex);
	        app.post("/pokedex", pc.insertPokeDex);
	        
	        app.get("/pokedex/{pokedex_id}",pc.getPokeDexByPokeDexId);
	        app.put("/pokedex/{pokedex_id}",pc.updatePokeDex);
	        app.get("/pokedex/pokemon/{pokemon_id}",pc.getPokeDexByPokemonId);
	        
	        app.get("/pokedex/user/{user_id}", pc.getPokeDexByUserId);
	       
	     
	 }
	
	}

