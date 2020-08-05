package com.oc.boxinator.service;

import java.util.List;

import com.oc.boxinator.model.Country;
import com.oc.boxinator.repository.CountryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {
    @Autowired
    CountryRepository repository;

    public List<Country> findAll() {
        return repository.findAll();
    }

    public double getMultiplier(int id) {
        return repository.getMultiplier(id);
    }
}