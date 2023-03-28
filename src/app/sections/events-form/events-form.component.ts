import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent {
  eventForm = this.formBuilder.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    region: [''],
    location: ['', Validators.required],
    attendeeMax: ['', Validators.required],
    eventDescription: ['', Validators.required]
  });

  @Output() formSubmitted = new EventEmitter();
  @Output() submittedData = new EventEmitter();
  formClose: boolean = true;
  
  constructor(private formBuilder: FormBuilder){}

  onSubmit(){
    this.formSubmitted.emit(this.formClose);
    this.submittedData.emit(this.eventForm.value);
    
    // later update to send data to backend
  }
}