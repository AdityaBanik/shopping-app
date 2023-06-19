import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  searchTerm$ = new Subject<string>()
  options?:Product[]
  constructor(private product:ProductsService,private router:Router){}

  ngOnInit(): void {
    this.searchTerm$
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value !== ''),
      switchMap((value: string) => this.product.searchProducts(value, '4')),
      map(data => data.map((product: Product) => product.title))
    )
    .subscribe(options => {
      this.options = options;
    });
  }

  onInputChange(event:any){
    this.searchTerm$.next(event.target.value)
  }
  
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const selectedOption = event.option.value;
  
    this.router.navigate(['/products/search'], { queryParams: { q: selectedOption } })
  }
  
  submitSearch(event:any){
    const searchTerm = event.target.value
    this.router.navigate(['/products/search'], { queryParams: { q: searchTerm } })
  }
}
