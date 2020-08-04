package com.oc.boxinator;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import javax.sql.DataSource;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import net.minidev.json.JSONObject;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

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
    public void getIndexTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
            .get("/")
            .contentType("application/json"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").value("Welcome to the Boxinator"))
            .andDo(print())
            ;
    }

    @Test
    public void getAllBoxesTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
            .get("/api/listboxes")
            .contentType("application/json"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andDo(print())
            .andExpect(jsonPath("$[0].weight").value(1.2))
            .andExpect(jsonPath("$[0].color").value("220,220,220"))
            .andExpect(jsonPath("$[0].destination").value(1))
            .andExpect(jsonPath("$[0].nameReceiver").value("Bilbo Baggings"))
            .andExpect(jsonPath("$[0].shippingCost").value(1.56))
            .andExpect(jsonPath("$[1].weight").value(3.2))
            .andExpect(jsonPath("$[1].color").value("120,120,120"))
            .andExpect(jsonPath("$[1].destination").value(2))
            .andExpect(jsonPath("$[1].nameReceiver").value("Frodo Baggings"))
            .andExpect(jsonPath("$[1].shippingCost").value(12.8))
            ;
    }

    @Test
    public void getAllCountriesTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
            .get("/api/listcountries")
            .contentType("application/json"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andDo(print())
            .andExpect(jsonPath("$[0].id").value(1))
            .andExpect(jsonPath("$[0].name").value("Sweden"))
            .andExpect(jsonPath("$[0].multiplier").value(1.3))
            .andExpect(jsonPath("$[1].id").value(2))
            .andExpect(jsonPath("$[1].name").value("China"))
            .andExpect(jsonPath("$[1].multiplier").value(4))
            .andExpect(jsonPath("$[2].id").value(3))
            .andExpect(jsonPath("$[2].name").value("Brazil"))
            .andExpect(jsonPath("$[2].multiplier").value(8.6))
            .andExpect(jsonPath("$[3].id").value(4))
            .andExpect(jsonPath("$[3].name").value("Australia"))
            .andExpect(jsonPath("$[3].multiplier").value(7.2))
        ;
    }

    @Test
    public void postBoxSuccessTest() throws Exception {
        JSONObject requestBody = new JSONObject();
        requestBody.put("nameReceiver", "Aragorn");
        requestBody.put("weight", "0.1");
        requestBody.put("color", "222,222,222");
        requestBody.put("destination", "1");

        mockMvc.perform(MockMvcRequestBuilders
            .post("/api/addbox")
            .contentType("application/json")
            .content(requestBody.toString())
            .accept("application/json"))
            .andExpect(status().isCreated())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$").value("Box added successfully"))
            .andDo(print())
            ;
    }

    @Test
    public void postBoxValidateEmptyNameErrorTest() throws Exception {
        JSONObject requestBody = new JSONObject();
        requestBody.put("nameReceiver", " ");
        requestBody.put("weight", "0.1");
        requestBody.put("color", "222,222,222");
        requestBody.put("destination", "1");

        mockMvc.perform(MockMvcRequestBuilders
            .post("/api/addbox")
            .contentType("application/json")
            .content(requestBody.toString())
            .accept("application/json"))
            .andExpect(status().isBadRequest())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$.errors").value("Receiver's name cannot be empty"))
            .andDo(print())
            ;
    }
    
    @Test
    public void postBoxValidateCountryNotFoundErrorTest() throws Exception {
        JSONObject requestBody = new JSONObject();
        requestBody.put("nameReceiver", "Golum");
        requestBody.put("weight", "0.1");
        requestBody.put("color", "222,222,222");
        requestBody.put("destination", "11");

        mockMvc.perform(MockMvcRequestBuilders
            .post("/api/addbox")
            .contentType("application/json")
            .content(requestBody.toString())
            .accept("application/json"))
            .andExpect(status().isBadRequest())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$.errors").value("country not found"))
            .andDo(print())
            ;
    }
}