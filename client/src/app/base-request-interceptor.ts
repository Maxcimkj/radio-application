import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LogService} from "./services/log.service";
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

@Injectable()
export class BaseRequestInterceptor implements HttpInterceptor {
  constructor(private logService: LogService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: environment.baseUrl + req.url,
      headers: req.headers
        .append("Authorization", "Basic "
          + btoa(environment.securityApiKey))
        .append("Content-Type", "application/x-www-form-urlencoded")
    });

    this.logService.log("BaseRequestInterceptor", "Request: " + JSON.stringify(req));

    return next.handle(req);
  }
}
