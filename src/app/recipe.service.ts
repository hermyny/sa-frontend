
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private apiUrl = 'http://localhost:8080/api/'; 

  constructor(private http: HttpClient) { }

  createRecipe(recipe: Recipe): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.post<void>(`${this.apiUrl}recipe/create`, recipe, {headers:headers});
  }

  getRecipes(): Observable<Recipe[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.get<Recipe[]>(`${this.apiUrl}recipe/list`, {headers:headers});
  }

  getRecipeById(id: number): Observable<Recipe> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.get<Recipe>(`${this.apiUrl}recipe/read/${id}`, {headers:headers});
  }

  updateRecipe(id: number, recipe: Recipe): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.put<void>(`${this.apiUrl}recipe/update/${id}`, recipe, {headers:headers});
  }

  deleteRecipe(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {headers:headers});
  }


  calculateCaloriesForRecipes(recipe:Recipe): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${authToken}`,
      // Ajoutez d'autres en-têtes selon vos besoins
    });
    return this.http.post<number>(`${this.apiUrl}recipe/calorie`, {headers:headers});
}

}
