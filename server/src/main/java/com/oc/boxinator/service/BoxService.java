package com.oc.boxinator.service;

import java.util.List;

import com.oc.boxinator.model.Box;
import com.oc.boxinator.repository.BoxRepositoryJDBC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoxService {
    @Autowired
    BoxRepositoryJDBC repository;

    @Autowired
    CountryService country;

    public List<Box> findAll() {
        return repository.findAll();
    }

    public int addBox(Box box) {
        double shippingCost = calculateShippingCost(box.getDestination(), box.getWeight());
        return repository.addBox(box, shippingCost);
    }

    public double calculateShippingCost(int countryId, double weight) {
        double multiplier = country.getMultiplier(countryId);
        return weight * multiplier;
    }
}