import { Injectable } from '@angular/core';
import { MedicalRecord } from '../models/medical-record.model';
import { throwError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordsService {
  constructor() {}

  getMedicalRecords(): Observable<MedicalRecord[]> {
    const storedPatient = localStorage.getItem('loggedInPatient');
    if (storedPatient) {
      const patient = JSON.parse(storedPatient);
      return of(patient.medicalRecords);
    }
    return throwError(() => new Error('Patient not found in local storage'));
  }
}
