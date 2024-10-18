import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // If you're using any other modules like FormsModule, import them here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private router: Router, private authService: AuthService) {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Check for the existence of loggedInPatient
  }

  // Get the username of the logged-in patient
  getUsername(): string {
    return this.authService.getUsername();
  }

  // Handle logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
