
/*
    Dummy 게시물 생성 프로시져 
    CALL INSERT_LOOP; 로 실행
*/

DELIMITER $$
DROP PROCEDURE IF EXISTS INSERT_LOOP$$

CREATE PROCEDURE INSERT_LOOP()
BEGIN
	DECLARE i INT DEFAULT 1;
	
	WHILE i <= 200 DO
		INSERT INTO POST(ID, TITLE, CONTENT, POST_TYPE, DELT_FLG, CRE_ID, CRE_DT, UPD_ID, UPD_DT) VAlUES 
		(i, concat(concat('POST ', i), 'Seq'), concat(concat('Content is that... ', i), 'seq is....^^') , 'D', 'N', 'SA', SYSDATE(), 'SA', SYSDATE());
		
		SET i = i+1;
		
	END WHILE;
END$$
DELIMETER $$

call INSERT_LOOP;