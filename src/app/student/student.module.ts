import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ExtensionRequestComponent } from './extension-request/extension-request.component';



@NgModule({
  declarations: [
    StudentComponent,
    ViewScheduleComponent,
    ExtensionRequestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
