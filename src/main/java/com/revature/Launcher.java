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
		
		try (Session ses = HibernateUtil.getSession()){
			System.out.println("Connection Seccessful");
		}
		catch (HibernateException e) {
			System.out.println("Connection Failed");
			e.printStackTrace();
		}
		
		
		
	        Javalin app = Javalin.create(
			config -> {
				config.enableCorsForAllOrigins();
			}
			).start(3000);

	       
	        app.get("/user", uc.getAllUsers);
	        app.post("/user", uc.insertUser);
	        
	        app.put("/user/{user_id}", uc.updateUser);
	        app.get("/user/{user_id}", uc.getUserByUserId);
	        app.get("/user/{username}", uc.getUserByUsername);
	        
	        app.get("/pokeDex", pc.getAllPokeDex);
	        app.post("/pokeDex", pc.insertPokeDex);
	        
	        app.get("/pokeDex/{Pokedex_id}",pc.getPokeDexByPokeDexId);
	        app.put("/pokeDex/{Pokedex_id}",pc.updatePokeDex);
	        app.get("/pokeDex/{Pokedex_id}",pc.getPokeDexByPokemonId);
	        
	        app.get("/pokeDex/{user_id}", pc.getPokeDexByUserId);
	        app.post("/login", ac.loginHandler);
	 }
	
	}

