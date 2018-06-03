import {Component, Output, EventEmitter, Input} from '@angular/core';
import {PlayerState} from "../player-state";

@Component({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent {
  @Input() state;
  @Output() backward = new EventEmitter();
  @Output() pauseplay = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() stop = new EventEmitter();

  isNotLoaded(): boolean {
    return this.state == PlayerState.NOT_LOADED;
  }

  isStart(): boolean {
    return this.state == PlayerState.START;
  }

  isPaused(): boolean {
    return this.state == PlayerState.PAUSED;
  }

  isPlay(): boolean {
    return this.state == PlayerState.PLAY;
  }

  isStop(): boolean {
    return this.state == PlayerState.STOP;
  }
}

