// src/app/components/patient-profile/patient-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patients: Patient[] = [];
  
  selectedPatient: Patient;
  isEditing: boolean = false;
  message: string | null = null;

  constructor(private patientService: PatientService, private router: Router) {
      // Initialize with an empty Patient object
      this.selectedPatient = {
        id: 0,
        name: '',
        age: 0,
        gender: 'male', // Set a default value
        contact: '',
        password: '', // If needed
        medicalRecords: [],
        appointments: []
      };
  }

  ngOnInit(): void {
      this.loadPatientProfile();
  }

  loadPatientProfile(){
    // this.patients = this.patientService.getPatients();

      const patientData = localStorage.getItem('loggedInPatient');
      if (patientData){
        this.selectedPatient = JSON.parse(patientData);
      }else {
        this.router.navigate(['/login']);
      }
  }

  selectPatient(patient: Patient) {
      this.selectedPatient = patient;
  }

  editProfile(){
    this.isEditing = true;
    this.message = null;
  }

  cancelEdit(){
    this.isEditing = false;
    this.message = null;
  }

  saveProfile(){
    this.message = 'Profile updated successfully!';
    this.isEditing = false;

    localStorage.setItem('loggedInPatient', JSON.stringify(this.selectedPatient))
  }



  searchTerm: string = '';

  get filteredPatients(): Patient[] {
      return this.patients.filter(patient =>
          patient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }



}
