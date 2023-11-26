// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/user';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/inscription`;  // Remplacez par le chemin de votre endpoint de login
    return this.http.post(loginUrl, credentials);
  }

  storeToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}
