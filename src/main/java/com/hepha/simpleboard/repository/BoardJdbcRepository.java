package com.hepha.simpleboard.repository;

import java.util.Collections;
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

import com.hepha.simpleboard.model.Board;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import com.hepha.simpleboard.utils.coSql;
import com.hepha.simpleboard.repository.query.Board.SelectAllBoardList;


@Repository
public class BoardJdbcRepository implements BoardRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private final Logger logger = LogManager.getLogger(BoardJdbcRepository.class);

    private coSql utilSql = new coSql();

    @Override
    public int getCountByBoardType(String boardType) {
        SqlParameterSource namedParameters = new MapSqlParameterSource().addValue("article_type", boardType);
        return namedParameterJdbcTemplate.queryForObject(ArticleSql.GET_ARTICLE_COUNT_BY_TYPE, namedParameters, Integer.class);
    }

    @Override
    public List<Board> findAll() {

        List<Board> resultList = Collections.emptyList();

        try{

            String SQL_SELECT_BOARD = SelectAllBoardList.SQL;
            logger.debug("SQL_SELECT_BOARD : " + SQL_SELECT_BOARD);
           
            // Board item = new Board();
            // item.id = 1;
            // val.add(item);

            //String SQL_SELECT_BOARD = "SELECT ID, BOARD_NAME, BOARD_TYPE, IFNULL(PARENT_BOARD, 0) AS PARENT_BOARD, '' AS ID_PATH, '' AS BOARD_PATH, 1 AS LEVEL, DESCRIPTION, CRE_ID, CRE_DT, UPD_ID, UPD_DT FROM BOARD";
            // String SQL_SELECT_BOARD = "";

            SQL_SELECT_BOARD = SelectAllBoardList.SQL;

            logger.debug("SQL_SELECT_BOARD : " + SQL_SELECT_BOARD);
            
            //2023.01.25 쿼리와 생성자 파라메터가 서로 매핑시 타입이 맞지 않거나 NULL 일경우 컴파일 오류발생 주의
            resultList =  namedParameterJdbcTemplate.query(SQL_SELECT_BOARD, EmptySqlParameterSource.INSTANCE, (rs, rowNum) -> new Board(
                rs.getInt("ID"),
                rs.getString("BOARD_NAME"), 
                rs.getString("BOARD_TYPE"), 
                rs.getInt("PARENT_BOARD"), 
                rs.getString("ID_PATH"), 
                rs.getString("BOARD_PATH"),
                rs.getInt("LEVEL"),
                rs.getInt("SEQ"),
                rs.getString("DESCRIPTION"),
                rs.getString("CRE_ID"), 
                rs.getDate("CRE_DT"), 
                rs.getString("UPD_ID"), 
                rs.getDate("UPD_DT")
            ));

        }catch(Exception e){
            logger.error(e.getMessage());
        }

        return resultList;
    }

    @Override
    public int create(Board board) {
        return namedParameterJdbcTemplate.update(ArticleSql.CREATE, new BeanPropertySqlParameterSource(board));
    }

    @Override
    public Optional<Board> findyId(String id) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }

    @Override
    public int update(Board board) {
        return namedParameterJdbcTemplate.update(ArticleSql.UPDATE, new BeanPropertySqlParameterSource(board));      
    }

    @Override
    public int delete(Board board) {
        return namedParameterJdbcTemplate.update(ArticleSql.DELETE, new BeanPropertySqlParameterSource(board));
    }
}
