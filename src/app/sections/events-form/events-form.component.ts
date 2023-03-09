import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent {
  eventForm = this.formBuilder.group({
    title: [''],
    date: [''],
    region: [''],
    location: [''],
    attendeeMax: [''],
    eventDescription: ['']
  });

  @Output() formSubmitted = new EventEmitter();
  formClose: boolean = true;
  
  constructor(private formBuilder: FormBuilder){}

  onSubmit(){
    // update to clear and hide form when clicked
    this.formSubmitted.emit(this.formClose);
    // later update to send data to backend
    console.log(this.eventForm.value);
    // the eventForm data above should be emitted and sent to the organizer 
    // component from here 
  }
}
/**
 * Event form data (this.eventForm.value) needs to be passed to the organizer component
 * so that whatever is added to the form can be added to the page through an 
 * implementation of the event-card component. This is another case for and 
 * EventEmitter/Output decorator.
 */