import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  loadProductByCategory(id:number) {
    this.categories.map(category => {
      if(category.id !== id) {
        let catEl = document.getElementById(`${category.id}`);
        catEl ? catEl.style.fontWeight = 'normal' : '';
      } else {
        let catEl = document.getElementById(`${category.id}`);
        catEl ? catEl.style.fontWeight = 'bold' : '';
      }});

    this.router.navigate([`categories/${id}/products`])
  }

  navigateToHomePage() {
    this.router.navigate([`products`]);
  }


}
