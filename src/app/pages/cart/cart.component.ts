import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$?: Observable<any[]>; 

   
  constructor(private store: Store<{ cart: { items: any; quantity:number} }>) {
  }

  ngOnInit() {
    this.cartItems$ = this.store.select(state => state.cart.items); 
    // Select the cart state from the store
  }

}


