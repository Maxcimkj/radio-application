export class MusicSearchRequest {
  type: string;
  search: string;

  constructor(type: string, search: string) {
    this.type = type;
    this.search = search;
  }
}
