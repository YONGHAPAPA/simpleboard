package com.hepha.simpleboard.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hepha.simpleboard.model.Post;

//import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;;





@Controller
public class PostController {

    Logger logger = LogManager.getLogger(PostController.class);
    
    @GetMapping("/postList")
    public ModelAndView getArticleList() {
        logger.debug("getArticleList >>>>>>>>>>>>>>>>>>>>>>>>>>>>..");

        ModelAndView model = new ModelAndView();
        model.setViewName("standard/articlelist");
        return model;
    }


    @GetMapping("/postlist2")
    public void articleList(){
        logger.debug("Standard :: Article List 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        // ModelAndView model = new ModelAndView();
        // //List<Article> result = articleService.getArticleList();
        // model.setViewName("standard/articlelist");

        // return model;
        
    }
    
}
