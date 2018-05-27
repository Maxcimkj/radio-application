import {Component} from '@angular/core';
import {TrackIterator} from "./track.iterator";
import {MusicService} from "./music.service";
import {Track} from "./track";

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
  paused = true;
  backgroundStyle;
  tracks: TrackIterator;
  tracksLoaded = true;
  searchRequest;

  constructor(private musicService: MusicService) {
  }

  ngOnInit() {
    console.log("Player init");

    this.musicService.audio.onended = this.handleEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.paused = true;
  }

  loadTracks() {
    this.musicService.getTracks(this.searchRequest).subscribe(inputTracks => {
      console.log("Player component: loaded traks: " + JSON.stringify(inputTracks as Track[]));
      this.tracks = new TrackIterator(inputTracks);
      this.setTrack(this.tracks.next());
      this.tracksLoaded = !this.tracks.isEmpty();
    });
  }

  setTrack(track: Track) {
    this.musicService.load(track.url);

    this.name = track.name;
    this.artist = track.artist;
    this.release = track.release;

    console.log('set track ' + track.name + ' ' + track.artist + ' ' + track.release);

    if (!this.paused) {
      this.musicService.audio.play();
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
    console.log("hande pause/play");
    if (this.musicService.audio.paused) {
      this.paused = false;
      this.musicService.audio.play()
    } else {
      this.paused = true;
      this.musicService.audio.pause()
    }
  }

  handleStop() {
    console.log("handle stop");
    this.musicService.audio.pause();
    this.musicService.audio.currentTime = 0;
    this.paused = true;
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
    console.log("handle time update");
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
    this.searchRequest = event;
    this.loadTracks();
  }
}
