import { Component } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent {




  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.loadIngredients();
  }

  loadIngredients() {
    this.ingredientService.search().subscribe(
      data => this.ingredients = data,
      error => console.error('Erreur lors du chargement des ingrédients :', error)
    );
  }

  updateIngredient(id: number, updatedIngredient: Ingredient) {
    this.ingredientService.updateIngredient(id, updatedIngredient).subscribe(
      () => {
        console.log('Ingrédient mis à jour avec succès');
        // Ajoutez d'autres actions après la mise à jour réussie
      },
      error => console.error('Erreur lors de la mise à jour de l\'ingrédient :', error)
    );
  }

  deleteIngredient(id: number) {
    this.ingredientService.deleteIngredient(id).subscribe(
      () => {
        console.log('Ingrédient supprimé avec succès');
        this.loadIngredients(); // Rechargez la liste après la suppression
        // Ajoutez d'autres actions après la suppression réussie
      },
      error => console.error('Erreur lors de la suppression de l\'ingrédient :', error)
    );
  }

}

