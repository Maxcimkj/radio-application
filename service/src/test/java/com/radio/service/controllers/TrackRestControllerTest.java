package com.radio.service.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.radio.service.IConfigService;
import com.radio.service.ServiceRadioApplication;
import com.radio.service.model.Style;
import com.radio.service.model.StyleRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mock.http.MockHttpOutputMessage;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.context.WebApplicationContext;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ServiceRadioApplication.class)
@WebAppConfiguration
public class TrackRestControllerTest {
    private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));

    private MockMvc mockMvc;

    private HttpMessageConverter mappingJackson2HttpMessageConverter;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private IConfigService configService;

    @Autowired
    private StyleRepository styleRepository;

    @Autowired
    void setConverters(HttpMessageConverter<?>[] converters) {
        this.mappingJackson2HttpMessageConverter = Arrays.asList(converters).stream()
                .filter(hmc -> hmc instanceof MappingJackson2HttpMessageConverter)
                .findAny()
                .orElse(null);

        assertNotNull("the JSON message converter must not be null",
                this.mappingJackson2HttpMessageConverter);
    }

    @Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    protected String json(Object o) throws IOException {
        MockHttpOutputMessage mockHttpOutputMessage = new MockHttpOutputMessage();
        this.mappingJackson2HttpMessageConverter.write(
                o, MediaType.APPLICATION_JSON, mockHttpOutputMessage);
        return mockHttpOutputMessage.getBodyAsString();
    }

    @Test
    public void getTracksByStyle() throws Exception {
        String style = "Drone";
        String url = "/style/%s/tracks";

        int minimumSize = configService.getCountReleaseInResponse() * 2;
        baseResponseCheck(String.format(url, style), minimumSize, "gt");
    }

    @Test
    public void getTracksByArtist() throws Exception {
        String artist = "Mineral";
        String url = "/artists/%s/tracks";
        int trackSize = 10;
        baseResponseCheck(String.format(url, artist), trackSize, "eq");
    }

    private void baseResponseCheck(String url, int size, String assertSizeType) throws Exception {
        ResultActions response = mockMvc.perform(get(url))
                .andExpect(status().isOk())
                .andExpect(content().contentType(contentType));

        switch (assertSizeType) {
            case "eq":
                response.andExpect(jsonPath("$", hasSize(size)));
                break;
            case "gt":
                response.andExpect(jsonPath("$", hasSize(greaterThan(size))));
                break;
            case "ls":
                response.andExpect(jsonPath("$", hasSize(lessThan(size))));
                break;
        }
        response.andExpect(jsonPath("$[*].id", everyItem(notNullValue())))
                .andExpect(jsonPath("$[*].name", everyItem(notNullValue())))
                .andExpect(jsonPath("$[*].artist", everyItem(notNullValue())))
                .andExpect(jsonPath("$[*].release", everyItem(notNullValue())))
                .andExpect(jsonPath("$[*].duration", everyItem(notNullValue())))
                .andExpect(jsonPath("$[*].url", everyItem(notNullValue())));
        //Проверка существования в бд муз.стилей треков
        //Сохраненных при формировании ответа на запрос
        checkSavedStyles(response);
    }

    private void checkSavedStyles(ResultActions response) throws Exception {
        String responseJson = response.andReturn().getResponse().getContentAsString();
        JsonNode jsonNode = new ObjectMapper().readTree(responseJson);
        Set<String> styleNames = jsonNode.findValues("styles").stream()
                .flatMap(trackStylesNode -> trackStylesNode.findValues("name").stream())
                .map(JsonNode::asText).collect(Collectors.toSet());
        for (String styleName : styleNames) {
            Assert.assertTrue(styleRepository.findByName(styleName).isPresent());
        }
    }

    @Test
    public void getStylesByNamePart() throws Exception {
        //добавление тестовых стилей в бд
        List<Style> testStyles = Arrays.asList(
                new Style("testpostfix"),
                new Style("suffixtest"),
                new Style("suffixtestpostfix")
        );
        styleRepository.saveAll(testStyles);

        //отправка запроса и проверка ответа
        String namePart = "test";
        String url = "/styles/name=%s";
        mockMvc.perform(get(String.format(url, namePart)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(contentType))
                .andExpect(jsonPath("$[*].name", hasItems(testStyles.stream()
                        .map(Style::getName).toArray(String[]::new))));
    }

}