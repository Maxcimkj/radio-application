import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LogService} from "./services/log.service";
import {Injectable} from "@angular/core";

@Injectable()
export class BaseRequestInterceptor implements HttpInterceptor {
  static baseUrl = 'http://localhost:8080/';
  static user = "user";
  static password = "password";

  constructor(private logService: LogService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: BaseRequestInterceptor.baseUrl + req.url,
      headers: req.headers
        .append("Authorization", "Basic "
          + btoa(BaseRequestInterceptor.user + ":" + BaseRequestInterceptor.password))
        .append("Content-Type", "application/x-www-form-urlencoded")
    });

    this.logService.log("BaseRequestInterceptor", "Request: " + JSON.stringify(req));

    return next.handle(req);
  }
}
