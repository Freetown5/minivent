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
    // update to clear and hide form when clicked as well as toggle parent
    this.formSubmitted.emit(this.formClose);
    // later update to send data to backend
    console.log(this.eventForm.value);
  }
}
