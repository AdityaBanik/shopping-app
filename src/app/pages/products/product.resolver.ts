import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve} from "@angular/router";
import { Observable } from "rxjs";
import { ProductsService } from "src/app/services/products.service";

@Injectable()
export class ProductResolver implements Resolve<any>{

    constructor(private products : ProductsService){
    }

    resolve(route: ActivatedRouteSnapshot):Observable<any> {
        const productUrl = route.paramMap.get('product') || ''
        console.log(productUrl)
        return this.products.getSingleProduct(productUrl)
    }
}