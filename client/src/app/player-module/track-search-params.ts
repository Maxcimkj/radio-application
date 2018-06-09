export enum SearchType {
  ARTIST = 'Artist',
  STYLE = 'Style'
}

export class TrackSearchParams {
  type: SearchType;
  search: string;

  constructor(type: SearchType, search: string) {
    this.type = type;
    this.search = search;
  }
}
