// // src/app/models/appointment.model.ts
// export interface Appointment {
//     id: number;
//     patientId: number;
//     doctorName: string;
//     appointmentDate: Date;
//     reason: string;
//   }
  

export interface Appointment {
  date: string;           // Date of the appointment
  time: string;           // Time of the appointment
  doctor: string;
  status: 'scheduled' | 'completed' | 'canceled';  // Status of the appointment
}