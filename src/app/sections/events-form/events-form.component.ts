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
    time: [''],
    region: [''],
    location: [''],
    attendeeMax: [''],
    eventDescription: ['']
  });

  @Output() formSubmitted = new EventEmitter();
  @Output() submittedData = new EventEmitter();
  formClose: boolean = true;
  
  constructor(private formBuilder: FormBuilder){}

  onSubmit(){
    // update to clear and hide form when clicked

    this.formSubmitted.emit(this.formClose);
    this.submittedData.emit(this.eventForm.value);

    // later update to send data to backend
  }
}