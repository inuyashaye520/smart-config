package com.idataitech.web.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlPage {

    /**
     * 引导页面
     */
    @RequestMapping(value = {"/", "/admin", "/admin.html"})
    public String index() {
        return "/admin";
    }

}
