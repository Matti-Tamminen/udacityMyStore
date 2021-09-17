import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';


// Productmodel
export interface Product {
  id: number,
  name: string,
  description: string,
  url: string,
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.initData().subscribe((res: Product[]) => {
      this.productList = res
    })
  }

}
