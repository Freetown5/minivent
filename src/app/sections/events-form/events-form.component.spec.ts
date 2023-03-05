import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { EventsFormComponent } from './events-form.component';

describe('EventsFormComponent', () => {
  let component: EventsFormComponent;
  let fixture: ComponentFixture<EventsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ], //should include modules the component relies on
      providers: [ EventsFormComponent ], // should include what is being tested and mocks
      declarations: [ EventsFormComponent ] // should include what components are being tested
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the title value from the input', () => {
    let titleStub = component.eventForm.controls['title'];
    titleStub.setValue('Ang');
    expect(titleStub.value).toEqual('Ang');
  });

  it('should receive the date value from the input', () => {
    let dateStub = component.eventForm.controls['date'];
    dateStub.setValue('07/02/2024');
    expect(dateStub.value).toEqual('07/02/2024');
  });

  it('should receive the region value from the input', () => {
    let regionStub = component.eventForm.controls['region'];
    regionStub.setValue('Soho');
    expect(regionStub.value).toEqual('Soho');
  });

  it('should receive the location value from the input', () => {
    let locationStub = component.eventForm.controls['location'];
    locationStub.setValue('New York, NY');
    expect(locationStub.value).toEqual('New York, NY');
  });

  it('should receive the attendee max value from the input', () => {
    let attendeeMaxStub = component.eventForm.controls['attendeeMax'];
    attendeeMaxStub.setValue('9');
    expect(attendeeMaxStub.value).toEqual('9');
  });

  it('should receive the event description value from the input', () => {
    let eventDescStub = component.eventForm.controls['eventDescription'];
    let description = 'This would contain all of the details for an event';
    eventDescStub.setValue(description);
    expect(eventDescStub.value).toEqual(description);
  });

  it('should log event form data to the console', () => {
    component.eventForm.controls['title'].setValue('Ang');
    component.eventForm.controls['date'].setValue('07/02/2024');
    component.eventForm.controls['region'].setValue('Soho');
    component.eventForm.controls['location'].setValue('New York, NY');
    component.eventForm.controls['attendeeMax'].setValue('9');
    component.eventForm.controls['eventDescription'].setValue('This would contain all of the details for an event');

    let testEventForm = {
      title: 'Ang',
      date: '07/02/2024',
      region: 'Soho',
      location: 'New York, NY',
      attendeeMax: '9',
      eventDescription: 'This would contain all of the details for an event'
    }

    component.onSubmit();
    expect(component.eventForm.value).toEqual(testEventForm);
  })
});
