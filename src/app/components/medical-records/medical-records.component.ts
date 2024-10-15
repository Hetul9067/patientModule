// src/app/components/medical-records/medical-records.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent {
  medicalRecords: string[] = ['Record 1', 'Record 2', 'Record 3'];
}
