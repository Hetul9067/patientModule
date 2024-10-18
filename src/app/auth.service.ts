import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: { patientId: number, username: string} | null = null;

  constructor(){}


  isLoggedIn(): boolean {

    return !!localStorage.getItem('loggedInPatient');
  }

  getUsername(): string {
    const patient = JSON.parse(localStorage.getItem('loggedInPatient') || '{}');
    return patient.name || '';
  }

  logout(): void {
    localStorage.removeItem('loggedInPatient');
  }
}
