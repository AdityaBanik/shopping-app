import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/Product.model';
import { addToCart } from '../../cart/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor(private route:ActivatedRoute,private store:Store){}

  product?:Product 

  ngOnInit(){
      this.product = this.route.snapshot.data['product']
  }


  add(){
    const product = this.product!
    this.store.dispatch(addToCart({product,quantity:1}))
  }
}
