import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShoppingDetailsComponent } from './cart-shopping-details.component';

describe('CartShoppingDetailsComponent', () => {
  let component: CartShoppingDetailsComponent;
  let fixture: ComponentFixture<CartShoppingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartShoppingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartShoppingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
