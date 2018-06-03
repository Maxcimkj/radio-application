import {Component, Input} from '@angular/core';
import {PlayerState} from "../player-state";

@Component({
  selector: 'music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css'],
})
export class MusicDetailsComponent {
  @Input() name: string;
  @Input() artist: string;
  @Input() release: string;
  @Input() state: PlayerState;

  notLoadedInfo = 'Tracks for this artist ot style don\'t find';
  startInfo = 'Search tracks by style or artist';

  isActive(): boolean {
    return this.state == PlayerState.ACTIVE;
  }

  isPlay(): boolean {
    return this.state == PlayerState.PLAY;
  }

  isStop(): boolean {
    return this.state == PlayerState.STOP;
  }

  isPaused() {
    return this.state == PlayerState.PAUSED;
  }

  isNotLoaded(): boolean {
    return this.state == PlayerState.NOT_LOADED;
  }

  isStart(): boolean {
    return this.state == PlayerState.START;
  }
}

