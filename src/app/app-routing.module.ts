import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OrganizerComponent } from './organizer/organizer.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'organizer', component: OrganizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
