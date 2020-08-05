package com.oc.boxinator;

import com.oc.boxinator.service.BoxService;

import javax.sql.DataSource;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ServiceTest {
    @Autowired
    BoxService bs;

    @Autowired
    JdbcTemplate jdbc;

    DataSource dataSource;
    @Before
    public void setup() {
        dataSource = new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .addScript("classpath:h2/init.sql")
            .addScript("classpath:h2/test-data.sql")
            .build();
    }

    @Test
    public void calculateShippingCostTest() {
        Assert.assertEquals(1.3, bs.calculateShippingCost(1, 1.0), 0);
    }
}