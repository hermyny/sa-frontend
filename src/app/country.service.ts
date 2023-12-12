import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://localhost:8080/api/'; 

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });

    return this.http.get<Country[]>(`${this.apiUrl}country/countries`, {headers:headers});
}


}
