package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.revature.models.WishList;
import com.revature.repositories.WishListDAO;
import com.revature.services.WishListServices;
import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;

import io.javalin.http.Handler;

public class WishListController {
	WishListServices ws = new WishListServices();
    WishListDAO Wdao=new 	WishListDAO();
    public Handler insertWishlistByWishIdandUserName=(ctx)->{
    	if(ctx.req.getSession(true) != null) { 
				
				//String body=ctx.body();
				String name=ctx.pathParam("name");
				int wid=Integer.parseInt(ctx.pathParam("w_id"));
				 //System.out.println(" booddyy "+body);
					
					/*Type listType = new TypeToken<ArrayList<Integer>>() {}.getType();
					ArrayList<Integer> pokemonids=new Gson().fromJson(body,listType);*/
					System.out.println(wid);
			Integer success= (Integer)	Wdao.insertWishListList(wid, name);
			if(success!=null)
			{ctx.result(success.toString());
			ctx.status(202);
			}
			}else { ctx.result("failed in controller"); ctx.status(403); }
    	
    };
	public Handler getAllWishList = ctx -> {
		if(ctx.req.getSession(true) != null) { 
			try {	
				List<WishList> allwishList = ws.getAllWishList();
				Gson gson = new Gson();
				String JSONwishList = gson.toJson(allwishList);
				ctx.result(JSONwishList);
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
	public Handler getWishListByWishListId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("wishlist_id")) ;
	            WishList wishList = ws.getWishListByWishListId(id);
	            Gson gson = new Gson();
	            String JSONwishList = gson.toJson(wishList);
	            ctx.result(JSONwishList);
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
	public Handler getWishListByUserId = ctx -> {
		if(ctx.req.getSession() != null) {
	        try {	
	            int user_id =Integer.parseInt(ctx.pathParam("user_id")) ;
	            List<WishList> wishList = ws.getWishListByUserId(user_id);
	            Gson gson = new Gson();
	            String JSONPokeDox = gson.toJson(wishList);
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
    public Handler getWishListByPokemonId = ctx -> {
        if(ctx.req.getSession() != null) {
        	try {
	            int id = Integer.parseInt(ctx.pathParam("pokemon_id"));
	            System.out.println(id);
	            List<WishList> wishList = ws.getWishListByPokemonId(id);
	            Gson gson = new Gson();
	            String JSONwishList = gson.toJson(wishList);
	            ctx.result(JSONwishList);
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
    public Handler insertWishList = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				WishList wishList = gson.fromJson(body, WishList.class);
				ws.insertWishList(wishList);
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
	public Handler updateWishList = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				WishList wishList = gson.fromJson(body, WishList.class);
				ws.updateWishList(wishList);
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
	public Handler deleteWishList = ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
	            int id = Integer.parseInt(ctx.pathParam("wishlist_id"));
		        System.out.println(id);	        
				ws.deleteWishList(id);
				ctx.status(202);
			}
			catch(Exception e) {
				e.printStackTrace();
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}	
	};
	/*public Handler insertWishListWithWishIdandUserName= ctx -> {
		if(ctx.req.getSession() != null) {
			try {	
				String body = ctx.body();
				Gson gson = new Gson();
				WishList wishList = gson.fromJson(body, WishList.class);
				ws.insertWishList(wishList);
				ctx.status(201);
			}
			catch(Exception e) {
				ctx.status(404);	
			}
		} 
		else {
			ctx.status(403);
		}
	};*/
}
