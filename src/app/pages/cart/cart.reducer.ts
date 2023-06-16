import { createReducer, on } from '@ngrx/store';

import { addToCart,removeFromCart,clearCart } from './cart.actions';
import { Product } from 'src/app/models/Product.model';



interface CartState {
  items: Array<Product>;
  total: number;
  totalItems: number;
}

export const initialState: CartState = {
  items: [],
  total: 0,
  totalItems: 0,
};

export const cartReducer = createReducer(
  initialState,
  
  on(addToCart, (state, { product, quantity }) => {
    const item = state.items.find(element => element.id === product.id);

    let newItem: Product;

    if (item) {
      newItem = { ...item, quantity: (item.quantity || 0) + quantity };

      const newItems = state.items.map(element => (element.id === product.id ? newItem : element));

      return {
        ...state, // Include the existing state properties
        items: newItems,
        total: state.total + (product.price *quantity), // Update the total price property
        totalItems: state.totalItems + quantity, // Update the total items property
      };
    }

    return {
      ...state, // Include the existing state properties
      items: [...state.items, { ...product, quantity }], // Add the new product to the items array
      total: state.total + (product.price * quantity), // Update the total price property
      totalItems: state.totalItems + quantity , // Update the total items property
    };
  })



);
