import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';




import { ShoppingListModule } from './shopping-list/shoppling-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,





  ],
  imports: [
    BrowserModule,
     AuthModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    ShoppingListModule,
    SharedModule,
    CoreModule
  ],



  bootstrap: [AppComponent]

})
export class AppModule { }
