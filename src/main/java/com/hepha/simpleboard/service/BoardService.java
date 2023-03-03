package com.hepha.simpleboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.model.Board;
import com.hepha.simpleboard.repository.BoardRepository;
import lombok.extern.log4j.Log4j;


@Service
public class BoardService {
    
    @Autowired
    private final BoardRepository boardRepository;

    //@Autowired
    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }


    //@Autowired
    public List<Board> getBoardList(){
        return this.boardRepository.findAll();
    }

}
