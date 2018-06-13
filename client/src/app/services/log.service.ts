import {Component, Injectable} from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
  }

  public log(component: String, message: String) {
    console.log("LOG. " + component + "," + message)
  }

  public error(component: String, message: String) {
    console.log("ERROR. " + component + ", " + message)
  }
}
