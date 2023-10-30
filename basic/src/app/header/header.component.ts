import { Component } from '@angular/core'

import { DatastorageService } from '../shared/data-storage-service'

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent{
  constructor(private dataStorageService : DatastorageService) {}

  onSaveData(){
   this.dataStorageService.storeRecipes()
  }


  onFetchData(){
    this.dataStorageService.fetchRecipes()
  }



}
