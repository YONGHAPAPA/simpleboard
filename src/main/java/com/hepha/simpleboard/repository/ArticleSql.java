package com.hepha.simpleboard.repository;

public class ArticleSql {

    /* 
     * 
     */
    public static final String SELECT = 
    "SELECT ID, TITLE, CONTENT, ARTICLE_TYPE, DELETE_FLG, CRE_ID, CRE_DT, UPD_ID, UPD_DT " + 
    "FROM ARTICLE LIMIT 3";


    public static final String SELECT_BOARD = 
    "SELECT ID, BOARD_NAME, BOARD_TYPE, IFNULL(PARENT_BOARD, 1) AS PARENT_BOARD, DESCRIPTION, CRE_ID, CRE_DT, UPD_ID, UPD_DT " + 
    "FROM BOARD LIMIT 3";

    /*
     * 
     */
    public static final String GET_ARTICLE_COUNT_BY_TYPE = 
    "SELECT COUNT(ID) FROM ARTICLE WHERE ARTICLE_TYPE = :articleType";


    /*
     * 
     */
    public static final String CREATE = 
    "INSERT INTO ARTICLE (ID, TITLE, CONTENT, ARTICLE_TYPE, DELETE_FLG, CRE_ID, CRE_DT, UPD_ID, UPD_DT) VALUES " + 
    "(:id, :title, :content, :articleType, :deleteFlg, :creId, CURDATE(), :updId, CURDATE())";


    /*
     * 
     */
    public static final String UPDATE = 
    "UPDATE ARTICLE SET TITLE = :title, CONTENT = :content, ARTICLE_TYPE = :articleType, DELETE_FLG = :deleteFlg, UPD_ID = :updId, UPD_DT = CURDATE()" + 
    "WHERE ID = :id";


    /*
     * 
     */
    public static final String DELETE = 
    "DELETE FROM ARTICLE WHERE ID = :id";
    

}
