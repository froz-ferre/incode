import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: CartItem[] = [];

  constructor() { }

  addItem(product: Product, quantity: number = 1): boolean {
    // if product already in cart return fasle
    if (this.items.find(i => i.product.id === product.id) === undefined) {
      this.items.push(new CartItem(product, quantity));
      return true;
    } else {
      return false;
    }
  }

  delete(item: CartItem): void {
    this.items = this.items.filter(x => x.product.id !== item.product.id);
  }

  clear(): void {
    this.items = [];
  }
}

export class CartItem {
  constructor(public product: Product,
              public quantity: number) { }

  get itemTotalSum() {
    return this.product.price * this.quantity;
  }
}
