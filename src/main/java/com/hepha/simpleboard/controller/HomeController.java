package com.hepha.simpleboard.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hepha.simpleboard.model.Article;
import com.hepha.simpleboard.model.Book;
import com.hepha.simpleboard.repository.ArticleRepository;
import com.hepha.simpleboard.repository.BookRepository;
import com.hepha.simpleboard.service.ArticleService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@RestController
//@Controller
public class HomeController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    @Qualifier("namedParameterJdbcBookRepository")    
    private BookRepository bookRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ArticleService articleService;

    private final Logger logger = LogManager.getLogger(HomeController.class);

    String home_title = "simple board";


    @GetMapping("hello")
    public List<String> hello(){

        logger.debug("hello....2");
        return Arrays.asList("hi", "hello");
    }

    @GetMapping("/home/articlelist")
    public ModelAndView articleList(){
        logger.debug("Standard :: Article List >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        ModelAndView model = new ModelAndView();
        List<Article> result = articleService.getArticleList();



        return model;      
    }


    @RequestMapping(value="/home", method=RequestMethod.GET)
    public ModelAndView goHome(HttpServletRequest request){

        logger.debug("goHome==============================================3");
        ModelAndView model = new ModelAndView();

        model.addObject("home_title", home_title);
        model.setViewName("home/home");


        //JDBC
        /*
        List<Book> books;
        books = Arrays.asList(
            new Book("2", "bbbb_", "title_bbbb"), 
            new Book("3", "cccc_", "title_cccc")
        );



        books.forEach(book -> {
            logger.debug(book.getId() + ":" + book.getName());
            //bookRepository.save(book);
            bookRepository.update(book);
            

        });
        */


        //조회 개수 가져오기
        // int count = articleRepository.getCountByArticleType("C");
        // logger.debug("article_count 2 : " + count);


        //Article 생성하기
        // Article newArticle = new Article("1", "this is title....", "this is contentsssss", "N", "N", "mztest", new Date(), "mztest", new Date());
        // int newCnt = articleRepository.create(newArticle);
        // logger.debug("newCnt >>> " + newCnt);


        //Article 리스트 가져오기
        List<Article> article_list = articleRepository.findAll();

        logger.debug("article_list.size: " + article_list.size());

        //for(int i=0; i < article_list.size(); i++)
        for(Article item : article_list){
            logger.debug("ID : " + item.toString());
        }

        return model;
    }

}
