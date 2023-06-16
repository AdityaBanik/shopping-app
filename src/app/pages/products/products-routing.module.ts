import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsResolver } from './products.resolver';


const routes: Routes = [
    {
        path: ':category',
        component: ProductsComponent,
        resolve: {
          products : ProductsResolver
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    ProductsResolver
  ]
})
export class ProductsRoutingModule { }
