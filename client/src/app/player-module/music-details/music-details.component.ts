import {Component, Input} from '@angular/core';
import {Track} from "../track";

@Component({
  selector: 'music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css'],
})
export class MusicDetailsComponent {
  @Input() track;
  @Input() message;
}

