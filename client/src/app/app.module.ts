import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {GenreService} from "./genre.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryGenreDataService} from "./in-memory-genre-data.service";
import {MessageService} from './message.service';
import {MusicModule} from "./music/music.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryGenreDataService, {dataEncapsulation: false}),
    MusicModule,
    FormsModule
  ],
  providers: [GenreService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
