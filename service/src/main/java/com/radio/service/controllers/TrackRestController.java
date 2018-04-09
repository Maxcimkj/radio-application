package com.radio.service.controllers;

import com.radio.service.model.Style;
import com.radio.service.model.StyleRepository;
import com.radio.service.model.Track;
import com.radio.service.site.parser.IMusicSiteParser;
import com.radio.service.site.parser.IMusicSiteParser.TrackBlock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
public class TrackRestController {

    private IMusicSiteParser siteParser;
    private StyleRepository styleRepository;

    @Autowired
    public TrackRestController(IMusicSiteParser siteParser, StyleRepository styleRepository) {
        this.siteParser = siteParser;
        this.styleRepository = styleRepository;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/style/{style}/tracks")
    Collection<Track> getTracksByStyle(@PathVariable String style) {
        Optional<TrackBlock> tracks;
        try {
            tracks = siteParser.searchTracksByStyle(style);
        } catch (Exception e) {
            throw new ServiceErrorException(e);
        }

        TrackBlock trackBlock = tracks.orElseThrow(ArtistsByStyleNotFoundException::new);
        //Сохранение стилей
        saveStyles(trackBlock.styles);

        return trackBlock.tracks;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/artists/{artist}/tracks")
    Collection<Track> getTracksByArtist(@PathVariable String artist) {
        Optional<TrackBlock> tracks;
        try {
            tracks = siteParser.searchTracksByArtist(artist);
        } catch (Exception e) {
            throw new ServiceErrorException(e);
        }

        TrackBlock trackBlock = tracks.orElseThrow(ArtistsByStyleNotFoundException::new);
        //Сохранение стилей
        saveStyles(trackBlock.styles);

        return trackBlock.tracks;
    }

    private void saveStyles(Collection<Style> styles) {
        for (Style style : styles) {
            try {
                styleRepository.save(style);
            } catch (DataIntegrityViolationException e) {
                // игнорировать ошибки сохранения существующего стиля
            }
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/styles/name={namePart}")
    Collection<Style> getStylesByNamePart(@PathVariable String namePart) {
        return styleRepository.findByNameContaining(namePart);
    }
}
