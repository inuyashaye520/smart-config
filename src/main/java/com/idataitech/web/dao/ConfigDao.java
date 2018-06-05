package com.idataitech.web.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface ConfigDao {

    /**
     * 获取配置文件
     */
    List<Map<String, String>> select(@Param("application") String application,
                                     @Param("profile") String profile,
                                     @Param("label") String label);
}
