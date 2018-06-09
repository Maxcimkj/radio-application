import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StyleService} from "./services/style.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryMusicDataService} from "./services/in-memory-music-data.service";

import {MusicSearchComponent} from './music-search/music-search.component';
import {MusicPlayerComponent} from './player/music-player/music-player.component';
import {MusicDetailsComponent} from './player/music-details/music-details.component';
import {MusicProgressComponent} from './player/music-progress/music-progress.component';
import {MusicPlayerBlockComponent} from './player/music-player-block/music-player-block.component';

import {TrackService} from "./services/track.service";
import {PlayerService} from "./player/player.service";
import {LogService} from "./services/log.service";

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponent,
    MusicPlayerComponent,
    MusicDetailsComponent,
    MusicProgressComponent,
    MusicPlayerBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMusicDataService, {dataEncapsulation: false}),
    FormsModule
  ],
  providers: [
    StyleService,
    TrackService,
    PlayerService,
    LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
