import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Riz rond', 1),
    new Ingredient('Truffe', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
