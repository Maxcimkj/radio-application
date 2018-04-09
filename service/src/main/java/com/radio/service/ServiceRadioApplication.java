package com.radio.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@ComponentScan
@Controller
public class ServiceRadioApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceRadioApplication.class, args);
    }

    /**
     * Необходимо для функционирования навигации по url в angular приложении
     */
    @RequestMapping(value = {"/genres", "/radio/genres/{genres}"})
    public String redirectToGenres() {
        return "forward:/";
    }
}
