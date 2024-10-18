// src/app/components/medical-records/medical-records.component.ts
import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../../models/medical-record.model';
import { MedicalRecordsService } from '../../services/medical-records.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent {
  medicalRecords: MedicalRecord[] = [];

  constructor(private medicalRecordsService: MedicalRecordsService, private router: Router) {}

  ngOnInit(): void {
    this.loadMedicalRecords();
  }

  viewRecord(record: MedicalRecord) {
    // Option 1: Navigate to a detailed view page
    this.router.navigate(['/medical-record-details', { date: record.date, details: record.details }]);
    
    // Option 2: Display in a modal (you can implement a modal using Angular Material or Bootstrap)
    // Example for using a modal could be to show a bootstrap modal or Angular Material dialog
  }

  private loadMedicalRecords() {
    this.medicalRecordsService.getMedicalRecords().subscribe({
      next: (records) => {
        this.medicalRecords = records;
        console.log('Retrieved medical records:', this.medicalRecords);
      },
      error: (error) => {
        console.error('Error fetching medical records:', error);
        alert('Failed to load medical records: ' + error.message);
      },
    });
  }
}
