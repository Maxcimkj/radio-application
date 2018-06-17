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
import com.radio.service.site.parser.IMusicSiteParser.Tracks;
import org.junit.Assert;

import java.util.*;
import java.util.stream.Collectors;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ServiceRadioApplication.class)
@WebAppConfiguration
public class MusicSiteParserTest {
    @Autowired
    private IMusicSiteParser siteParser;

    @Autowired
    private ConfigService configService;

    @Test
    public void searchTracksByStyleTest() throws Exception {
        String testMusicStyle = "Metal";

        Optional<Tracks> searchedTracks = siteParser.getRandomTracksByStyle(testMusicStyle);
        Tracks tracks = searchedTracks.orElseThrow(() -> new AssertionError("Не найдено треков"));

        int minimumTrackSize = configService.getCountReleaseInResponse() * 2;
        baseCheck(tracks, minimumTrackSize, "bg");
    }

    @Test
    public void searchTracksByArtistTest() throws Exception {
        String testArtist = "Slipknot";

        Optional<Tracks> searchedTracks = siteParser.getRandomTracksByArtist(testArtist);
        Tracks tracks = searchedTracks.orElseThrow(() -> new Exception("Не найдено треков"));

        int minimumTrackSize = configService.getCountReleaseInResponse() * 2;
        baseCheck(tracks, minimumTrackSize, "bg");
    }

    private void baseCheck(Tracks trackBlock, int countTracks, String assertType) {
        Collection<Track> tracks = trackBlock.tracks;
        Collection<Style> styles = trackBlock.styles;

        switch (assertType) {
            case "eq":
                Assert.assertTrue(tracks.size() == countTracks);
                break;
            case "gt":
                Assert.assertTrue(tracks.size() >= countTracks);
                break;
            case "ls":
                Assert.assertTrue(tracks.size() <= countTracks);
                break;
        }
        Assert.assertNotNull(tracks);
        Assert.assertNotNull(styles);
        Assert.assertTrue(styles.size() > 0);

        checkTracks(tracks);
        checkEqualsInputStylesAndTrackStyles(tracks, styles);
    }

    private void checkTracks(Collection<Track> tracks) {
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
            //Проверка имени
            Assert.assertNotNull(track.getArtist());
            Assert.assertNotNull(track.getRelease());
            Assert.assertNotNull(track.getName());
            //Проверка наличия продолжительности
            Assert.assertNotNull(track.getDuration());
        }
    }

    /**
     * Проверка соответствия полученных стилей и стилей в треках
     */
    private void checkEqualsInputStylesAndTrackStyles(Collection<Track> tracks, Collection<Style> styles) {
        Set<Style> stylesFromTracks = tracks.stream()
                .flatMap(track -> track.getStyles().stream()).collect(Collectors.toSet());
        Assert.assertEquals(styles, stylesFromTracks);
    }
}
