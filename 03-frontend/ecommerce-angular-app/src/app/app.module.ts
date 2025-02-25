import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListService } from './product-list/product-list.service';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
