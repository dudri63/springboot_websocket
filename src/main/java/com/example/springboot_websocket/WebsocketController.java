package com.example.springboot_websocket;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


public class WebsocketController {

    @GetMapping("/websocket")
    public String websocketGet(){
        return "chat";
    }
}
