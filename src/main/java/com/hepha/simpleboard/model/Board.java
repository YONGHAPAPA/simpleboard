package com.hepha.simpleboard.model;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Board {
    public Integer id;
    public String boardName;
    public String boardType;
    public Integer parentBoard;
    public String idPath;
    public String boardPath;
    public Integer level;
    public Integer seq;
    public String description;
    public String creId;
    public Date creDt;
    public String updId;
    public Date updDt;    
}
