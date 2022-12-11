package com.hepha.simpleboard.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.EmptySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.hepha.simpleboard.model.Article;
import com.hepha.simpleboard.repository.ArticleSql;



@Repository
public class ArticleJdbcRepository implements ArticleRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public int getCountByArticleType(String article_type) {
        SqlParameterSource namedParameters = new MapSqlParameterSource().addValue("article_type", article_type);
        return namedParameterJdbcTemplate.queryForObject(ArticleSql.GET_ARTICLE_COUNT_BY_TYPE, namedParameters, Integer.class);
    }

    @Override
    public List<Article> findAll() {
        return namedParameterJdbcTemplate.query(ArticleSql.SELECT, EmptySqlParameterSource.INSTANCE, (rs, rowNum) -> new Article(
            rs.getString("id"), 
            rs.getString("title"), 
            rs.getString("content"), 
            rs.getString("article_type"), 
            rs.getString("delete_flg"),
            rs.getString("cre_id"), 
            rs.getDate("cre_dt"), 
            rs.getString("upd_id"), 
            rs.getDate("upd_dt")
        ));
    }

    @Override
    public int create(Article article) {
        return namedParameterJdbcTemplate.update(ArticleSql.CREATE, new BeanPropertySqlParameterSource(article));
    }

    @Override
    public Optional<Article> findyId(String id) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

    @Override
    public int update(Article article) {
        return namedParameterJdbcTemplate.update(ArticleSql.UPDATE, new BeanPropertySqlParameterSource(article));      
    }

    @Override
    public int delete(Article article) {
        return namedParameterJdbcTemplate.update(ArticleSql.DELETE, new BeanPropertySqlParameterSource(article));
    }
}
