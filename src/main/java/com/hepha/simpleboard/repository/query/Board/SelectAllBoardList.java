package com.hepha.simpleboard.repository.query.board;

public class SelectAllBoardList {
    public static final String SQL = 
    "WITH RECURSIVE CTE AS " +
    "( " + 
    " SELECT " + 
    " ID, " +
    " BOARD_NAME, " +
    " BOARD_TYPE, " + 
    " PARENT_BOARD, " + 
    " DESCRIPTION, " + 
    " SEQ, " + 
    " CAST(ID AS CHAR(100) CHARACTER SET UTF8) AS ID_PATH, " +
    " BOARD_NAME AS BOARD_PATH, " +
    " 1 AS LEVEL, " +
    " CRE_ID, " + 
    " CRE_DT, " + 
    " UPD_ID, " + 
    " UPD_DT " + 
    " FROM " +
    " BOARD " +
    " WHERE PARENT_BOARD = 0 UNION ALL " +
    " SELECT " +
    " B2.ID, " +
    " B2.BOARD_NAME, "+
    " B2.BOARD_TYPE, " + 
    " B2.PARENT_BOARD, " + 
    " B2.DESCRIPTION, " + 
    " B2.SEQ, " + 
    " CONCAT(CTE.ID_PATH, '>', B2.ID) AS ID_PATH, " + 
    " CONCAT(CTE.BOARD_PATH, '>', B2.BOARD_NAME) AS BOARD_PATH, "+
    " 1 + LEVEL AS LEVEL, " +
    " B2.CRE_ID, " + 
    " B2.CRE_DT, " + 
    " B2.UPD_ID, " + 
    " B2.UPD_DT " + 
    " FROM CTE " +
    " INNER JOIN BOARD B2 ON B2.PARENT_BOARD = CTE.ID "+
    ") "+
    "SELECT ID, BOARD_NAME, BOARD_TYPE, PARENT_BOARD, DESCRIPTION, SEQ, LEVEL, ID_PATH, BOARD_PATH, CRE_ID, CRE_DT, UPD_ID, UPD_DT "+
    "FROM CTE "+
    "ORDER BY ID_PATH ASC ";
}