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

import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.repository.PostSql;



@Repository
public class PostJdbcRepository implements PostRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public int getCountByArticleType(String article_type) {
        SqlParameterSource namedParameters = new MapSqlParameterSource().addValue("article_type", article_type);
        return namedParameterJdbcTemplate.queryForObject(PostSql.GET_ARTICLE_COUNT_BY_TYPE, namedParameters, Integer.class);
    }

    @Override
    public List<Post> findAll() {
        return namedParameterJdbcTemplate.query(PostSql.SELECT, EmptySqlParameterSource.INSTANCE, (rs, rowNum) -> new Post(
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
    public int create(Post article) {
        return namedParameterJdbcTemplate.update(PostSql.CREATE, new BeanPropertySqlParameterSource(article));
    }

    @Override
    public Optional<Post> findyId(String id) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

    @Override
    public List<Post> getPostByBoardId(String id){
        String query = "SELECT ID, TITLE, CONTENT, ARTICLE_TYPE, DELETE_FLG, CRE_ID, CRE_DT, UPD_ID, UPD_DT FROM ARTICLE WHERE ";

        SqlParameterSource namedParams = new SqlParameterSource() 
        return namedParameterJdbcTemplate.queryForObject(query, null, null)
    }

    @Override
    public int update(Post article) {
        return namedParameterJdbcTemplate.update(PostSql.UPDATE, new BeanPropertySqlParameterSource(article));      
    }

    @Override
    public int delete(Post article) {
        return namedParameterJdbcTemplate.update(PostSql.DELETE, new BeanPropertySqlParameterSource(article));
    }


}
