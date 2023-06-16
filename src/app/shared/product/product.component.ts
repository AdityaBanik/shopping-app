import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/Product.model';
import { addToCart } from 'src/app/pages/cart/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input('data') product?: Product;
  

  constructor(private store: Store){
  }

  add(){
    const product = this.product!
    this.store.dispatch(addToCart({product,quantity:1}))
  }

}
