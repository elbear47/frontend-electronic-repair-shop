import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';

const routes: Routes = [
  {path: 'home', component: AllTicketsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
