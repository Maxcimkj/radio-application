package com.radio.service;

import org.springframework.stereotype.Service;

@Service
public class InCodeConfigService implements IConfigService {
    private int countReleaseInResponse = 10;
    @Override
    public int getCountReleaseInResponse() {
        return countReleaseInResponse;
    }
}
