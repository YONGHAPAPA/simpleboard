package com.hepha.simpleboard.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.hepha.simpleboard.Book;
import com.hepha.simpleboard.repository.BookRepository;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Controller
public class HomeController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    @Qualifier("namedParameterJdbcBookRepository")    
    private BookRepository bookRepository;

    private final Logger logger = LogManager.getLogger(HomeController.class);

    String home_title = "simpel board";

    @RequestMapping(value="/home", method=RequestMethod.GET)
    public ModelAndView goHome(HttpServletRequest request){

        logger.debug("goHome==============================================3");
        ModelAndView model = new ModelAndView();

        model.addObject("home_title", home_title);
        model.setViewName("home/home");


        //JDBC
        List<Book> books;
        books = Arrays.asList(
            new Book("2", "bbbb_", "title_bbbb"), 
            new Book("3", "cccc_", "title_cccc")
        );



        books.forEach(book -> {
            logger.debug(book.getId() + ":" + book.getName());
            bookRepository.save(book);
            //bookRepository.update(book);
            

        });
        

        return model;
    }

}
