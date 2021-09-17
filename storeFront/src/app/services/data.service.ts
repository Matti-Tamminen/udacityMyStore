import { Injectable } from '@angular/core';
import { Product } from '../list/list.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = []
  cart: Product[] = []

  constructor(private http: HttpClient) {
    this.initData().subscribe((res: Product[]) => {
      this.products = res
    })
  }

  getAllProducts(): Product[] {
    return this.products as Product[]
  }

  getOneProduct(id: number): Product {
    return this.products.find(x => x.id == id) as Product
  }

  getCart(): Product[] {
    return this.cart as Product[]
  }

  addToCart(id: number, quantity: number): Product {
    var item = this.products.find(x => x.id == id) as Product
    item.quantity = quantity
    this.cart.push(item)
    return item
  }

  removeFromCart(id: number): Product[] {
    this.cart = this.cart.filter(x => x.id != id)
    return this.cart as Product[]
  }

  initData(): Observable<[]> {
    return this.http.get<[]>('http://localhost:3000/')
  }
}
