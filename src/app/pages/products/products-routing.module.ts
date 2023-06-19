import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsResolver } from './products.resolver';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolver } from './product.resolver';
import { SearchResolver } from './search.resolver';


const routes: Routes = [
    {
      path: 'category/:category',
      component: ProductsComponent,
      resolve: {
        products : ProductsResolver
      }
    },
    {
      path: 'search',
      component: ProductsComponent,
      resolve: {
        products : SearchResolver
      },
      runGuardsAndResolvers: 'always'
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
    ProductResolver,
    SearchResolver
  ]
})
export class ProductsRoutingModule { }
