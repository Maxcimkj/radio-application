package com.radio.service.model;

public class Style {
    private Long id;
    private String name;

    public Style(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
