package com.radio.service.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Style {
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String name;

    public Style(String name) {
        this.name = name;
    }

    private Style() {
        //for jpa only
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
