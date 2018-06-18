package com.radio.service.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ArtistsByStyleNotFoundException extends RuntimeException {
    public ArtistsByStyleNotFoundException() {
        super("Artists by music style not found");
    }
}
