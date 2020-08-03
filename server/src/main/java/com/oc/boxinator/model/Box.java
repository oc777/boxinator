package com.oc.boxinator.model;

import javax.validation.constraints.*;

public class Box {
    @NotBlank(message = "Receiver's name cannot be empty")
    private String receiver;
    @Positive(message = "Weight must be a positive number")
    @DecimalMin(value = "0.1", message = "Weight must be minimum 100g")
    private double weight;
    @NotBlank(message = "Color field cannot be empty")
    private String color;
    @Positive(message = "Destination ID must be a positive integer")
    private int destination;
    private double shipping;

    public Box() {}

    public Box(String receiverName, double boxWeight, String rgb, int countryId, double shippingCost) {
        receiver = receiverName;
        weight = boxWeight;
        color = rgb;
        destination = countryId;
        shipping = shippingCost;
    }

    public String getNameReceiver() {
        return receiver;
    }
    public double getWeight() {
        return weight;
    }
    public String getColor() {
        return color;
    }
    public int getDestination() {
        return destination;
    }
    public double getShippingCost() {
        return shipping;
    }

    public void setNameReceiver(String receiverName) {
        receiver = receiverName;
    }
    public void setWeight(double boxWeight) {
        weight = boxWeight;
    }
    public void setColor(String rgb) {
        color = rgb;
    }
    public void setDestination(int countryId) {
        destination = countryId;
    }
    public void setShippingCost(double shippingCost) {
        shipping = shippingCost;
    }
}