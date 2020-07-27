package com.oc.boxinator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {

    // TODO: add custom error handling
    // @EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
        System.out.println("Hello Spring App!");
    }
}
