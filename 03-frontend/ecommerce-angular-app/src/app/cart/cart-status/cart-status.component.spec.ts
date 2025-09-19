import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStatusComponent } from './cart-status.component';

describe('CheckoutStatusComponent', () => {
  let component: CheckoutStatusComponent;
  let fixture: ComponentFixture<CheckoutStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
