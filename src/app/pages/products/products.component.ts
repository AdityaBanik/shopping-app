import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private route:ActivatedRoute, ){}

  products?:any 

  ngOnInit(){
      this.products = this.route.snapshot.data['products']
  }
}
