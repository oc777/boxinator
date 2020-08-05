package com.oc.boxinator.controller;

import java.util.List;

import javax.validation.Valid;
import com.oc.boxinator.model.Box;
import com.oc.boxinator.model.Country;
import com.oc.boxinator.service.BoxService;
import com.oc.boxinator.service.CountryService;

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
    BoxService box;

    @Autowired
    CountryService country;

    @RequestMapping("/")
    public String index() {
        return "Welcome to the Boxinator";
    }

    @GetMapping("/api/listboxes")
    public List<Box> getAll() {
        System.out.println("Get all boxes");
        return box.findAll();
    }

    @PostMapping("/api/addbox")
    public ResponseEntity<String> addBox(@Valid @RequestBody Box newBox) {
        System.out.println("Add box");

        box.addBox(newBox);

        return new ResponseEntity<>(
            "Box added successfully",
            HttpStatus.CREATED
        );
    }

    @GetMapping("/api/listcountries")
    public List<Country> getAllCountries() {
        System.out.println("Get all countries");
        return country.findAll();
    }

}