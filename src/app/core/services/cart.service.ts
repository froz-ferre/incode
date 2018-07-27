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

  get cartTotalSum(): number {
    let sum: number = 0;
    this.items.forEach(item => sum += item.itemTotalSum);
    return sum;
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

  get itemTotalSum(): number {
    switch (this.product.sale) {
      case '3for2': {
        return this.product.price * this.quantity - (Math.floor(this.quantity / 3) * this.product.price);
      }
      default: {
        return this.product.price * this.quantity;
      }
    }
  }
}
