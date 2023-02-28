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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hepha.simpleboard.model.Post;
import com.hepha.simpleboard.model.Board;
import com.hepha.simpleboard.repository.PostRepository;
import com.hepha.simpleboard.service.PostService;
import com.hepha.simpleboard.service.BoardService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

// [M.RMK]2023.02.28 
// @Controller와는 다르게 @RestController는 리턴값에 자동으로 @ResponseBody 를 붙임 
@RestController 
@RequestMapping("/board")
//@Controller
public class BoardController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    //@Autowired
    //@Qualifier("namedParameterJdbcBookRepository")    
    //private BookRepository bookRepository;

    // @Autowired
    // private PostRepository postRepository;

    @Autowired
    private PostService postService;

    @Autowired
    private BoardService boardService;


    private final Logger logger = LogManager.getLogger(BoardController.class);

    String home_title = "simple board";


    
    //[M.CHK]2023.02.28 컨트롤러에 해당 경로의 매핑 메서드가 없는경우 없는 경우 front 에서 어떤방식으로 exception 처리방법    
    //[M.RMK]2023.02.28 GetMapping 은 메서드에만 적용, HTTP GET 요청을 핸들러 메서드에 매핑하기 위함.
    //@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="Data Not Found") //강제 Exception 발생 처리     
    @GetMapping("/getAllBoards")    
    public List<Board> getAllBoards(){
        //logger.debug("request to >>>>> getBoardList");
        List<Board> result = boardService.getBoardList();
        //logger.debug(result);
        return result;
    }

    //2023.02.26 getPostsByBoardId 구현하기
    @GetMapping("/getPostsByBoardIdBoard")
    public List<Post> getPostsByBoardIdBoard(@RequestParam String boardId){
        logger.debug("Standard :: Article List >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2222");

        // ModelAndView model = new ModelAndView();
         List<Post> result = postService.getArticleList();


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
        return model;
    }

}
