import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../../../assets/fake_data/events';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  eventData = EVENTS; 
  // adding to this (EVENTS) would require figuring out how to add to a static json 
  // object outside of the actual app, not worth the effort unless it's to an
  // actual database
  eventToggle: boolean = false;
  formEventData: Array<object> = [];
  // The data should be emitted here when the submit button is clicked in the event
  // card

  // an empty object should be added here and should exist to contain all of the data
  // sent by the eventForm component
  
  ngOnInit(){
  }

  showEventForm(){
    this.eventToggle === false? this.eventToggle = true : this.eventToggle = false;
  }

  hideOnSubmit(formSubmitted: boolean){
    if(formSubmitted === true){ this.eventToggle = false};
  }

  viewNewData(formData: object){
    this.formEventData.push(formData);
    console.log(this.formEventData);
  }
}
