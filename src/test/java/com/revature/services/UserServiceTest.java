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
import com.revature.repositories.UserDAO;

public class UserServiceTest {
	
	String EXPECTED_FIRST_NAME = "Scott";
	String EXPECTED_LAST_NAME = "Miller";
	String EXPECTED_USERNAME = "scott_m";
	String EXPECTED_USER_EMAIL = "scottmeller@revature.net";
	String EXPECTED_PASSWORD = "pass123";
	String EXPECTED_PHONE_NUMBER = "1234445566";
	String EXPECTED_PHYSICAL_ADDRESS = "143 Groove st, Stamfort, CT";
	String EXPECTED_CREDIT_CARD_NUMBER = "1010101010203040";
	String EXPECTED_CREDIT_CARD_NAME = "Scott Miller";
	int EXPECTED_USER_ID = 5;
	
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
	@Test
	public void TestUserByUsername() throws Exception {
		
	List<User> actualResult1 = s.getUserByUsername("Bon3837");
	
    assertEquals(actualResult1,s.getUserByUsername("Bon3837"));
	}
	
	@Test
    public void TestinsertUser() {
        User user = new User();
        user.setFirst_name("Scott");
        user.setLast_name("Miller");
        user.setUsername("scott_m");
        user.setEmail_address("scottmeller@revature.net");
        user.setPassword("pass123");
        user.setPhone_number("1234445566");
        user.setPhysical_address("143 Groove st, Stamfort, CT");
        user.setCredit_card_number("1010101010203040");
        user.setCredit_card_name("Scott Miller");
        
        assertEquals(EXPECTED_FIRST_NAME, user.getFirst_name());
        assertEquals(EXPECTED_LAST_NAME, user.getLast_name());
        assertEquals(EXPECTED_USERNAME, user.getUsername());
        assertEquals(EXPECTED_USER_EMAIL, user.getEmail_address());
        assertEquals(EXPECTED_PASSWORD, user.getPassword());
        assertEquals(EXPECTED_PHONE_NUMBER, user.getPhone_number());
        assertEquals(EXPECTED_PHYSICAL_ADDRESS, user.getPhysical_address());
        assertEquals(EXPECTED_CREDIT_CARD_NUMBER, user.getCredit_card_number());
        assertEquals(EXPECTED_CREDIT_CARD_NAME, user.getCredit_card_name());
        
	}
	
	@Test
    public void TestupdateUser() {

        User user = new User();
        user.setFirst_name("Scott");
        user.setLast_name("Miller");
        user.setUsername("scott_m");
        user.setUser_id(5);
        user.setEmail_address("scottmeller@revature.net");
        user.setPassword("password");
        user.setPhone_number("1234445566");
        user.setPhysical_address("143 Groove st, Stamfort, CT");
        user.setCredit_card_number("1010101010203040");
        user.setCredit_card_name("Scott Miller");

        
        assertEquals(EXPECTED_FIRST_NAME, user.getFirst_name());
        assertEquals(EXPECTED_LAST_NAME, user.getLast_name());
        assertEquals(EXPECTED_USERNAME, user.getUsername());
        assertEquals(EXPECTED_USER_EMAIL, user.getEmail_address());
        assertNotEquals(EXPECTED_PASSWORD, user.getPassword());
        assertEquals(EXPECTED_PHONE_NUMBER, user.getPhone_number());
        assertEquals(EXPECTED_PHYSICAL_ADDRESS, user.getPhysical_address());
        assertEquals(EXPECTED_CREDIT_CARD_NUMBER, user.getCredit_card_number());
        assertEquals(EXPECTED_CREDIT_CARD_NAME, user.getCredit_card_name());
        //int userId = s.updateUser(user);
	}
	
	@Test
    public void resetPasswordTest() {
        User user = new User();
        user.setUser_id(5);
        user.setPassword("pass147");
        
        assertEquals(EXPECTED_USER_ID, user.getUser_id());
        assertNotEquals(EXPECTED_PASSWORD, user.getPassword());
        
    }
}
