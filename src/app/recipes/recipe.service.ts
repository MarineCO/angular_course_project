import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Risotto à la truffe',
      'Recette gourmande du risotto à la truffe',
      'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    ),
    new Recipe(
      'Cookie au beurre de cacahuètes et pépites de chocolat',
      'Recette de petit plaisir sucré',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
