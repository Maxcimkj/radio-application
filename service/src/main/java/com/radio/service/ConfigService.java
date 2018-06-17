package com.radio.service;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@Service
public class ConfigService {
    private Properties properties;

    public ConfigService() {
        try {
            InputStream propertiesFile = new ClassPathResource("service.properties").getInputStream();
            this.properties = new Properties();
            this.properties.load(propertiesFile);
        } catch (IOException e) {
            throw new RuntimeException("Не удалось загрузить конфигурацию приложения", e);
        }
    }

    public int getCountReleaseInResponse() {
        return Integer.parseInt(properties.getProperty("count.release.in.response"));
    }

    public String getAppUser() {
        return properties.getProperty("security.user");
    }

    public String getAppPassword() {
        return properties.getProperty("security.password");
    }
}
