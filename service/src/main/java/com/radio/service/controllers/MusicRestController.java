package com.radio.service.controllers;

import com.radio.service.exceptions.ArtistsByStyleNotFoundException;
import com.radio.service.exceptions.ServiceErrorException;
import com.radio.service.model.Track;
import com.radio.service.site.parser.OneTwoTvParserMusic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
public class MusicRestController {

    private OneTwoTvParserMusic siteParser;

    @Autowired
    public MusicRestController(OneTwoTvParserMusic siteParser) {
        this.siteParser = siteParser;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/style/{style}/tracks")
    Collection<Track> getTracksByStyle(@PathVariable String style) {
        Optional<List<Track>> tracks;
        try {
            tracks = siteParser.getRandomTracksByStyle(style);
        } catch (Exception e) {
            throw new ServiceErrorException(e);
        }
        return tracks.orElseThrow(ArtistsByStyleNotFoundException::new);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/artist/{artist}/tracks")
    Collection<Track> getTracksByArtist(@PathVariable String artist) {
        Optional<List<Track>> tracks;
        try {
            tracks = siteParser.getRandomTracksByArtist(artist);
        } catch (Exception e) {
            throw new ServiceErrorException(e);
        }
        return tracks.orElseThrow(ArtistsByStyleNotFoundException::new);
    }
}
