import { createReducer, on } from '@ngrx/store';

import { addToCart,removeFromCart,clearCart, loadCart } from './cart.actions';
import { Product } from 'src/app/models/Product.model';



export interface CartState {
  items: Product[];
  totalPrice: number;
  totalItems: number;
}

export const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCart,(state,{cart})=> 
    cart
  ),
  on(addToCart, (state, { product, quantity }) => {
    const item = state.items.find(element => element.id === product.id);
    if (item) {
       
      const newItem = { ...item, quantity: item.quantity! + quantity };

      const newItems = state.items.map(element => (element.id === product.id ? newItem : element));

      return {
        ...state, // Include the existing state properties
        items: newItems,
        totalPrice: state.totalPrice + (product.price *quantity), // Update the totalPrice price property
        totalItems: state.totalItems + quantity, // Update the totalPrice items property
      };
    }

    return {
      ...state, // Include the existing state properties
      items: [...state.items, { ...product, quantity }], // Add the new product to the items array
      totalPrice: state.totalPrice + (product.price * quantity), // Update the totalPrice price property
      totalItems: state.totalItems + quantity , // Update the totalPrice items property
    };
  }),

  on(removeFromCart, (state, { productId }) => {
    const item = state.items.filter(element => element.id === productId)[0];
    

    let newItems:Product[]

    if (item.quantity! > 1){
        const newItem = { ...item, quantity: item.quantity! -1 };
        
        newItems = state.items.map(element => (element.id === productId ? newItem : element));
    }
    else{
        newItems = state.items.filter(element => element.id !== productId)
    }
    
    return {
      ...state, // Include the existing state properties
      items: newItems, // Add the new product to the items array
      totalPrice: state.totalPrice - item.price, // Update the totalPrice price property
      totalItems: state.totalItems -1 , // Update the totalPrice items property
    };
  })

);
