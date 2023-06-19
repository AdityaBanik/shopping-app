import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/Product.model';


export const addToCart = createAction('[Cart] Add', props<{ product: Product, quantity:number}>());
export const removeFromCart = createAction('[Cart] Remove', props<{ productId: string }>());
export const clearCart = createAction('[Cart] Clear');
export const checkout = createAction('[Cart] Checkout');