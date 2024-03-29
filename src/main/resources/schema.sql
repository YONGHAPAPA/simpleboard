--DROP TABLE IF EXISTS ARTICLE;
--DROP TABLE IF EXISTS COMMENT;
--DROP TABLE IF EXISTS ARTICLE_TYPE;


CREATE TABLE `POST` (
  `ID` int(11) NOT NULL ,
  `TITLE` varchar(500) NOT NULL,
  `CONTENT` text NOT NULL,
  `POST_TYPE` varchar(5) NOT NULL,
  `DELT_FLG` varchar(1) DEFAULT NULL,
  `CRE_ID` varchar(50) DEFAULT NULL,
  `CRE_DT` date DEFAULT NULL,
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `POST_REF_BOARD` (
  `ID` int(11) NOT NULL,
  `POST_ID` int(11) NOT NULL,
  `BOARD_ID` int(11) NOT NULL,
  `PRIMARY_FLG` varchar(1) DEFAULT NULL,
  `CRE_ID` varchar(50) DEFAULT NULL,
  `CRE_DT` date DEFAULT NULL,
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `COMMENT` (
  `ID` int NOT NULL,
  `ARTICLE_ID` varchar(50) NOT NULL,
  `TITLE` varchar(500) NOT NULL,
  `CONTENT` text NOT NULL,
  `DELT_FLG` varchar(1) DEFAULT NULL,
  `CRE_ID` varchar(50) DEFAULT NULL,
  `CRE_DT` date DEFAULT NULL,
  `UPD_ID` varchar(50) DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `BOARD` (
  `ID` int(11) NOT NULL,
  `BOARD_NAME` varchar(200) NOT NULL,
  `BOARD_TYPE` varchar(10) NOT NULL,
  `PARENT_BOARD` int(11) DEFAULT NULL,
  `DESCRIPTION` varchar(4000) DEFAULT NULL,
  `CRE_ID` varchar(100) DEFAULT NULL,
  `CRE_DT` date DEFAULT NULL,
  `UPD_ID` varchar(100) DEFAULT NULL,
  `UPD_DT` date DEFAULT NULL,
  `SEQ` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;


CREATE TABLE `POST_TYPE` (
  `ID` INT NOT NULL,
  `TYPE_CD` varchar(5) NOT NULL,
  `TYPE_NAME` varchar(100) NOT NULL,
  `DESCRIPTION` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



/*
    Generate Init Data 
*/
INSERT IGNORE INTO ARTICLE_TYPE(ID, TYPE_CD, DESCRIPTION) VALUES ('1', 'N', 'normal article');
INSERT IGNORE INTO ARTICLE_TYPE(ID, TYPE_CD, DESCRIPTION) VALUES ('2', 'C', 'comment');



/*
    Insert Dummy Data
*/
