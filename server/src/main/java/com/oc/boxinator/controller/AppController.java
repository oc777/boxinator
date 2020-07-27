package com.oc.boxinator.controller;

import java.util.List;

import com.oc.boxinator.model.Box;
import com.oc.boxinator.repository.BoxRepositoryJDBC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {
    @Autowired
    BoxRepositoryJDBC repository;

    @RequestMapping("/")
    public String index() {
        return "Welcome to the Boxinator";
    }

    @GetMapping("/listboxes")
    public List<Box> getAll() {
        System.out.println("Get all boxes");
        return repository.findAll();
    }

    @PostMapping("/addbox")
    int addBox(@RequestBody Box newBox) {
        return repository.addBox(newBox);
    }

}