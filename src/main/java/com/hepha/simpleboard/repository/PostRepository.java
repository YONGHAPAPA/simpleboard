package com.hepha.simpleboard.repository;

import java.util.List;
import java.util.Optional;

import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.model.BoardPost;

public interface PostRepository {
    
    int getCountByArticleType(String articleType);

    List<BoardPost> findAll();

    List<BoardPost> getPostByBoardId(String boardId, Integer limit, Integer pagenum);

    int create(Post article);

    Optional<Post> findyId(String id);    

    int update(Post article);

    int delete(Post article);
}
