import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map, Observable, Subject} from 'rxjs'
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  private baseUrl = 'http://localhost:8080/api';
  cartProducts: BehaviorSubject<{product : Product, quantity: number}[]> = 
  new BehaviorSubject<{product : Product, quantity: number}[]>([]);

  constructor(private http: HttpClient) { }

  getAllProducts(page: number, size: number):Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/products?page=${page}&size=${size}`).pipe(
      map(page => {
        return {content: page.content, totalElements: page.totalElements};
      })
    )
  }

  getProductByCategory(id: number, page: number, size: number):Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.baseUrl}/categories/${id}/products?page=${page}&size=${size}`).pipe(
        map(page => {
          return {content: page.content, totalElements: page.totalElements};
      })
    )
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`).pipe(
     map(product => product))
  }

  addToCart(product: Product) {
    const currentCartProducts = this.cartProducts.value;
    let index = currentCartProducts.findIndex(item => item.product.id === product.id);
    if(index !== -1) {
      currentCartProducts[index].quantity++;
    } else {
      currentCartProducts.push({product: product, quantity: 1});
    }
    this.cartProducts.next(currentCartProducts);
  }

}

interface ProductResponse {
  content: Product[];
  totalElements: number;
}
