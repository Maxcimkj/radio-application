import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MusicPlayerComponent} from './music-player/music-player.component';
import {MusicDetailsComponent} from './music-details/music-details.component';
import {MusicProgressComponent} from './music-progress/music-progress.component';
import {MusicPlayerBlockComponent} from './music-player-block/music-player-block.component';

import {TrackService} from "./track.service";
import {PlayerService} from "./player.service";
import {LogService} from "../log.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TrackService, PlayerService, LogService],
  declarations: [
    MusicPlayerComponent,
    MusicDetailsComponent,
    MusicProgressComponent,
    MusicPlayerBlockComponent
  ],
  exports: [
    MusicPlayerComponent,
    MusicDetailsComponent,
    MusicProgressComponent,
    MusicPlayerBlockComponent
  ]
})
export class PlayerModule {
}
