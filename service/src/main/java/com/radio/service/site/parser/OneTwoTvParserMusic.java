package com.radio.service.site.parser;

import com.radio.service.IConfigService;
import com.radio.service.model.Style;
import com.radio.service.model.Track;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class OneTwoTvParserMusic implements IMusicSiteParser {
    private static final String BASE_URL_TEMPL = "http://onetwo.tv%s";
    private static final String SEARCH_BY_ARTIST_URL_TEMPL = "http://onetwo.tv/search/artists/?query=%s";
    private static final String SEARCH_BY_STYLE_URL_TEMPL = "http://onetwo.tv/search/styles/?query=%s";
    private static final String ARTIST_RELEASES_URL_TEMPL = "http://onetwo.tv%sreleases/";

    private static final Random rnd = new Random();

    private int countReleaseInResponse;

    @Autowired
    public OneTwoTvParserMusic(IConfigService configService) {
        this.countReleaseInResponse = configService.getCountReleaseInResponse();
    }

    public Optional<TrackBlock> searchTracksByStyle(String style) throws Exception {
        final List<Track> tracks = new ArrayList<>();
        final Set<Style> styles = new HashSet<>();

        final Index nextTrackIndex = new Index(0);

        String searchUrl = String.format(SEARCH_BY_STYLE_URL_TEMPL, style);
        Elements artistMrkps = getArtistsMrkps(searchUrl);
        if (!artistMrkps.isEmpty()) {
            //select random artist indexes
            Integer[] selectedSignerIndexes = generateUniqueRandomNumber(this.countReleaseInResponse, artistMrkps.size());
            //random select and add tracks
            for (int index : selectedSignerIndexes) {
                addTracksFromRandomReleases(artistMrkps.get(index), tracks, styles, nextTrackIndex, 1);
            }
        }

        return !tracks.isEmpty() ? Optional.of(new TrackBlock(tracks, styles)) : Optional.empty();
    }

    public Optional<TrackBlock> searchTracksByArtist(String artist) throws Exception {
        final List<Track> tracks = new ArrayList<>();
        final Set<Style> styles = new HashSet<>();

        final Index nextTrackId = new Index(0);

        String searchUrl = String.format(SEARCH_BY_ARTIST_URL_TEMPL, artist);
        Elements artistMrkps = getArtistsMrkps(searchUrl);
        if (!artistMrkps.isEmpty()) {
            //select first artist
            Element searchedArtist = artistMrkps.first();
            //random select and add tracks
            addTracksFromRandomReleases(searchedArtist, tracks, styles, nextTrackId, countReleaseInResponse);
        }
        return !tracks.isEmpty() ? Optional.of(new TrackBlock(tracks, styles)) : Optional.empty();
    }

    private Elements getArtistsMrkps(String searchUrl) throws Exception {
        Document searchedArtistPage = Jsoup.connect(searchUrl).get();
        return searchedArtistPage.select("div.user-artists");
    }

    private void addTracksFromRandomReleases(Element atristMrkp, final List<Track> trackOut, final Set<Style> styleOut,
                                             Index nextTrackId, int countReleases) throws Exception {
        //get releases pagea
        String urlToSignerReleases = atristMrkp.select("a.name")
                .first().attr("href");
        Document releasesPage = Jsoup.connect(
                String.format(ARTIST_RELEASES_URL_TEMPL, urlToSignerReleases)).get();
        //random select releases
        List<String> releasePageUrls = new ArrayList<>();
        Elements releaseRefMrkps = releasesPage.select("div.releases-covers div.releases-cover-info a");
        if (!releaseRefMrkps.isEmpty()) {
            if (releaseRefMrkps.size() > countReleases) {
                Integer[] selectedRelease = generateUniqueRandomNumber(countReleases, releaseRefMrkps.size());
                for (int i = 0; i < countReleases; i++) {
                    releasePageUrls.add(releaseRefMrkps.get(selectedRelease[i]).attr("href"));
                }
            } else {
                for (Element releaseRef : releaseRefMrkps) {
                    releasePageUrls.add(releaseRef.attr("href"));
                }
            }
        }
        //add tracks from select releases
        for (String urlToReleasePage : releasePageUrls) {
            Document releasePage = Jsoup.connect(String.format(BASE_URL_TEMPL, urlToReleasePage)).get();
            getReleaseTracks(releasePage, nextTrackId, trackOut, styleOut);
        }
    }

    private void getReleaseTracks(Document releasePage, Index nextTrackId,
                                  final List<Track> trackOut, final Set<Style> styleOut) {
        String artistName = releasePage.select("div.left-links a").first().ownText();
        String releaseName = releasePage.select("div.release-title").first().ownText();
        String coverUrl = String.format(BASE_URL_TEMPL,
                releasePage.select("div.release-cover img").first().attr("src"));
        List<Style> styles = releasePage.select("div.release-styles a").stream()
                .map(link -> new Style(link.ownText())).collect(Collectors.toList());

        styleOut.addAll(styles);

        Elements trackMrkps = releasePage.select("div.track");
        for (Element trackMarkup : trackMrkps) {
            Track track = new Track((long) nextTrackId.increase());
            track.setRelease(releaseName);
            track.setArtist(artistName);
            track.setCover(coverUrl);
            track.setStyles(styles);
            Element refToAnotherArtist = trackMarkup.select("div.track-name a").first();
            track.setName((refToAnotherArtist != null ? refToAnotherArtist.ownText() + " " : "") +
                    trackMarkup.select("div.track-name").first().ownText());
            track.setDuration(trackMarkup.select("div.track-time").first().ownText());
            track.setUrl(String.format(BASE_URL_TEMPL,
                    parseTrackUrl(trackMarkup.select("a.play").first().attr("onclick"))));
            trackOut.add(track);
        }
    }

    private String parseTrackUrl(String playEvent) {
        int startUrl = playEvent.indexOf("'") + 1;
        int stopUrl = playEvent.indexOf("'", startUrl);
        return playEvent.substring(startUrl, stopUrl);
    }

    private static class Index {
        private int index;

        public Index(int index) {
            this.index = index;
        }

        public int increase() {
            return index++;
        }
    }

    private Integer[] generateUniqueRandomNumber(int limit, int max) {
        List<Integer> numbers = IntStream.range(0, max).boxed().collect(Collectors.toList());
        Collections.shuffle(numbers);
        return numbers.subList(0, limit).stream().toArray(Integer[]::new);
    }
}
