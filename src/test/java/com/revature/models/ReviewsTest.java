package com.revature.models;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;

public class ReviewsTest {
	
	int EXPECTED_REVIEW_ID = 1;
	int EXPECTED_POKEMON_ID = 125;
	double EXPECTED_RATING = 4.0;
	String EXPECTED_REVIEW = "Best Pokemon EVER!!!";
	private static Reviews reviews;
	
	@BeforeClass
	public static void setBeforeClass() throws Exception{
		reviews = new Reviews(1,125,4.0,"Best Pokemon EVER!!!", null);
	}

	@Test
	public void testReviewId() throws Exception{
		assertEquals(EXPECTED_REVIEW_ID,reviews.getReview_id());
	}
	
	@Test
	public void testPokemonId() throws Exception{
		assertEquals(EXPECTED_POKEMON_ID, reviews.getPokemon_id());
	}
	
	@Test
	public void testRating() throws Exception{
		assertEquals(EXPECTED_RATING, reviews.getRating());
	}
	
	@Test
	public void testReview() throws Exception{
		assertEquals(EXPECTED_REVIEW, reviews.getReview());
	}

}
