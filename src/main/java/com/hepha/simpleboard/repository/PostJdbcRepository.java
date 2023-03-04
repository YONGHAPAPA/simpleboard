package com.hepha.simpleboard.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.EmptySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.hepha.simpleboard.model.BoardPost;
import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.repository.PostSql;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;


@Repository
public class PostJdbcRepository implements PostRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private final Logger logger = LogManager.getLogger(PostJdbcRepository.class);


    @Override
    public int getCountByArticleType(String article_type) {
        SqlParameterSource namedParameters = new MapSqlParameterSource().addValue("article_type", article_type);
        return namedParameterJdbcTemplate.queryForObject(PostSql.GET_ARTICLE_COUNT_BY_TYPE, namedParameters, Integer.class);
    }


    @Override
    public List<BoardPost> findAll() {
        return namedParameterJdbcTemplate.query(PostSql.SELECT, EmptySqlParameterSource.INSTANCE, (rs, rowNum) -> new BoardPost(
            rs.getString("id"), 
            rs.getString("title"), 
            rs.getString("content"), 
            rs.getString("post_type"), 
            rs.getString("delt_flg"),
            rs.getString("cre_id"), 
            rs.getDate("cre_dt"), 
            rs.getString("upd_id"), 
            rs.getDate("upd_dt"),
            rs.getString("primary_flg"),
            rs.getInt("total")
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
    public List<BoardPost> getPostByBoardId(String id, Integer limit, Integer pagenum){

        String query = "WITH BOARD_TOTAL AS (SELECT COUNT(P.ID) AS TOTAL " 
        + "FROM POST P, POST_REF_BOARD R "
        + "WHERE P.ID = R.POST_ID "
        + "AND R.BOARD_ID = %s ) "
        + "SELECT P.ID, P.TITLE, P.CONTENT, P.POST_TYPE, P.DELT_FLG, P.CRE_ID, P.CRE_DT, P.UPD_ID, P.UPD_DT, R.PRIMARY_FLG, (SELECT TOTAL FROM BOARD_TOTAL) AS TOTAL " 
        + "FROM POST P, POST_REF_BOARD R WHERE P.ID = R.ID AND R.BOARD_ID = %s "
        + "LIMIT %s "
        + "OFFSET %s ";

        query = String.format(query, id, id, limit, limit * (pagenum - 1));
        //logger.debug(query);

        try{
            // SqlParameterSource namedParams = new MapSqlParameterSource()
            // .addValue("boardId", id);
            return namedParameterJdbcTemplate.query(query, EmptySqlParameterSource.INSTANCE, (rs, rowNum) -> new BoardPost(
                rs.getString("id"), 
                rs.getString("title"), 
                rs.getString("content"), 
                rs.getString("post_type"), 
                rs.getString("delt_flg"),
                rs.getString("cre_id"), 
                rs.getDate("cre_dt"), 
                rs.getString("upd_id"), 
                rs.getDate("upd_dt"),
                rs.getString("primary_flg"),
                rs.getInt("total")
            ));

        } catch(DataAccessException ex){
            throw ex;
        }
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
