import {Component, OnInit} from '@angular/core';
import {Track} from "../track";
import {MusicService} from "../shared/music.service";
import {TrackIterator} from "../TrackIterator";

@Component({
  selector: 'music-player-component',
  templateUrl: './complex-music-player.component.html',
  styleUrls: ['./complex-music-player.component.css']
})
export class ComplexMusicPlayerComponent implements OnInit {
  title;
  position;
  elapsed;
  duration;
  paused = true;
  backgroundStyle;
  tracks: TrackIterator;

  constructor(private musicService: MusicService) {
  }

  ngOnInit() {
    console.log("Player init");
    this.loadTracks();

    this.musicService.audio.onended = this.handleEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.paused = true;
  }

  loadTracks() {
    this.musicService.getRandomTracks().subscribe(tracks => {
      console.log("Player component: loaded traks: " + JSON.stringify(tracks as Track[]));
      this.tracks = new TrackIterator(tracks);
      this.setTrack(this.tracks.next());
    });
  }

  setTrack(track: Track) {
    this.musicService.load(track.url);
    this.title = track.name;
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
    this.elapsed = this.musicService.formatTime(elapsed);
    if (duration > 0) {
      this.position = elapsed / duration;
      this.duration = this.musicService.formatTime(duration);
    } else {
      const track = this.tracks.lastReturned();
      this.duration = this.musicService.formatTime(track.duration);
      this.position = 0;
    }
  }
}
