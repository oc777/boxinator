package com.oc.boxinator;

import static org.junit.Assert.assertThrows;

import javax.sql.DataSource;

import com.oc.boxinator.model.Box;
import com.oc.boxinator.repository.BoxRepositoryJDBC;
import com.oc.boxinator.repository.CountryRepository;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@SpringBootTest
@RunWith(SpringRunner.class)
public class RepositoryTest {

    @Autowired
    CountryRepository cr;
    @Autowired
    BoxRepositoryJDBC br;
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
    public void getAllCountriesTest() {
        Assert.assertEquals(cr.findAll().size(), 4);
    }


    @Test
    public void getAllBoxesTest() {
        int rows = jdbc.queryForObject("SELECT COUNT(*) FROM boxes", Integer.class);
        Assert.assertEquals(br.findAll().size(), rows);
    }

    @Test
    public void calculateShippingCostTest() {
        double weight = 1.2;
        double multiplier = 4;
        int country = 2;
        Assert.assertEquals(weight*multiplier, br.calculateShippingCost(country, weight), 0);
    }

    @Test
    public void calculateShippingCostErrorTest() {
        assertThrows(RuntimeException.class, () -> {
            br.calculateShippingCost(10, 2);
        });
    }

    @Test
    public void addBoxErrorTest() {
        assertThrows(RuntimeException.class, () -> {
            br.addBox(new Box("", 1, "0,0,0", 1, 0));
        });
    }

    @Test
    public void addBoxSuccessTest() {
        Assert.assertEquals(1, br.addBox(new Box("Aragorn", 1, "0,0,0", 1, 0)));
    }

}