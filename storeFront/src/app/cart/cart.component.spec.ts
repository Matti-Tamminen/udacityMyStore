import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { AppModule } from '../app.module';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [CartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain initialized variables', () => {
    const product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      url: "",
      quantity: 1
    }
    const header = {
      id: 0,
      firstName: "",
      lastName: "",
      address: "",
      card: ""
    }

    expect(component.total).toEqual('0.00')
    expect(component.product).toEqual(product)
    expect(component.header).toEqual(header)
    expect(component.pattern).toEqual('')
    expect(component.currencySymbol).toEqual('€')
    expect(component.cart).toEqual([])
  })
});
