package com.revature.models;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;

public class UserTest {
	
	
	String EXPECTED_USERNAME = "Sparky2014";
	String EXPECTED_PASSWORD = "password";
	String EXPECTED_FIRST_NAME = "Ben";
	String EXPECTED_LAST_NAME = "Petruziello";
	String EXPECTED_USER_EMAIL = "ben.p@revature.com";
	String EXPECTED_PHONE_NUMBER = "555-555-5555";
	String EXPECTED_PHYSICAL_ADDRESS = "10251 revature way";
	String EXPECTED_CREDIT_CARD_NUMBER = "1524-1521-1587-8596";
	String EXPECTED_CREDIT_CARD_NAME = "Ben Petruziello";
	private static User user;
	
	@BeforeClass
	public static void setBeforeClass() throws Exception{
		user = new User("Sparky2014", "password", "Ben", "Petruziello", "ben.p@revature.com", "555-555-5555", "10251 revature way", "1524-1521-1587-8596", "Ben Petruziello");
	}

	@Test
	public void testUserFirstName() throws Exception {
		assertEquals(EXPECTED_FIRST_NAME, user.getFirst_name());
		
	}
	
	@Test
	public void testUserlastName() throws Exception {
		assertEquals(EXPECTED_LAST_NAME, user.getLast_name());
		
	}
	
	@Test
	public void testUserUsername() throws Exception {
		assertEquals(EXPECTED_USERNAME, user.getUsername());
		
	}
	
	@Test
	public void testUserPassword() throws Exception {
		assertEquals(EXPECTED_PASSWORD, user.getPassword());
		
	}
	
	@Test
	public void testUserEmail() throws Exception {
		assertEquals(EXPECTED_USER_EMAIL, user.getEmail_address());
		
	}
	
	@Test
	public void testUserPhoneNumber() throws Exception {
		assertEquals(EXPECTED_PHONE_NUMBER, user.getPhone_number());
		
	}
	
	@Test
	public void testUserPhysicalAddress() throws Exception {
		assertEquals(EXPECTED_PHYSICAL_ADDRESS, user.getPhysical_address());
		
	}
	
	@Test
	public void testUserCreditCardNumber() throws Exception {
		assertEquals(EXPECTED_CREDIT_CARD_NUMBER, user.getCredit_card_number());
		
	}
	
	@Test
	public void testUserCreditCardName() throws Exception {
		assertEquals(EXPECTED_CREDIT_CARD_NAME, user.getCredit_card_name());
		
	}

}
