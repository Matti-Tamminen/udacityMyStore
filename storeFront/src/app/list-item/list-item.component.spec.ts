import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { AppModule } from '../app.module';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [ListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
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
      quantity: 0
    }

    expect(component.show).toEqual(false)
    expect(component.quantity).toEqual(1)
    expect(component.product).toEqual(product)
  })
});
