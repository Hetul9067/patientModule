// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';
import { DoctorNotesComponent } from './components/doctor-notes/doctor-notes.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientProfileComponent,
    AppointmentSchedulingComponent,
    MedicalRecordsComponent,
    DoctorNotesComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
