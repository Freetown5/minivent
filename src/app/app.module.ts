import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OrganizerComponent } from './pages/organizer/organizer.component';
import { EventCardComponent } from './sections/event-card/event-card.component';
import { EventsFormComponent } from './sections/events-form/events-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OrganizerComponent,
    EventCardComponent,
    EventsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
