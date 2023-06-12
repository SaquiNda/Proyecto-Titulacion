import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewScheduleComponent } from './student/view-schedule/view-schedule.component';
import { ExtensionRequestComponent } from './student/extension-request/extension-request.component';
import { ScheduleComponent } from './tutor/schedule/schedule.component';
import { UploadReportComponent } from './tutor/upload-report/upload-report.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: 'student', component: StudentComponent},
  { path: 'view-schedule', component: ViewScheduleComponent },
  { path: 'extension-request', component: ExtensionRequestComponent},
  { path: 'tutor', component: TutorComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'upload-report', component: UploadReportComponent},
  { path: 'student-info', component: StudentComponent},
  { path: '**', redirectTo: '/404' } // Redirige cualquier otra ruta a la página 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
