import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../model/product.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private data: DataService,
              private cart: CartService) { }

  productList: Product[];
  saleProducts: Product[] = [];
  cartQuantity: number;

  ngOnInit() {
    this.data.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(p => this.productList = p);

    this.saleProducts.push(this.data.getProduct(4));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  addToCart(product: Product) {
    this.cart.addItem(product);
  }

}
