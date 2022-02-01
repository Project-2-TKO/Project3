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

public class UserServiceTest {
	
    private static UserServices s;
	
	private List<User> actualResult;
	
	
	@BeforeClass
	public static void setBeforeClass() {
		s = new UserServices();	
	}
	
	
	@Test
	public void TestAllUsers() throws Exception {
		
	actualResult = s.getAllUsers();
	
    assertEquals(actualResult, s.getAllUsers());
	}
  
	
	@Test
	public void TestUserByUserId() throws Exception {
		
	User actualResult1 = s.getUserByUserId(1);
	
    assertEquals(actualResult1,s.getUserByUserId(1));
	}
}
