import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';


@Injectable()
export class SearchResolver implements Resolve<any> {
  constructor(private products : ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const searchQuery = route.queryParams['q'];
    
    // Perform the search using the search query
    return this.products.searchProducts(searchQuery);
  }
}