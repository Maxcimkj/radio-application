import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MusicPlayerComponent} from "../music-player/music-player.component";
import {MusicSearchRequest} from "../music.search.request";
import {SearchType} from "../search-type";

@Component({
  selector: 'style-select-component',
  templateUrl: './style-select.component.html',
  styleUrls: ['./style-select.component.css']
})
export class StyleSelectComponent implements OnInit {
  @Output() sendSearchRequest = new EventEmitter<MusicSearchRequest>();

  searchRequest = new MusicSearchRequest(SearchType.STYLE, '');
  searchTypes = Object.keys(SearchType);

  constructor() {
  }

  ngOnInit() {
  }

  onSelectSearchType(type) {
    this.searchRequest.type = type;
  }

  onSubmit() {
    console.log('submit search form: ' + this.searchRequest.search + ' ' + this.searchRequest.type);
    this.sendSearchRequest.emit(this.searchRequest);
  }
}
