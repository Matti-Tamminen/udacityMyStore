import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { AppModule } from '../app.module';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [DetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
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
      url: "",
      price: 0,
      quantity: 0
    }

    expect(component.show).toEqual(false)
    expect(component.quantity).toEqual(1)
    expect(component.product).toEqual(product)
    expect(component.currencySymbol).toEqual('€')
    expect(component.id).toBeNaN()
  })
});
