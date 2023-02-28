package com.hepha.simpleboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.repository.PostRepository;
import lombok.extern.log4j.Log4j;


@Service
public class PostService {
    
    private final PostRepository postRepository;

    //@Autowired
    public PostService(PostRepository articleRepository){
        this.postRepository = articleRepository;
    }


    @Autowired
    public List<Post> getPostsByBoardId(int boardId){
        return this.postRepository.findAll();
    }

}
