package com.sunbeaminfo.ecomm.model;

public class Menu_list {
    int category_id;
    int menu_id;
    String menu_name;
    int price;

    public Menu_list() {

    }

    public Menu_list(int category_id, int menu_id, String menu_name, int price) {
        this.category_id = category_id;
        this.menu_id = menu_id;
        this.menu_name = menu_name;
        this.price = price;

    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public int getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(int menu_id) {
        this.menu_id = menu_id;
    }

    public String getMenu_name() {
        return menu_name;
    }

    public void setMenu_name(String menu_name) {
        this.menu_name = menu_name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


}