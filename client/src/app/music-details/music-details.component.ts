import {Component, Input} from '@angular/core';

@Component({
  selector: 'music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css'],
})
export class MusicDetailsComponent {
  @Input() name: string;
  @Input() artist: string;
  @Input() release: string;
}

