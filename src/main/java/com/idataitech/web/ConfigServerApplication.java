package com.idataitech.web;

import org.springframework.boot.Banner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {

    public static void main(String[] args) {
        var application = new SpringApplicationBuilder(ConfigServerApplication.class);
        application.bannerMode(Banner.Mode.OFF);
        application.properties("spring.config.name=configserver");
        application.run(args);
    }
}
