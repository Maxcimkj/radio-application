import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Style} from "../model/style";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StyleService {
  private genresUrl = 'api/genres';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getGenreById(id: number): Observable<Style> {
    const url = `${this.genresUrl}/${id}`;
    return this.http.get<Style>(url);
  }

  //todo в реальном серисе реализовать возврат конкретного жанра по имени (в mock сервисе возвращаются все похожие)
  getGenreByName(name: string): Observable<Style[]> {
    const url = `${this.genresUrl}?name=${name}`;
    return this.http.get<Style[]>(url);
  }

  getGenres(mainGenre: Style): Observable<Style[]> {
    const url = `${this.genresUrl}?main=${mainGenre.id}`;
    return this.http.get<Style[]>(url);
  }

  getMainGenres(): Observable<Style[]> {
    let emptyId = -9;
    const url = `${this.genresUrl}?main=${emptyId}`;
    return this.http.get<Style[]>(url);
  }
}
