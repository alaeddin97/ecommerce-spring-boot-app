import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = [
    {id: 1, name: 'Books'},
    {id: 2, name: 'Electronics'},
    {id: 3, name: 'Computers'},
    {id: 4, name: 'Home & Kitchen'}
  ];
  constructor(private router:Router, private route: ActivatedRoute, private productListService: ProductListService) { }

  ngOnInit(): void {
  }

  onClick(id:number) {
    this.productListService.setCategory(id);
    this.router.navigate([`category/${id}`])
  }

}
