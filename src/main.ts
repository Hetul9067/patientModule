import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Root component of the app
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';  // Your routes
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule globally

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(FormsModule)   // Import FormsModule here for global usage
  ]
}).catch(err => console.error(err));
