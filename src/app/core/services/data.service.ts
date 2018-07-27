import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products: Product[] = [
    new Product(1, 'Banana',     10,  'fruits', 'https://i.ndtvimg.com/i/2016-04/banana-625_625x350_41459935133.jpg'),
    new Product(2, 'Mandarina',  16,  'fruits', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7y3mL_XQWOwnHt4RQ2Xepm1p_fLbrG923jVHXN4DvMiTbxCPeig'),
    new Product(3, 'Apple',      20,  'fruits', 'https://boygeniusreport.files.wordpress.com/2016/10/macbook-pro-2016-apple-event-1.jpg?quality=98&strip=all&w=700'),
    new Product(4, 'Papaya',     150, 'fruits', 'https://cdn.shopify.com/s/files/1/1078/0310/products/fruit-hawaiian-papaya-1_1024x1024.jpg?v=1480677042', '3for2')
  ];
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id === id);
  }
}
