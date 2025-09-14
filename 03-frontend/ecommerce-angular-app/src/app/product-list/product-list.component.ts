import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../shared/product';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    this.onPageChange(this.currentPage);
    this.productListService.viewProducts.subscribe(viewProducts => {
      this.viewProducts = viewProducts;
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productListService.setCategory(+id);
      }
    })
  }

  getAllProducts(url: string) {
    return this.productListService.getAllProducts(url);
  }

  getAbsoluteImageUrl(url: string): string {
    return this.location.prepareExternalUrl(url);
  }

  viewProductDetails(id: number) {
    this.router.navigate([`${id}/details`]);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getAllProducts(`http://localhost:8080/api/products?page=${page - 1}&size=${this.pageSize}`).subscribe(
      products => {
        this.productListService.setProducts(products);
      })
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
    this.onPageChange(this.currentPage);
  }

}
