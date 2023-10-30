import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipes.model";
import { DatastorageService } from "../shared/data-storage-service";
import { RecipeService } from "./recipe.service";



@Injectable({providedIn: 'root'})

export class RecipesResolverService implements Resolve <Recipe[]>{
  constructor(private dataStorageService:DatastorageService, private recipesService:  RecipeService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes= this.recipesService.getRecipes()


    if (recipes.length===0) {
      return this.dataStorageService.fetchRecipes()
    } else{
      return recipes
    }
    return this.dataStorageService.fetchRecipes()
  }

}
