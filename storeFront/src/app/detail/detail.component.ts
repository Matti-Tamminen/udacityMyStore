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

  }

  ngOnInit(): void {
    this.product = this.dataService.getOneProduct(this.id)
  }

}
