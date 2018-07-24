import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products: Product[] = [
    new Product(1, 'Banana', 10, 'fruits'),
    new Product(2, 'Mandarin', 16, 'fruits'),
    new Product(3, 'Apple', 20, 'fruits'),
    new Product(4, 'Papaya', 150, 'fruits')
  ];
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id === id);
  }
}
