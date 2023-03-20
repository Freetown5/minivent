import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { OrganizerComponent } from './organizer.component';
import { EventsFormComponent } from '../../sections/events-form/events-form.component';
import { EventCardComponent } from 'src/app/sections/event-card/event-card.component';

describe('OrganizerComponent', () => {
  let component: OrganizerComponent;
  let fixture: ComponentFixture<OrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ OrganizerComponent, EventsFormComponent, EventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the toggle value to true', () => {
    component.showEventForm();
    fixture.detectChanges();
    expect(component.eventToggle).toBe(true);
  });

  it('should change the toggle value to false when true is passed', () => {
    let testFormSubmitted = true;
    component.hideOnSubmit(testFormSubmitted);
    fixture.detectChanges();
    expect(component.eventToggle).toBe(false);
  });

  it('should not change the toggle value when false is passed', () => {
    let testFormSubmitted = false;
    component.hideOnSubmit(testFormSubmitted);
    fixture.detectChanges();
    expect(component.eventToggle).toBe(false);
  });

  it('should add data to form data object used in the template', () => {
    let testFormData = {
      title: 'Fake Event',
      date: '11/12/2033',
      time: '2:00pm',
      region: 'H Street',
      location: '2343 7St NW',
      attendeeMax: '15',
      eventDescription: 'Some stuff would be happening here I guess',
    }

    component.viewNewData(testFormData);
    fixture.detectChanges();
    expect(component.formEventData).toContain(testFormData);
  })
});
