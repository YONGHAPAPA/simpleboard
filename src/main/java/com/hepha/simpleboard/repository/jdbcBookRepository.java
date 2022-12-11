package com.hepha.simpleboard.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.hepha.simpleboard.model.Book;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

@Repository
public class jdbcBookRepository implements BookRepository {

    private final Logger log = LogManager.getLogger(jdbcBookRepository.class);

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

        log.debug("jdbcBookRepository ====================> ");
        String sql = "update Bookss set title = ? where id = ?";
        return jdbcTemplate.update(sql, book.getName(), book.getId());
    }
   
}
