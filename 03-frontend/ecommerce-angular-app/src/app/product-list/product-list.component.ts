import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  totalRecords = 100;
  currentPage = 1;
  maxSize = 4;
  pageSize = 25;
  pageSizes = [2, 5, 10, 25, 50, 100];

  viewProducts: Product[] = [];

  constructor(private productListService: ProductListService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.currentPage = 1;
      this.pageSize = 25;
      if (id) {
        this.productListService.getProductByCategory(+id, this.currentPage - 1, this.pageSize).subscribe(
          productResponse => {
            this.viewProducts = productResponse.content;
            this.totalRecords = productResponse.totalElements;
          })
      } else {
        this.productListService.getAllProducts(this.currentPage - 1, this.pageSize).subscribe(
          productResponse => {
            this.viewProducts = productResponse.content;
            this.totalRecords = productResponse.totalElements;
          })
      }
      this.maxSize = this.totalRecords / this.pageSize;
    })
  }


  getAbsoluteImageUrl(url: string): string {
    return this.location.prepareExternalUrl(url);
  }

  viewProductDetails(id: number) {
    this.router.navigate([`${id}/details`]);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productListService.getProductByCategory(+id, this.currentPage - 1, this.pageSize).subscribe(
        productResponse => {
          this.viewProducts = productResponse.content;
          this.totalRecords = productResponse.totalElements;
        })  
    } else {
      this.productListService.getAllProducts(this.currentPage - 1, this.pageSize).subscribe(
        productResponse => {
          this.viewProducts = productResponse.content;
          this.totalRecords = productResponse.totalElements;
        })
    }
    this.maxSize = this.totalRecords / this.pageSize;
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
    this.onPageChange(this.currentPage);
  }

  addToCart(product:Product) {
    this.productListService.addToCart(product);
  }

}
