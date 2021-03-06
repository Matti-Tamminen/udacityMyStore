import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../list/list.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  quantity: number = 1
  currencySymbol: string
  show: boolean = false

  @Input() product: Product

  constructor(private dataService: DataService) {
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      url: "",
      quantity: 0
    }
    this.currencySymbol = dataService.setCurrency()
  }

  ngOnInit(): void {
  }

  addItem(id: number): void {
    this.dataService.addToCart(id, this.quantity)
    this.show = true
  }

}
