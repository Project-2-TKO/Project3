package com.revature.repositories;

import java.util.List;

import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.models.Reviews;
import com.revature.utils.HibernateUtil;

public class ReviewsDAO {
	public List<Reviews> getAllReviewss(){
		try(Session ses = HibernateUtil.getSession()){
			List<Reviews> movieList = ses.createQuery("FROM Reviews").list();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting all Reviews");
			return null;
		}
	}
	public Reviews getReviewsByReviewsId(int id){
		try(Session ses = HibernateUtil.getSession()){
			Reviews movie = ses.get(Reviews.class, id);
			HibernateUtil.closeSession();
			return movie;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting Reviews by Reviews Id");
			return null;
		}
	}
	public List<Reviews> getReviewsByUserId(int user_id){
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM Reviews r WHERE r.user.user_id = ?0");
			q.setParameter(0, user_id);
			List<Reviews> movieList = q.getResultList();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting Reviews by User Id");
			return null;
		}
		
	}
	public List<Reviews> getReviewsByPokemonId(int pokemon_id){
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM Reviews r WHERE pokemon_id = ?0");
			q.setParameter(0, pokemon_id);
			List<Reviews> movieList = q.getResultList();
			HibernateUtil.closeSession();
			return movieList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting Reviews by Pokemon Id");
			return null;
		}
	}
	public int insertReviews(Reviews reviews) {
		try(Session ses = HibernateUtil.getSession()){
			ses.save(reviews);
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error inserting into the Reviews");
			return 0;
		}
	}
	public int updateReviews(Reviews reviews) {
		try(Session ses = HibernateUtil.getSession()){
			Transaction tran = ses.beginTransaction();
			ses.merge(reviews);
			tran.commit();
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error updating the Reviews");
			return 0;
		}
	}
}
