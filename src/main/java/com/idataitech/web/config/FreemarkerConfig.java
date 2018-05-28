package com.idataitech.web.config;


import freemarker.cache.ClassTemplateLoader;
import freemarker.template.TemplateModelException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration;
import org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.Async;

import javax.servlet.ServletContext;

@Configuration
public class FreemarkerConfig extends FreeMarkerAutoConfiguration {

    @Autowired
    private Environment env;
    @Autowired
    private ServletContext servletContext;

    @Autowired
    private freemarker.template.Configuration configuration;

    public FreemarkerConfig(ApplicationContext applicationContext, FreeMarkerProperties properties) {
        super(applicationContext, properties);
    }

    @Async
    @EventListener
    public void init(ApplicationReadyEvent event) {
        try {
            var activeProfiles = env.getActiveProfiles();
            configuration.setSharedVariable("Profile", activeProfiles == null || activeProfiles.length == 0 ? "dev" : activeProfiles[0]);
            configuration.setSharedVariable("ContextPath", servletContext.getContextPath());
        } catch (TemplateModelException e) {
            e.printStackTrace();
        }
    }
}
