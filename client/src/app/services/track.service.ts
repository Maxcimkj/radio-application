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
  constructor(private http: HttpClient, private logService: LogService) {
  }

  getTrackByStyle(style): Observable<Track[]> {
    let url = `api/style/${style}/tracks`;
    this.logRequestUrl(url);
    return this.http.get<Track[]>(url);
  }

  getTrackByArtist(artist): Observable<Track[]> {
    let url = `api/artist/${artist}/tracks`;
    this.logRequestUrl(url);
    return this.http.get<Track[]>(url);
  }

  logRequestUrl(url) {
    this.logService.log("TrackService", "Send request to url:" + url);
  }
}
