package com.hepha.simpleboard.repository;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.hepha.simpleboard.model.Book;

@Repository
public class NamedParameterJdbcBookRepository extends jdbcBookRepository {
    
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;


    private final Logger logger = LogManager.getLogger(NamedParameterJdbcBookRepository.class);

    @Override
    public int update(Book book){
        //return namedParameterJdbcTemplate.update("update books set title = :title where id=:id", new BeanPropertySqlParameterSource(book));

        logger.debug("=======================> namedParameterJdbcTemplate");
        logger.debug("");
        String sql = "update Book set title = :title where id=:id";

        SqlParameterSource namedParameters = new MapSqlParameterSource()
        .addValue("title", book.getTitle())
        .addValue("id", book.getId());

        return namedParameterJdbcTemplate.update(sql, namedParameters);
        
    }

}
