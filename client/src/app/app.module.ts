import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StyleService} from "./style.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryGenreDataService} from "./in-memory-genre-data.service";
import {StyleSelectComponent} from './style-select/style-select.component';

import {MusicPlayerComponent} from './music-player/music-player.component';
import {MusicDetailsComponent} from './music-details/music-details.component';
import {MusicProgressComponent} from './music-progress/music-progress.component';
import {MusicService} from "./music.service";
import {PlayerState} from "./player-state";
import {SearchType} from "./search-type";

@NgModule({
  declarations: [
    AppComponent,
    StyleSelectComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryGenreDataService, {dataEncapsulation: false}),
    FormsModule
  ],
  providers: [StyleService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
