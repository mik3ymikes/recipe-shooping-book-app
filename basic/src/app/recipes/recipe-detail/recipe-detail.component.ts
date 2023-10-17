import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  recipe:Recipe;



  constructor(private recipeService: RecipeService){ }


  ngOnInIt(){

  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)

  }
}
