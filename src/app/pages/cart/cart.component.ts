import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { addToCart, removeFromCart } from './cart.actions';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$?: Observable<Product[]>;
  totalPrice$?: Observable<number>;


  constructor(private store: Store<{ cart: { items: Product[]; totalPrice:number } }>) {
  }

  ngOnInit() {
    this.cartItems$ = this.store.select(state => state.cart.items);
    // Select the cart state from the store bad way proper selector needs to be implemented
    this.totalPrice$ = this.store.select(state=> state.cart.totalPrice)
  }

  add(product: Product) {
    this.store.dispatch(addToCart({ product, quantity: 1 }))
  }

  remove(productId: number) {
    this.store.dispatch(removeFromCart({ productId}))
  }
}


