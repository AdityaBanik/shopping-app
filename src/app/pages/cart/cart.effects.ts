import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addToCart, removeFromCart } from "./cart.actions";
import { tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";



@Injectable()
export class CartEffects{

    modifiedCart$ = createEffect(()=>
        this.actions$.pipe(
            ofType(addToCart,removeFromCart),
            withLatestFrom(this.store.select(state => state.cart)),
            tap(([action, cart]) => localStorage.setItem('cart',
                JSON.stringify(cart)
            ))
        )
    ,
    {dispatch:false})
    
    

    constructor(private actions$:Actions, private store:Store<{cart:any}>){
    }

}