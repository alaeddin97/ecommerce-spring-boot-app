import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListService } from './product-list/product-list.service';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartShoppingDetailsComponent } from './cart/cart-shopping-details/cart-shopping-details.component';
import { CheckoutStatusComponent } from './cart/cart-status/cart-status.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryComponent,
    HeaderComponent,
    ProductDetailsComponent,
    CheckoutStatusComponent,
    CartShoppingDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
