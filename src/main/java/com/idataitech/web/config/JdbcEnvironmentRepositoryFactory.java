package com.idataitech.web.config;

import org.springframework.cloud.config.server.environment.EnvironmentRepository;
import org.springframework.cloud.config.server.environment.EnvironmentRepositoryFactory;
import org.springframework.cloud.config.server.support.EnvironmentRepositoryProperties;

public class JdbcEnvironmentRepositoryFactory implements EnvironmentRepositoryFactory {

    @Override
    public EnvironmentRepository build(EnvironmentRepositoryProperties environmentProperties) throws Exception {
        return new JdbcEnvironmentRepository();
    }


}
