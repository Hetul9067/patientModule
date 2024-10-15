// src/app/components/doctor-notes/doctor-notes.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-notes',
  templateUrl: './doctor-notes.component.html',
  styleUrls: ['./doctor-notes.component.css']
})
export class DoctorNotesComponent {
  doctorNotes: string = '';

  saveNotes() {
    console.log('Doctor’s Notes Saved:', this.doctorNotes);
    // Logic to save doctor's notes goes here
  }
}
