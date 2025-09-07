import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(id:number) {
    this.router.navigate([`category/${id}`])
  }

}
