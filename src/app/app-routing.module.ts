import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { DoctorNotesComponent } from './components/doctor-notes/doctor-notes.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

const routes: Routes = [
  { path: 'patient-profile', component: PatientProfileComponent },
  { path: 'appointment-scheduling', component: AppointmentSchedulingComponent },
  { path: 'medical-records', component: MedicalRecordsComponent },
  { path: 'doctor-notes', component: DoctorNotesComponent },
  { path: 'search-filter', component: SearchFilterComponent },
  { path: '', redirectTo: '/patient-profile', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
