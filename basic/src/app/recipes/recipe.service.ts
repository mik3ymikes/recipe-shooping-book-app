import { Injectable} from '@angular/core'
import { Recipe } from './recipes.model'
import { Subject } from 'rxjs'
import { Ingredient } from '../shared/ingredient.module'
import { ShoppingListService } from '../shopping-list/shopping-list.service'


@Injectable()


export class RecipeService{
  recipesChanged= new Subject <Recipe[]>()

 private recipes:Recipe[]=[
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
addRecipe(recipe:Recipe){
this.recipes.push(recipe)
this.recipesChanged.next(this.recipes.slice())
}

updateRecipe(index:number, newRecipe:Recipe){
this.recipes[index]=newRecipe
this.recipesChanged.next(this.recipes.slice())
}


deleteRecipe(index: number){
  this.recipes.splice(index, 1)
  this.recipesChanged.next(this.recipes.slice())
}

}








