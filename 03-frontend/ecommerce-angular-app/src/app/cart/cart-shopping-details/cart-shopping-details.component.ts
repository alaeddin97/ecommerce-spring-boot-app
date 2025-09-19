import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/product-list/product-list.service';
import { Location } from '@angular/common';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-cart-shopping-details',
  templateUrl: './cart-shopping-details.component.html',
  styleUrls: ['./cart-shopping-details.component.css']
})
export class CartShoppingDetailsComponent implements OnInit {

  cartItems : any[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private productListService: ProductListService, private location: Location) { }

  ngOnInit(): void {
    this.productListService.cartProducts.subscribe(cartItems => {
      if (cartItems) {
        this.cartItems = cartItems;
        this.totalQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0) || 0;
        this.totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.product.unitPrice*item.quantity,0) || 0;
      }
    });
}

  getAbsoluteImageUrl(product: Product): string {
    return this.location.prepareExternalUrl(product.imageUrl);
  }


  incrementQuantity(cartItem:{product: Product, quantity: number}) {
    let index = this.cartItems.findIndex(item => item.product.id === cartItem.product.id);
    if(index !== -1) {
      this.cartItems[index].quantity++;
      this.totalQuantity = this.cartItems.reduce((quantity, item) => quantity + item.quantity, 0) || 0;
      this.totalPrice = this.cartItems.reduce((totalPrice, item) => totalPrice + item.product.unitPrice * item.quantity, 0) || 0;
      this.productListService.cartProducts.next(this.cartItems);
    }
  }

  decrementQuantity(tempCartItem:{product: Product, quantity: number}) {
    let index = this.cartItems.findIndex(item => item.product.id === tempCartItem.product.id);
    if(index !== -1 && this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantity--;
      if (this.cartItems[index].quantity === 0) {
        this.cartItems.splice(index, 1);
      }
      this.totalQuantity = this.cartItems.reduce((quantity, item) => quantity + item.quantity, 0) || 0;
      this.totalPrice = this.cartItems.reduce((totalPrice, item) => totalPrice + item.product.unitPrice * item.quantity, 0) || 0;
      this.productListService.cartProducts.next(this.cartItems);
    }
  }

}
