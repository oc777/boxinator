package com.oc.boxinator.model;

public class Country {
    private int id;
    private String name;
    private double multiplier;

    public Country(int countryId, String country, double shippingMultiplier) {
        id = countryId;
        name = country;
        multiplier = shippingMultiplier;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getMultiplier() {
        return multiplier;
    }

    public void setName(String country) {
        name = country;
    }

    public void setMultiplier(double shippingMultiplier) {
        multiplier = shippingMultiplier;
    }
}

