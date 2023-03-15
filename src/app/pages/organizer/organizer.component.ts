import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../../../assets/fake_data/events';
import { eventInt } from 'src/app/sections/events-form/event-form.interface';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  eventData = EVENTS; 
  eventToggle: boolean = false;
  formEventData: Array<eventInt> = [];
  
  ngOnInit(){
  }

  showEventForm(){
    this.eventToggle === false? this.eventToggle = true : this.eventToggle = false;
  }

  hideOnSubmit(formSubmitted: boolean){
    if(formSubmitted === true){ this.eventToggle = false };
  }

  viewNewData(formData: object){
    this.formEventData.push(formData);
  }
}
