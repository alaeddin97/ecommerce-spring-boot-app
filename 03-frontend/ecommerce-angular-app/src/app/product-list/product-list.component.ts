import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getAllProducts('http://localhost:8080/api/products').subscribe(
      products => {
        this.products = products;
      }
    )
  }

  getAllProducts(url:string) {
    return this.productListService.getAllProducts(url);
  }
}
