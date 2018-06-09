import {Component, Injectable} from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
  }

  public log(component, message: String) {
    console.log("LOG. " + component + "," + message)
  }

  public error(component, message: String) {
    console.log("ERROR. " + component + ", " + message)
  }
}
