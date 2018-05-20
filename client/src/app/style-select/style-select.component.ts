import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'style-select-component',
  templateUrl: './style-select.component.html',
  styleUrls: ['./style-select.component.css']
})
export class StyleSelectComponent implements OnInit {
  search: string;
  type = 'style';
  searchTypes: string[] = ['style', 'artist'];

  constructor() {
  }

  ngOnInit() {
  }

  onSelectSearchType(type) {
    this.type = type;
  }

  onSubmit() {
    console.log('submit search form: ' + this.search + ' ' + this.type);
  }
}
