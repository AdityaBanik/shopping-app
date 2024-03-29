import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselListComponent } from './carousel-list/carousel-list.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CarouselListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
    MatAutocompleteModule,
    
  ],
  exports:[
    ProductComponent,
    HeaderComponent,
    SearchComponent,
    CarouselListComponent,
    FooterComponent,
    MatIconModule
  ]
})
export class SharedModule { }
