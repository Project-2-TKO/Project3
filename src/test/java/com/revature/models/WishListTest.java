package com.revature.models;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;

public class WishListTest {
	
	int EXPECTED_WISHLIST_ID = 5;
	int EXPECTED_POKEMON_ID = 200;
	
	private static WishList wishlist;
	
	@BeforeClass
	public static void setBeforeClass() throws Exception{
		wishlist = new WishList(5, 200, null);
	}

	@Test
	public void testWishlistId() throws Exception{
		assertEquals(EXPECTED_WISHLIST_ID, wishlist.getWishlist_id());
	}
	
	@Test
	public void testPokemonId() throws Exception{
		assertEquals(EXPECTED_POKEMON_ID, wishlist.getPokemon_id());
	}

}
