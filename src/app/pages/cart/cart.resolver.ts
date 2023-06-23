import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";

import { loadCart } from "./cart.actions";

@Injectable()
export class CartResolver implements Resolve<any>{

    constructor(private store:Store){
    }

    resolve() {

        const cartData = localStorage.getItem('cart')
        if (cartData) {
            const cartState = JSON.parse(cartData);
            this.store.dispatch(loadCart({ cart: cartState }));
          }
        return null
    }
}