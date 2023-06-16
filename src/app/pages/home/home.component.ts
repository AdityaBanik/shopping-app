import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false
  
  categories?:Array<string>
  
  constructor(private productService: ProductsService,) { }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.isLoading = true;
    this.productService.getProductsCategories().subscribe(
      (categories) => {
        this.categories = categories;
        this.isLoading = false;
      },
      (error) => {
        console.log('Error:', error);
        this.isLoading = false;
      }
    );
  }
}