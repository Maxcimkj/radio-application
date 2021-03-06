import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {TrackSearchParams} from "../../track-search-params";
import {PlayerController, PlayerState} from "../player-controller";

@Component({
  selector: 'music-player-block',
  templateUrl: './music-player-block.component.html',
  styleUrls: ['./music-player-block.component.css']
})
export class MusicPlayerBlockComponent implements OnInit {
  static loadErrorMsg = 'Error load';
  static notLoadedInfo = 'Tracks for this artist ot style not found';
  static startInfo = 'Search tracks by style or artist';


  @Input() searchRequestEvent: EventEmitter<TrackSearchParams>;

  currentTime;
  message;
  playerButtonEnabled;
  playing;
  track;


  constructor(public playerService: PlayerController) {
  }

  ngOnInit() {
    this.setComponentState(this.playerService.state);

    this.searchRequestEvent.subscribe(request => this.playerService.init(request));

    this.playerService.audio.onended = this.handleEnded.bind(this);
    this.playerService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.playerService.onStateChange.subscribe(state => this.setComponentState(state));
  }

  handleEnded(e) {
    this.playerService.next()
  }

  handleTimeUpdate(e) {
    this.currentTime = this.playerService.position();
  }

  handleForward() {
    this.playerService.next()
  }

  handlePausePlay() {
    if (this.playerService.state == PlayerState.PLAY) {
      this.playerService.pause();
    } else {
      this.playerService.play();
    }
  }

  handleStop() {
    this.playerService.stop()
  }

  handleBackward() {
    this.playerService.prev();
  }

  setComponentState(state: PlayerState) {
    this.track = this.playerService.track;
    this.playing = state == PlayerState.PLAY;
    this.playerButtonEnabled = state != PlayerState.INIT
      && state != PlayerState.IS_EMPTY
      && state != PlayerState.LOAD_ERROR;

    switch (state) {
      case PlayerState.INIT:
        this.message = MusicPlayerBlockComponent.startInfo;
        break;
      case PlayerState.LOAD_ERROR:
        this.message = MusicPlayerBlockComponent.loadErrorMsg;
        break;
      case PlayerState.IS_EMPTY:
        this.message = MusicPlayerBlockComponent.notLoadedInfo;
        break;
      case PlayerState.STOP:
      case PlayerState.PLAY:
      case PlayerState.PAUSED:
        this.message = undefined;
    }
  }
}
