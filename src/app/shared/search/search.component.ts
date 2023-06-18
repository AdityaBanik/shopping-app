import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  searchTerm$ = new Subject<string>()
  options?:Product[]
  constructor(private product:ProductsService){}

  ngOnInit(): void {
    this.searchTerm$
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value !== ''),
      switchMap((value: string) => this.product.searchProducts(value, '4')),
      map(data => data.products.map((product: Product) => product.title))
    )
    .subscribe(options => {
      this.options = options;
    });
  }

  onInputChange(event:any){
    this.searchTerm$.next(event.target.value)
  }
 
}
