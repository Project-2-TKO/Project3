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

public class PokeDexServiceTest {
	
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
		
	PokeDex actualResult1 = s.getPokeDexByPokeDexId(1);
	
    assertEquals(actualResult1,s.getPokeDexByPokeDexId(1));
	}
}
