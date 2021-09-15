import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../list/list.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() product: Product

  constructor() {
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      quantity: 0
    }
  }

  ngOnInit(): void {
  }

}
