import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  let mockAttendees = [
    {
      "avatar": "",
      "name": "Ashley Z.",
      "email": "random.string@gmail.com",
      "lead": true 
    },
    {
        "avatar": "",
        "name": "Lena Q.",
        "email": "random.number@gmail.com",
        "lead": true
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    component.attendees = mockAttendees;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title', () => {
    component.title = 'Title';
    expect(component.title).toBe('Title');
  });

  it('should set date', () => {
    component.date = '10/09/25';
    expect(component.date).toBe('10/09/25');
  });

  it('should set time', () => {
    component.time = '10am';
    expect(component.time).toBe('10am');
  });

  it('should set details', () => {
    component.details = 'Lorem Ipsum';
    expect(component.details).toBe('Lorem Ipsum');
  });

  it('should set region', () => {
    component.region = 'Soho';
    expect(component.region).toBe('Soho');
  });

  it('should contain attendees', () => {
    expect(component.attendees).toBe(mockAttendees);
  });

  it('should get attendee total', () => {
    component.attendees = mockAttendees;
    component.attendeeTotal;
    expect(component.attendeesSum).toBe(2); 
  });
});
