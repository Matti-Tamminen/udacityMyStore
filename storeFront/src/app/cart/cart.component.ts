import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../list/list.component';
import { DataService } from '../services/data.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  XIcon = faTrash;
  currencySymbol: string

  @Input() cart: Product[] = []
  product: Product

  total: string = "0"

  constructor(private dataService: DataService) {
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      url: "",
      quantity: 1
    }
    this.currencySymbol = "€"
  }

  ngOnInit(): void {
    this.cart = this.dataService.getCart()
    this.updateTotal()
  }

  removeItem(id: number) {
    this.cart = this.cart.filter(x => x.id != id)
    this.updateTotal()
  }

  updateTotal() {
    var newTotal = 0
    this.cart.forEach(x => newTotal += x.price * x.quantity)
    this.total = (Math.round(newTotal * 100) / 100).toFixed(2)
  }

  setQuantity(event: any, id: number) {
    let nbr = event.target.value
    var obj = this.cart.find(x => x.id == id) as Product
    obj.quantity = nbr
    this.updateTotal()
  }

}
