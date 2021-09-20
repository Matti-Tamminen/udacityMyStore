import { Injectable } from '@angular/core';
import { Product } from '../list/list.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Order {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  card: string,
  date: Date,
  total: string,
  rows: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = []
  cart: Product[] = []
  order: Order

  constructor(private http: HttpClient) {
    this.initData().subscribe((res: Product[]) => {
      this.products = res
    })
    this.order = {
      id: 0,
      firstName: "",
      lastName: "",
      address: "",
      card: "",
      date: new Date(),
      total: "0.00",
      rows: []
    }
  }

  getCart(): Product[] {
    return this.cart as Product[]
  }

  addToCart(id: number, quantity: number): Product {
    var item = this.products.find(x => x.id == id) as Product
    var cartItem = this.cart.find(x => x.id == id) as Product
    if (cartItem) {
      cartItem.quantity = quantity
      item.quantity = quantity
    } else {
      item.quantity = quantity
      this.cart.push(item)
    }
    return item
  }

  removeFromCart(id: number): Product[] {
    this.cart = this.cart.filter(x => x.id != id)
    return this.cart as Product[]
  }

  initData(): Observable<[]> {
    return this.http.get<[]>('http://localhost:3000/')
  }

  setCurrency(): string {
    return '€'
  }
}
