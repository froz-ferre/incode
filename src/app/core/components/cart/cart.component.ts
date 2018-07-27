import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService,
              private router: Router) { }

  ngOnInit() { }

  incrementQuantity(item: CartItem): void {
    item.quantity++;
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {item.quantity--; }
  }

  deleteItem(item: CartItem): void {
    this.cart.delete(item);
  }

  clearCart(): void {
    this.cart.clear();
  }

  continueShopping(): void {
    this.router.navigate(['/store']);
  }

}
