import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  productList: IProduct[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    //attach the productList to the array in our dataService
    this.productList = this.dService.getProducts();

  }

}
