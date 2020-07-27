package com.oc.boxinator.model;

public class Box {
    private String receiver;
    private double weight;
    private String color;
    private int destination;

    public Box() {}

    public Box(String receiverName, double boxWeight, String rgb, int countryId) {
        receiver = receiverName;
        weight = boxWeight;
        color = rgb;
        destination = countryId;
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
}