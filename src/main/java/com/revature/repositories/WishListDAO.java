package com.revature.repositories;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.models.PokeDex;
import com.revature.models.User;
import com.revature.models.WishList;
import com.revature.utils.HibernateUtil;

public class WishListDAO {
	public int insertWishListList(int pokemonid,String username) {
		
		UserDAO udao = new UserDAO();
		
		try {
			
			
			User u =   udao.getUserByUsername(username).get(0);
		
			
			Session ses = HibernateUtil.getSession();
			org.hibernate.Transaction tx = ses.beginTransaction();
            
			
			int wishId;
			//for (int i=0;i< pokemonids.size();i++) 
			{
				//int  pokemonid=pokemonids.get(i);
							
				WishList pokedex = new WishList(pokemonid,u);
				System.out.println(pokedex);
			 wishId=(Integer)	ses.save(pokedex);
				
			}
			tx.commit();
			HibernateUtil.closeSession();
			
			return wishId;

		} catch (Exception e) {
			return -1;
		}

	}
	public List<WishList> getAllWishLists(){
		try(Session ses = HibernateUtil.getSession()){
			List<WishList> movieList = ses.createQuery("FROM WishList").list();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting all WishList");
			return null;
		}
	}
	public WishList getWishListByWishListId(int id){
		try(Session ses = HibernateUtil.getSession()){
			WishList movie = ses.get(WishList.class, id);
			HibernateUtil.closeSession();
			return movie;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting WishList by WishList Id");
			return null;
		}
	}
	public List<WishList> getWishListByUserId(int user_id){
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM WishList p WHERE p.user.user_id = ?0");
			q.setParameter(0, user_id);
			List<WishList> movieList = q.getResultList();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting WishList by User Id");
			return null;
		}
		
	}
	public List<WishList> getWishListByPokemonId(int pokemon_id){
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM WishList p WHERE p.pokemon_id = ?0");
			q.setParameter(0, pokemon_id);
			List<WishList> movieList = q.getResultList();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting WishList by Pokemon Id");
			return null;
		}
	}
	public int insertpokeDex(WishList wishlist) {
		try(Session ses = HibernateUtil.getSession()){
			ses.save(wishlist);
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error inserting into the WishList");
			return 0;
		}
	}
	public int updateWishList(WishList wishlist) {
		try(Session ses = HibernateUtil.getSession()){
			Transaction tran = ses.beginTransaction();
			ses.merge(wishlist);
			tran.commit();
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error updating the WishList");
			return 0;
		}
	}
	public int deleteWishList(int id) {
		try(Session ses = HibernateUtil.getSession()){
			Transaction tran = ses.beginTransaction();
			WishList wishlist = new WishList();
			wishlist.setWishlist_id(id);
			ses.delete(wishlist);
			tran.commit();
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error updating the WishList");
			return 0;
		}
	}
}
