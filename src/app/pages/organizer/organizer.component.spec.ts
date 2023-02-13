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
});
