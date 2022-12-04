package com.hepha.simpleboard.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.hepha.simpleboard.Book;

@Repository
public class jdbcBookRepository implements BookRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int count() {
        return jdbcTemplate.queryForObject("select count(*) from Book", Integer.class);
    }

    @Override
    public int save(Book book) {
        return jdbcTemplate.update("insert into Book(id, title) values (?,?)",book.getId(), book.getName());
        
    }

    @Override
    public int update(Book book) {
        return jdbcTemplate.update("update book set title = ? where id = ?", book.getName(), book.getId());
    }
   
}
