// src/app/components/patient-profile/patient-profile.component.ts
import { Component } from '@angular/core';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
  patient: Patient = {
    id: 1,
    name: '',
    age: 0,
    gender: '',
    contact: '',
    medicalHistory: []
  };

  saveProfile() {
    console.log('Patient Profile Saved', this.patient);
    // Logic to save patient profile goes here
  }
}
