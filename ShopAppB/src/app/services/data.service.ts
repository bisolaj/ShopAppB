import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars 1',
      pNameURL: '../../../../assets/aboniki.png',
      pDesc: 'Paper Ninja stay 1',
      additionalInfo: 'May Cause Paper cuts 1',
      price: 'View in Cart'
    },
    {
      id: '2',
      pName: 'Ninja Stars 2',
      pNameURL: '../../../../assets/aboniki.png',
      pDesc: 'Paper Ninja stay 2',
      additionalInfo: 'May Cause Paper cuts 2',
      price: 'View in Cart'
    },
    {
      id: '3',
      pName: 'Ninja Stars 3',
      pNameURL: '../../../../assets/aboniki.png',
      pDesc: 'Paper Ninja stay 3',
      additionalInfo: 'May Cause Paper cuts 3',
      price: 'View in Cart'
    },
    {
      id: '4',
      pName: 'Ninja Stars 4',
      pNameURL: '../../../../assets/aboniki.png',
      pDesc: 'Paper Ninja stay 4',
      additionalInfo: 'May Cause Paper cuts 4',
      price: 'View in Cart'
    }
  ]
  constructor() { }
  getProducts(): IProduct[] {
    return this.products;
  }
}

