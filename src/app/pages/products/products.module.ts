import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from "../../shared/shared.module";




@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class ProductsModule { }
