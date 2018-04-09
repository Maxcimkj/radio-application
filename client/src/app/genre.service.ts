import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {Genre} from "./genre";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class GenreService {
  private genresUrl = 'api/genres';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getGenreById(id:number): Observable<Genre> {
    const url = `${this.genresUrl}/${id}`;
    console.log("get genre by id request: " + url);
    return this.http.get<Genre>(url);
  }

  //todo в реальном серисе реализовать возврат конкретного жанра по имени (в mock сервисе возвращаются все похожие)
  getGenreByName(name: string): Observable<Genre[]> {
    const url = `${this.genresUrl}?name=${name}`;
    console.log("get genre by name request: " + url);
    return this.http.get<Genre[]>(url);
  }

  getGenres(mainGenre: Genre): Observable<Genre[]> {
    const url = `${this.genresUrl}?main=${mainGenre.id}`;
    console.log("get genres request: " + url);
    return this.http.get<Genre[]>(url);
  }

  getMainGenres(): Observable<Genre[]> {
    let emptyId = -9;
    const url = `${this.genresUrl}?main=${emptyId}`;
    console.log("get main genres request: " + url);
    return this.http.get<Genre[]>(url);
  }
}
