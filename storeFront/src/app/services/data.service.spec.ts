import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { AppModule } from '../app.module';
import { Product } from '../list/list.component';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain initialized variables', () => {
    const order = {
      id: 0,
      firstName: "",
      lastName: "",
      address: "",
      card: "",
      date: new Date(),
      total: "0.00",
      rows: []
    }
    expect(service.products).toEqual([])
    expect(service.cart).toEqual([])
    expect(service.order).toEqual(order)
  })

  it('should contain basic functions', () => {
    service.products.push({ id: 1, name: "test", description: "testing tool", quantity: 2, price: 12.00 } as Product)
    const item = service.addToCart(1, 4)
    const list = service.getCart()
    const cur = service.setCurrency()

    expect(service.products.length).toEqual(1)
    expect(service.cart.length).toEqual(1)
    expect(item.quantity).toEqual(4)
    expect(item.name).toEqual('test')
    expect(list.length).toEqual(1)
    service.removeFromCart(1)
    expect(service.cart.length).toEqual(0)
    expect(cur).toEqual('€')
  })

});
