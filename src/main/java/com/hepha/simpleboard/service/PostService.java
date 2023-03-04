package com.hepha.simpleboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.model.BoardPost;
import com.hepha.simpleboard.repository.PostRepository;
import lombok.extern.log4j.Log4j;


@Service
public class PostService {
    
    @Autowired
    private final PostRepository postRepository;

    //@Autowired
    public PostService(PostRepository articleRepository){
        this.postRepository = articleRepository;
    }


    //@Autowired
    public List<BoardPost> getPostsByBoardId(String boardId, Integer limit, Integer pagenum){
        return this.postRepository.getPostByBoardId(boardId, limit, pagenum);
    }


    // @Autowired
    // public List<Post> getArticleList(){
    //     return this.postRepository.findAll();
    // }

}
