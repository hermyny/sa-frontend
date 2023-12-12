import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe(
      data => this.recipes = data,
      error => console.error('Erreur lors du chargement des recettes :', error)
    );
  }
 
  getRecipeById(id: number) {
    this.recipeService.getRecipeById(id).subscribe(
      data => {
        this.selectedRecipe = data;
        console.log('Recette chargée avec succès :', data);
      },
      error => console.error('Erreur lors du chargement de la recette :', error)
    );
  }

  updateRecipe(id: number, updateRecipe: Recipe) {
    this.recipeService.updateRecipe(id, updateRecipe).subscribe(
      () => {
        console.log('recette mis à jour avec succès');
        // Ajoutez d'autres actions après la mise à jour réussie
      },
      error => console.error('Erreur lors de la mise à jour de la recette :', error)
    );
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id).subscribe(
      () => {
        console.log('Recette supprimé avec succès');
        this.loadRecipes();
      },
      error => console.error('Erreur lors de la suppression de la recette :', error)
    );
  }
  calculateCaloriesForRecipes(recipe: Recipe): void {
    this.recipeService.calculateCaloriesForRecipes(recipe).subscribe(
      calories => {
        console.log('Total calorique calculé avec succès :', calories);
        const totalCalories = calories;
        console.log('Total calorique de votre recette :', totalCalories);
      },
      error => console.error('Erreur lors du calcul des calories :', error)
    );

  }

  calculateTotalCalories(ingredients: Ingredient[]): number {
    if (!ingredients || ingredients.length === 0) {
      return 0; 
    }

    return ingredients.reduce((totalCalories, ingredient) => totalCalories + (ingredient.calorie || 0), 0);
  }
  }
 


