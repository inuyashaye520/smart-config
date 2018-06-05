package com.idataitech.web.service;

import com.idataitech.web.dao.ConfigDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("configService")
public class ConfigService {

    @Autowired
    private ConfigDao configDao;

    /**
     * 获取配置文件
     *
     * @param application 应用名称
     * @param profile 环境
     * @param label 版本
     * @return
     */
    public Map<String, String> getConfig(String application, String profile, String label) {
        List<Map<String, String>> cfgs =configDao.select(application, profile, label);
        Map<String, String> config = new HashMap<>();
        for (Map<String, String> cfg : cfgs) {
            config.put(cfg.get("key"), cfg.get("value"));
        }

        return config;
    }
}
