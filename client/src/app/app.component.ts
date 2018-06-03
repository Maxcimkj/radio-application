import {Component} from '@angular/core';
import {TrackIterator} from "./track-iterator";
import {MusicService} from "./music.service";
import {Track} from "./track";
import {PlayerState} from "./player-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  artist;
  release;
  position;
  elapsed;
  duration;

  tracks: TrackIterator;
  playerState: PlayerState = PlayerState.START;
  searchType;
  search;

  constructor(private musicService: MusicService) {
  }

  ngOnInit() {
    console.log("Player init");

    this.musicService.audio.onended = this.handleEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  loadTracks() {
    this.musicService.getTracks(this.searchType, this.search).subscribe(inputTracks => {
      console.log("Player component: loaded tracks: " + JSON.stringify(inputTracks as Track[]));
      if (inputTracks.length > 0) {
        this.tracks = new TrackIterator(inputTracks);
        this.setTrack(this.tracks.next());
      } else {
        this.playerState = PlayerState.NOT_LOADED;
      }
    });
  }

  setTrack(track: Track) {
    this.musicService.load(track.url);

    this.name = track.name;
    this.artist = track.artist;
    this.release = track.release;

    console.log('set track ' + track.name + ' ' + track.artist + ' ' + track.release);

    if (this.playerState != PlayerState.PAUSED) {
      this.musicService.audio.play();
      this.playerState = PlayerState.PLAY;
    }
  }

  handleEnded(e) {
    console.log("handle ended");
    this.playNextTrack();
  }

  handleForward() {
    console.log("handle forward");
    this.playNextTrack();
  }

  playNextTrack() {
    if (this.tracks.hasNext()) {
      this.setTrack(this.tracks.next());
    } else {
      this.loadTracks();
    }
  }

  handlePausePlay() {
    console.log("handle pause/play: " + this.playerState);
    if (this.musicService.audio.paused) {
      this.playerState = PlayerState.PLAY;
      this.musicService.audio.play()
    } else {
      this.playerState = PlayerState.PAUSED;
      this.musicService.audio.pause()
    }
  }

  handleStop() {
    console.log("handle stop");
    this.musicService.audio.pause();
    this.musicService.audio.currentTime = 0;
    this.playerState = PlayerState.STOP;
  }

  handleBackward() {
    console.log("handle backward");
    this.playPrevTrack();
  }

  playPrevTrack() {
    console.log("PlayPrev: prev track");
    if (this.tracks.hasPrev()) {
      this.setTrack(this.tracks.prev());
    } else {
      this.loadTracks();
    }
  }

  handleTimeUpdate(e) {
    this.timeUpdate();
  }

  timeUpdate() {
    const elapsed = this.musicService.audio.currentTime;
    const duration = this.musicService.audio.duration;
    this.elapsed = MusicService.formatTime(elapsed);
    if (duration > 0) {
      this.position = elapsed / duration;
      this.duration = MusicService.formatTime(duration);
    } else {
      const track = this.tracks.lastReturned();
      this.duration = MusicService.formatTime(track.duration);
      this.position = 0;
    }
  }

  handleSearchRequest(event) {
    this.searchType = event.type;
    this.search = event.search;

    if(this.playerState == PlayerState.PLAY) {
      this.musicService.audio.pause();
      this.playerState = PlayerState.STOP;
      this.musicService.audio.currentTime = 0;
    }

    this.loadTracks();
  }
}
