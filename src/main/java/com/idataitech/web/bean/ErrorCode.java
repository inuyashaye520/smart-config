package com.idataitech.web.bean;

/**
 * 错误代码
 */
public enum ErrorCode {

    AUTHORIZATION_REQUIRED(401, "需要重新登录"),// 借鉴 HTTP 401
    LOGIN_FAILD(4011, "登陆失败"),// 借鉴 HTTP 401.1
    ILLEGAL_ASSCESS(0, "非法操作"),
    UNKNOWN(0, "未知(非预期)错误");

    int code;
    String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
