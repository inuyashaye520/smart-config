package com.idataitech.web.rest;

import com.alibaba.fastjson.JSONObject;
import com.idataitech.web.bean.JsonResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController("exampleApi")
@RequestMapping("/api/example")
public class ExampleApi {

    /**
     * test
     */
    @RequestMapping(method = RequestMethod.GET, value = "/test1")
    public JsonResult<JSONObject> example() {
        var json = new JSONObject();
        json.put("username", "叶根");
        json.put("password", "666666");
        return JsonResult.success(json);
    }


}
