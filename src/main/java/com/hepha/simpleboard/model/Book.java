package com.hepha.simpleboard.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class Book {
    private String id;
    private String name;
    private String title;

    public Book(String id, String name, String title){
        this.id = id;
        this.name = name;
        this.title = title;
    }
}
