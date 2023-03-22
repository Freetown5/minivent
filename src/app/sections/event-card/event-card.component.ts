import { Component, Input } from '@angular/core';

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

  attendeesSum: number;

  get attendeeTotal(){
    this.attendeesSum = this.attendees.length;
    return this.attendeesSum;
  }
}
