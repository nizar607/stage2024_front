import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetingRoutingModule} from "./meeting-routing.module";
import {CalendarComponent} from "./calendar/calendar.component";



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
