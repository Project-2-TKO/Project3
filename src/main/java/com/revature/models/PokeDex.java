package com.revature.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pokedex")
public class PokeDex {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pokedex_id;
	private int pokemon_id;
	private int user_id;
}
