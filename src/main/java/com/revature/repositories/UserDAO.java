package com.revature.repositories;

import java.util.List;
import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.models.PokeDex;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class UserDAO {
	public List<User> getAllUsers(){
		try(Session ses = HibernateUtil.getSession()){
			List<User> userList = ses.createQuery("From User").list();
			HibernateUtil.closeSession();
			return userList;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting all Users");
			return null;
		}
	}
	public User getUserByUserId(int user_id) {
		try(Session ses = HibernateUtil.getSession()){
			User user = ses.get(User.class, user_id);
			HibernateUtil.closeSession();
			return user;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting User by User Id");
			return null;
		}
	}
	public List<User> getUserByUsername(String username) {
		try(Session ses = HibernateUtil.getSession()){
			Query q = ses.createQuery("FROM User u WHERE u.username = ?0");
			q.setParameter(0,username);
			List<User> user = q.getResultList();
			HibernateUtil.closeSession();
			return user;
		}
		catch(HibernateException e) {
			System.out.println("There was an error getting User by Username");
			return null;
		}
	}
	public int insertUser(User user) {
		try(Session ses = HibernateUtil.getSession()){
			ses.save(user);
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error inserting the User");
			return 0;
		}
	}
//	public int updateUser(User user) {
//		try(Session ses = HibernateUtil.getSession()){
//			Transaction tran = ses.beginTransaction();
//			ses.merge(user);
//			tran.commit();
//			HibernateUtil.closeSession();
//			return 1;
//		}
	public int updateUser(User user) {
		try(Session ses = HibernateUtil.getSession()){
			Transaction tran = ses.beginTransaction();
			System.out.println(user.getUsername()+" "+user.getPassword()+" "+user.getFirst_name()+" "+ user.getLast_name()+" "+user.getEmail_address()+" "+
					user.getPhone_number() +" "+ user.getPhysical_address() +" "+user.getCredit_card_number()+" "+user.getCredit_card_name());
			
			Query q = ses.createQuery("UPDATE User SET username = '" + user.getUsername() + "', password = '" + user.getPassword() + 
					"', first_name = '" + user.getFirst_name() + "', last_name = '" + user.getLast_name() + 
					"', email_address = '" + user.getEmail_address() + "', phone_number = '" + user.getPhone_number() +
					"', physical_address = '" + user.getPhysical_address() + "', credit_card_number = '" + user.getCredit_card_number() +
					"', credit_card_name = '" + user.getCredit_card_name() + "'	WHERE User_id = " + user.getUser_id());
			q.executeUpdate();
			tran.commit();
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error updating the User");
			return 0;
		}
	}
	public int resetPassword(User user) {
		try(Session ses = HibernateUtil.getSession()){
			Transaction tran = ses.beginTransaction();
			System.out.println("im running");
			Query q = ses.createQuery("UPDATE User SET password = '" + user.getPassword() + "' WHERE User_id = " + user.getUser_id());
			q.executeUpdate();
			tran.commit();
			System.out.println("i got here");
			HibernateUtil.closeSession();
			return 1;
		}
		catch(HibernateException e) {
			System.out.println("There was an error reseting the Password");
			e.printStackTrace();
			return 0;
		}
	}
	
}
