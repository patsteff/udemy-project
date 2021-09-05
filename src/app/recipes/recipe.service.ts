import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'This is simply a test', 'https://live.staticflickr.com/8283/7717719952_5377f33781_b.jpg', [
      new Ingredient("Meat", 1),
      new Ingredient("Pommes", 20)
    ]),
    new Recipe('A second Test Recipe', 'Second recipe', 'https://live.staticflickr.com/8283/7717719952_5377f33781_b.jpg', [
      new Ingredient("Tomato", 1),
      new Ingredient("Salat", 2),
      new Ingredient("Meat", 2),

    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // to have copy of array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    // emit a copy of updated recipes
    this.recipesChanged.next(this.recipes.slice());
  }

}
