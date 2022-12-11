package com.hepha.simpleboard.repository;

import java.util.List;
import java.util.Optional;

import com.hepha.simpleboard.model.Article;

public interface ArticleRepository {
    
    int getCountByArticleType(String articleType);

    List<Article> findAll();

    int create(Article article);

    Optional<Article> findyId(String id);    

    int update(Article article);

    int delete(Article article);
}
