package com.oc.boxinator.controller;

import java.util.List;

import javax.validation.Valid;
import com.oc.boxinator.model.Box;
import com.oc.boxinator.model.Country;
import com.oc.boxinator.repository.BoxRepositoryJDBC;
import com.oc.boxinator.repository.CountryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {
    @Autowired
    BoxRepositoryJDBC repositoryBox;

    @Autowired
    CountryRepository repositoryCountry;

    @RequestMapping("/")
    public String index() {
        return "Welcome to the Boxinator";
    }

    @GetMapping("/api/listboxes")
    public List<Box> getAll() {
        System.out.println("Get all boxes");
        return repositoryBox.findAll();
    }

    @PostMapping("/api/addbox")
    public ResponseEntity<String> addBox(@Valid @RequestBody Box newBox) {
        System.out.println("Add box");

        repositoryBox.addBox(newBox);

        return new ResponseEntity<>(
            "Box added successfully",
            HttpStatus.CREATED
        );
    }

    @GetMapping("/api/listcountries")
    public List<Country> getAllCountries() {
        System.out.println("Get all countries");
        return repositoryCountry.findAll();
    }

}