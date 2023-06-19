import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private route:ActivatedRoute,private router: Router){}

  products?:Product[] 

  ngOnInit(){
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.products = this.route.snapshot.data['products']
  }

}
