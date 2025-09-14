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
    {id: 2, name: 'Coffee Mugs'},
    {id: 3, name: 'Mouse Pads'},
    {id: 4, name: 'Luggage Tags'}
  ];
  constructor(private router:Router, private route: ActivatedRoute, private productListService: ProductListService) { }

  ngOnInit(): void {
  }

  onClick(id:number) {
    this.router.navigate([`category/${id}`])
  }

}
