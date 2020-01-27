package com.sunbeaminfo.ecomm.model;

public class Product {
    String title;
    String description;
    float price;
    int id;
    String image;

    public Product() {
    }

    public Product(String title, String description, float price, int id, String image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.id = id;
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
