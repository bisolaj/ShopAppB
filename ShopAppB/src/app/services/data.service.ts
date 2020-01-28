import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars 1',
      pNameURL: 'Ninja Stars 1',
      pDesc: 'Paper Ninja stay 1',
      pImage: '../../../../assets/aboniki.png',
      additionalInfo: 'May Cause Paper cuts 1',
      price: 'View in Cart'
    },
    {
      id: '2',
      pName: 'Ninja Stars 2',
      pNameURL: 'Ninja Stars 2',
      pDesc: 'Paper Ninja stay 2',
      pImage: '../../../../assets/aboniki.png',
      additionalInfo: 'May Cause Paper cuts 2',
      price: 'View in Cart'
    },
    {
      id: '3',
      pName: 'Ninja Stars 3',
      pNameURL: 'Ninja Stars 3',
      pDesc: 'Paper Ninja stay 3',
      pImage: '../../../../assets/aboniki.png',
      additionalInfo: 'May Cause Paper cuts 3',
      price: 'View in Cart'
    },
    {
      id: '4',
      pName: 'Ninja Stars 4',
      pNameURL: 'Ninja Stars 4',
      pDesc: 'Paper Ninja stay 4',
      pImage: '../../../../assets/aboniki.png',
      additionalInfo: 'May Cause Paper cuts 4',
      price: 'View in Cart'
    }
  ]
  constructor() { }
  getProducts(): IProduct[] {
    return this.products;
  }
  getProduct(sku: string): Observable<IProduct>
  {
    return of( this.products.find(
      x => x.id === sku
    ));

  }
}

