import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../list/list.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  currencySymbol: string

  @Input() product: Product

  constructor() {
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      url: "",
      quantity: 0
    }
    this.currencySymbol = "€"
  }

  ngOnInit(): void {
  }


}
