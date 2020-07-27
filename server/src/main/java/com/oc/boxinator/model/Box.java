package com.oc.boxinator.model;

public class Box {
    private String receiver;
    private double weight;
    private String color;
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