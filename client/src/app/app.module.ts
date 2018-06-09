import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PlayerModule} from "./player-module/player.module";

import {AppComponent} from './app.component';
import {StyleService} from "./style.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryMusicDataService} from "./in-memory-music-data.service";
import {MusicSearchComponent} from './music-search/music-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMusicDataService, {dataEncapsulation: false}),
    FormsModule,
    PlayerModule
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
