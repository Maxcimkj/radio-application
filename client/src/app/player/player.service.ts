import {EventEmitter, Injectable} from "@angular/core";
import {TrackIterator} from "./track-iterator";
import {Track} from "../model/track";
import {TrackService} from "../services/track.service";
import {SearchType, TrackSearchParams} from "../track-search-params";
import {Observable} from "rxjs/Observable";
import {LogService} from "../services/log.service";

export enum PlayerState {
  INIT = 'Init',
  PAUSED = 'Paused',
  PLAY = 'Play',
  STOP = 'Stop',
  LOAD_ERROR = 'Load_error',
  IS_EMPTY = 'Is_empty'
}

@Injectable()
export class PlayerService {
  searchParams: TrackSearchParams;

  track: Track;
  audio = new Audio();

  tracks: TrackIterator;

  state: PlayerState = PlayerState.INIT;
  onStateChange = new EventEmitter<PlayerState>();

  constructor(private musicService: TrackService, private logService: LogService) {
  }

  init(searchParams: TrackSearchParams) {
    this.searchParams = searchParams;
    this.load();
  }

  load() {
    let trackObservable: Observable<Track[]>;
    switch (this.searchParams.type) {
      case SearchType.STYLE:
        trackObservable = this.musicService.getTrackByStyle(this.searchParams.search);
        break;
      default:
      case SearchType.ARTIST:
        trackObservable = this.musicService.getTrackByArtist(this.searchParams.search);
    }
    trackObservable.subscribe(inputTracks => {
        this.logService.log(this, "Player component: loaded tracks: " + JSON.stringify(inputTracks as Track[]));
        if (inputTracks.length > 0) {
          this.tracks = new TrackIterator(inputTracks);
          this.next();
        } else {
          this.tracks = new TrackIterator([]);
          this.track = undefined;
          this.changeState(PlayerState.IS_EMPTY);
        }
      },
      error => {
        this.logService.error(this, "(Get tracks): " + error);
        this.tracks = new TrackIterator([]);
        this.track = undefined;
        this.changeState(PlayerState.LOAD_ERROR);
      }
    )
  }

  next() {
    if (this.tracks.hasNext()) {
      let nextTrack = this.tracks.next();
      this.set(nextTrack);
      this.play();
    } else if (this.state != PlayerState.IS_EMPTY
      && this.state != PlayerState.LOAD_ERROR) {
      this.load();
    }
  }

  prev() {
    if (this.tracks.hasPrev()) {
      let prevTrack = this.tracks.prev();
      this.set(prevTrack);
      this.play();
    } else if (this.state != PlayerState.IS_EMPTY
      && this.state != PlayerState.LOAD_ERROR) {
      this.load();
    }
  }

  set(track: Track) {
    this.track = track;
    this.audio.src = track.url;
    this.audio.load();
  }

  play() {
    this.audio.play();
    this.changeState(PlayerState.PLAY);
  }

  pause() {
    this.audio.pause();
    this.changeState(PlayerState.PAUSED);
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.changeState(PlayerState.STOP);
  }

  position() {
    return this.audio.currentTime / this.audio.duration;
  }

  changeState(newState) {
    this.state = newState;
    this.onStateChange.emit(newState);
  }
}
