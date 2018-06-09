import {Component, EventEmitter} from '@angular/core';
import {TrackSearchParams} from "./player-module/track-search-params";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchEvent = new EventEmitter<TrackSearchParams>();
}
