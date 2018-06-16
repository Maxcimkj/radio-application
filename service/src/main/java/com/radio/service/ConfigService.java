package com.radio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@Service
public class ConfigService implements IConfigService {
    private Properties properties;

    public ConfigService() {
        try {
            InputStream propertiesFile = new FileInputStream(
                    new ClassPathResource("service.properties").getFile());
            this.properties = new Properties();
            this.properties.load(propertiesFile);
        } catch (IOException e) {
            throw new RuntimeException("Не удалось загрузить конфигурацию приложения", e);
        }
    }

    @Override
    public int getCountReleaseInResponse() {
        return Integer.parseInt(properties.getProperty("count.release.in.response"));
    }

    @Override
    public String getAppUser() {
        return properties.getProperty("security.user");
    }

    @Override
    public String getAppPassword() {
        return properties.getProperty("security.password");
    }
}
