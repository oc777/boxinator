package com.oc.boxinator.repository;

import java.util.List;

import com.oc.boxinator.model.Country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CountryRepository {
    @Autowired
    private JdbcTemplate jdbc;

    public List<Country> findAll() {
        final String sql = "SELECT * FROM countries";
        List<Country> list = jdbc.query(sql, (rs, rowN) -> 
            new Country(
                rs.getInt("country_id"),
                rs.getString("name"),
                rs.getDouble("multiplier"))
        );
        return list;
    }

    public double getMultiplier(int id) {
        final String sql = "SELECT multiplier FROM countries WHERE country_id = ?";
        double multiplier = jdbc.queryForObject(sql, new Object[] {id}, double.class);
        return multiplier;
    }
}