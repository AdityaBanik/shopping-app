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
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/auth/auth.module').then(
      data => data.AuthModule 
     )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
