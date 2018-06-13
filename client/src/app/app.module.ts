import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StyleService} from "./services/style.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryMusicDataService} from "./services/in-memory-music-data.service";

import {MusicSearchComponent} from './music-search/music-search.component';
import {MusicPlayerComponent} from './player/music-player/music-player.component';
import {MusicDetailsComponent} from './player/music-details/music-details.component';
import {MusicProgressComponent} from './player/music-progress/music-progress.component';
import {MusicPlayerBlockComponent} from './player/music-player-block/music-player-block.component';

import {TrackService} from "./services/track.service";
import {PlayerController} from "./player/player-controller";
import {LogService} from "./services/log.service";
import {BaseRequestInterceptor} from "./base-request-interceptor";

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
    FormsModule
  ],
  providers: [
    StyleService,
    TrackService,
    PlayerController,
    LogService,
    {provide: HTTP_INTERCEPTORS, useClass: BaseRequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
