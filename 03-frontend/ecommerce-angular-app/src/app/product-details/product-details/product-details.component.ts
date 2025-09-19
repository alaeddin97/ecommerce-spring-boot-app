import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/product-list/product-list.service';
import { Product } from 'src/app/shared/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  
  constructor(private route:ActivatedRoute, private productListService: ProductListService, private location : Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this.productListService.getProductById(+id).subscribe(
          product => {
            this.product = product;
          }
        )
      }
  })
}

  getAbsoluteImageUrl(): string {
    return this.location.prepareExternalUrl(this.product.imageUrl);
  }

  addToCart(product: Product) {
    this.productListService.addToCart(product);
  }

}
