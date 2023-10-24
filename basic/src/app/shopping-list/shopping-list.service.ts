
import { Subject } from "rxjs"
import { Ingredient } from "../shared/ingredient.module"


export class ShoppingListService{
   ingredientsChanged=new Subject<Ingredient[]>()
   startedEditing=new Subject<number>()
  private ingredients:Ingredient[]=[
    new Ingredient ('apples', 5),
    new Ingredient ('Tomatoes', 18),

  ]


  getIngredients(){
    return this.ingredients.slice()
  }

  getIngredient(index:number){
    return this.ingredients[index]
  }


  addIngredient(ingredient:Ingredient){
   this.ingredients.push(ingredient)
   this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}