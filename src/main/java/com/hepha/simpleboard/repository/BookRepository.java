package com.hepha.simpleboard.repository;

import com.hepha.simpleboard.model.Book;

public interface BookRepository {
    int count();

    int save(Book book);

    int update(Book book);
    
}
