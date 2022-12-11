package com.hepha.simpleboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hepha.simpleboard.model.Article;
import com.hepha.simpleboard.repository.ArticleRepository;

import lombok.extern.log4j.Log4j;


@Service
public class ArticleService {
    
    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository){
        this.articleRepository = articleRepository;
    }


    public List<Article> getArticleList(){
        return this.articleRepository.findAll();
    }

}
