
/*
 더미 게시판 생성 
*/
INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('1', 'BOARD 1', 'N', '0', 'BOARD 1 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 1);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('2', 'BOARD 2', 'N', '0', 'BOARD 2 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 2);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('3', 'BOARD 3', 'N', '0', 'BOARD 3 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 3);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('4', 'BOARD 2-1', 'N', '2', 'BOARD 2-1 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 1);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('5', 'BOARD 2-2', 'N', '2', 'BOARD 2-2 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 2);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('6', 'BOARD 3-1', 'N', '3', 'BOARD 3-1 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 1);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('7', 'BOARD 3-2', 'N', '3', 'BOARD 3-2 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 2);

INSERT INTO BOARD (id, board_name, board_type, parent_board, DESCRIPTION, cre_id, cre_dt, upd_id, upd_dt, seq)
VALUES ('8', 'BOARD 3-2-1', 'N', '7', 'BOARD 3-2-1 DESC', 'KIM', SYSDATE(), 'KIM', SYSDATE(), 1);



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



/*
	반복문 sample
*/
FOR i IN 1..5
DO 
	SELECT i;
END FOR;


/*
	게시물 REF BOARD 테이블에 게시물 정보 넣기
*/
delimiter @@

FOR i IN 1..50
DO 
	INSERT POST_REF_BOARD(id, post_id, board_id, primary_flg, cre_id, cre_dt, upd_id, upd_dt)
	VALUES (i, i, 1, 'Y', 'KIM', SYSDATE(), 'KIM', SYSDATE());
END FOR; @@


delimiter @@
FOR i IN 151..200
DO 
	INSERT POST_REF_BOARD(id, post_id, board_id, primary_flg, cre_id, cre_dt, upd_id, upd_dt)
	VALUES (i, i, 6, 'Y', 'KIM', SYSDATE(), 'KIM', SYSDATE());
END FOR; @@



