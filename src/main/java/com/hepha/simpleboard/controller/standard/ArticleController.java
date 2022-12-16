package com.hepha.simpleboard.controller.standard;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hepha.simpleboard.model.Article;

import lombok.extern.log4j.Log4j2;


@Log4j2
@Controller
public class ArticleController {
    
    @GetMapping("/standard/articleList")
    public ModelAndView getArticleList() {
        log.debug("getArticleList >>>>>>>>>>>>>>>>>>>>>>>>>>>>..");

        ModelAndView model = new ModelAndView();
        model.setViewName("standard/articlelist");
        return model;
    }


    @GetMapping("/home/articlelist2")
    public void articleList(){
        log.debug("Standard :: Article List 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        // ModelAndView model = new ModelAndView();
        // //List<Article> result = articleService.getArticleList();
        // model.setViewName("standard/articlelist");

        // return model;
        
    }
    
}
