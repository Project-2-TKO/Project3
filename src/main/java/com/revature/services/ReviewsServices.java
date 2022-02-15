package com.revature.services;

import java.util.List;

import com.revature.models.Reviews;
import com.revature.repositories.ReviewsDAO;

public class ReviewsServices {
ReviewsDAO rd = new ReviewsDAO();
	
	public List<Reviews> getAllReviews() throws Exception {
		List<Reviews> result = rd.getAllReviewss();
		if(result.get(0).getReview_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public Reviews getReviewsByReviewsId(int id) throws Exception {
		Reviews result = rd.getReviewsByReviewsId(id);
		if(result.getReview_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<Reviews> getReviewsByUserId(int user_id) throws Exception {
		List<Reviews> result = rd.getReviewsByUserId(user_id);
		if(result.get(0).getReview_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<Reviews> getReviewsByPokemonId(int pokemon_id) throws Exception {
		List<Reviews> result = rd.getReviewsByPokemonId(pokemon_id);
		if(result.get(0).getReview_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public void insertReviews(Reviews pokedex) throws Exception {
		int result = rd.insertReviews(pokedex);
		if(result == 0) {
			throw new Exception();
		}
	}
	public void updateReviews(Reviews pokedex) throws Exception {
		int result = rd.updateReviews(pokedex);
		if(result == 0) {
			throw new Exception();
		}
	}
}
