package com.radio.service.site.parser;

import com.radio.service.model.Style;
import com.radio.service.model.Track;

import java.io.Serializable;
import java.util.Collection;
import java.util.Optional;

public interface IMusicSiteParser {
    class TrackBlock implements Serializable {
        public Collection<Track> tracks;
        public Collection<Style> styles;

        public TrackBlock(Collection<Track> tracks, Collection<Style> styles) {
            this.tracks = tracks;
            this.styles = styles;
        }
    }

    Optional<TrackBlock> searchTracksByStyle(String style) throws Exception;

    Optional<TrackBlock> searchTracksByArtist(String artist) throws Exception;
}
