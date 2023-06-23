import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartResolver } from './pages/cart/cart.resolver';
import { AuthModule } from './pages/auth/auth.module';
import { AuthResolver } from './pages/auth/auth.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      cartState: CartResolver,
      authState: AuthResolver
    },
    children: [
      {
        path: "",
        redirectTo: '/home',
        pathMatch: 'full'
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
        component: CartComponent,
      },
      {
        path: 'accounts',
        loadChildren: () => AuthModule
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }), AuthModule],
  exports: [RouterModule],
  providers: [
    CartResolver
  ]
})
export class AppRoutingModule { }
