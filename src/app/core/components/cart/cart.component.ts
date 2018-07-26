import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  items: CartItem[];

  ngOnInit() {
    this.items = this.cart.items;
  }

}
