package com.hepha.simpleboard.repository;

import java.util.List;
import java.util.Optional;

import com.hepha.simpleboard.model.Board;

public interface BoardRepository {
    
    int getCountByBoardType(String boardType);

    List<Board> findAll();

    int create(Board board);

    Optional<Board> findyId(String id);    

    int update(Board board);

    int delete(Board board);
}
