import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitTicketComponent } from './components/submit-ticket/submit-ticket.component';
import { AllTicketsComponent } from './components/all-tickets/all-tickets.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MetricsDashComponent } from './components/metrics-dash/metrics-dash.component';
import { FormsModule } from '@angular/forms';
import { AdminAllTicksComponent } from './components/admin-all-ticks/admin-all-ticks.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitTicketComponent,
    AllTicketsComponent,
    TopnavComponent,
    MetricsDashComponent,
    AdminAllTicksComponent
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
