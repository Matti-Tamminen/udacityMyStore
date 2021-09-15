import { Component, OnInit, Input } from '@angular/core';


// Productmodel
export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  quantity: number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() productList: Product[] = []

  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
        id: 1,
        name: 'test1',
        description: 'kuvaus',
        price: 12.45,
        quantity: 3
      },
      {
        id: 2,
        name: 'test2',
        description: 'kuvaus2',
        price: 2.45,
        quantity: 6
      },
      {
        id: 3,
        name: 'test3',
        description: 'kuvaus3',
        price: 123.45,
        quantity: 2
      },
      {
        id: 4,
        name: 'test4',
        description: 'kuvaus4',
        price: 11112.45,
        quantity: 32
      }
    ]
  }

}
