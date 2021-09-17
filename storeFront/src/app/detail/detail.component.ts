import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../list/list.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number = parseInt(document.URL.substr(-1))
  quantity: number = 1

  currencySymbol: string

  @Input() product: Product

  constructor(private dataService: DataService) {
    this.product = {
      id: 0,
      name: "",
      description: "",
      url: "",
      price: 0,
      quantity: 0
    }
    this.currencySymbol = '€'

  }

  ngOnInit(): void {
    this.dataService.initData().subscribe((res: Product[]) => {
      this.product = res.find(x => x.id == this.id) as Product
    })
  }

  setQuantity(event: any) {
    let nbr = event.target.value
    this.quantity = parseInt(nbr) as number
  }

  addItem(id: number) {
    this.dataService.addToCart(id, this.quantity)
    console.log(this.quantity);

  }
}
