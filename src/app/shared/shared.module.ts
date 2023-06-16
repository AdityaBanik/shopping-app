import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './search/search.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule
  ],
  exports:[
    ProductComponent,
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
