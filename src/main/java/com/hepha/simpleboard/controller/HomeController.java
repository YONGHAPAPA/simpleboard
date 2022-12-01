package com.hepha.simpleboard.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Controller
public class HomeController {

    private final Logger logger = LogManager.getLogger(HomeController.class);

    String home_title = "simpel board";

    @RequestMapping(value="/home", method=RequestMethod.GET)
    public ModelAndView goHome(HttpServletRequest request){

        logger.debug("goHome==============================================");
        ModelAndView model = new ModelAndView();

        model.addObject("home_title", home_title);
        model.setViewName("home/home");

        return model;
    }

}
