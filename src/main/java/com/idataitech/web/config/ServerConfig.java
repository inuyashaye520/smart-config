package com.idataitech.web.config;

import org.springframework.cloud.config.server.config.ConfigServerAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({ConfigServerAutoConfiguration.class})
public class ServerConfig {

    @Bean
    public JdbcEnvironmentRepositoryFactory jdbcEnvironmentRepositoryFactory() {
        return new JdbcEnvironmentRepositoryFactory();
    }

}
