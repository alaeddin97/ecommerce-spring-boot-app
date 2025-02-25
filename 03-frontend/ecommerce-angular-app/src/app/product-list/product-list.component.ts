import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../shared/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  productsByCat: Product[] = [];
  categorySubscription!: Subscription;

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getAllProducts('http://localhost:8080/api/products').subscribe(
      products => {
        this.products = products;
        this.productsByCat = products;
      }
    )

    this.categorySubscription = this.productListService.selectedCat.subscribe(selectedCat => {
        this.productsByCat = this.products.filter(item => item.productCategory.id === selectedCat);
        
    })
  }

  getAllProducts(url:string) {
    return this.productListService.getAllProducts(url);
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }
}
