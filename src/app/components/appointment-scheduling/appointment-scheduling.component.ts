import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-scheduling',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css'],
})
export class AppointmentSchedulingComponent implements OnInit {
  patientId: number = 1; // This should eventually be dynamically set
  appointment: Appointment = {
    date: '',
    time: '',
    doctor: '',
    status: 'scheduled',
  };
  appointments: Appointment[] = [];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.loadPatientId();
    this.loadAppointments();
  }

  private loadPatientId() {
    const storedPatient = localStorage.getItem('loggedInPatient');
    if (storedPatient) {
      const patient = JSON.parse(storedPatient);
      this.patientId = patient.id;
      console.log('Retrieved patient id:', this.patientId);
    } else {
      console.error('No patient logged in');
    }
  }

  private loadAppointments() {
    this.patientService.getPatientAppointments(this.patientId).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
        console.log('Retrieved appointments:', this.appointments);
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);
        alert(error.message); // Consider using a notification service for better UX
      },
    });
  }

  schedule() {
    const selectedDateTime = new Date(`${this.appointment.date}T${this.appointment.time}`);
    const now = new Date();

    // Check if the selected date/time is in the past
    if (selectedDateTime < now) {
        alert('You cannot schedule an appointment in the past. Please select a valid date and time.');
        return;
    }

    // Schedule the appointment
    this.patientService.scheduleAppointment(this.patientId, this.appointment).subscribe({
        next: (response) => {
            console.log('Appointment scheduled successfully:', response);
            // Reset the appointment form
            this.resetAppointmentForm();
            // Load updated appointments to ensure the UI reflects the most current state
            this.loadAppointments();
        },
        error: (error) => {
            console.error('Error scheduling appointment:', error);
            alert('Failed to schedule appointment: ' + error.message);
        },
    });
}


  // schedule() {
  //   const selectedDateTime = new Date(`${this.appointment.date}T${this.appointment.time}`);
  //   const now = new Date();

  //   // Check if the selected date/time is in the past
  //   if (selectedDateTime < now) {
  //     alert('You cannot schedule an appointment in the past. Please select a valid date and time.');
  //     return;
  //   }
  //   this.patientService.scheduleAppointment(this.patientId, this.appointment).subscribe({
  //     next: (response) => {
  //       console.log('Appointment scheduled successfully:', response);
  //       // this.appointments.push(response); // Optionally, update the local appointments array

  //       // Reset appointment form
  //       this.resetAppointmentForm();

  //       // Load updated appointments to ensure UI reflects the most current state
  //       this.loadAppointments();
        
        
  //     },
  //     error: (error) => {
  //       console.error('Error scheduling appointment:', error);
  //       alert('Failed to schedule appointment: ' + error.message);
  //     },
  //   });
  // }

  private resetAppointmentForm() {
    this.appointment = { date: '', time: '', doctor: '', status: 'scheduled' };
  }
}
