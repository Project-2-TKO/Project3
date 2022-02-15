package com.revature.models;

import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "reviews")
public class Reviews {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int review_id;
	private int pokemon_id;
	private double rating;
	private String review;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	//(Boiler Plate Code)===============================================================================================
	public Reviews() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Reviews(int review_id, int pokemon_id, double rating, String review, User user) {
		super();
		this.review_id = review_id;
		this.pokemon_id = pokemon_id;
		this.rating = rating;
		this.review = review;
		this.user = user;
	}

	public Reviews(int pokemon_id, double rating, String review, User user) {
		super();
		this.pokemon_id = pokemon_id;
		this.rating = rating;
		this.review = review;
		this.user = user;
	}

	public Reviews(int review_id, int pokemon_id, double rating, User user) {
		super();
		this.review_id = review_id;
		this.pokemon_id = pokemon_id;
		this.rating = rating;
		this.user = user;
	}

	public Reviews(int pokemon_id, double rating, User user) {
		super();
		this.pokemon_id = pokemon_id;
		this.rating = rating;
		this.user = user;
	}

	public int getReview_id() {
		return review_id;
	}

	public void setReview_id(int review_id) {
		this.review_id = review_id;
	}

	public int getPokemon_id() {
		return pokemon_id;
	}

	public void setPokemon_id(int pokemon_id) {
		this.pokemon_id = pokemon_id;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Reviews [review_id=" + review_id + ", pokemon_id=" + pokemon_id + ", rating=" + rating + ", review="
				+ review + ", user=" + user + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(pokemon_id, rating, review, review_id, user);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Reviews other = (Reviews) obj;
		return pokemon_id == other.pokemon_id
				&& Double.doubleToLongBits(rating) == Double.doubleToLongBits(other.rating)
				&& Objects.equals(review, other.review) && review_id == other.review_id
				&& Objects.equals(user, other.user);
	}



}
