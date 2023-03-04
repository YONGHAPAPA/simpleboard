package com.hepha.simpleboard.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@RequiredArgsConstructor
//@NoArgsConstructor
@ToString
@AllArgsConstructor
public class BoardPost extends Post{
    private String primary_flg;
    private Integer total;

    public BoardPost(String id, String title, String content, String post_type, String delt_flg, String cre_id, Date cre_dt, String upd_id, Date upd_dt, String primary_flg, Integer total){
        super.setId(id);
        super.setTitle(title);
        super.content = content;
        super.setPost_type(post_type);
        super.setDelt_flg(delt_flg);
        super.setCre_id(cre_id);
        super.setCre_dt(cre_dt);
        super.setUpd_id(upd_id);
        super.setUpd_dt(upd_dt);
        this.primary_flg = primary_flg;
        this.total = total;
    }
}
