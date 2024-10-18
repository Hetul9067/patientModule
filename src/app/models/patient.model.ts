import { Appointment } from "./appointment.model";
import { MedicalRecord } from "./medical-record.model";

export interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    contact: string;
    medicalRecords: MedicalRecord[];
    appointments: Appointment[];
    password: string;
  }
  