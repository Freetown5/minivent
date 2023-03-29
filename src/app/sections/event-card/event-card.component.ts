import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() title: string;
  @Input() date: string;
  @Input() region: string;
  @Input() time: string;
  @Input() details: string;
  @Input() attendees: Array<object>;
  @Input() attendeeMax: string;

  constructor(private formBuilder: FormBuilder){} 

  attendeesSum: number;
  formOpen: boolean = false;

  attendeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  }); 

  get attendeeTotal(){
    this.attendeesSum = this.attendees.length;
    return this.attendeesSum;
  }

  toggleForm(){
    this.formOpen === false?this.formOpen = true:this.formOpen = false;
  }

  submitForm(){
    console.log(this.attendeeForm.value);
    this.formOpen = false;
  }
}
