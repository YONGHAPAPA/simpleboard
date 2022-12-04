package com.hepha.simpleboard;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter

public class Book {
    private String id;
    private String name;

    public Book(String id, String name){
        this.id = id;
        this.name = name;
    }
}
