import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Track} from "../model/track";
import {LogService} from "./log.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TrackService {
  private tracksUrl = 'api/tracks';

  constructor(private http: HttpClient, private logService: LogService) {
  }

  getTrackByStyle(style): Observable<Track[]> {
    let url = this.tracksUrl + '?style=' + style;
    return this.http.get<Track[]>(url);
  }

  getTrackByArtist(artist): Observable<Track[]> {
    let url = this.tracksUrl + '?artist=' + artist;
    return this.http.get<Track[]>(url);
  }
}
