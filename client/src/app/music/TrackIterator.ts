import {Track} from "./track";

export class TrackIterator {
  private size;
  private current = 0;
  private lastReturnedIndex = -1;

  constructor(private tracks: Track[]) {
    this.size = tracks.length;
  }

  next(): Track {
    this.lastReturnedIndex = this.current;
    return this.tracks[this.current++];
  }

  prev(): Track {
    this.lastReturnedIndex -= 1;
    this.current -= 1;
    return this.tracks[this.lastReturnedIndex];
  }

  hasNext(): boolean {
    return this.current != this.size;
  }

  hasPrev(): boolean {
    return this.lastReturnedIndex > 0;
  }

  lastReturned(): Track {
    return this.tracks[this.lastReturnedIndex];
  }

  hasLastReturned() {
    return this.lastReturnedIndex > 0;
  }
}
