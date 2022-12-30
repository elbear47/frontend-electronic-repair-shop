import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';
import { MetricsDashComponent } from './components/metrics-dash/metrics-dash.component';
import { SubmitTicketComponent } from './components/submit-ticket/submit-ticket.component';
import { AdminAllTicksComponent } from './components/admin-all-ticks/admin-all-ticks.component';

const routes: Routes = [
  {path: 'home', component: AllTicketsComponent},
  {path: 'adminHome', component: AdminAllTicksComponent},
  {path: 'metrics', component: MetricsDashComponent},
  {path: 'newTicket', component: SubmitTicketComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
