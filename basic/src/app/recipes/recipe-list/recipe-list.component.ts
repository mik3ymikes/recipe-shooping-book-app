import { Component } from '@angular/core';
import {Recipe} from "../recipes.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[]=[
    new Recipe("A test recipe", "simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPBKGZDo0rHbKJ6JBGCWeKgLBV3BJsZy_WA&usqp=CAU" ),
    new Recipe("A test recipe", "simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPBKGZDo0rHbKJ6JBGCWeKgLBV3BJsZy_WA&usqp=CAU" )
  ]

}
