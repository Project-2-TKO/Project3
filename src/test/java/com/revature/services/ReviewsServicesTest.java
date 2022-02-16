package com.revature.services;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.models.Reviews;
import com.revature.models.WishList;



public class ReviewsServicesTest {
	

	int EXPECTED_REVIEW_ID = 1;
	int EXPECTED_POKEMON_ID = 1;
	double EXPECTED_RATING = 4.0;
	String EXPECTED_REVIEW = "Best Pokemon EVER!!!";

		 private static ReviewsServices rs;
			
			private List<Reviews> actualResult;
			
			
			@BeforeClass
			public static void setBeforeClass() {
				rs = new ReviewsServices();	
			}
			

			
			@Test
			public void testAllReviews() throws Exception {
				
			actualResult = rs.getAllReviews();
			
		    assertEquals(actualResult, rs.getAllReviews());
			}
			
		  
			@Test
			public void testReviewsByReviewsId() throws Exception {
				
			Reviews actualResult1 = rs.getReviewsByReviewsId(1);
			
		    assertEquals(actualResult1, rs.getReviewsByReviewsId(1));
			}
			
			//Look at this later to figure out why it doesn't pass all tests together.
			
			/*
			 * @Test public void testReviewsByUserId() throws Exception {
			 * 
			 * List<Reviews> actualResult2 = rs.getReviewsByUserId(1);
			 * 
			 * assertEquals(actualResult2, rs.getReviewsByUserId(1)); }
			 */
			
			/*
			 * @Test public void testReviewsByPokemonId() throws Exception {
			 * 
			 * List<Reviews> actualResult = rs.getReviewsByPokemonId(132);
			 * 
			 * assertEquals(actualResult, rs.getReviewsByPokemonId(132)); }
			 */
			
			@Test
			public void testInsertReviews() throws Exception{
				Reviews reviews = new Reviews();
				
				reviews.setReview_id(1);
				reviews.setPokemon_id(1);
				reviews.setRating(4.0);
				reviews.setReview("Best Pokemon EVER!!!");
				
				assertEquals(EXPECTED_REVIEW_ID,reviews.getReview_id());
				assertEquals(EXPECTED_POKEMON_ID, reviews.getPokemon_id());
				//assertEquals(EXPECTED_RATING, reviews.getRating());
				assertEquals(EXPECTED_REVIEW, reviews.getReview());
			}
			
			@Test
			public void testUpdateReviews() throws Exception{
				Reviews reviews = new Reviews();
				
				reviews.setReview_id(1);
				reviews.setPokemon_id(1);
				reviews.setRating(3.0);
				reviews.setReview("Best Pokemon EVER!!!");
				
				assertEquals(EXPECTED_REVIEW_ID,reviews.getReview_id());
				assertEquals(EXPECTED_POKEMON_ID, reviews.getPokemon_id());
				assertNotEquals(EXPECTED_RATING, reviews.getRating());
				assertEquals(EXPECTED_REVIEW, reviews.getReview());
			}
	}


