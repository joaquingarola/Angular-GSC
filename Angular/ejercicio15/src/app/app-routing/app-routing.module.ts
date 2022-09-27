import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsGuard } from '../event-details.guard';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'details/:id', component: EventDetailsComponent, canActivate: [EventDetailsGuard], canDeactivate: [EventDetailsGuard]},
  { path: '', redirectTo: 'events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
