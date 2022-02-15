package com.revature.services;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.models.Reviews;



public class ReviewsServicesTest {

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
			
			@Test
			public void testReviewsByUserId() throws Exception {
				
			List<Reviews> actualResult2 = rs.getReviewsByUserId(1);
			
		    assertEquals(actualResult2, rs.getReviewsByUserId(1));
			}
			
			@Test
			public void testReviewsByPokemonId() throws Exception {
				
			List<Reviews> actualResult3 = rs.getReviewsByPokemonId(1);
			
		    assertEquals(actualResult3, rs.getReviewsByPokemonId(1));
			}
	}


