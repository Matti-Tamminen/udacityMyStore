import { Component, OnInit } from '@angular/core';
import { DataService, Order } from '../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  currencySymbol: string
  order: Order

  constructor(private dataService: DataService) {
    this.order = dataService.order
    this.currencySymbol = dataService.setCurrency()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dataService.cart = []
  }
}
