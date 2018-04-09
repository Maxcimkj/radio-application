import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {Track} from "../track";
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

  /*
  * todo добавить формирование url с ограничением по кличеству объектов
  * */
  getRandomTracks(): Observable<Track[]> {
    console.log("MusicService: load random tracks (count: " + MusicService.MAX_TRACK_COUNT + ")");
    return this.http.get<Track[]>(this.tracksUrl);
  }

  load(url) {
    console.log("MusicService: load track - " + url);
    this.audio.src = url;
    this.audio.load();
  }

  formatTime(seconds) {
    console.log("MusicService: format time: " + seconds);
    let minutes:any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
}
