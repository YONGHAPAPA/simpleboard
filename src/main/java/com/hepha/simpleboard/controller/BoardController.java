package com.hepha.simpleboard.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hepha.simpleboard.model.Article;
import com.hepha.simpleboard.model.Board;
import com.hepha.simpleboard.model.Book;
import com.hepha.simpleboard.repository.ArticleRepository;
import com.hepha.simpleboard.repository.BookRepository;
import com.hepha.simpleboard.service.ArticleService;
import com.hepha.simpleboard.service.BoardService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@RestController
//@Controller
public class BoardController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    @Qualifier("namedParameterJdbcBookRepository")    
    private BookRepository bookRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private BoardService brdSvc;


    private final Logger logger = LogManager.getLogger(BoardController.class);

    String home_title = "simple board";


    
    //@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="Data Not Found") //강제 Exception 발생 처리 
    @RequestMapping(value="board/getBoardList", method=RequestMethod.GET)
    //@GetMapping("/board/getBoardList")
    @ResponseBody
    public Object getBoardList(){

        //logger.debug("request to >>>>> getBoardList");

        List<Board> result = brdSvc.getBoardList();

        //logger.debug(result);

        for(int i = 0; i< result.size(); i++){
            Board brd = result.get(i);
            //logger.debug(brd.getBoardName());
            logger.debug(brd.getBoardName());
        }


        

        return result;

        
    }













    @GetMapping("/board/hello")
    public List<String> hello(){

        logger.debug("hello....2");
        return Arrays.asList("hi1", "hello1");
    }

    @GetMapping("/board/articlelist")
    public List<Article> articleList(){
        logger.debug("Standard :: Article List >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2222");

        // ModelAndView model = new ModelAndView();
         List<Article> result = articleService.getArticleList();


        //List<Article> result = articleRepository.findAll();





        return result;      
    }


    @RequestMapping(value="/board", method=RequestMethod.GET)
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
