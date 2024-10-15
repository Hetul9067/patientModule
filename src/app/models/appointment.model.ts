// src/app/models/appointment.model.ts
export interface Appointment {
    id: number;
    patientId: number;
    doctorName: string;
    appointmentDate: Date;
    reason: string;
  }
  