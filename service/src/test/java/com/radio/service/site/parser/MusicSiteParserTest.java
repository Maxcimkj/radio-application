package com.radio.service.site.parser;

import com.radio.service.ConfigService;
import com.radio.service.ServiceRadioApplication;
import com.radio.service.model.Style;
import com.radio.service.model.Track;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.junit.Assert;

import java.util.*;
import java.util.function.BiFunction;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ServiceRadioApplication.class)
@WebAppConfiguration
public class MusicSiteParserTest {
    @Autowired
    private OneTwoTvMuiscParser siteParser;

    @Autowired
    private ConfigService configService;

    private static BiFunction<List<Track>, Integer, Boolean> tracksSizeGtThenCheck =
            (tracks, expectSize) -> tracks.size() > expectSize;

    @Test
    public void searchTracksByStyleTest() throws Exception {
        String testMusicStyle = "Metal";

        Optional<List<Track>> searchedTracks = siteParser.getRandomTracksByStyle(testMusicStyle);
        List<Track> tracks = searchedTracks.orElseThrow(() -> new AssertionError("Не найдено треков"));

        int minimumTrackSize = configService.getCountReleaseInResponse() * 2;
        Assert.assertTrue(tracksSizeGtThenCheck.apply(tracks, minimumTrackSize));
        checkTrackContent(tracks);
    }

    @Test
    public void searchTracksByArtistTest() throws Exception {
        String testArtist = "Slipknot";

        Optional<List<Track>> searchedTracks = siteParser.getRandomTracksByArtist(testArtist);
        List<Track> tracks = searchedTracks.orElseThrow(() -> new Exception("Не найдено треков"));

        int minimumTrackSize = configService.getCountReleaseInResponse() * 2;
        Assert.assertTrue(tracksSizeGtThenCheck.apply(tracks, minimumTrackSize));
        checkTrackContent(tracks);
    }

    private void checkTrackContent(Collection<Track> tracks) {
        Set<String> urls = new HashSet<>();
        Set<Long> ids = new HashSet<>();
        for (Track track : tracks) {
            //Проверка уникальности id
            Long id = track.getId();
            Assert.assertFalse(ids.contains(id));
            ids.add(id);
            //Проверка уникальности url
            String url = track.getUrl();
            Assert.assertFalse(urls.contains(url));
            urls.add(url);
            //Проверка наличия стилей
            List<Style> styles = track.getStyles();
            Assert.assertNotNull(styles);
            Assert.assertTrue(styles.size() > 0);
            //Проверка наличия наименований
            Assert.assertNotNull(track.getName());
            Assert.assertNotNull(track.getArtist());
            Assert.assertNotNull(track.getRelease());
            //Проверка наличия продолжительности
            Assert.assertNotNull(track.getDuration());
        }
    }
}
