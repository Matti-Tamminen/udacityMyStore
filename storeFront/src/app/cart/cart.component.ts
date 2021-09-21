import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../list/list.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface OrderHeader {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  card: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  XIcon = faTrash;
  currencySymbol: string
  header: OrderHeader
  pattern: string | RegExp = ""

  @Input() cart: Product[] = []
  product: Product

  total: string = "0"

  constructor(private dataService: DataService, private router: Router) {
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      url: "",
      quantity: 1
    }
    this.header = {
      id: 0,
      firstName: "",
      lastName: "",
      address: "",
      card: ""
    }
    this.currencySymbol = dataService.setCurrency()
  }

  ngOnInit(): void {
    this.cart = this.dataService.getCart()
    this.updateTotal()
  }

  removeItem(id: number) {
    var index = this.cart.findIndex(x => x.id == id)
    this.cart.splice(index, 1)
    this.updateTotal()
  }

  updateTotal() {
    var newTotal = 0
    this.cart.forEach(x => newTotal += x.price * x.quantity)
    this.total = (Math.round(newTotal * 100) / 100).toFixed(2)
  }

  setQuantity(event: any, id: number) {
    let nbr: number = event.target.value
    if (nbr < 1) {
      nbr = 1
    }
    var obj = this.cart.find(x => x.id == id) as Product
    obj.quantity = nbr
    this.updateTotal()
  }

  onSubmit(event: any) {
    event.preventDefault()
    var newOrder = {
      id: parseInt(new Date().toDateString()),
      firstName: this.header.firstName,
      lastName: this.header.lastName,
      address: this.header.address,
      card: this.header.card,
      date: new Date(),
      total: this.total,
      rows: this.cart
    }
    this.dataService.order = newOrder
    this.router.navigate(['/order']);

  }

}
