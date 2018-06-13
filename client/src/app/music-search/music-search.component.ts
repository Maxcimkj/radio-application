import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {SearchType, TrackSearchParams} from "../track-search-params";
import {LogService} from "../services/log.service";

@Component({
  selector: 'music-search-component',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {
  @Input() searchRequestEvent: EventEmitter<TrackSearchParams>;

  searchParams = new TrackSearchParams(SearchType.STYLE, '');
  searchTypes = Object.keys(SearchType);

  constructor(private logService: LogService) {
  }

  ngOnInit() {
  }

  onSelectSearchType(type:string) {
    this.searchParams.type = SearchType[type];
  }

  onSubmit() {
    this.logService.log("MusicSearchComponent", 'submit search form: '
      + this.searchParams.search + ' ' + this.searchParams.type);
    this.searchRequestEvent.emit(this.searchParams);
  }
}
