package com.radio.service.site.parser;

import com.radio.service.model.Style;
import com.radio.service.model.Track;

import java.io.Serializable;
import java.util.Collection;
import java.util.Optional;

public interface IMusicSiteParser {
    class Tracks implements Serializable {
        public Collection<Track> tracks;
        public Collection<Style> styles;

        public Tracks(Collection<Track> tracks, Collection<Style> styles) {
            this.tracks = tracks;
            this.styles = styles;
        }
    }

    Optional<Tracks> getRandomTracksByStyle(String style) throws Exception;

    Optional<Tracks> getRandomTracksByArtist(String artist) throws Exception;
}
