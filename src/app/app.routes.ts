// import { Routes } from '@a5ngular/router';
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { DoctorNotesComponent } from './components/doctor-notes/doctor-notes.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MedicalRecordDetailsComponent } from './components/medical-record-details/medical-record-details.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' }, // Define home route
          { path: 'home', component: LayoutComponent }, // Your homepage component
          { path: 'patients', component: PatientProfileComponent },
          { path: 'appointments', component: AppointmentSchedulingComponent },
          { path: 'medicalRecords', component: MedicalRecordsComponent },
          { path: 'search', component: SearchFilterComponent },
        ]
      },
      { path: 'patient-profile', component: PatientProfileComponent},
      { path: 'login', component: LoginComponent },
      { path: 'appointment-scheduling', component: AppointmentSchedulingComponent },
      { path: 'medical-records', component: MedicalRecordsComponent },
      { path: 'search-filter', component: SearchFilterComponent },
      { path: 'medical-record-details', component: MedicalRecordDetailsComponent},
      { path: '**' , redirectTo: 'home'}
];


// No need for NgModule, just export the Router providers for standalone mode
export const appRoutingProviders = [
    provideRouter(routes)
  ];