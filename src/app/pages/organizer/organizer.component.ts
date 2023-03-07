import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../../../assets/fake_data/events';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  public eventData = EVENTS;
  public eventToggle: boolean = false;
  
  ngOnInit(){
  }

  showEventForm(){
    this.eventToggle === false? this.eventToggle = true : this.eventToggle = false;
  }

  hideOnSubmit(formSubmitted: boolean){
    if(formSubmitted === true){ this.eventToggle = false};
  }
}
