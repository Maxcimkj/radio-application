import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {Track} from "./track";
import {of} from "rxjs/observable/of";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MusicService {
  private tracksUrl = 'api/tracks';
  private static MAX_TRACK_COUNT = 20;

  audio;

  constructor(private http: HttpClient) {
    this.audio = new Audio();
  }

  getTracks(searchRequest): Observable<Track[]> {
    let url = this.tracksUrl +
      ((searchRequest.type == 'style') ? '?style=' + searchRequest.search :
      (searchRequest.type == 'artist') ? '?artist=' + searchRequest.search : '');
    console.log("MusicService: tracks url - " + url);
    return this.http.get<Track[]>(url);
  }

  load(url) {
    console.log("MusicService: load track - " + url);
    this.audio.src = url;
    this.audio.load();
  }

  static formatTime(seconds) {
    console.log("MusicService: format time: " + seconds);
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
}
