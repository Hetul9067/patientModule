import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Appointment } from '../models/appointment.model';
import { throwError, Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppointmentService } from '../services/appointment.service';

@Injectable({
    providedIn: 'root',
})
export class PatientService {

    constructor(private appointmentService: AppointmentService){}
    private patients: Patient[] = [
        {
            id: 1,
            name: 'Dil',
            age: 20,
            gender: 'Male',
            contact: '123-456-7890',
            medicalRecords: [
                { date: '2023-01-15', details: 'Annual checkup' },
                { date: '2024-05-20', details: 'Flu shot' },
            ],
            appointments: [
                { date: '2024-10-20', time: '10:00', doctor: 'Dr. Smith', status: 'scheduled' },
            ],
            password: '123',
        },
        {
            id: 2,
            name: 'Sweety',
            age: 28,
            gender: 'Female',
            contact: '987-654-3210',
            medicalRecords: [
                { date: '2023-02-10', details: 'Consultation for headache' },
            ],
            appointments: [],
            password: '456',
        },
        // Add more hardcoded patients as needed
    ];

    getPatients(): Observable<Patient[]> {
        return of(this.patients);
    }

    getPatientById(id: number): Patient | undefined {
        return this.patients.find(patient => patient.id === id);
    }

    addPatient(newPatient: Patient) {
        this.patients.push(newPatient);
    }

    updatePatient(updatedPatient: Patient) {
        const index = this.patients.findIndex(patient => patient.id === updatedPatient.id);
        if (index !== -1) {
            this.patients[index] = updatedPatient;
        }
    }

    scheduleAppointment(patientId: number, appointment: Appointment): Observable<Appointment> {
      const storedPatient = localStorage.getItem('loggedInPatient');
      if (!storedPatient) {
          return throwError(() => new Error('Patient not found in local storage'));
      }
  
      const patient = JSON.parse(storedPatient);
      if (patient.id === patientId) {
          // Add the new appointment to the existing appointments array
          patient.appointments = [...patient.appointments, appointment];
          
          // Update local storage with the new appointments list
          localStorage.setItem('loggedInPatient', JSON.stringify(patient));
          
          return of(appointment);
      } else {
          return throwError(() => new Error('Patient ID does not match'));
      }
    }
  
    // scheduleAppointment(patientId: number, appointment: Appointment): Observable<Appointment> {

    //     const patient = this.patients.find(p => p.id === patientId);

    //     if(patient) {
    //       patient.appointments.push(appointment);
    //       localStorage.setItem('loggedInPatient', JSON.stringify(patient));
    //       return of(appointment);
    //     }else{
    //       throw new Error('Patient not found')
    //     }

    // }

    getPatientAppointments(patientId: number): Observable<Appointment[]>{
      const storedPatient = localStorage.getItem('loggedInPatient');
      // const patient  = storedPatient ? JSON.parse(storedPatient) : [];
      if(storedPatient){
        const patient = JSON.parse(storedPatient);
        if (patient.id  === patientId){
          return of(patient.appointments);
        }
      
      }
      return throwError(() => new Error('Patient not found'));

  
    
    }
}