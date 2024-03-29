WITH RECURSIVE CTE AS (
SELECT 
ID, 
BOARD_NAME, 
PARENT_BOARD, CAST(ID AS CHAR(100) CHARACTER SET UTF8) AS ID_PATH,
BOARD_NAME AS BOARD_PATH,
1 AS LEVEL
FROM
BOARD
WHERE PARENT_BOARD = 0 UNION ALL
SELECT 
B2.ID, 
B2.BOARD_NAME, 
B2.PARENT_BOARD, CONCAT(CTE.ID_PATH, '>', B2.ID) AS ID_PATH, CONCAT(CTE.BOARD_PATH, '>', B2.BOARD_NAME) AS BOARD_PATH,
1 + LEVEL AS LEVEL
FROM CTE
INNER JOIN BOARD B2 ON B2.PARENT_BOARD = CTE.ID 
)
SELECT ID, BOARD_NAME, PARENT_BOARD, ID_PATH, BOARD_PATH, LEVEL
FROM CTE
ORDER BY ID_PATH ASC