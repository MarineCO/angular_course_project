import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Input() recipeName: string;
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  todisplay(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }
}
