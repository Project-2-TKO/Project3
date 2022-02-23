package com.revature.services;

import static org.junit.Assert.*;

import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.models.PokeDex;
import com.revature.models.User;
import com.revature.models.WishList;

public class PokeDexServiceTest {
	
	int EXPECTED_POKEDEX_ID = 1;
	int EXPECTED_POKEMON_ID = 1;
	
    private static PokeDexServices s;
	
	private List<PokeDex> actualResult;
	
	
	@BeforeClass
	public static void setBeforeClass() {
		s = new PokeDexServices();	
	}
	

	
	@Test
	public void testAllPokeDex() throws Exception {
		
	actualResult = s.getAllPokeDex();
	
    assertEquals(actualResult, s.getAllPokeDex());
	}
	
	
	@Test
	public void testPokeDexByPokeDexId() throws Exception {
		
	PokeDex actualResult1 = s.getPokeDexByPokeDexId(22);
	
    assertEquals(actualResult1,s.getPokeDexByPokeDexId(22));
	}
	
	@Test
	public void testPokeDexByPokemonId() throws Exception {
		
	List<PokeDex> actualResult1 = s.getPokeDexByPokemonId(1);
	
    assertEquals(actualResult1,s.getPokeDexByPokemonId(1));
	}
	
	@Test
	public void testPokeDexByUserId() throws Exception {
		
	List<PokeDex> actualResult1 = s.getPokeDexByUserId(2);
	
    assertEquals(actualResult1,s.getPokeDexByUserId(2));
	}
	
	@Test
	public void testInsertPokeDex() throws Exception{
		PokeDex pokedex = new PokeDex();
		
		pokedex.setPokedex_id(1);;
		pokedex.setPokemon_id(1);;
		
		assertEquals(EXPECTED_POKEDEX_ID, pokedex.getPokedex_id());
		assertEquals(EXPECTED_POKEMON_ID, pokedex.getPokemon_id());
	}
	
	@Test
	public void testUpdatePokeDex() throws Exception{
		PokeDex pokedex = new PokeDex();
		
		pokedex.setPokedex_id(1);;
		pokedex.setPokemon_id(2);;
		
		assertEquals(EXPECTED_POKEDEX_ID, pokedex.getPokedex_id());
		assertNotEquals(EXPECTED_POKEMON_ID, pokedex.getPokemon_id());
	}
}
