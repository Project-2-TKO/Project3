package com.revature.models;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;

public class PokeDexTest {
	
	int EXPECTED_POKEDEX_ID = 1;
	int EXPECTED_POKEMON_ID = 1;
	
	
	
	private static PokeDex pokedex;
	
	@BeforeClass
	public static void setBeforeClass() throws Exception{
		pokedex = new PokeDex(1,1,null);
	}

	@Test
	public void testPokeDexId() throws Exception{
		assertEquals(EXPECTED_POKEDEX_ID, pokedex.getPokedex_id());
		
	}
	
	@Test
	public void testPokemonId() throws Exception{
		assertEquals(EXPECTED_POKEMON_ID, pokedex.getPokemon_id());
		
	}
	

}
