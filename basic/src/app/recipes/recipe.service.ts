import {EventEmitter, Injectable} from '@angular/core'
import { Recipe } from './recipes.model'
import { Ingredient } from '../shared/ingredient.module'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
@Injectable()


export class RecipeService{
  recipeSelected= new EventEmitter<Recipe>()
  recipes:Recipe[]=[
    new Recipe("A test recipe", "simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPBKGZDo0rHbKJ6JBGCWeKgLBV3BJsZy_WA&usqp=CAU",
   [ new Ingredient ('Meat', 1),
    new Ingredient ('fries', 20) ]),

    new Recipe(" Another A test recipe", "simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPBKGZDo0rHbKJ6JBGCWeKgLBV3BJsZy_WA&usqp=CAU", [
      new Ingredient ('Buns', 2),
      new Ingredient ('Meat', 1)
    ] )
  ]


  constructor(private slService:ShoppingListService){

  }


    getRecipes(){
      return this.recipes.slice();
    }

    getRecipe(index:number){
      return this.recipes[index]
    }



addIngredientsToShoppingList(ingredients: Ingredient []){
this.slService.addIngredients(ingredients)
}

}








