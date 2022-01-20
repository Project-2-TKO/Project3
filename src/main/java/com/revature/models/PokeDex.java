package com.revature.models;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "pokedex")
public class PokeDex {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pokedex_id;
	private int pokemon_id;
	@OneToOne(targetEntity = User.class)
	@JoinColumn(name = "user_id")
	private int user_id;
	
	
	//(Boiler Plate Code)===============================================================================================
	public PokeDex() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PokeDex(int pokedex_id, int pokemon_id, int user_id) {
		super();
		this.pokedex_id = pokedex_id;
		this.pokemon_id = pokemon_id;
		this.user_id = user_id;
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
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	@Override
	public String toString() {
		return "PokeDex [pokedex_id=" + pokedex_id + ", pokemon_id=" + pokemon_id + ", user_id=" + user_id + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(pokedex_id, pokemon_id, user_id);
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
		return pokedex_id == other.pokedex_id && pokemon_id == other.pokemon_id && user_id == other.user_id;
	}
	
	
	
	
}
