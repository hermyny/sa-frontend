// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <button *ngIf="!isLoggedIn" (click)="login()">Login</button>
    <div *ngIf="isLoggedIn">
      <button (click)="logout()">Logout</button>
      <!-- Rest of the component content for authenticated users -->
    </div>
  `,
})
export class LoginComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  login(): void {
    const credentials = { username: 'votreNomUtilisateur', password: 'votreMotDePasse' };
    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.storeToken(response.access_token);
        this.isLoggedIn = true;
        // Additional logic after successful login if needed
      },
      (error) => {
        console.error('Erreur de connexion :', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    // Additional logic after logout if needed
  }
}
