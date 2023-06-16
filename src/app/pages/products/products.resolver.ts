import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsService } from "src/app/services/products.service";

@Injectable()
export class ProductsResolver implements Resolve<any>{

    constructor(private products : ProductsService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
        const categoryUrl = route.paramMap.get('category') || ''

        return this.products.getProductsbyCategory(categoryUrl)
    }
}