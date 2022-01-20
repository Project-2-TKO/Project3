package com.revature.services;

import java.util.List;

import com.revature.models.PokeDex;
import com.revature.models.User;
import com.revature.repositories.PokeDexDAO;

public class PokeDexServices {
	PokeDexDAO pd = new PokeDexDAO();
	
	public List<PokeDex> getAllPokeDexs() throws Exception {
		List<PokeDex> result = pd.getAllPokeDexs();
		if(result.get(0).getPokedex_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public PokeDex getPokeDexByPokeDexId(int id) throws Exception {
		PokeDex result = pd.getPokeDexByPokeDexId(id);
		if(result.getPokedex_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<PokeDex> getPokeDexByUserId(int user_id) throws Exception {
		List<PokeDex> result = pd.getPokeDexByUserId(user_id);
		if(result.get(0).getPokedex_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public List<PokeDex> getPokeDexByPokemonId(int pokemon_id) throws Exception {
		List<PokeDex> result = pd.getPokeDexByPokemonId(pokemon_id);
		if(result.get(0).getPokedex_id() != 0) {
			return result;
		}
		else {
			throw new Exception();
		}
	}
	public void insertpokeDex(PokeDex pokedex) throws Exception {
		int result = pd.insertpokeDex(pokedex);
		if(result == 0) {
			throw new Exception();
		}
	}
	public void updatePokeDex(PokeDex pokedex) throws Exception {
		int result = pd.updatePokeDex(pokedex);
		if(result == 0) {
			throw new Exception();
		}
	}

	
	
}
