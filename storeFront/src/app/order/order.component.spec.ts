import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { AppModule } from '../app.module';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [OrderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

    expect(component.order.total).toEqual(order.total)
    expect(component.currencySymbol).toEqual('€')
  })
});
