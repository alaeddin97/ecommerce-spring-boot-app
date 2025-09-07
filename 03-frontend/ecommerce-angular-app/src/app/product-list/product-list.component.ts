import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../shared/product';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productsByCat: Product[] = [];
  categoryId: number = 0;

  constructor(private productListService: ProductListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProducts('http://localhost:8080/api/products').subscribe(
      products => {
        this.products = products;
        this.categoryId = +(this.route.snapshot.paramMap.get('id') ?? '0');
        this.productsByCat = this.products.filter(item => this.categoryId === 0 || item.productCategory.id === this.categoryId);
      }
    )
  }

  getAllProducts(url:string) {
    return this.productListService.getAllProducts(url);
  }

}
