import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/api/user/'

  }
  public findAll(): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.get<User[]>(this.usersUrl + 'users',{headers:headers});
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl + 'inscription', user);
  }
}
