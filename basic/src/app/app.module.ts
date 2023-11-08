import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';


import { AuthComponent } from './auth/auth.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shoppling-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


    AuthComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],



  bootstrap: [AppComponent]

})
export class AppModule { }
