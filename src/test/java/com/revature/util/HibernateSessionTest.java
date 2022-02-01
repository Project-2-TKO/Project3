package com.revature.util;
import org.hibernate.Session;
import org.junit.BeforeClass;
import org.junit.Test;

import com.revature.utils.HibernateUtil;

import java.sql.SQLException;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.MatcherAssert.assertThat;



public class HibernateSessionTest {

private static Session hibernateUtil;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
    	hibernateUtil = HibernateUtil.getSession();
    }

    @Test
    public void testSessionFactoryIsAbleToGetConnection() throws SQLException {
       
		Session conn = hibernateUtil;

        assertThat(conn, instanceOf(Session.class));
    }
}
