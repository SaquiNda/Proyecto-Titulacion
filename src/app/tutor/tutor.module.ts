import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { TutorComponent } from './tutor.component';
import { UploadReportComponent } from './upload-report/upload-report.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    TutorComponent,
    UploadReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TutorModule { }
