import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.usersUrl = 'http://localhost:8080/api/'

  }
  public findAll(): Observable<User[]> {
    //const authToken = this.authService.getAccessToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    console.log(headers);
    return this.http.get<User[]>(this.usersUrl + 'user/users',{headers:headers});
  }

  public save(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.post<User>(this.usersUrl + 'user/inscription', user, { headers: headers });
  }

  public activate(activationData: { [key: string]: string }): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Ajoutez d'autres en-têtes selon vos besoins
    });

    return this.http.post<void>(`${this.usersUrl}user/activation`, activationData, { headers: headers, withCredentials: true });
  }
  }

