import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import {ComplexMusicPlayerComponent} from "./music-player-component/complex-music-player.component";
import {MusicService} from "./shared/music.service";

@NgModule({
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
      ComplexMusicPlayerComponent
    ],
    declarations: [
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
      ComplexMusicPlayerComponent
    ],
  providers: [
    MusicService
  ]
})
export class MusicModule { }
