import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Subject} from 'rxjs'
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  constructor(private http: HttpClient) { }

  getAllProducts(url: string) {
    return this.http.get<Product[]>(url).pipe(
      map(products => products)
    )
  }

}
