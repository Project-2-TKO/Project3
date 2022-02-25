package com.revature.services;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;


import com.revature.models.WishList;

public class WishListServicesTest {
	
	int EXPECTED_WISHLIST_ID = 1;
	int EXPECTED_POKEMON_ID = 1;

	private static WishListServices ws;
	
	private List<WishList> actualResult;
	
	
	@BeforeClass
	public static void setBeforeClass() {
		ws = new WishListServices();	
	}
	

	
	@Test
	public void testAllWishList() throws Exception {
		
	actualResult = ws.getAllWishList();
	
    assertEquals(actualResult, ws.getAllWishList());
	}
	
  
	@Test
	public void testWishListByWishListId() throws Exception {
		
	WishList actualResult1 = ws.getWishListByWishListId(1);
	
    assertEquals(actualResult1, ws.getWishListByWishListId(1));
	}
	
	@Test
	public void testWishListByUserId() throws Exception {
		
	List<WishList> actualResult2 = ws.getWishListByUserId(1);
	
    assertEquals(actualResult2, ws.getWishListByUserId(1));
	}
	
	@Test
	public void testWishListByPokemonId() throws Exception {
		
	List<WishList> actualResult3 = ws.getWishListByPokemonId(1);
	
    assertEquals(actualResult3, ws.getWishListByPokemonId(1));
	}
	
	@Test
	public void testInsertWishList() throws Exception{
		WishList wishlist = new WishList();
		
		wishlist.setPokemon_id(1);
		wishlist.setWishlist_id(1);
		
		assertEquals(EXPECTED_POKEMON_ID, wishlist.getPokemon_id());
		assertEquals(EXPECTED_WISHLIST_ID, wishlist.getWishlist_id());
	}
	
	@Test
	public void testUpdateWishList() throws Exception{
		WishList wishlist = new WishList();
		
		wishlist.setPokemon_id(1);
		wishlist.setWishlist_id(2);
		
		assertEquals(EXPECTED_POKEMON_ID, wishlist.getPokemon_id());
		assertNotEquals(EXPECTED_WISHLIST_ID, wishlist.getWishlist_id());
	}
	
	@Test
	public void testDeleteWishList() throws Exception{
		WishList wishlist = new WishList();
		
		wishlist.setPokemon_id(1);
		wishlist.setWishlist_id(2);
		
		assertEquals(EXPECTED_POKEMON_ID, wishlist.getPokemon_id());
		assertNotEquals(EXPECTED_WISHLIST_ID, wishlist.getWishlist_id());
	}

}
