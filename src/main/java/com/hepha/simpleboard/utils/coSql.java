package com.hepha.simpleboard.utils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.net.URISyntaxException;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;



public class coSql {

    private final Logger logger = LogManager.getLogger(coSql.class);

    //2023.02.07 파일에서 SQL Text 가져오는 로직인데... 안쓸거 같음, 일단 파일에서 텍스트 추출함수로 참고용으로 놔둠
    public String getSqlFromFile(String path) {

        String result = "";

        try{

            //현재경로 확인
            Path currentPath = Paths.get("");
            String curPath = currentPath.toAbsolutePath().toString();

            logger.debug("curPath: " + curPath);
            logger.debug("path > " + Paths.get(path));
            
            result = new String(Files.readAllBytes(Paths.get(path)));
        }catch(IOException e){
           logger.error("getSqlFromFile: " + e.toString());
        }

        return result;
    }
}
