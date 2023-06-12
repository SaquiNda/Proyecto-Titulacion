import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { StudentInfoComponent } from './student-info/student-info.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    HeaderComponent,
    BreadcrumbComponent,
    StudentInfoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
