package com.oc.boxinator.model;

public class Country {
    private String name;
    private double multiplier;

    public Country(String country, double shippingMultiplier) {
        name = country;
        multiplier = shippingMultiplier;
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

