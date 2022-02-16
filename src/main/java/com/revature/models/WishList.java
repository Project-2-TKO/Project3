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
@Table(name = "wishlist")
public class WishList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int wishlist_id;
	private int pokemon_id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

	
	//(Boiler Plate Code)===============================================================================================
	public WishList() {
		super();
		// TODO Auto-generated constructor stub
	}
	public WishList(int wishlist_id, int pokemon_id, User user) {
		super();
		this.wishlist_id = wishlist_id;
		this.pokemon_id = pokemon_id;
		this.user = user;
	}
	public WishList(int pokemon_id, User user) {
		super();
		this.pokemon_id = pokemon_id;
		this.user = user;
	}
	public int getWishlist_id() {
		return wishlist_id;
	}
	public void setWishlist_id(int wishlist_id) {
		this.wishlist_id = wishlist_id;
	}
	public int getPokemon_id() {
		return pokemon_id;
	}
	public void setPokemon_id(int pokemon_id) {
		this.pokemon_id = pokemon_id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "WishList [wishlist_id=" + wishlist_id + ", pokemon_id=" + pokemon_id + ", user=" + user + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(pokemon_id, user, wishlist_id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WishList other = (WishList) obj;
		return pokemon_id == other.pokemon_id && Objects.equals(user, other.user) && wishlist_id == other.wishlist_id;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
