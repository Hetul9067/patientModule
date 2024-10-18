# HospitalManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<!-- 
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
// import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
// import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
// import { DoctorNotesComponent } from './components/doctor-notes/doctor-notes.component';
// import { SearchFilterComponent } from './components/search-filter/search-filter.component';
// import { LayoutComponent } from './layout/layout.component';

// const routes: Routes = [
//   { path: '', component: LayoutComponent},
//   { path: 'patient-profile', component: PatientProfileComponent },
//   { path: 'appointment-scheduling', component: AppointmentSchedulingComponent },
//   { path: 'medical-records', component: MedicalRecordsComponent },
//   { path: 'doctor-notes', component: DoctorNotesComponent },
//   { path: 'search-filter', component: SearchFilterComponent },
//   { path: '', redirectTo: '/patient-profile', pathMatch: 'full' } // Default route
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Adjust the import path

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Adjust this path as needed
  { path: '**', redirectTo: '/home' } // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} -->
