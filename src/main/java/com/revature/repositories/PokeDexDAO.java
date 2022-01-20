package com.revature.repositories;

import java.util.List;

import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.models.PokeDex;

import com.revature.utils.HibernateUtil;

public class PokeDexDAO {
	public int insertpokeDex(PokeDex pokedex) {
		try(Session ses = HibernateUtil.getSession()){
			ses.save(pokedex);
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error inserting into the PokeDex");
			return 0;
		}
	}
	public List<PokeDex> getAllPokeDexs(){
		try(Session ses = HibernateUtil.getSession()){
			List<PokeDex> movieList = ses.createQuery("FROM PokeDex").list();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting all PokeDex");
			return null;
		}
	}
	public PokeDex getPokeDexByPokeDexId(int id){
		try(Session ses = HibernateUtil.getSession()){
			PokeDex movie = ses.get(PokeDex.class, id);
			HibernateUtil.closeSession();
			return movie;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting PokeDex by PokeDex Id");
			return null;
		}
	}
	public List<PokeDex> getPokeDexByUserId(int user_id){
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM PokeDex p WHERE p.user.user_id = ?0");
			q.setParameter(0, user_id);
			List<PokeDex> movieList = q.getResultList();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting PokeDex by User Id");
			return null;
		}
		
	}
	public List<PokeDex> getPokeDexByPokemonId(int pokemon_id){
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM PokeDex p WHERE p.pokemon_id = ?0");
			q.setParameter(0, pokemon_id);
			List<PokeDex> movieList = q.getResultList();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting PokeDex by Pokemon Id");
			return null;
		}
	}
	public int updatePokeDex(PokeDex pokedex) {
		try(Session ses = HibernateUtil.getSession()){
			Transaction tran = ses.beginTransaction();
			ses.merge(pokedex);
			tran.commit();
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error updating the PokeDex");
			return 0;
		}
	}
}
