package com.revature;

import com.revature.controllers.AuthController;
import com.revature.controllers.PokeDexController;
import com.revature.controllers.ReviewsController;
import com.revature.controllers.UserController;
import com.revature.controllers.WishListController;

import io.javalin.Javalin;

public class Launcher {
	public static void main(String[] args) {
		
		AuthController ac = new AuthController();
		PokeDexController pc = new PokeDexController();
		WishListController wc = new WishListController();
		ReviewsController rc = new ReviewsController();
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
	        
	        
	        
	        app.get("/wishlist", wc.getAllWishList);
	        app.post("/wishlist", wc.insertWishList);
	        
	        app.get("/wishlist/{wishlist_id}",wc.getWishListByWishListId);
	        app.put("/wishlist/{wishlist_id}",wc.updateWishList);
	        app.get("/wishlist/pokemon/{pokemon_id}",wc.getWishListByPokemonId);

	        app.get("/wishlist/user/{user_id}", wc.getWishListByUserId);
	        app.delete("/delete/{wishlist_id}", wc.deleteWishList);
	        
	        
	        
	        app.get("/reviews", rc.getAllReviews);
	        app.post("/reviews", rc.insertReviews);
	        
	        app.get("/reviews/{review_id}",rc.getReviewsByReviewsId);
	        app.put("/reviews/{review_id}",rc.updateReviews);
	        app.get("/reviews/pokemon/{pokemon_id}",rc.getReviewsByPokemonId);

	        app.get("/reviews/user/{user_id}", rc.getReviewsByUserId);
	        
	        
	        
	}
}

