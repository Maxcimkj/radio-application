import {SearchType} from "./search-type";

export class MusicSearchRequest {
  type: SearchType;
  search: string;

  constructor(type: SearchType, search: string) {
    this.type = type;
    this.search = search;
  }
}
