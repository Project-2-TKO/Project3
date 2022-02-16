package com.revature.services;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;


import com.revature.models.WishList;

public class WishListServicesTest {

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

}
