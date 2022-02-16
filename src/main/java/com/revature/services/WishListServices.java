package com.revature.services;

import java.util.List;

import com.revature.models.WishList;
import com.revature.repositories.WishListDAO;

public class WishListServices {
	WishListDAO wd = new WishListDAO();
	
	public List<WishList> getAllWishList() throws Exception {
		List<WishList> result = wd.getAllWishLists();
		if(result.get(0).getWishlist_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public WishList getWishListByWishListId(int id) throws Exception {
		WishList result = wd.getWishListByWishListId(id);
		if(result.getWishlist_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<WishList> getWishListByUserId(int user_id) throws Exception {
		List<WishList> result = wd.getWishListByUserId(user_id);
		if(result.get(0).getWishlist_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<WishList> getWishListByPokemonId(int pokemon_id) throws Exception {
		List<WishList> result = wd.getWishListByPokemonId(pokemon_id);
		if(result.get(0).getWishlist_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public void insertWishList(WishList wishlist) throws Exception {
		int result = wd.insertpokeDex(wishlist);
		if(result == 0) {
			throw new Exception();
		}
	}
	public void updateWishList(WishList wishlist) throws Exception {
		int result = wd.updateWishList(wishlist);
		if(result == 0) {
			throw new Exception();
		}
	}
	public void deleteWishList(int id) throws Exception {
		int result = wd.deleteWishList(id);
		if (result == 0) {
			throw new Exception();
		}
	}
}
