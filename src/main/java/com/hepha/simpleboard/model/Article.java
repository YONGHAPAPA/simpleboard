package com.hepha.simpleboard.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@RequiredArgsConstructor
//@NoArgsConstructor
@ToString
@AllArgsConstructor
public class Article {
    private String id;
    private String title;
    private String content;
    private String article_type;
    private String Delete_flg;
    private String cre_id;
    private Date cre_dt;
    private String upd_id;
    private Date upd_dt;
}
