package com.idataitech.web.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlPage {

    /**
     * angular 模板页面
     */
    @RequestMapping(value = "/tmpl/**/*.html")
    public void tmpl() {
    }

}
