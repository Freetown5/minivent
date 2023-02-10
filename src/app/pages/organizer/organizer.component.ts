import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../../../assets/fake_data/events';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  public eventData = EVENTS;
  
  ngOnInit(){
  }
}
