package com.revature.services;
import static org.junit.Assert.*;

import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.models.User;

import junit.framework.Assert;

public class AuthServiceTest {
	
	private static AuthServices s;
	
	private User test_User;

	
	
	@BeforeClass
	public static void setBeforeClass() {
		s = new AuthServices();	
	}
	
	@Before
	public void setUp() {
	test_User = new User("Bon3837","Sparky2014!");
		
	}
	
	
	
	@Test
	public void testLogin() {
		
	int actualResult = s.login(test_User.getUsername(),test_User.getPassword());
	//assertEquals(username, password);
    assertEquals(actualResult, 1);
	}
  
	
 }

