import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
  }

  searchProductByName(event: any) {
    this.productListService.searchByName(event.target.value);
  }
}
