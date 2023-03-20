import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { TelekomDatePipe } from './pipes/event-date.pipe';
import { MonthNavigatorComponent } from './components/month-navigator/month-navigator.component';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';

@NgModule({
  declarations: [AppComponent, EventListComponent, TelekomDatePipe, MonthNavigatorComponent, CreateAppointmentPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
