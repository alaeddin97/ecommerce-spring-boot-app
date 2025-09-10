import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../shared/product';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  viewProducts: Product[] = [];

  constructor(private productListService: ProductListService, private location: Location) { }

  ngOnInit(): void {
    this.getAllProducts('http://localhost:8080/api/products').subscribe(
      products => {
        this.productListService.setProducts(products);
      })
      this.productListService.viewProducts.subscribe(viewProducts => {
          this.viewProducts = viewProducts;
      });
  }

  getAllProducts(url:string) {
    return this.productListService.getAllProducts(url);
  }

  getAbsoluteImageUrl(url: string): string {
    return this.location.prepareExternalUrl(url);
  }

}
