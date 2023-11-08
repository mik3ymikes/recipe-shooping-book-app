import { Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from "../shared/ingredient.module"
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private igChangeSub:Subscription

  constructor (private slService: ShoppingListService) {}

  ngOnInit(){
    this.ingredients=this.slService.getIngredients();
    this.igChangeSub=this.slService.ingredientsChanged
    .subscribe(
     (ingredients:Ingredient []) =>{
        this.ingredients = ingredients
      }

      );

      // this.loggingService.printLog("hello from shopping list compenent ngOnNIT")

    }


    oneditItem(index:number){
      this.slService.startedEditing.next(index)
    }


    ngOnDestroy(): void{
      this.igChangeSub.unsubscribe()
    }


}
