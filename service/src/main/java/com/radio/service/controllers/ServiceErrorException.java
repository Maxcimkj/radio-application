package com.radio.service.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.ACCEPTED)
public class ServiceErrorException extends RuntimeException {
    public ServiceErrorException(Throwable cause) {
        super(cause);
    }
}
