import { Component } from '@angular/core';
import { Router } from '@angular/router'; // To navigate after successful login
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html', // Referencing the HTML file
  styleUrls: ['./login.component.css']   // If you have any CSS for this component
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private patientService: PatientService) {}

  // Function to handle login
  onLogin() {
    // Fetch the list of patients from the service
    this.patientService.getPatients().subscribe({
      next: (patients: Patient[]) => {
        const patient = patients.find(p => p.name === this.username);

        if (patient && patient.password === this.password) {
          alert('Login successful!');
          
          // Store patient data in local storage
          localStorage.setItem('loggedInPatient', JSON.stringify(patient));
    
          // Navigate to the patient profile component
          this.router.navigate(['/patient-profile']);
        } else {
          alert('Invalid username or password');
        }
      }, 
      error: (error) => {
        console.error('Error fetching patients:', error);
        alert('An error occured while logging in. Please try again later.');
      }
    });
    // const patients: Patient[] = this.patientService.getPatients();

    // Find the patient that matches the username
    

    // Check if patient is found and password matches
    
  }

  logout(){
    //clear local storage
    localStorage.removeItem('loggedInPatient');
    // navigate back to login page or home
    this.router.navigate(['/login']);
  }
}
