import { Component } from '@angular/core';
import * as testData from '../../assets/fake_data/events.json';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  public eventData = testData;
}
