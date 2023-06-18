import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsResolver } from './products.resolver';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolver } from './product.resolver';


const routes: Routes = [
    {
      path: 'category/:category',
      component: ProductsComponent,
      resolve: {
        products : ProductsResolver
      }
    },
    {
      path: ':product',
      component : ProductDetailComponent,
      resolve: {
        product : ProductResolver
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    ProductsResolver,
    ProductResolver
  ]
})
export class ProductsRoutingModule { }
