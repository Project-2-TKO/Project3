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
@Table(name = "pokedex")
public class PokeDex {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pokedex_id;
	private int pokemon_id;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	
	//(Boiler Plate Code)===============================================================================================
	public PokeDex() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PokeDex(int pokedex_id, int pokemon_id, User user) {
		super();
		this.pokedex_id = pokedex_id;
		this.pokemon_id = pokemon_id;
		this.user = user;
	}
	public PokeDex(int pokemon_id, User user) {
		super();
		this.pokemon_id = pokemon_id;
		this.user = user;
	}
	public int getPokedex_id() {
		return pokedex_id;
	}
	public void setPokedex_id(int pokedex_id) {
		this.pokedex_id = pokedex_id;
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
		return "PokeDex [pokedex_id=" + pokedex_id + ", pokemon_id=" + pokemon_id + ", user=" + user + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(pokedex_id, pokemon_id, user);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PokeDex other = (PokeDex) obj;
		return pokedex_id == other.pokedex_id && pokemon_id == other.pokemon_id && Objects.equals(user, other.user);
	}
}
