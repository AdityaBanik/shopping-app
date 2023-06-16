import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(
     data => data.ProductsModule 
    )
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
