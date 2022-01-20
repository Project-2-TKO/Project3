package com.revature.repositories;

import java.util.List;
import javax.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class UserDAO {
	public void insertUser(User user) {
		Session ses = HibernateUtil.getSession();
		ses.save(user);
		HibernateUtil.closeSession();
	}
	public List<User> getAllUsers(){
		Session ses = HibernateUtil.getSession();
		List<User> userList = ses.createQuery("From User").list();
		HibernateUtil.closeSession();
		return userList;
	}
	public User getUserByUserId(int user_id) {
		Session ses = HibernateUtil.getSession();
		User user = ses.get(User.class, user_id);
		HibernateUtil.closeSession();
		return user;
	}
	public List<User> getUserByUsername(String username) {
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM User u WHERE u.username = ?0");
		q.setParameter(0,username);
		List<User> user = q.getResultList();
		HibernateUtil.closeSession();
		return user;
	}
	public void updateUser(User user) {
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		ses.merge(user);
		tran.commit();
		HibernateUtil.closeSession();
	}
	
}
