import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {Track} from "./track";
import {of} from "rxjs/observable/of";
import {SearchType} from "./search-type";

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

  getTracks(searchType: SearchType, search: String): Observable<Track[]> {
    let url = this.tracksUrl +
      ((searchType == SearchType.STYLE) ? '?style=' + search :
        (searchType == SearchType.ARTIST) ? '?artist=' + search : '');
    console.log("MusicService: tracks url - " + url);
    return this.http.get<Track[]>(url);
  }

  load(url) {
    console.log("MusicService: load track - " + url);
    this.audio.src = url;
    this.audio.load();
  }

  static formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
}
