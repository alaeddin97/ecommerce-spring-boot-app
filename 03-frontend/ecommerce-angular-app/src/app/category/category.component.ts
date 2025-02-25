import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService:ProductListService) { }

  ngOnInit(): void {
  }

  onClick(id:number) {
    this.productService.selectedCat.next(id);
  }

}
