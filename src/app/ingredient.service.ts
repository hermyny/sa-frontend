// ingredient.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:8080/api/'; 

  constructor(private http: HttpClient) { }

  create(ingredient: Ingredient): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    
    return this.http.post<void>(`${this.apiUrl}ingredient`, ingredient,{headers:headers});
  }

  search(): Observable<Ingredient[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.get<Ingredient[]>(this.apiUrl + "ingredient/read", {headers:headers});
  }

  readOrCreateById(id: number): Observable<Ingredient> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.get<Ingredient>(`${this.apiUrl}ingredient/read/${id}`, {headers:headers});
  }

  deleteIngredient(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {headers:headers});
  }

  updateIngredient(id: number, ingredient: Ingredient): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.put<void>(`${this.apiUrl}ingredient/update/${id}`, ingredient, {headers:headers});
  }
}

