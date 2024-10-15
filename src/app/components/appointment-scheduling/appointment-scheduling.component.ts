// src/app/components/appointment-scheduling/appointment-scheduling.component.ts
import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-scheduling',
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css']
})
export class AppointmentSchedulingComponent {
  appointment: Appointment = {
    id: 1,
    patientId: 0, // Set this dynamically based on patient
    doctorName: '',
    appointmentDate: new Date(),
    reason: ''
  };

  scheduleAppointment() {
    console.log('Appointment Scheduled', this.appointment);
    // Logic to schedule appointment goes here
  }
}
