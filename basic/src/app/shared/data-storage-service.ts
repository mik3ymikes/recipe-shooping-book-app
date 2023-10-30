import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";


@Injectable({providedIn: 'root'})



export class DatastorageService{
  constructor (private http: HttpClient, private recipesService: RecipeService) {}


  storeRecipes(){
   const recipes=this.recipesService.getRecipes()
   this.http.put('https://ng-course-recipe-book-2594f-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response =>{
    console.log(response)
   })
  }

  fetchRecipes() {
    this.http.get('https://ng-course-recipe-book-2594f-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes =>{
      console.log(recipes)
    })
  }
}
