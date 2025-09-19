import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from 'src/app/product-list/product-list.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CheckoutStatusComponent implements OnInit {


  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private productListService: ProductListService, private router: Router) { }

  ngOnInit(): void {
    this.productListService.cartProducts.subscribe(cartProducts => {
      this.totalQuantity = cartProducts.reduce((sum, item) => sum + item.quantity, 0) || 0;
      this.totalPrice = cartProducts.reduce((sum, item) => sum + item.product.unitPrice*item.quantity, 0) || 0;
    });
  }

  goToCheckout() {
    this.router.navigate([`shopping-cart`]);
  }

}
