package com.oc.boxinator.repository;

import java.util.List;

import com.oc.boxinator.model.Box;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class BoxRepositoryJDBC implements IBoxRepository {

    @Autowired
    private JdbcTemplate jdbc;

    @Override
    public List<Box> findAll() {
        final String sql = "SELECT * FROM boxes";
        List<Box> list = jdbc.query(sql, (rs, rowN) -> 
            new Box(
                rs.getString("receiver"),
                rs.getDouble("weight"),
                rs.getString("color"),
                rs.getInt("destination"),
                rs.getDouble("shipping_cost"))
        );
        return list;
    }

    @Override
    public int addBox(Box box) {
        double shippingCost = calculateShippingCost(box.getDestination(), box.getWeight());
        final String sql = "INSERT " +
        "INTO boxes " +
        "(receiver, weight, color, destination, shipping_cost) " +
        "VALUES " +
        "(?,?,?,?,?)";
        int res = jdbc.update(sql, box.getNameReceiver(), box.getWeight(), box.getColor(), box.getDestination(), shippingCost);
        return res;
    }

    private double calculateShippingCost(int countryID, double weight) {
        final String sql = "SELECT multiplier FROM countries WHERE country_id = ?";
        double multiplier = jdbc.queryForObject(sql, new Object[] {countryID}, double.class);
        double shippingCost = multiplier * weight;
        return shippingCost;
    }

}