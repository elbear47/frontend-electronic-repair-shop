import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitTicketComponent } from './components/submit-ticket/submit-ticket.component';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MetricsDashComponent } from './components/metrics-dash/metrics-dash.component';
import { TicketInfoComponent } from './components/ticket-info/ticket-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SubmitTicketComponent,
    AllTicketsComponent,
    TopnavComponent,
    MetricsDashComponent,
    TicketInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
