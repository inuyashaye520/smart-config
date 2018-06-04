package com.idataitech.web;

import org.springframework.boot.Banner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ConfigServerApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        new SpringApplicationBuilder(ConfigServerApplication.class)
                .bannerMode(Banner.Mode.OFF)
                .properties(new String[]{
                        "spring.config.name=configserver"
                })
                .run(args);
    }
}
