import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map, Subject} from 'rxjs'
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  viewProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }

  getAllProducts(url: string) {
    return this.http.get<Product[]>(url).pipe(
      map(products => products)
    )
  }

  setProducts(products: Product[]) {
    this.products.next(products);
    this.viewProducts.next(products);
  }


  setCategory(id: number) {
    const allProducts = this.products.value;
    const filtered = allProducts.filter(product => product.productCategory.id === id);
    this.viewProducts.next(filtered);
  }

  searchByName(name: string) {
    const allProducts = this.products.value;
    const filtered = allProducts.filter(product => product.name.toLowerCase().includes(name?.toLowerCase()));
    this.viewProducts.next(filtered);
  }

}
