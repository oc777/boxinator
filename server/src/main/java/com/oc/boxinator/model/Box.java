package com.oc.boxinator.model;

public class Box {
    private String receiver;
    private double weight;
    private String color;
    private String destination;

    public Box() {}

    public Box(String receiverName, double boxWeight, String rgb, String country) {
        receiver = receiverName;
        weight = boxWeight;
        color = rgb;
        destination = country;
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
    public String getDestination() {
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
    public void setDestination(String String) {
        destination = String;
    }
}